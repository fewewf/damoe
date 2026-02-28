const FIXED_UUID = 'd14bd0e0-9ade-4824-aa96-03bbe680b4db';
let 有的个点上时下到 = '',
  _EUvgjWGMhVOHbzsa = null,
  _vGPDSKATBKCqyAWy = false,
  _GvJqwNNFfrBfPGgz = '',
  们出那那种是了人 = {};
export default {
  async fetch(request) {
    try {
      const url = new URL(request.url);
      const upgradeHeader = request.headers.get('Upgrade');
      if (upgradeHeader !== 'websocket') {
        return new Response('Hello World!', {
          status: 200
        });
      } else {
        有的个点上时下到 = 有的个点上时下到 ? 有的个点上时下到 : request.cf.colo + '_IWKfyyFeTwXlkzZDao12s0';
        await 反代参数获取(request);
        const [上说地要我成的生, _nDcEYCAKcQtiZptr] = await 不学个要年的对到(有的个点上时下到);
        return await handleSPESSWebSocket(request, {
          们出那那种是了人,
          我到个要他工后看: _EUvgjWGMhVOHbzsa,
          _hrjVRXSoYXJfxYKZ: _vGPDSKATBKCqyAWy,
          _kprVWsWJknsRhORv: 上说地要我成的生,
          就了人学个就学他: _nDcEYCAKcQtiZptr
        });
      }
    } catch (err) {
      return new Response(err && err.stack ? err.stack : String(err), {
        status: 500
      });
    }
  }
};
async function handleSPESSWebSocket(request, config) {
  const {
    们出那那种是了人,
    我到个要他工后看,
    _hrjVRXSoYXJfxYKZ,
    _kprVWsWJknsRhORv,
    就了人学个就学他
  } = config;
  const ws配对 = new WebSocketPair();
  const [clientWS, serverWS] = Object.values(ws配对);
  serverWS.accept();
  let heartbeatInterval = setInterval(() => {
    if (serverWS.readyState === WS_READY_STATE_OPEN) {
      try {
        serverWS.send(new Uint8Array(0));
      } catch (e) {}
    }
  }, 30000);
  function clearHeartbeat() {
    if (heartbeatInterval) {
      clearInterval(heartbeatInterval);
      heartbeatInterval = null;
    }
  }
  serverWS.addEventListener('close', clearHeartbeat);
  serverWS.addEventListener('error', clearHeartbeat);
  const earlyDataHeader = request.headers.get('sec-websocket-protocol') || '';
  const wsReadable = createWebSocketReadableStream(serverWS, earlyDataHeader);
  let remoteSocket = null;
  let udpStreamWrite = null;
  let isDns = false;
  wsReadable.pipeTo(new WritableStream({
    async write(chunk) {
      if (isDns && udpStreamWrite) {
        return udpStreamWrite(chunk);
      }
      if (remoteSocket) {
        try {
          const writer = remoteSocket.writable.getWriter();
          await writer.write(chunk);
          writer.releaseLock();
        } catch (err) {
          closeSocket(remoteSocket);
          throw err;
        }
        return;
      }
      const result = _vubxiggmViKQtPXj(chunk);
      if (result.hasError) throw new Error(result.message);
      if (result.addressRemote.includes(atob('c3BlZWQuY2xvdWRmbGFyZS5jb20='))) throw new Error('Access');
      const _IZDNNdsYtfPzYXjL = new Uint8Array([result.vlessVersion[0], 0]);
      const rawClientData = chunk.slice(result.rawDataIndex);
      if (result.isUDP) {
        if (result.portRemote === 53) {
          isDns = true;
          const {
            write
          } = await handleUDPOutBound(serverWS, _IZDNNdsYtfPzYXjL);
          udpStreamWrite = write;
          udpStreamWrite(rawClientData);
          return;
        } else {
          throw new Error('_OoZLlnfDoimMlmeDpztokd');
        }
      }
      async function connectAndWrite(address, port) {
        const tcpSocket = await connect({
          hostname: address,
          port: port
        }, {
          allowHalfOpen: true
        });
        remoteSocket = tcpSocket;
        const writer = tcpSocket.writable.getWriter();
        await writer.write(rawClientData);
        writer.releaseLock();
        return tcpSocket;
      }
      async function _AmOFQYhxiQSROAPn(address, port) {
        const tcpSocket = 我到个要他工后看 === '出时动们年对能点jpj34s' ? await 说的上出后时点生(result.addressType, address, port, 们出那那种是了人) : await _XkxHybZhNvjjzIVw(result.addressType, address, port, 们出那那种是了人);
        remoteSocket = tcpSocket;
        const writer = tcpSocket.writable.getWriter();
        await writer.write(rawClientData);
        writer.releaseLock();
        return tcpSocket;
      }
      async function retry() {
        try {
          let tcpSocket;
          if (我到个要他工后看 === '工上了有人不时学poyhnn') {
            tcpSocket = await 说的上出后时点生(result.addressType, result.addressRemote, result.portRemote, 们出那那种是了人);
          } else if (我到个要他工后看 === '_iIyFJTWIlftSSlvlvb5ppj') {
            tcpSocket = await _XkxHybZhNvjjzIVw(result.addressType, result.addressRemote, result.portRemote, 们出那那种是了人);
          } else {
            tcpSocket = await connect({
              hostname: _kprVWsWJknsRhORv,
              port: 就了人学个就学他
            }, {
              allowHalfOpen: true
            });
          }
          remoteSocket = tcpSocket;
          const writer = tcpSocket.writable.getWriter();
          await writer.write(rawClientData);
          writer.releaseLock();
          tcpSocket.closed.catch(() => {}).finally(() => {
            if (serverWS.readyState === WS_READY_STATE_OPEN) {
              serverWS.close(1000, '连接已关闭');
            }
          });
          pipeRemoteToWebSocket(tcpSocket, serverWS, _IZDNNdsYtfPzYXjL, null);
        } catch (err) {
          closeSocket(remoteSocket);
          serverWS.close(1011, '后个生中们那说那utvtry' + (err && err.message ? err.message : err));
        }
      }
      try {
        if (_hrjVRXSoYXJfxYKZ) {
          const tcpSocket = await _AmOFQYhxiQSROAPn(result.addressRemote, result.portRemote);
          pipeRemoteToWebSocket(tcpSocket, serverWS, _IZDNNdsYtfPzYXjL, retry);
        } else {
          const tcpSocket = await connectAndWrite(result.addressRemote, result.portRemote);
          pipeRemoteToWebSocket(tcpSocket, serverWS, _IZDNNdsYtfPzYXjL, retry);
        }
      } catch (err) {
        closeSocket(remoteSocket);
        serverWS.close(1011, '连接失败: ' + (err && err.message ? err.message : err));
      }
    },
    close() {
      if (remoteSocket) {
        closeSocket(remoteSocket);
      }
    }
  })).catch(err => {
    closeSocket(remoteSocket);
    serverWS.close(1011, '内部错误: ' + (err && err.message ? err.message : err));
  });
  return new Response(null, {
    status: 101,
    webSocket: clientWS
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
        } catch (e) {}
      }
    }
  });
}
function _vubxiggmViKQtPXj(buffer) {
  if (buffer.byteLength < 24) {
    return {
      hasError: true,
      message: '无效的头部长度'
    };
  }
  const view = new DataView(buffer);
  const version = new Uint8Array(buffer.slice(0, 1));
  const uuid = formatUUID(new Uint8Array(buffer.slice(1, 17)));
  if (FIXED_UUID && uuid !== FIXED_UUID) {
    return {
      hasError: true,
      message: '无效的用户'
    };
  }
  const optionsLength = view.getUint8(17);
  const command = view.getUint8(18 + optionsLength);
  let isUDP = false;
  if (command === 1) {} else if (command === 2) {
    isUDP = true;
  } else {
    return {
      hasError: true,
      message: '不支持的命令，仅支持TCP(01)和UDP(02)'
    };
  }
  let offset = 19 + optionsLength;
  const port = view.getUint16(offset);
  offset += 2;
  const addressType = view.getUint8(offset++);
  let address = '';
  switch (addressType) {
    case 1:
      address = Array.from(new Uint8Array(buffer.slice(offset, offset + 4))).join('.');
      offset += 4;
      break;
    case 2:
      const domainLength = view.getUint8(offset++);
      address = new TextDecoder().decode(buffer.slice(offset, offset + domainLength));
      offset += domainLength;
      break;
    case 3:
      const ipv6 = [];
      for (let i = 0; i < 8; i++) {
        ipv6.push(view.getUint16(offset).toString(16).padStart(4, '0'));
        offset += 2;
      }
      address = ipv6.join(':').replace(/(^|:)0+(\w)/g, '$1$2');
      break;
    default:
      return {
        hasError: true,
        message: '_dtDcyGiNRaWmUtHgdius87'
      };
  }
  return {
    hasError: false,
    _jaBQWzvbLhKhZTVi: address,
    portRemote: port,
    rawDataIndex: offset,
    看不子那发们我生: version,
    isUDP,
    addressType
  };
}
async function pipeRemoteToWebSocket(remoteSocket, ws, _NKoungOrcZVffghU, retry = null, retryCount = 0) {
  const MAX_RETRIES = 8;
  const MAX_CHUNK_SIZE = 128 * 1024;
  const MAX_BUFFER_SIZE = 2 * 1024 * 1024;
  const FLUSH_INTERVAL = 10;
  const BASE_RETRY_DELAY = 200;
  let headerSent = false;
  let hasIncomingData = false;
  let bufferQueue = [];
  let bufferedBytes = 0;
  const concatUint8Arrays = chunks => {
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
  const sendInChunks = data => {
    let offset = 0;
    while (offset < data.byteLength) {
      const end = Math.min(offset + MAX_CHUNK_SIZE, data.byteLength);
      ws.send(data.slice(offset, end));
      offset = end;
    }
  };
  const flushBufferQueue = () => {
    if (ws.readyState !== WS_READY_STATE_OPEN || bufferQueue.length === 0) return;
    const merged = concatUint8Arrays(bufferQueue);
    bufferQueue = [];
    bufferedBytes = 0;
    sendInChunks(merged);
  };
  const flushTimer = setInterval(flushBufferQueue, FLUSH_INTERVAL);
  const reader = remoteSocket.readable.getReader();
  try {
    while (true) {
      const {
        done,
        value
      } = await reader.read();
      if (done) break;
      hasIncomingData = true;
      if (ws.readyState !== WS_READY_STATE_OPEN) break;
      if (!headerSent) {
        const combined = new Uint8Array(_NKoungOrcZVffghU.byteLength + value.byteLength);
        combined.set(new Uint8Array(_NKoungOrcZVffghU), 0);
        combined.set(value, _NKoungOrcZVffghU.byteLength);
        bufferQueue.push(combined);
        bufferedBytes += combined.byteLength;
        headerSent = true;
      } else {
        bufferQueue.push(value);
        bufferedBytes += value.byteLength;
      }
      if (bufferedBytes >= MAX_BUFFER_SIZE) {
        flushBufferQueue();
      }
    }
    reader.releaseLock();
    flushBufferQueue();
    clearInterval(flushTimer);
    if (!hasIncomingData && retry && retryCount < MAX_RETRIES) {
      const delay = BASE_RETRY_DELAY * Math.pow(2, retryCount);
      console.warn(`未收到数据，${delay} ms 后重试 (${retryCount + 1}/${MAX_RETRIES})`);
      await new Promise(r => setTimeout(r, delay));
      await retry();
      return;
    }
    if (ws.readyState === WS_READY_STATE_OPEN) ws.close(1000, '正常关闭');
  } catch (err) {
    reader.releaseLock();
    clearInterval(flushTimer);
    console.error('数据传输错误:', err);
    closeSocket(remoteSocket);
    if (retry && retryCount < MAX_RETRIES) {
      const delay = BASE_RETRY_DELAY * Math.pow(2, retryCount);
      console.warn(`错误重试 (${retryCount + 1}/${MAX_RETRIES})，将在 ${delay} ms 后重试`);
      await new Promise(r => setTimeout(r, delay));
      await retry();
      return;
    }
    if (ws.readyState === WS_READY_STATE_OPEN) {
      ws.close(1011, '数据传输错误');
    }
  }
}
function closeSocket(socket) {
  if (socket) {
    try {
      socket.close();
    } catch (e) {}
  }
}
function formatUUID(bytes) {
  const hex = Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}
async function 说的上出后时点生(addressType, _jaBQWzvbLhKhZTVi, portRemote, 们出那那种是了人) {
  const {
    username,
    password,
    hostname,
    port
  } = 们出那那种是了人;
  const socket = connect({
    hostname,
    port
  });
  const _lBtFEvWQNWXYGpLo = new Uint8Array([5, 2, 0, 2]);
  const writer = socket.writable.getWriter();
  await writer.write(_lBtFEvWQNWXYGpLo);
  const reader = socket.readable.getReader();
  const encoder = new TextEncoder();
  let res = (await reader.read()).value;
  if (res[0] !== 0x05) {
    throw new Error(`_pyZFZDWwoLNbQmqjibunp8${res[0]} expected: 5`);
  }
  if (res[1] === 0xff) {
    throw new Error("no acceptable methods");
  }
  if (res[1] === 0x02) {
    if (!username || !password) {
      throw new Error("please provide username/password");
    }
    const authRequest = new Uint8Array([1, username.length, ...encoder.encode(username), password.length, ...encoder.encode(password)]);
    await writer.write(authRequest);
    res = (await reader.read()).value;
    if (res[0] !== 0x01 || res[1] !== 0x00) {
      throw new Error('_aiXhulxzsETYAWQRvm79bi');
    }
  }
  let DSTADDR;
  switch (addressType) {
    case 1:
      DSTADDR = new Uint8Array([1, ..._jaBQWzvbLhKhZTVi.split('.').map(Number)]);
      break;
    case 2:
      DSTADDR = new Uint8Array([3, _jaBQWzvbLhKhZTVi.length, ...encoder.encode(_jaBQWzvbLhKhZTVi)]);
      break;
    case 3:
      DSTADDR = new Uint8Array([4, ..._jaBQWzvbLhKhZTVi.split(':').flatMap(x => [parseInt(x.slice(0, 2), 16), parseInt(x.slice(2), 16)])]);
      break;
    default:
      throw new Error(`invalid addressType is ${addressType}`);
  }
  const 是点说下这工时人 = new Uint8Array([5, 1, 0, ...DSTADDR, portRemote >> 8, portRemote & 0xff]);
  await writer.write(是点说下这工时人);
  res = (await reader.read()).value;
  if (res[1] === 0x00) {} else {
    throw new Error('我不有他要能子子9u1iyt');
  }
  writer.releaseLock();
  reader.releaseLock();
  return socket;
}
async function _XkxHybZhNvjjzIVw(addressType, _jaBQWzvbLhKhZTVi, portRemote, 们出那那种是了人) {
  const {
    username,
    password,
    hostname,
    port
  } = 们出那那种是了人;
  const sock = await connect({
    hostname: hostname,
    port: port
  });
  let connectRequest = `CONNECT ${_jaBQWzvbLhKhZTVi}:${portRemote}一不就看有有是时azn6yr`;
  connectRequest += `Host: ${_jaBQWzvbLhKhZTVi}:${portRemote}\r\n`;
  if (username && password) {
    const authString = `${username}:${password}`;
    const base64Auth = btoa(authString);
    connectRequest += `_bqvggwhsOOjMTYeQv5nfyw${base64Auth}\r\n`;
  }
  connectRequest += `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36\r\n`;
  connectRequest += `_LrYgAMZEWOxszWpMs8fgl4`;
  connectRequest += `Connection: Keep-Alive\r\n`;
  connectRequest += `\r\n`;
  try {
    const writer = sock.writable.getWriter();
    await writer.write(new TextEncoder().encode(connectRequest));
    writer.releaseLock();
  } catch (err) {
    console.error('地可学们到这中地zvpia9', err);
    throw new Error(`_QhlKTrIClVkXvUOxcioicw${err.message}`);
  }
  const reader = sock.readable.getReader();
  let respText = '';
  let connected = false;
  let responseBuffer = new Uint8Array(0);
  try {
    while (true) {
      const {
        value,
        done
      } = await reader.read();
      if (done) {
        console.error('对面我对在中就子zmi8uh');
        throw new Error('_mXyPhTcwMsgvmlWe1zsnqk');
      }
      const newBuffer = new Uint8Array(responseBuffer.length + value.length);
      newBuffer.set(responseBuffer);
      newBuffer.set(value, responseBuffer.length);
      responseBuffer = newBuffer;
      respText = new TextDecoder().decode(responseBuffer);
      if (respText.includes('\r\n\r\n')) {
        const headersEndPos = respText.indexOf('\r\n\r\n') + 4;
        const headers = respText.substring(0, headersEndPos);
        if (headers.startsWith('_xRWiDEoBcgswTDFW96hyqp') || headers.startsWith('_xxczqGjfSrINSHicz6ynxf')) {
          connected = true;
          if (headersEndPos < responseBuffer.length) {
            const remainingData = responseBuffer.slice(headersEndPos);
            const dataStream = new ReadableStream({
              start(controller) {
                controller.enqueue(remainingData);
              }
            });
            const {
              readable,
              writable
            } = new TransformStream();
            dataStream.pipeTo(writable).catch(err => console.error('处理剩余数据错误:', err));
            sock.readable = readable;
          }
        } else {
          const errorMsg = `_njTzYRGyUlnErIOj10e1ku${headers.split('\r\n')[0]}`;
          console.error(errorMsg);
          throw new Error(errorMsg);
        }
        break;
      }
    }
  } catch (err) {
    reader.releaseLock();
    throw new Error(`_cUEdVzRyYsYYBAoUs81ot5${err.message}`);
  }
  reader.releaseLock();
  if (!connected) {
    throw new Error('我要了发面种看我qdfwwa');
  }
  return sock;
}
async function handleUDPOutBound(webSocket, 协议响应头) {
  let _HmyXlORKcgqBgIZc = false;
  const transformStream = new TransformStream({
    start(controller) {},
    transform(chunk, controller) {
      for (let index = 0; index < chunk.byteLength;) {
        const lengthBuffer = chunk.slice(index, index + 2);
        const udpPacketLength = new DataView(lengthBuffer).getUint16(0);
        const udpData = new Uint8Array(chunk.slice(index + 2, index + 2 + udpPacketLength));
        index = index + 2 + udpPacketLength;
        controller.enqueue(udpData);
      }
    },
    flush(controller) {}
  });
  transformStream.readable.pipeTo(new WritableStream({
    async write(chunk) {
      const resp = await fetch('_JBOdBeoGkCmujAxEhk41wc', {
        method: 'POST',
        headers: {
          'content-type': 'application/dns-message'
        },
        body: chunk
      });
      const dnsQueryResult = await resp.arrayBuffer();
      const udpSize = dnsQueryResult.byteLength;
      const udpSizeBuffer = new Uint8Array([udpSize >> 8 & 0xff, udpSize & 0xff]);
      if (webSocket.readyState === WS_READY_STATE_OPEN) {
        if (_HmyXlORKcgqBgIZc) {
          webSocket.send(await new Blob([udpSizeBuffer, dnsQueryResult]).arrayBuffer());
        } else {
          webSocket.send(await new Blob([协议响应头, udpSizeBuffer, dnsQueryResult]).arrayBuffer());
          _HmyXlORKcgqBgIZc = true;
        }
      }
    }
  })).catch(error => {});
  const writer = transformStream.writable.getWriter();
  return {
    write(chunk) {
      writer.write(chunk);
    }
  };
}
const WS_READY_STATE_OPEN = 1;
import { connect } from 'cloudflare:sockets';
async function 不学个要年的对到(个上了可看作子进) {
  个上了可看作子进 = 个上了可看作子进.toLowerCase();
  let _tpJNjBFtKADnoQMe = 个上了可看作子进,
    _cHGKSPCwQvbbAfxU = 443;
  if (个上了可看作子进.includes('.tp')) {
    const tpMatch = 个上了可看作子进.match(/\.tp(\d+)/);
    if (tpMatch) _cHGKSPCwQvbbAfxU = parseInt(tpMatch[1], 10);
    return [_tpJNjBFtKADnoQMe, _cHGKSPCwQvbbAfxU];
  }
  if (个上了可看作子进.includes(']:')) {
    const parts = 个上了可看作子进.split(']:');
    _tpJNjBFtKADnoQMe = parts[0] + ']';
    _cHGKSPCwQvbbAfxU = parseInt(parts[1], 10) || _cHGKSPCwQvbbAfxU;
  } else if (个上了可看作子进.includes(':') && !个上了可看作子进.startsWith('[')) {
    const colonIndex = 个上了可看作子进.lastIndexOf(':');
    _tpJNjBFtKADnoQMe = 个上了可看作子进.slice(0, colonIndex);
    _cHGKSPCwQvbbAfxU = parseInt(个上了可看作子进.slice(colonIndex + 1), 10) || _cHGKSPCwQvbbAfxU;
  }
  return [_tpJNjBFtKADnoQMe, _cHGKSPCwQvbbAfxU];
}
async function 反代参数获取(request) {
  const url = new URL(request.url);
  const {
    pathname,
    searchParams
  } = url;
  const pathLower = pathname.toLowerCase();
  _GvJqwNNFfrBfPGgz = searchParams.get('这后了有下能人在wlszz4') || searchParams.get('_FNeGhHjfetfvHDHJ8tnsyt') || null;
  _vGPDSKATBKCqyAWy = searchParams.has('_XwLUbhGBJiHoEMyAayz4al') || false;
  const _DKpadFTKLudlJGKL = pathLower.match(/\/(proxyip[.=]|pyip=|ip=)(.+)/);
  if (searchParams.has('进上个中们我不说xjn2ke')) {
    const _tXfPzfaQsiRqWVTh = searchParams.get('_SkRzrOlhtCSzQsKPhvhfek');
    有的个点上时下到 = _tXfPzfaQsiRqWVTh.includes(',') ? _tXfPzfaQsiRqWVTh.split(',')[Math.floor(Math.random() * _tXfPzfaQsiRqWVTh.split(',').length)] : _tXfPzfaQsiRqWVTh;
    return;
  } else if (_DKpadFTKLudlJGKL) {
    const _tXfPzfaQsiRqWVTh = _DKpadFTKLudlJGKL[1] === '_lYvSRCxNRPPvXJDcs3ocgs' ? `_JDdRdeNKuttKUnkH4sq5m9${_DKpadFTKLudlJGKL[2]}` : _DKpadFTKLudlJGKL[2];
    有的个点上时下到 = _tXfPzfaQsiRqWVTh.includes(',') ? _tXfPzfaQsiRqWVTh.split(',')[Math.floor(Math.random() * _tXfPzfaQsiRqWVTh.split(',').length)] : _tXfPzfaQsiRqWVTh;
    return;
  }
  let _RdaaAHnYtVjjLrky;
  if (_RdaaAHnYtVjjLrky = pathname.match(/\/(socks5?|http):\/?\/?(.+)/i)) {
    _EUvgjWGMhVOHbzsa = _RdaaAHnYtVjjLrky[1].toLowerCase() === '是们点上行种地看efg2oa' ? '_aIovHdMFXceAwkUfafbwkl' : '发成面地是要对时udh3yy';
    _GvJqwNNFfrBfPGgz = _RdaaAHnYtVjjLrky[2].split('#')[0];
    _vGPDSKATBKCqyAWy = true;
    if (_GvJqwNNFfrBfPGgz.includes('@')) {
      const atIndex = _GvJqwNNFfrBfPGgz.lastIndexOf('@');
      let userPassword = _GvJqwNNFfrBfPGgz.substring(0, atIndex).replaceAll('%3D', '=');
      if (/^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i.test(userPassword) && !userPassword.includes(':')) {
        userPassword = atob(userPassword);
      }
      _GvJqwNNFfrBfPGgz = `${userPassword}@${_GvJqwNNFfrBfPGgz.substring(atIndex + 1)}`;
    }
  } else if (_RdaaAHnYtVjjLrky = pathname.match(/\/(g?s5|socks5|g?http)=(.+)/i)) {
    const type = _RdaaAHnYtVjjLrky[1].toLowerCase();
    _GvJqwNNFfrBfPGgz = _RdaaAHnYtVjjLrky[2];
    _EUvgjWGMhVOHbzsa = type.includes('_EXGIlgOPulYzdYLU7amye2') ? '_VEFmjcrKQXybqBUsqak3ta' : '_gqRFGSDnPhFnpkJJ3w29xs';
    _vGPDSKATBKCqyAWy = type.startsWith('g') || _vGPDSKATBKCqyAWy;
  }
  if (_GvJqwNNFfrBfPGgz) {
    try {
      们出那那种是了人 = await 不个有学成后个时(_GvJqwNNFfrBfPGgz);
      _EUvgjWGMhVOHbzsa = searchParams.get('_PMZtpfqGutWSoxel1ie0xo') ? '作中地上发这时不qlal2i' : _EUvgjWGMhVOHbzsa;
    } catch (err) {
      console.error('_fEKbHMmHmbQKjkrz5ae4i5', err.message);
      _EUvgjWGMhVOHbzsa = null;
    }
  } else _EUvgjWGMhVOHbzsa = null;
}
async function 不个有学成后个时(address) {
  const lastAtIndex = address.lastIndexOf("@");
  let [latter, former] = lastAtIndex === -1 ? [address, undefined] : [address.substring(lastAtIndex + 1), address.substring(0, lastAtIndex)];
  let username, password, hostname, port;
  if (former) {
    const formers = former.split(":");
    if (formers.length !== 2) {
      throw new Error('_FxJRUKXWMpahUQSans3g9m');
    }
    [username, password] = formers;
  }
  const latters = latter.split(":");
  if (latters.length > 2 && latter.includes("]:")) {
    port = Number(latter.split("]:")[1].replace(/[^\d]/g, ''));
    hostname = latter.split("]:")[0] + "]";
  } else if (latters.length === 2) {
    port = Number(latters.pop().replace(/[^\d]/g, ''));
    hostname = latters.join(":");
  } else {
    port = 80;
    hostname = latter;
  }
  if (isNaN(port)) {
    throw new Error('_dXVFNYDrKAUMsnrT9r1iw0');
  }
  const regex = /^\[.*\]$/;
  if (hostname.includes(":") && !regex.test(hostname)) {
    throw new Error('要有子人说子时年cs32la');
  }
  return {
    username,
    password,
    hostname,
    port
  };
}