const FIXED_UUID = 'f9521860-2603-4be2-86e6-3d2dca7f8b53';// 建议修改为自己的规范化UUID，如不需要可留空 @GoodLiux优化版
let 外部服务 = '', 启用转发模式 = null, 启用全局转发 = false, 我的连接参数 = '', parsedEndpointConfig = {};
export default {
    async fetch(request) {
        try {
            const url = new URL(request.url);
            // 检查是否为 WebSocket 升级请求
            const upgradeHeader = request.headers.get('Upgrade');
            if (upgradeHeader !== 'websocket') {
                return new Response('Hello World!', { status: 200 });
            } else {
                外部服务 = 外部服务 ? 外部服务 : request.cf.colo + '.service.cmliuSSSS.NET';
                await 配置参数获取(request);
                const [服务地址, 服务端口] = await 解析主机端口(外部服务);
                return await handleWebSocketTunnel(request, {
                    parsedEndpointConfig,
                    enableTunnel: 启用转发模式,
                    enableGlobalTunnel: 启用全局转发,
                    remoteHost: 服务地址,
                    remotePort: 服务端口
                });
            }
        } catch (err) {
            return new Response(err && err.stack ? err.stack : String(err), { status: 500 });
        }
    },
};

async function handleWebSocketTunnel(request, config) {
    const {
        parsedEndpointConfig,
        enableTunnel,
        enableGlobalTunnel,
        remoteHost,
        remotePort
    } = config;
    const wsPair = new WebSocketPair();
    const [clientWS, serverWS] = Object.values(wsPair);

    serverWS.accept();

    // WebSocket心跳机制，每30秒发送一次
    let heartbeatTimer = setInterval(() => {
        if (serverWS.readyState === WS_READY_STATE_OPEN) {
            try {
                serverWS.send(new Uint8Array(0));
            } catch (e) { }
        }
    }, 30000);
    function stopHeartbeat() {
        if (heartbeatTimer) {
            clearInterval(heartbeatTimer);
            heartbeatTimer = null;
        }
    }
    serverWS.addEventListener('close', stopHeartbeat);
    serverWS.addEventListener('error', stopHeartbeat);

    // 处理 WebSocket 数据流
    const earlyDataHeader = request.headers.get('sec-websocket-protocol') || '';
    const wsReadable = createWebSocketReadableStream(serverWS, earlyDataHeader);
    let remoteConnection = null;
    let udpStreamWriter = null;
    let isDnsQuery = false;

    wsReadable.pipeTo(new WritableStream({
        async write(chunk) {
            if (isDnsQuery && udpStreamWriter) {
                return udpStreamWriter(chunk);
            }
            if (remoteConnection) {
                try {
                    const writer = remoteConnection.writable.getWriter();
                    await writer.write(chunk);
                    writer.releaseLock();
                } catch (err) {
                    closeConnection(remoteConnection);
                    throw err;
                }
                return;
            }
            const result = parseVLESSHeader(chunk);
            if (result.hasError) throw new Error(result.message);
            if (result.targetAddress.includes(atob('c3BlZWQuY2xvdWRmbGFyZS5jb20='))) throw new Error('Access');
            const vlessResponseHeader = new Uint8Array([result.vlessVersion[0], 0]);
            const rawClientData = chunk.slice(result.dataOffset);
            if (result.isUDP) {
                if (result.targetPort === 53) {
                    isDnsQuery = true;
                    const { write } = await handleUDPOutBound(serverWS, vlessResponseHeader);
                    udpStreamWriter = write;
                    udpStreamWriter(rawClientData);
                    return;
                } else {
                    throw new Error('UDP仅支持DNS(端口53)');
                }
            }
            async function connectAndSend(targetHost, targetPort) {
                const tcpConnection = await connect({ hostname: targetHost, port: targetPort }, { allowHalfOpen: true });
                remoteConnection = tcpConnection;
                const writer = tcpConnection.writable.getWriter();
                await writer.write(rawClientData);
                writer.releaseLock();
                return tcpConnection;
            }
            async function connectAndSendWithAuth(targetHost, targetPort) {
                const tcpConnection = enableTunnel === 'socks5'
                    ? await socks5Connect(result.addressType, targetHost, targetPort, parsedEndpointConfig)
                    : await httpConnect(result.addressType, targetHost, targetPort, parsedEndpointConfig);
                remoteConnection = tcpConnection;
                const writer = tcpConnection.writable.getWriter();
                await writer.write(rawClientData);
                writer.releaseLock();
                return tcpConnection;
            }
            async function retryConnection() {
                try {
                    let tcpConnection;
                    if (enableTunnel === 'socks5') {
                        tcpConnection = await socks5Connect(result.addressType, result.targetAddress, result.targetPort, parsedEndpointConfig);
                    } else if (enableTunnel === 'http') {
                        tcpConnection = await httpConnect(result.addressType, result.targetAddress, result.targetPort, parsedEndpointConfig);
                    } else {
                        tcpConnection = await connect({ hostname: remoteHost, port: remotePort }, { allowHalfOpen: true });
                    }
                    remoteConnection = tcpConnection;
                    const writer = tcpConnection.writable.getWriter();
                    await writer.write(rawClientData);
                    writer.releaseLock();
                    tcpConnection.closed.catch(() => { }).finally(() => {
                        if (serverWS.readyState === WS_READY_STATE_OPEN) {
                            serverWS.close(1000, '连接已关闭');
                        }
                    });
                    pipeRemoteToWebSocket(tcpConnection, serverWS, vlessResponseHeader, null);
                } catch (err) {
                    closeConnection(remoteConnection);
                    serverWS.close(1011, '连接建立失败: ' + (err && err.message ? err.message : err));
                }
            }
            try {
                if (enableGlobalTunnel) {
                    const tcpConnection = await connectAndSendWithAuth(result.targetAddress, result.targetPort);
                    pipeRemoteToWebSocket(tcpConnection, serverWS, vlessResponseHeader, retryConnection);
                } else {
                    const tcpConnection = await connectAndSend(result.targetAddress, result.targetPort);
                    pipeRemoteToWebSocket(tcpConnection, serverWS, vlessResponseHeader, retryConnection);
                }
            } catch (err) {
                closeConnection(remoteConnection);
                serverWS.close(1011, '连接失败: ' + (err && err.message ? err.message : err));
            }
        },
        close() {
            if (remoteConnection) {
                closeConnection(remoteConnection);
            }
        }
    })).catch(err => {
        closeConnection(remoteConnection);
        serverWS.close(1011, '内部错误: ' + (err && err.message ? err.message : err));
    });

    return new Response(null, {
        status: 101,
        webSocket: clientWS,
    });
}

