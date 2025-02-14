import { connect } from "cloudflare:sockets";
let hashedPass = 'b5fad2d313b01cbd66fab50be03ed9570bada019b8b5ed5e8b71f138';
let remoteAddress = "cdn-b100.xn--b6gac.eu.org";

if (!isValidHash(hashedPass)) {
    throw new Error('hashedPass is not valid');
}

const worker = {
    async fetch(request, env, ctx) {
        try {
            remoteAddress = env.REMOTE_ADDR || remoteAddress;
            hashedPass = env.HASHED_PASS || hashedPass;
            const upgradeHeader = request.headers.get("Upgrade");
            if (!upgradeHeader || upgradeHeader !== "websocket") {
                const url = new URL(request.url);
                switch (url.pathname) {
                    case "/link":
                        const host = request.headers.get('Host');
                        return new Response(`trojan://ca110us@${host}:443/?type=ws&host=${host}&security=tls`, {
                            status: 200,
                            headers: {
                                "Content-Type": "text/plain;charset=utf-8",
                            }
                        });
                    default:
                        return new Response("404 Not found", { status: 404 });
                }
            } else {
                return await handleWebSocket(request);
            }
        } catch (err) {
            return new Response(err.toString());
        }
    }
};

async function handleWebSocket(request) {
    const webSocketPair = new WebSocketPair();
    const [client, server] = Object.values(webSocketPair);
    server.accept();
    let destination = "";
    let connectionLog = "";
    
    const log = (info, event) => {
        console.log(`[${destination}:${connectionLog}] ${info}`, event || "");
    };
    
    const earlyData = request.headers.get("sec-websocket-protocol") || "";
    const readableStream = createWebSocketStream(server, earlyData, log);
    let socketWrapper = { value: null };
    let udpWriter = null;
    
    readableStream.pipeTo(new WritableStream({
        async write(chunk) {
            if (udpWriter) {
                return udpWriter(chunk);
            }
            if (socketWrapper.value) {
                const writer = socketWrapper.value.writable.getWriter();
                await writer.write(chunk);
                writer.releaseLock();
                return;
            }
            const { hasError, message, remotePort = 443, remoteHost = "", rawData } = await parseHeader(chunk);
            destination = remoteHost;
            connectionLog = `${remotePort}--${Math.random()} tcp`;
            if (hasError) {
                throw new Error(message);
            }
            establishTCP(socketWrapper, remoteHost, remotePort, rawData, server, log);
        },
        close() { log(`WebSocket stream closed`); },
        abort(reason) { log(`WebSocket stream aborted`, JSON.stringify(reason)); }
    })).catch(err => log("WebSocket stream error", err));
    
    return new Response(null, { status: 101, webSocket: client });
}

async function parseHeader(buffer) {
    if (buffer.byteLength < 56) {
        return { hasError: true, message: "Invalid data" };
    }
    const password = new TextDecoder().decode(buffer.slice(0, 56));
    if (password !== hashedPass) {
        return { hasError: true, message: "Invalid password" };
    }
    return extractSocks5Data(buffer.slice(58));
}

async function establishTCP(socketWrapper, host, port, rawData, server, log) {
    async function connectAndSend(address, targetPort) {
        const socket = connect({ hostname: address, port: targetPort });
        socketWrapper.value = socket;
        log(`Connected to ${address}:${targetPort}`);
        const writer = socket.writable.getWriter();
        await writer.write(rawData);
        writer.releaseLock();
        return socket;
    }
    async function retry() {
        const socket = await connectAndSend(remoteAddress || host, port);
        socket.closed.catch(err => console.log("Retry socket closed error", err)).finally(() => safeCloseWebSocket(server));
        relaySocketData(socket, server, null, log);
    }
    const socket = await connectAndSend(host, port);
    relaySocketData(socket, server, retry, log);
}

function createWebSocketStream(server, earlyData, log) {
    let streamCancelled = false;
    return new ReadableStream({
        start(controller) {
            server.addEventListener("message", event => {
                if (!streamCancelled) controller.enqueue(event.data);
            });
            server.addEventListener("close", () => {
                safeCloseWebSocket(server);
                if (!streamCancelled) controller.close();
            });
            server.addEventListener("error", err => controller.error(err));
            const { decodedData, error } = decodeBase64(earlyData);
            if (error) controller.error(error);
            else if (decodedData) controller.enqueue(decodedData);
        },
        cancel(reason) {
            if (!streamCancelled) {
                log(`Stream cancelled: ${reason}`);
                streamCancelled = true;
                safeCloseWebSocket(server);
            }
        }
    });
}

async function relaySocketData(remoteSocket, server, retry, log) {
    let hasData = false;
    await remoteSocket.readable.pipeTo(new WritableStream({
        async write(chunk) {
            hasData = true;
            if (server.readyState !== 1) throw new Error("WebSocket is not open");
            server.send(chunk);
        },
        close() { log(`Socket closed, data received: ${hasData}`); },
        abort(reason) { console.error("Socket abort", reason); }
    })).catch(error => {
        console.error("Socket relay error", error);
        safeCloseWebSocket(server);
    });
    if (!hasData && retry) retry();
}

function isValidHash(hash) {
    return /^[0-9a-f]{56}$/i.test(hash);
}

function decodeBase64(input) {
    try {
        input = input.replace(/-/g, "+").replace(/_/g, "/");
        const decoded = atob(input);
        return { decodedData: Uint8Array.from(decoded, c => c.charCodeAt(0)).buffer, error: null };
    } catch (error) {
        return { error };
    }
}

function safeCloseWebSocket(socket) {
    try {
        if (socket.readyState === 1 || socket.readyState === 2) {
            socket.close();
        }
    } catch (error) {
        console.error("WebSocket close error", error);
    }
}
export { worker as default };
