import { connect } from 'cloudflare:sockets';


const SECRET_PATH = '/t-vip-9026/auth-888999';
const UUID = '56892533-7dad-324a-b0e8-51040d0d04ad';
const PROXY_HOST = 'yx1.9898981.xyz';
const PROXY_PORT = 8443;

const API_ERROR_RESPONSE = (url, status = 404) => {
    const errorBody = {
        timestamp: new Date().toISOString(),
        status: status,
        error: status === 404 ? "Not Found" : "Unauthorized",
        message: `No static resource or API endpoint found for: ${url.pathname}`,
        path: url.pathname,
        requestId: Math.random().toString(36).substring(2, 15).toUpperCase(), 
        service: "api-gateway-v2"
    };

    return new Response(JSON.stringify(errorBody), {
        status: status,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'X-Content-Type-Options': 'nosniff',
            'X-XSS-Protection': '1; mode=block',
            'X-Frame-Options': 'DENY',
            'Server': 'nginx' 
        }
    });
};

export default {
    async fetch(request) {
        const url = new URL(request.url);

        
        if (url.pathname !== SECRET_PATH) {
            return API_ERROR_RESPONSE(url, 404);
        }

        
        if (request.headers.get('Upgrade') !== 'websocket') {
            return new Response(JSON.stringify({ 
                status: "UP", 
                version: "2.4.1-RELEASE",
                uptime: Math.floor(Math.random() * 100000) + "s"
            }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        
        const wsPair = new WebSocketPair();
        const [clientWS, serverWS] = Object.values(wsPair);
        
        serverWS.accept();

        handleWebSocket(serverWS).catch(err => {
            console.error("Critical WS Error:", err.message);
            serverWS.close();
        });

        
        return new Response(null, { 
            status: 101, 
            webSocket: clientWS,
            headers: {
                'Sec-WebSocket-Protocol': request.headers.get('Sec-WebSocket-Protocol') || '',
                'Connection': 'Upgrade',
                'Upgrade': 'websocket'
            }
        });
    }
};


async function handleWebSocket(serverWS) {
    const wsReadable = createWebSocketReadableStream(serverWS);
    let remoteSocket = null;
    let vlessHeaderData = null;
    let clientRawData = null;

    const reader = wsReadable.getReader();

    try {
        const { done, value } = await reader.read();
        if (done) return;

        const result = parseVLESSHeader(value);
        if (result.hasError) throw new Error(result.message);

        vlessHeaderData = new Uint8Array([result.vlessVersion[0], 0]);
        clientRawData = value.slice(result.rawDataIndex);

        
        try {
            remoteSocket = await connect({
                hostname: result.addressRemote,
                port: result.portRemote
            }, { allowHalfOpen: true });
            
            const writer = remoteSocket.writable.getWriter();
            await writer.write(clientRawData);
            writer.releaseLock();
        } catch (connErr) {
            
            remoteSocket = await connect({
                hostname: PROXY_IP,
                port: PROXY_PORT
            }, { allowHalfOpen: true });

            const writer = remoteSocket.writable.getWriter();
            await writer.write(clientRawData);
            writer.releaseLock();
        }

        
        const remoteToWsPromise = pipeRemoteToWebSocket(remoteSocket, serverWS, vlessHeaderData);
        
        const wsToRemotePromise = (async () => {
            const writer = remoteSocket.writable.getWriter();
            try {
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    await writer.write(value);
                }
            } finally {
                writer.releaseLock();
            }
        })();

        await Promise.race([remoteToWsPromise, wsToRemotePromise]);

    } catch (err) {
        console.error("HandleWS Error:", err.message);
    } finally {
        reader.releaseLock();
        if (remoteSocket) try { remoteSocket.close(); } catch {}
        if (serverWS.readyState === 1) serverWS.close();
    }
}

async function pipeRemoteToWebSocket(remoteSocket, ws, vlessHeader) {
    const reader = remoteSocket.readable.getReader();
    let headerSent = false;

    try {
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            if (ws.readyState !== 1) break;

            if (!headerSent) {
                const combined = new Uint8Array(vlessHeader.byteLength + value.byteLength);
                combined.set(vlessHeader, 0);
                combined.set(value, vlessHeader.byteLength);
                ws.send(combined);
                headerSent = true;
            } else {
                ws.send(value);
            }
        }
    } finally {
        reader.releaseLock();
    }
}

function createWebSocketReadableStream(ws) {
    return new ReadableStream({
        start(controller) {
            ws.addEventListener('message', e => controller.enqueue(new Uint8Array(e.data)));
            ws.addEventListener('close', () => controller.close());
            ws.addEventListener('error', e => controller.error(e));
        }
    });
}

function parseVLESSHeader(buffer) {
    if (buffer.byteLength < 24) return { hasError: true, message: 'Invalid header' };
    const view = new DataView(buffer.buffer);
    const uuid = Array.from(new Uint8Array(buffer.slice(1, 17))).map(b => b.toString(16).padStart(2, '0')).join('');
    if (uuid !== FIXED_UUID.replace(/-/g, '')) return { hasError: true, message: 'Unauthorized' };

    const optLen = view.getUint8(17);
    let offset = 18 + optLen;
    const cmd = view.getUint8(offset++);
    const port = view.getUint16(offset); offset += 2;
    const addrType = view.getUint8(offset++);
    let address = '';

    if (addrType === 1) {
        address = Array.from(new Uint8Array(buffer.slice(offset, offset + 4))).join('.');
        offset += 4;
    } else if (addrType === 2) {
        const len = view.getUint8(offset++);
        address = new TextDecoder().decode(buffer.slice(offset, offset + len));
        offset += len;
    } else if (addrType === 3) {
        address = Array.from({ length: 8 }, (_, i) => view.getUint16(offset + i * 2).toString(16)).join(':');
        offset += 16;
    }

    return { hasError: false, addressRemote: address, portRemote: port, rawDataIndex: offset, vlessVersion: new Uint8Array(buffer.slice(0, 1)) };
}