function createWebSocketReadableStream(ws, earlyDataHeader) {
    return new ReadableStream({
        start(controller) {
            ws.addEventListener('message', event => {
                controller.enqueue(event.data);
            });

            ws.addEventListener('close', () => {
                controller.close();
            });

            ws.addEventListener('error', err => {
                controller.error(err);
            });

            if (earlyDataHeader) {
                try {
                    const decoded = atob(earlyDataHeader.replace(/-/g, '+').replace(/_/g, '/'));
                    const data = Uint8Array.from(decoded, c => c.charCodeAt(0));
                    controller.enqueue(data.buffer);
                } catch (e) {
                }
            }
        }
    });
}

// 只允许固定UUID
function parseVLESSHeader(buffer) {
    if (buffer.byteLength < 24) {
        return { hasError: true, message: '无效的头部长度' };
    }
    const view = new DataView(buffer);
    const version = new Uint8Array(buffer.slice(0, 1));
    const uuid = formatUUID(new Uint8Array(buffer.slice(1, 17)));
    if (FIXED_UUID && uuid !== FIXED_UUID) {
        return { hasError: true, message: '无效的用户' };
    }
    const optionsLength = view.getUint8(17);
    const command = view.getUint8(18 + optionsLength);
    let isUDP = false;
    if (command === 1) {
    } else if (command === 2) {
        isUDP = true;
    } else {
        return { hasError: true, message: '不支持的命令，仅支持TCP(01)和UDP(02)' };
    }
    let offset = 19 + optionsLength;
    const targetPort = view.getUint16(offset);
    offset += 2;
    const addressType = view.getUint8(offset++);
    let targetAddress = '';
    switch (addressType) {
        case 1:
            targetAddress = Array.from(new Uint8Array(buffer.slice(offset, offset + 4))).join('.');
            offset += 4;
            break;
        case 2:
            const domainLength = view.getUint8(offset++);
            targetAddress = new TextDecoder().decode(buffer.slice(offset, offset + domainLength));
            offset += domainLength;
            break;
        case 3:
            const ipv6 = [];
            for (let i = 0; i < 8; i++) {
                ipv6.push(view.getUint16(offset).toString(16).padStart(4, '0'));
                offset += 2;
            }
            targetAddress = ipv6.join(':').replace(/(^|:)0+(\w)/g, '$1$2');
            break;
        default:
            return { hasError: true, message: '不支持的地址类型' };
    }
    return {
        hasError: false,
        targetAddress: targetAddress,
        targetPort: targetPort,
        dataOffset: offset,
        vlessVersion: version,
        isUDP,
        addressType
    };
}

