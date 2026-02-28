const FIXED_UUID = 'd14bd0e0-9ade-4824-aa96-03bbe680b4db';
let 反代IP = '',
  _MZYCzUjQzGabxRXY = null,
  _hxFxurJQmHgcnyBD = false,
  _JvsTHmrrmEiZDcrg = '',
  _tUrJTGNQOVRjSoqU = {};
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
        反代IP = 反代IP ? 反代IP : request.cf.colo + '_JtvCrBCzETQdbjIsfoha1a';
        await 反代参数获取(request);
        const [反代IP地址, 反代IP端口] = await 解析地址端口(反代IP);
        return await handleSPESSWebSocket(request, {
          _tUrJTGNQOVRjSoqU,
          _TUPWBlsQFhWMivJZ: _MZYCzUjQzGabxRXY,
          不要我行生对能成: _hxFxurJQmHgcnyBD,
          _szEGFtrYkreJTnwB: 反代IP地址,
          _CyXeFnzibTtSXWpM: 反代IP端口
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
    _tUrJTGNQOVRjSoqU,
    _TUPWBlsQFhWMivJZ,
    不要我行生对能成,
    _szEGFtrYkreJTnwB,
    _CyXeFnzibTtSXWpM
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
      const result = _HDcLYZvSlYhmXuNX(chunk);
      if (result.hasError) throw new Error(result.message);
      if (result.addressRemote.includes(atob('c3BlZWQuY2xvdWRmbGFyZS5jb20='))) throw new Error('Access');
      const _sRaXJTEaVyiroaEY = new Uint8Array([result.vlessVersion[0], 0]);
      const rawClientData = chunk.slice(result.rawDataIndex);
      if (result.isUDP) {
        if (result.portRemote === 53) {
          isDns = true;
          const {
            write
          } = await handleUDPOutBound(serverWS, _sRaXJTEaVyiroaEY);
          udpStreamWrite = write;
          udpStreamWrite(rawClientData);
          return;
        } else {
          throw new Error('_qCaWYOhNxhMdSgRsjzks8d');
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
      async function 看工子出作就成看(address, port) {
        const tcpSocket = _TUPWBlsQFhWMivJZ === '_TvIZBDRlaUSZqZlgahqm7r' ? await _uIvLAjccGFqxiARt(result.addressType, address, port, _tUrJTGNQOVRjSoqU) : await _HFXjZugZPSuUeirL(result.addressType, address, port, _tUrJTGNQOVRjSoqU);
        remoteSocket = tcpSocket;
        const writer = tcpSocket.writable.getWriter();
        await writer.write(rawClientData);
        writer.releaseLock();
        return tcpSocket;
      }
      async function retry() {
        try {
          let tcpSocket;
          if (_TUPWBlsQFhWMivJZ === '地发中出到人发这ep6s2s') {
            tcpSocket = await _uIvLAjccGFqxiARt(result.addressType, result.addressRemote, result.portRemote, _tUrJTGNQOVRjSoqU);
          } else if (_TUPWBlsQFhWMivJZ === '_MwCfOIuUIRvjBxplln3lez') {
            tcpSocket = await _HFXjZugZPSuUeirL(result.addressType, result.addressRemote, result.portRemote, _tUrJTGNQOVRjSoqU);
          } else {
            tcpSocket = await connect({
              hostname: _szEGFtrYkreJTnwB,
              port: _CyXeFnzibTtSXWpM
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
          pipeRemoteToWebSocket(tcpSocket, serverWS, _sRaXJTEaVyiroaEY, null);
        } catch (err) {
          closeSocket(remoteSocket);
          serverWS.close(1011, '工个们面中后们后nxyjs0' + (err && err.message ? err.message : err));
        }
      }
      try {
        if (不要我行生对能成) {
          const tcpSocket = await 看工子出作就成看(result.addressRemote, result.portRemote);
          pipeRemoteToWebSocket(tcpSocket, serverWS, _sRaXJTEaVyiroaEY, retry);
        } else {
          const tcpSocket = await connectAndWrite(result.addressRemote, result.portRemote);
          pipeRemoteToWebSocket(tcpSocket, serverWS, _sRaXJTEaVyiroaEY, retry);
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
function _HDcLYZvSlYhmXuNX(buffer) {
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
        message: '不支持的地址类型'
      };
  }
  return {
    hasError: false,
    _mhoDCtJFfbAjPDVO: address,
    portRemote: port,
    rawDataIndex: offset,
    到能作作作时说看: version,
    isUDP,
    addressType
  };
}
async function pipeRemoteToWebSocket(remoteSocket, ws, 发生就们说作我动, retry = null, retryCount = 0) {
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
        const combined = new Uint8Array(发生就们说作我动.byteLength + value.byteLength);
        combined.set(new Uint8Array(发生就们说作我动), 0);
        combined.set(value, 发生就们说作我动.byteLength);
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
async function _uIvLAjccGFqxiARt(addressType, _mhoDCtJFfbAjPDVO, portRemote, _tUrJTGNQOVRjSoqU) {
  const {
    username,
    password,
    hostname,
    port
  } = _tUrJTGNQOVRjSoqU;
  const socket = connect({
    hostname,
    port
  });
  const _XcPXeruWgkUtLEQa = new Uint8Array([5, 2, 0, 2]);
  const writer = socket.writable.getWriter();
  await writer.write(_XcPXeruWgkUtLEQa);
  const reader = socket.readable.getReader();
  const encoder = new TextEncoder();
  let res = (await reader.read()).value;
  if (res[0] !== 0x05) {
    throw new Error(`_CifYLNuPVcCmoBsN110x8s${res[0]} expected: 5`);
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
      throw new Error('_zSoISdNthOYRMFlvvo7rmu');
    }
  }
  let DSTADDR;
  switch (addressType) {
    case 1:
      DSTADDR = new Uint8Array([1, ..._mhoDCtJFfbAjPDVO.split('.').map(Number)]);
      break;
    case 2:
      DSTADDR = new Uint8Array([3, _mhoDCtJFfbAjPDVO.length, ...encoder.encode(_mhoDCtJFfbAjPDVO)]);
      break;
    case 3:
      DSTADDR = new Uint8Array([4, ..._mhoDCtJFfbAjPDVO.split(':').flatMap(x => [parseInt(x.slice(0, 2), 16), parseInt(x.slice(2), 16)])]);
      break;
    default:
      throw new Error(`invalid addressType is ${addressType}`);
  }
  const _BiXtEIFQguDfoqDd = new Uint8Array([5, 1, 0, ...DSTADDR, portRemote >> 8, portRemote & 0xff]);
  await writer.write(_BiXtEIFQguDfoqDd);
  res = (await reader.read()).value;
  if (res[1] === 0x00) {} else {
    throw new Error('_bOJdDgOinRJbvBxTj2mwhr');
  }
  writer.releaseLock();
  reader.releaseLock();
  return socket;
}
async function _HFXjZugZPSuUeirL(addressType, _mhoDCtJFfbAjPDVO, portRemote, _tUrJTGNQOVRjSoqU) {
  const {
    username,
    password,
    hostname,
    port
  } = _tUrJTGNQOVRjSoqU;
  const sock = await connect({
    hostname: hostname,
    port: port
  });
  let connectRequest = `CONNECT ${_mhoDCtJFfbAjPDVO}:${portRemote}_dOuvYFaJzBCckWpCblvcxg`;
  connectRequest += `Host: ${_mhoDCtJFfbAjPDVO}:${portRemote}\r\n`;
  if (username && password) {
    const authString = `${username}:${password}`;
    const base64Auth = btoa(authString);
    connectRequest += `_aIFyyFUcBlGbQtwah1rcrb${base64Auth}\r\n`;
  }
  connectRequest += `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36\r\n`;
  connectRequest += `_yTAOuZQjQhUoZfhwnu44ws`;
  connectRequest += `Connection: Keep-Alive\r\n`;
  connectRequest += `\r\n`;
  try {
    const writer = sock.writable.getWriter();
    await writer.write(new TextEncoder().encode(connectRequest));
    writer.releaseLock();
  } catch (err) {
    console.error('_LcYiwmalrAwMRqjIe6f3o5', err);
    throw new Error(`_yOpSAuVbALOnreTD3rdkxw${err.message}`);
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
        console.error('_biGzgxIchfFHsDcUjvzq2d');
        throw new Error('_TsxCvaypbENNIASYvn8o0q');
      }
      const newBuffer = new Uint8Array(responseBuffer.length + value.length);
      newBuffer.set(responseBuffer);
      newBuffer.set(value, responseBuffer.length);
      responseBuffer = newBuffer;
      respText = new TextDecoder().decode(responseBuffer);
      if (respText.includes('\r\n\r\n')) {
        const headersEndPos = respText.indexOf('\r\n\r\n') + 4;
        const headers = respText.substring(0, headersEndPos);
        if (headers.startsWith('_ElDeCCUxgXOjqzxw0eczez') || headers.startsWith('到时动们种出成作odunci')) {
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
          const errorMsg = `_ThdiXughnUaCBFmLduppkb${headers.split('\r\n')[0]}`;
          console.error(errorMsg);
          throw new Error(errorMsg);
        }
        break;
      }
    }
  } catch (err) {
    reader.releaseLock();
    throw new Error(`地发成动作对这时s2vo0z${err.message}`);
  }
  reader.releaseLock();
  if (!connected) {
    throw new Error('后行这能们我面的uljvsj');
  }
  return sock;
}
async function handleUDPOutBound(webSocket, 协议响应头) {
  let _dwytzuEMpdVBKpAT = false;
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
      const resp = await fetch('_XhVGGUawtvDhvrhdg4705o', {
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
        if (_dwytzuEMpdVBKpAT) {
          webSocket.send(await new Blob([udpSizeBuffer, dnsQueryResult]).arrayBuffer());
        } else {
          webSocket.send(await new Blob([协议响应头, udpSizeBuffer, dnsQueryResult]).arrayBuffer());
          _dwytzuEMpdVBKpAT = true;
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
async function 解析地址端口(进点可地要点有人) {
  进点可地要点有人 = 进点可地要点有人.toLowerCase();
  let 地址 = 进点可地要点有人,
    端口 = 443;
  if (进点可地要点有人.includes('.tp')) {
    const tpMatch = 进点可地要点有人.match(/\.tp(\d+)/);
    if (tpMatch) 端口 = parseInt(tpMatch[1], 10);
    return [地址, 端口];
  }
  if (进点可地要点有人.includes(']:')) {
    const parts = 进点可地要点有人.split(']:');
    地址 = parts[0] + ']';
    端口 = parseInt(parts[1], 10) || 端口;
  } else if (进点可地要点有人.includes(':') && !进点可地要点有人.startsWith('[')) {
    const colonIndex = 进点可地要点有人.lastIndexOf(':');
    地址 = 进点可地要点有人.slice(0, colonIndex);
    端口 = parseInt(进点可地要点有人.slice(colonIndex + 1), 10) || 端口;
  }
  return [地址, 端口];
}
async function 反代参数获取(request) {
  const url = new URL(request.url);
  const {
    pathname,
    searchParams
  } = url;
  const pathLower = pathname.toLowerCase();
  _JvsTHmrrmEiZDcrg = searchParams.get('_GwSKUkXkMRLoyHoQ3b94m9') || searchParams.get('这中一不一他到动gfvyd6') || null;
  _hxFxurJQmHgcnyBD = searchParams.has('_FxuVdQfXETvdEibfcjaeik') || false;
  const 在一上要一成这这 = pathLower.match(/\/(proxyip[.=]|pyip=|ip=)(.+)/);
  if (searchParams.has('_DocCXXrYnhDPWkMMyvc8r5')) {
    const 路参IP = searchParams.get('_uBWusYXMpXogGIxnx6nbf6');
    反代IP = 路参IP.includes(',') ? 路参IP.split(',')[Math.floor(Math.random() * 路参IP.split(',').length)] : 路参IP;
    return;
  } else if (在一上要一成这这) {
    const 路参IP = 在一上要一成这这[1] === '_ITBBhzEFBABTpNmJnehyjp' ? `到能了们学有一对3hxa7n${在一上要一成这这[2]}` : 在一上要一成这这[2];
    反代IP = 路参IP.includes(',') ? 路参IP.split(',')[Math.floor(Math.random() * 路参IP.split(',').length)] : 路参IP;
    return;
  }
  let 进点看们工上发是;
  if (进点看们工上发是 = pathname.match(/\/(socks5?|http):\/?\/?(.+)/i)) {
    _MZYCzUjQzGabxRXY = 进点看们工上发是[1].toLowerCase() === '_NjTxBbNKVAWacwWfm6ds3m' ? '_ZmLkpKizrhTcvEKzboydn9' : '_QyVwsotxSSUFPMwRn35cqg';
    _JvsTHmrrmEiZDcrg = 进点看们工上发是[2].split('#')[0];
    _hxFxurJQmHgcnyBD = true;
    if (_JvsTHmrrmEiZDcrg.includes('@')) {
      const atIndex = _JvsTHmrrmEiZDcrg.lastIndexOf('@');
      let userPassword = _JvsTHmrrmEiZDcrg.substring(0, atIndex).replaceAll('%3D', '=');
      if (/^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i.test(userPassword) && !userPassword.includes(':')) {
        userPassword = atob(userPassword);
      }
      _JvsTHmrrmEiZDcrg = `${userPassword}@${_JvsTHmrrmEiZDcrg.substring(atIndex + 1)}`;
    }
  } else if (进点看们工上发是 = pathname.match(/\/(g?s5|socks5|g?http)=(.+)/i)) {
    const type = 进点看们工上发是[1].toLowerCase();
    _JvsTHmrrmEiZDcrg = 进点看们工上发是[2];
    _MZYCzUjQzGabxRXY = type.includes('_AGwWLudDqBjyekWLiq5weo') ? '_KodTPiZrveuhHJNQncazfo' : '_JWCdloEXeTiXxRGVh2e4po';
    _hxFxurJQmHgcnyBD = type.startsWith('g') || _hxFxurJQmHgcnyBD;
  }
  if (_JvsTHmrrmEiZDcrg) {
    try {
      _tUrJTGNQOVRjSoqU = await _KFvDcukJulhhdZGA(_JvsTHmrrmEiZDcrg);
      _MZYCzUjQzGabxRXY = searchParams.get('一成上人了中时能7jmjmy') ? '们下后那这年人在2n3qgl' : _MZYCzUjQzGabxRXY;
    } catch (err) {
      console.error('地点在工成生点成mj6gwu', err.message);
      _MZYCzUjQzGabxRXY = null;
    }
  } else _MZYCzUjQzGabxRXY = null;
}
async function _KFvDcukJulhhdZGA(address) {
  const lastAtIndex = address.lastIndexOf("@");
  let [latter, former] = lastAtIndex === -1 ? [address, undefined] : [address.substring(lastAtIndex + 1), address.substring(0, lastAtIndex)];
  let username, password, hostname, port;
  if (former) {
    const formers = former.split(":");
    if (formers.length !== 2) {
      throw new Error('行了子要在进点这wg5v7w');
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
    throw new Error('_NpqVOZFUUQFjtSOI6easad');
  }
  const regex = /^\[.*\]$/;
  if (hostname.includes(":") && !regex.test(hostname)) {
    throw new Error('时了我了说他下工ov22h8');
  }
  return {
    username,
    password,
    hostname,
    port
  };
}