async function pipeRemoteToWebSocket(remoteConnection, ws, vlessHeader, retryHandler = null, retryCount = 0) {
    const MAX_RETRIES = 8;                      // 最大重试8次
    const MAX_CHUNK_SIZE = 128 * 1024;              // 单帧最大 128 KB
    const MAX_BUFFER_SIZE = 2 * 1024 * 1024;           // 最大缓存 2 MB
    const FLUSH_INTERVAL = 10;                  // ms，定期 flush
    const BASE_RETRY_DELAY = 200;             // ms，初始重试延迟

    let headerSent = false;
    let hasDataReceived = false;
    let dataQueue = [];
    let queuedBytes = 0;

    // --- 工具函数 ---

    const concatUint8Arrays = (chunks) => {
        if (chunks.length === 1) return chunks[0];
        const total = chunks.reduce((sum, c) => sum + c.byteLength, 0);
        const merged = new Uint8Array(total);
        let offset = 0;
        for (const c of chunks) {
            merged.set(c, offset);
            offset += c.byteLength;
        }
        return merged;
    };

    // 分包发送（每帧 ≤ 128 KB）
    const sendInFragments = (data) => {
        let offset = 0;
        while (offset < data.byteLength) {
            const end = Math.min(offset + MAX_CHUNK_SIZE, data.byteLength);
            ws.send(data.slice(offset, end));
            offset = end;
        }
    };

    const flushDataQueue = () => {
        if (ws.readyState !== WS_READY_STATE_OPEN || dataQueue.length === 0) return;
        const merged = concatUint8Arrays(dataQueue);
        dataQueue = [];
        queuedBytes = 0;
        sendInFragments(merged);
    };

    const flushTimer = setInterval(flushDataQueue, FLUSH_INTERVAL);

    // --- 主读循环 ---
    const reader = remoteConnection.readable.getReader();
    try {
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            hasDataReceived = true;
            if (ws.readyState !== WS_READY_STATE_OPEN) break;

            // 首包带 vlessHeader
            if (!headerSent) {
                const combined = new Uint8Array(vlessHeader.byteLength + value.byteLength);
                combined.set(new Uint8Array(vlessHeader), 0);
                combined.set(value, vlessHeader.byteLength);
                dataQueue.push(combined);
                queuedBytes += combined.byteLength;
                headerSent = true;
            } else {
                dataQueue.push(value);
                queuedBytes += value.byteLength;
            }

            // 缓存超过 2 MB 立即 flush
            if (queuedBytes >= MAX_BUFFER_SIZE) {
                flushDataQueue();
            }
        }

        reader.releaseLock();
        flushDataQueue();
        clearInterval(flushTimer);

        // --- 关闭逻辑 ---
        if (!hasDataReceived && retryHandler && retryCount < MAX_RETRIES) {
            const delay = BASE_RETRY_DELAY * Math.pow(2, retryCount);
            console.warn(`未收到数据，${delay} ms 后重试 (${retryCount + 1}/${MAX_RETRIES})`);
            await new Promise(r => setTimeout(r, delay));
            await retryHandler();
            return;
        }

        if (ws.readyState === WS_READY_STATE_OPEN) ws.close(1000, '正常关闭');
    } catch (err) {
        reader.releaseLock();
        clearInterval(flushTimer);
        console.error('数据传输错误:', err);
        closeConnection(remoteConnection);

        if (retryHandler && retryCount < MAX_RETRIES) {
            const delay = BASE_RETRY_DELAY * Math.pow(2, retryCount);
            console.warn(`错误重试 (${retryCount + 1}/${MAX_RETRIES})，将在 ${delay} ms 后重试`);
            await new Promise(r => setTimeout(r, delay));
            await retryHandler();
            return;
        }

        if (ws.readyState === WS_READY_STATE_OPEN) {
            ws.close(1011, '数据传输错误');
        }
    }
}

function closeConnection(connection) {
    if (connection) {
        try {
            connection.close();
        } catch (e) {
        }
    }
}

function formatUUID(bytes) {
    const hex = Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

async function socks5Connect(addressType, targetAddress, targetPort, parsedEndpointConfig) {
    const { username, password, hostname, port } = parsedEndpointConfig;
    const connection = connect({
        hostname,
        port,
    });
    const socksGreeting = new Uint8Array([5, 2, 0, 2]);
    const writer = connection.writable.getWriter();
    await writer.write(socksGreeting);
    const reader = connection.readable.getReader();
    const encoder = new TextEncoder();
    let res = (await reader.read()).value;
    if (res[0] !== 0x05) {
        throw new Error(`socks server version error: ${res[0]} expected: 5`);
    }
    if (res[1] === 0xff) {
        throw new Error("no acceptable methods");
    }
    if (res[1] === 0x02) {
        if (!username || !password) {
            throw new Error("please provide username/password");
        }
        const authRequest = new Uint8Array([
            1,
            username.length,
            ...encoder.encode(username),
            password.length,
            ...encoder.encode(password)
        ]);
        await writer.write(authRequest);
        res = (await reader.read()).value;
        if (res[0] !== 0x01 || res[1] !== 0x00) {
            throw new Error("fail to auth socks server");
        }
    }
    let DSTADDR;
    switch (addressType) {
        case 1:
            DSTADDR = new Uint8Array(
                [1, ...targetAddress.split('.').map(Number)]
            );
            break;
        case 2:
            DSTADDR = new Uint8Array(
                [3, targetAddress.length, ...encoder.encode(targetAddress)]
            );
            break;
        case 3:
            DSTADDR = new Uint8Array(
                [4, ...targetAddress.split(':').flatMap(x => [parseInt(x.slice(0, 2), 16), parseInt(x.slice(2), 16)])]
            );
            break;
        default:
            throw new Error(`invalid addressType is ${addressType}`);
    }
    const socksRequest = new Uint8Array([5, 1, 0, ...DSTADDR, targetPort >> 8, targetPort & 0xff]);
    await writer.write(socksRequest);
    res = (await reader.read()).value;
    if (res[1] === 0x00) {
    } else {
        throw new Error("fail to open socks connection");
    }
    writer.releaseLock();
    reader.releaseLock();
    return connection;
}

async function httpConnect(addressType, targetAddress, targetPort, parsedEndpointConfig) {
    const { username, password, hostname, port } = parsedEndpointConfig;
    const sock = await connect({
        hostname: hostname,
        port: port
    });

    // 构建HTTP CONNECT请求
    let connectRequest = `CONNECT ${targetAddress}:${targetPort} HTTP/1.1\r\n`;
    connectRequest += `Host: ${targetAddress}:${targetPort}\r\n`;

    // 添加认证信息（如果需要）
    if (username && password) {
        const authString = `${username}:${password}`;
        const base64Auth = btoa(authString);
        connectRequest += `Proxy-Authorization: Basic ${base64Auth}\r\n`;
    }

    connectRequest += `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36\r\n`;
    connectRequest += `Proxy-Connection: Keep-Alive\r\n`;
    connectRequest += `Connection: Keep-Alive\r\n`;
    connectRequest += `\r\n`;

    try {
        // 发送连接请求
        const writer = sock.writable.getWriter();
        await writer.write(new TextEncoder().encode(connectRequest));
        writer.releaseLock();
    } catch (err) {
        console.error('发送HTTP CONNECT请求失败:', err);
        throw new Error(`发送HTTP CONNECT请求失败: ${err.message}`);
    }

    // 读取HTTP响应
    const reader = sock.readable.getReader();
    let respText = '';
    let connected = false;
    let responseBuffer = new Uint8Array(0);

    try {
        while (true) {
            const { value, done } = await reader.read();
            if (done) {
                console.error('HTTP连接中断');
                throw new Error('HTTP连接中断');
            }

            // 合并接收到的数据
            const newBuffer = new Uint8Array(responseBuffer.length + value.length);
            newBuffer.set(responseBuffer);
            newBuffer.set(value, responseBuffer.length);
            responseBuffer = newBuffer;

            // 将收到的数据转换为文本
            respText = new TextDecoder().decode(responseBuffer);

            // 检查是否收到完整的HTTP响应头
            if (respText.includes('\r\n\r\n')) {
                // 分离HTTP头和可能的数据部分
                const headersEndPos = respText.indexOf('\r\n\r\n') + 4;
                const headers = respText.substring(0, headersEndPos);

                // 检查响应状态
                if (headers.startsWith('HTTP/1.1 200') || headers.startsWith('HTTP/1.0 200')) {
                    connected = true;

                    // 如果响应头之后还有数据，我们需要保存这些数据以便后续处理
                    if (headersEndPos < responseBuffer.length) {
                        const remainingData = responseBuffer.slice(headersEndPos);
                        // 创建一个缓冲区来存储这些数据，以便稍后使用
                        const dataStream = new ReadableStream({
                            start(controller) {
                                controller.enqueue(remainingData);
                            }
                        });

                        // 创建一个新的TransformStream来处理额外数据
                        const { readable, writable } = new TransformStream();
                        dataStream.pipeTo(writable).catch(err => console.error('处理剩余数据错误:', err));

                        // 替换原始readable流
                        // @ts-ignore
                        sock.readable = readable;
                    }
                } else {
                    const errorMsg = `HTTP连接失败: ${headers.split('\r\n')[0]}`;
                    console.error(errorMsg);
                    throw new Error(errorMsg);
                }
                break;
            }
        }
    } catch (err) {
        reader.releaseLock();
        throw new Error(`处理HTTP响应失败: ${err.message}`);
    }

    reader.releaseLock();

    if (!connected) {
        throw new Error('HTTP连接失败: 未收到成功响应');
    }

    return sock;
}
async function handleUDPOutBound(webSocket, 协议响应头) {
    let isVlessHeaderSent = false;
    const transformStream = new TransformStream({
        start(controller) {
        },
        transform(chunk, controller) {
            for (let index = 0; index < chunk.byteLength;) {
                const lengthBuffer = chunk.slice(index, index + 2);
                const udpPacketLength = new DataView(lengthBuffer).getUint16(0);
                const udpData = new Uint8Array(
                    chunk.slice(index + 2, index + 2 + udpPacketLength)
                );
                index = index + 2 + udpPacketLength;
                controller.enqueue(udpData);
            }
        },
        flush(controller) {
        }
    });

    transformStream.readable.pipeTo(new WritableStream({
        async write(chunk) {
            const resp = await fetch('https://1.1.1.1/dns-query',
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/dns-message',
                    },
                    body: chunk,
                })
            const dnsQueryResult = await resp.arrayBuffer();
            const udpSize = dnsQueryResult.byteLength;
            const udpSizeBuffer = new Uint8Array([(udpSize >> 8) & 0xff, udpSize & 0xff]);

            if (webSocket.readyState === WS_READY_STATE_OPEN) {
                if (isVlessHeaderSent) {
                    webSocket.send(await new Blob([udpSizeBuffer, dnsQueryResult]).arrayBuffer());
                } else {
                    webSocket.send(await new Blob([协议响应头, udpSizeBuffer, dnsQueryResult]).arrayBuffer());
                    isVlessHeaderSent = true;
                }
            }
        }
    })).catch((error) => {
    });

    const writer = transformStream.writable.getWriter();

    return {
        write(chunk) {
            writer.write(chunk);
        }
    };
}

// ========== 必要常量和依赖 ==========
const WS_READY_STATE_OPEN = 1;
import { connect } from 'cloudflare:sockets';

async function 解析主机端口(serviceAddress) {
    serviceAddress = serviceAddress.toLowerCase();
    let 主机 = serviceAddress, 端口 = 443;
    if (serviceAddress.includes('.tp')) {
        const tpMatch = serviceAddress.match(/\.tp(\d+)/);
        if (tpMatch) 端口 = parseInt(tpMatch[1], 10);
        return [主机, 端口];
    }
    if (serviceAddress.includes(']:')) {
        const parts = serviceAddress.split(']:');
        主机 = parts[0] + ']';
        端口 = parseInt(parts[1], 10) || 端口;
    } else if (serviceAddress.includes(':') && !serviceAddress.startsWith('[')) {
        const colonIndex = serviceAddress.lastIndexOf(':');
        主机 = serviceAddress.slice(0, colonIndex);
        端口 = parseInt(serviceAddress.slice(colonIndex + 1), 10) || 端口;
    }
    return [主机, 端口];
}

async function 配置参数获取(request) {
    const url = new URL(request.url);
    const { pathname, searchParams } = url;
    const pathLower = pathname.toLowerCase();

    // 初始化
    我的连接参数 = searchParams.get('auth') || searchParams.get('conn') || null;
    启用全局转发 = searchParams.has('global') || false;

    // 统一处理外部服务参数 (优先级最高,使用正则一次匹配)
    const serviceMatch = pathLower.match(/\/(service[.=]|svc=|host=)(.+)/);
    if (searchParams.has('service')) {
        const 路径参数 = searchParams.get('service');
        外部服务 = 路径参数.includes(',') ? 路径参数.split(',')[Math.floor(Math.random() * 路径参数.split(',').length)] : 路径参数;
        return;
    } else if (serviceMatch) {
        const 路径参数 = serviceMatch[1] === 'service.' ? `service.${serviceMatch[2]}` : serviceMatch[2];
        外部服务 = 路径参数.includes(',') ? 路径参数.split(',')[Math.floor(Math.random() * 路径参数.split(',').length)] : 路径参数;
        return;
    }

    // 处理认证参数
    let authMatch;
    if ((authMatch = pathname.match(/\/(auth1?|conn):\/?\/?(.+)/i))) {
        // 格式: /auth://... 或 /conn://...
        启用转发模式 = authMatch[1].toLowerCase() === 'conn' ? 'http' : 'socks5';
        我的连接参数 = authMatch[2].split('#')[0];
        启用全局转发 = true;

        // 处理Base64编码的用户名密码
        if (我的连接参数.includes('@')) {
            const atIndex = 我的连接参数.lastIndexOf('@');
            let userPassword = 我的连接参数.substring(0, atIndex).replaceAll('%3D', '=');
            if (/^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i.test(userPassword) && !userPassword.includes(':')) {
                userPassword = atob(userPassword);
            }
            我的连接参数 = `${userPassword}@${我的连接参数.substring(atIndex + 1)}`;
        }
    } else if ((authMatch = pathname.match(/\/(g?s5|auth1|g?conn)=(.+)/i))) {
        // 格式: /auth1=... 或 /s5=... 或 /gs5=... 或 /conn=... 或 /gconn=...
        const type = authMatch[1].toLowerCase();
        我的连接参数 = authMatch[2];
        启用转发模式 = type.includes('conn') ? 'http' : 'socks5';
        启用全局转发 = type.startsWith('g') || 启用全局转发;
    }

    // 解析认证配置
    if (我的连接参数) {
        try {
            parsedEndpointConfig = await 解析连接参数(我的连接参数);
            启用转发模式 = searchParams.get('conn') ? 'http' : 启用转发模式;
        } catch (err) {
            console.error('解析认证配置失败:', err.message);
            启用转发模式 = null;
        }
    } else 启用转发模式 = null;
}

async function 解析连接参数(address) {
    const lastAtIndex = address.lastIndexOf("@");
    let [后段, 前段] = lastAtIndex === -1 ? [address, undefined] : [address.substring(lastAtIndex + 1), address.substring(0, lastAtIndex)];
    let username, password, hostname, port;
    if (前段) {
        const 前段部分 = 前段.split(":");
        if (前段部分.length !== 2) {
            throw new Error('无效的地址格式：认证部分必须是 "username:password" 的形式');
        }
        [username, password] = 前段部分;
    }
    const 后段部分 = 后段.split(":");
    if (后段部分.length > 2 && 后段.includes("]:")) {
        port = Number(后段.split("]:")[1].replace(/[^\d]/g, ''));
        hostname = 后段.split("]:")[0] + "]";
    } else if (后段部分.length === 2) {
        port = Number(后段部分.pop().replace(/[^\d]/g, ''));
        hostname = 后段部分.join(":");
    } else {
        port = 80;
        hostname = 后段;
    }

    if (isNaN(port)) {
        throw new Error('无效的地址格式：端口号必须是数字');
    }
    const regex = /^\[.*\]$/;
    if (hostname.includes(":") && !regex.test(hostname)) {
        throw new Error('无效的地址格式：IPv6 地址必须用方括号括起来，如 [2001:db8::1]');
    }
    return { username, password, hostname, port };
}
