const _UJfvYUgQfXMoZHfv = '64c6e2fe-e7a8-4118-b3bc-a1ecd5b9553a';
const _TpUKBsRpoSGdUyNd = '/your-secret-path';
const _tKTBOQuWsjYtwGUy = (_iVRpSkahOMBPjNNu, _fIQAYwexzwdqKEwx = 404) => {
  const _SwtteVFCAcdLkOrG = {
    timestamp: new Date().toISOString(),
    status: _fIQAYwexzwdqKEwx,
    error: _fIQAYwexzwdqKEwx === 404 ? "Not Found" : "Unauthorized",
    message: `No static resource or API endpoint found for: ${_iVRpSkahOMBPjNNu.pathname}`,
    path: _iVRpSkahOMBPjNNu.pathname,
    requestId: Math.random().toString(36).substring(2, 15).toUpperCase(),
    service: "api-gateway-v2"
  };
  return new Response(JSON.stringify(_SwtteVFCAcdLkOrG), {
    status: _fIQAYwexzwdqKEwx,
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
let _QNufDckyOlXbKpIx = 'yx1.9898981.xyz:8443',
  _FSpIWzvlVfBjptFo = null,
  _aYzQJfiABVxtlqbb = false,
  _aJmndbhhJgRfZCrE = '',
  _rDDUfqBVaMuFvbZX = {};
export default {
  async fetch(_bsLoCikreIcDnpWn) {
    try {
      const _iVRpSkahOMBPjNNu = new URL(_bsLoCikreIcDnpWn.url);
      if (_iVRpSkahOMBPjNNu.pathname !== _TpUKBsRpoSGdUyNd) {
        return _tKTBOQuWsjYtwGUy(_iVRpSkahOMBPjNNu, 404);
      }
      const _mgdrkbfnrzVLyvzC = _bsLoCikreIcDnpWn.headers.get('Upgrade');
      if (_mgdrkbfnrzVLyvzC !== 'websocket') {
        return new Response(JSON.stringify({
          status: "UP",
          version: "2.4.1-RELEASE",
          uptime: Math.floor(Math.random() * 100000) + "s"
        }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Server': 'nginx'
          }
        });
      }
      _QNufDckyOlXbKpIx = _QNufDckyOlXbKpIx ? _QNufDckyOlXbKpIx : _bsLoCikreIcDnpWn.cf.colo + '.koukouIP.cmliuSSSS.NET';
      await _dxOkeHqogtGdttEb(_bsLoCikreIcDnpWn);
      const [_WSrwqqRWFLRntKPm, _jByCLvKWjBBDwwAu] = await _uqaePqpPoDWvOkeS(_QNufDckyOlXbKpIx);
      return await _eFMisOaxNlSqwLhV(_bsLoCikreIcDnpWn, {
        parsedSocks5Address: _rDDUfqBVaMuFvbZX,
        enableSocks: _FSpIWzvlVfBjptFo,
        enableGlobalSocks: _aYzQJfiABVxtlqbb,
        koukouIP: _WSrwqqRWFLRntKPm,
        koukouPort: _jByCLvKWjBBDwwAu
      });
    } catch (_MLXEEDrAAJBsMEoc) {
      return new Response(JSON.stringify({
        code: 500,
        error: "Internal Server Error",
        message: _MLXEEDrAAJBsMEoc.message || String(_MLXEEDrAAJBsMEoc)
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  }
};

/**
 * 后续所有 handleSPESSWebSocket, parseVLESSHeader, ppou5Connect 等函数保持不变
 * 直接粘贴你原始代码中这些函数的内容即可
 */

async function _eFMisOaxNlSqwLhV(_bsLoCikreIcDnpWn, _lJgiqRGkPBjMEfTS) {
  const {
    parsedSocks5Address: _rDDUfqBVaMuFvbZX,
    enableSocks: _kJpTjaPIisEJnxKC,
    enableGlobalSocks: _dKJGXrvgxzXhTbkm,
    koukouIP: _dKyGwuPultlbbDxM,
    koukouPort: _pcYfgepgzgCcUBoY
  } = _lJgiqRGkPBjMEfTS;
  const _vTGkJJBshXGMNcdW = new WebSocketPair();
  const [_yvmKeDqojjINIAPN, _nTSQCgiFrRtvSUTD] = Object.values(_vTGkJJBshXGMNcdW);
  _nTSQCgiFrRtvSUTD.accept();
  let _fhxkDpSyUFWeMfMI = setInterval(() => {
    if (_nTSQCgiFrRtvSUTD.readyState === _VreatkChgrsCrTHo) {
      try {
        _nTSQCgiFrRtvSUTD.send(new Uint8Array(0));
      } catch (_GelmZYfAPYpdTrqT) {}
    }
  }, 30000);
  function _tYzPJujhqsfXjHBQ() {
    if (_fhxkDpSyUFWeMfMI) {
      clearInterval(_fhxkDpSyUFWeMfMI);
      _fhxkDpSyUFWeMfMI = null;
    }
  }
  _nTSQCgiFrRtvSUTD.addEventListener('close', _tYzPJujhqsfXjHBQ);
  _nTSQCgiFrRtvSUTD.addEventListener('error', _tYzPJujhqsfXjHBQ);
  const _mGMFpPRovcPwOEDx = _bsLoCikreIcDnpWn.headers.get('sec-websocket-protocol') || '';
  const _YloFKexLkWmIPsod = _rlHXxwmZviNqSwBK(_nTSQCgiFrRtvSUTD, _mGMFpPRovcPwOEDx);
  let _fhXxPODpAMzrKCHR = null;
  let _uFCYqZkEQnymJcCn = null;
  let _cWPHHIChWUbBHuoG = false;
  _YloFKexLkWmIPsod.pipeTo(new WritableStream({
    async write(_YHTGOGcIpQRhAimK) {
      if (_cWPHHIChWUbBHuoG && _uFCYqZkEQnymJcCn) {
        return _uFCYqZkEQnymJcCn(_YHTGOGcIpQRhAimK);
      }
      if (_fhXxPODpAMzrKCHR) {
        try {
          const _qEhrGmplaVlrEjGm = _fhXxPODpAMzrKCHR.writable.getWriter();
          await _qEhrGmplaVlrEjGm.write(_YHTGOGcIpQRhAimK);
          _qEhrGmplaVlrEjGm.releaseLock();
        } catch (_MLXEEDrAAJBsMEoc) {
          _RXMgIGwQdDgqEacg(_fhXxPODpAMzrKCHR);
          throw _MLXEEDrAAJBsMEoc;
        }
        return;
      }
      const _AZgHwmtnEdlsXddN = _BJLQJmzdPJUFGOEI(_YHTGOGcIpQRhAimK);
      if (_AZgHwmtnEdlsXddN.hasError) throw new Error(_AZgHwmtnEdlsXddN.message);
      if (_AZgHwmtnEdlsXddN.addressRemote.includes(atob('c3BlZWQuY2xvdWRmbGFyZS5jb20='))) throw new Error('Access');
      const _zVYOeVHyoDzqXhZf = new Uint8Array([_AZgHwmtnEdlsXddN.vlessVersion[0], 0]);
      const _UQDuMklbGEiSFQDr = _YHTGOGcIpQRhAimK.slice(_AZgHwmtnEdlsXddN.rawDataIndex);
      if (_AZgHwmtnEdlsXddN.isUDP) {
        if (_AZgHwmtnEdlsXddN.portRemote === 53) {
          _cWPHHIChWUbBHuoG = true;
          const {
            write: _SnClkZHZvxLpHdNw
          } = await _lJUrQKNWTPGOpQPB(_nTSQCgiFrRtvSUTD, _zVYOeVHyoDzqXhZf);
          _uFCYqZkEQnymJcCn = _SnClkZHZvxLpHdNw;
          _uFCYqZkEQnymJcCn(_UQDuMklbGEiSFQDr);
          return;
        } else {
          throw new Error('UDP676仅支持DNS(端口53)');
        }
      }
      async function _itIUMIIygdxummpk() {
        try {
          let _IAoFIEWEOXTjZSfD;
          if (_kJpTjaPIisEJnxKC === 'ppou5') {
            _IAoFIEWEOXTjZSfD = await _HqMUNflQJMijHZNN(_AZgHwmtnEdlsXddN.addressType, _AZgHwmtnEdlsXddN.addressRemote, _AZgHwmtnEdlsXddN.portRemote, _rDDUfqBVaMuFvbZX);
          } else if (_kJpTjaPIisEJnxKC === 'http') {
            _IAoFIEWEOXTjZSfD = await _BEZFyRVIdkdhsEQb(_AZgHwmtnEdlsXddN.addressType, _AZgHwmtnEdlsXddN.addressRemote, _AZgHwmtnEdlsXddN.portRemote, _rDDUfqBVaMuFvbZX);
          } else {
            _IAoFIEWEOXTjZSfD = await connect({
              hostname: _dKyGwuPultlbbDxM,
              port: _pcYfgepgzgCcUBoY
            }, {
              allowHalfOpen: true
            });
          }
          _fhXxPODpAMzrKCHR = _IAoFIEWEOXTjZSfD;
          const _qEhrGmplaVlrEjGm = _IAoFIEWEOXTjZSfD.writable.getWriter();
          await _qEhrGmplaVlrEjGm.write(_UQDuMklbGEiSFQDr);
          _qEhrGmplaVlrEjGm.releaseLock();
          _IAoFIEWEOXTjZSfD.closed.catch(() => {}).finally(() => {
            if (_nTSQCgiFrRtvSUTD.readyState === _VreatkChgrsCrTHo) {
              _nTSQCgiFrRtvSUTD.close(1000, '连接已关闭');
            }
          });
          _JLEZVrAGvXjpPgJb(_IAoFIEWEOXTjZSfD, _nTSQCgiFrRtvSUTD, _zVYOeVHyoDzqXhZf, null);
        } catch (_MLXEEDrAAJBsMEoc) {
          _RXMgIGwQdDgqEacg(_fhXxPODpAMzrKCHR);
          _nTSQCgiFrRtvSUTD.close(1011, '676连接失败: ' + (_MLXEEDrAAJBsMEoc && _MLXEEDrAAJBsMEoc.message ? _MLXEEDrAAJBsMEoc.message : _MLXEEDrAAJBsMEoc));
        }
      }
      try {
        let _IAoFIEWEOXTjZSfD;
        if (_dKJGXrvgxzXhTbkm) {
          _IAoFIEWEOXTjZSfD = await (_kJpTjaPIisEJnxKC === 'ppou5' ? _HqMUNflQJMijHZNN(_AZgHwmtnEdlsXddN.addressType, _AZgHwmtnEdlsXddN.addressRemote, _AZgHwmtnEdlsXddN.portRemote, _rDDUfqBVaMuFvbZX) : _BEZFyRVIdkdhsEQb(_AZgHwmtnEdlsXddN.addressType, _AZgHwmtnEdlsXddN.addressRemote, _AZgHwmtnEdlsXddN.portRemote, _rDDUfqBVaMuFvbZX));
        } else {
          _IAoFIEWEOXTjZSfD = await connect({
            hostname: _AZgHwmtnEdlsXddN.addressRemote,
            port: _AZgHwmtnEdlsXddN.portRemote
          }, {
            allowHalfOpen: true
          });
        }
        _fhXxPODpAMzrKCHR = _IAoFIEWEOXTjZSfD;
        const _qEhrGmplaVlrEjGm = _IAoFIEWEOXTjZSfD.writable.getWriter();
        await _qEhrGmplaVlrEjGm.write(_UQDuMklbGEiSFQDr);
        _qEhrGmplaVlrEjGm.releaseLock();
        _JLEZVrAGvXjpPgJb(_IAoFIEWEOXTjZSfD, _nTSQCgiFrRtvSUTD, _zVYOeVHyoDzqXhZf, _itIUMIIygdxummpk);
      } catch (_MLXEEDrAAJBsMEoc) {
        _RXMgIGwQdDgqEacg(_fhXxPODpAMzrKCHR);
        _nTSQCgiFrRtvSUTD.close(1011, '连接失败: ' + (_MLXEEDrAAJBsMEoc && _MLXEEDrAAJBsMEoc.message ? _MLXEEDrAAJBsMEoc.message : _MLXEEDrAAJBsMEoc));
      }
    },
    close() {
      if (_fhXxPODpAMzrKCHR) _RXMgIGwQdDgqEacg(_fhXxPODpAMzrKCHR);
    }
  })).catch(_MLXEEDrAAJBsMEoc => {
    _RXMgIGwQdDgqEacg(_fhXxPODpAMzrKCHR);
    _nTSQCgiFrRtvSUTD.close(1011, '内部错误: ' + (_MLXEEDrAAJBsMEoc && _MLXEEDrAAJBsMEoc.message ? _MLXEEDrAAJBsMEoc.message : _MLXEEDrAAJBsMEoc));
  });
  return new Response(null, {
    status: 101,
    webSocket: _yvmKeDqojjINIAPN
  });
}
function _rlHXxwmZviNqSwBK(_aiWYatDfmMyyKzTw, _mGMFpPRovcPwOEDx) {
  return new ReadableStream({
    start(_HSTpfjyzqJWSqjsf) {
      _aiWYatDfmMyyKzTw.addEventListener('message', _aOphZWZwbnNsDMPD => {
        _HSTpfjyzqJWSqjsf.enqueue(_aOphZWZwbnNsDMPD.data);
      });
      _aiWYatDfmMyyKzTw.addEventListener('close', () => {
        _HSTpfjyzqJWSqjsf.close();
      });
      _aiWYatDfmMyyKzTw.addEventListener('error', _MLXEEDrAAJBsMEoc => {
        _HSTpfjyzqJWSqjsf.error(_MLXEEDrAAJBsMEoc);
      });
      if (_mGMFpPRovcPwOEDx) {
        try {
          const _bylpvhUAzpGfTxgb = atob(_mGMFpPRovcPwOEDx.replace(/-/g, '+').replace(/_/g, '/'));
          const _CzgEGVFbMIWAMPHx = Uint8Array.from(_bylpvhUAzpGfTxgb, _dryXYLlGXoLPDjas => _dryXYLlGXoLPDjas.charCodeAt(0));
          _HSTpfjyzqJWSqjsf.enqueue(_CzgEGVFbMIWAMPHx.buffer);
        } catch (_GelmZYfAPYpdTrqT) {}
      }
    }
  });
}
function _BJLQJmzdPJUFGOEI(_vrsRngRZFdZnejaN) {
  if (_vrsRngRZFdZnejaN.byteLength < 24) {
    return {
      hasError: true,
      message: '无效的头部长度'
    };
  }
  const _guMCbtisVYuWyabS = new DataView(_vrsRngRZFdZnejaN);
  const _KYknGBywDBQvJqar = new Uint8Array(_vrsRngRZFdZnejaN.slice(0, 1));
  const _ZpyyxsnhIklGNAfc = _HtLqcEouwCUppIwm(new Uint8Array(_vrsRngRZFdZnejaN.slice(1, 17)));
  if (_UJfvYUgQfXMoZHfv && _ZpyyxsnhIklGNAfc !== _UJfvYUgQfXMoZHfv) {
    return {
      hasError: true,
      message: '无效的用户'
    };
  }
  const _iOovnbtEYJGVFJbE = _guMCbtisVYuWyabS.getUint8(17);
  const _QvphcyilLkQHBgQl = _guMCbtisVYuWyabS.getUint8(18 + _iOovnbtEYJGVFJbE);
  let _RHUKsIXDkjQYrtMB = false;
  if (_QvphcyilLkQHBgQl === 1) {} else if (_QvphcyilLkQHBgQl === 2) {
    _RHUKsIXDkjQYrtMB = true;
  } else {
    return {
      hasError: true,
      message: '不支持的命令，仅支持TCP(01)和UDP(02)'
    };
  }
  let _LFuHleCDNIYbDIzN = 19 + _iOovnbtEYJGVFJbE;
  const _yjyHBtGrUjavLNuo = _guMCbtisVYuWyabS.getUint16(_LFuHleCDNIYbDIzN);
  _LFuHleCDNIYbDIzN += 2;
  const _lautZHNMStHuxtES = _guMCbtisVYuWyabS.getUint8(_LFuHleCDNIYbDIzN++);
  let _UlIfdbVEtqzhzHlR = '';
  switch (_lautZHNMStHuxtES) {
    case 1:
      _UlIfdbVEtqzhzHlR = Array.from(new Uint8Array(_vrsRngRZFdZnejaN.slice(_LFuHleCDNIYbDIzN, _LFuHleCDNIYbDIzN + 4))).join('.');
      _LFuHleCDNIYbDIzN += 4;
      break;
    case 2:
      const _iDKuXqflxqpbmRXJ = _guMCbtisVYuWyabS.getUint8(_LFuHleCDNIYbDIzN++);
      _UlIfdbVEtqzhzHlR = new TextDecoder().decode(_vrsRngRZFdZnejaN.slice(_LFuHleCDNIYbDIzN, _LFuHleCDNIYbDIzN + _iDKuXqflxqpbmRXJ));
      _LFuHleCDNIYbDIzN += _iDKuXqflxqpbmRXJ;
      break;
    case 3:
      const _eebWrTYYbySvzjZr = [];
      for (let _dkDdAFTZXXHIlryH = 0; _dkDdAFTZXXHIlryH < 8; _dkDdAFTZXXHIlryH++) {
        _eebWrTYYbySvzjZr.push(_guMCbtisVYuWyabS.getUint16(_LFuHleCDNIYbDIzN).toString(16).padStart(4, '0'));
        _LFuHleCDNIYbDIzN += 2;
      }
      _UlIfdbVEtqzhzHlR = _eebWrTYYbySvzjZr.join(':').replace(/(^|:)0+(\w)/g, '$1$2');
      break;
    default:
      return {
        hasError: true,
        message: '不支持的地址类型'
      };
  }
  return {
    hasError: false,
    addressRemote: _UlIfdbVEtqzhzHlR,
    portRemote: _yjyHBtGrUjavLNuo,
    rawDataIndex: _LFuHleCDNIYbDIzN,
    vlessVersion: _KYknGBywDBQvJqar,
    isUDP: _RHUKsIXDkjQYrtMB,
    addressType: _lautZHNMStHuxtES
  };
}
async function _JLEZVrAGvXjpPgJb(_fhXxPODpAMzrKCHR, _aiWYatDfmMyyKzTw, _MLeYULowpJNGriLo, _itIUMIIygdxummpk = null, _jLxPcMVwVdqyggoc = 0) {
  const _XzXcAIJOrbTAuMHO = 8;
  const _ctGQBKQJiPnaAUmp = 128 * 1024;
  const _FwOgPBsVBWbGiHcN = 2 * 1024 * 1024;
  const _CpHisfIgPYbyYyck = 10;
  const _CTkqsTSMZexUvTmM = 200;
  let _obktaQEQlAuCMUYC = false;
  let _VAAAxxYuMZdABKZT = false;
  let _sfvvouKgeGIgBCTS = [];
  let _QtsBWKVMFMpPjyHK = 0;
  const _ARedmgdxDqmJfBYN = _PQHLqNAJbGmoFwbG => {
    if (_PQHLqNAJbGmoFwbG.length === 1) return _PQHLqNAJbGmoFwbG[0];
    const _QtPmaHRcQgUVbojU = _PQHLqNAJbGmoFwbG.reduce((_lzSdFGpRgkzvyeit, _dryXYLlGXoLPDjas) => _lzSdFGpRgkzvyeit + _dryXYLlGXoLPDjas.byteLength, 0);
    const _wuQfkwNTVhLejlir = new Uint8Array(_QtPmaHRcQgUVbojU);
    let _LFuHleCDNIYbDIzN = 0;
    for (const _dryXYLlGXoLPDjas of _PQHLqNAJbGmoFwbG) {
      _wuQfkwNTVhLejlir.set(_dryXYLlGXoLPDjas, _LFuHleCDNIYbDIzN);
      _LFuHleCDNIYbDIzN += _dryXYLlGXoLPDjas.byteLength;
    }
    return _wuQfkwNTVhLejlir;
  };
  const _VMTRqqalFjxMHSog = _CzgEGVFbMIWAMPHx => {
    let _LFuHleCDNIYbDIzN = 0;
    while (_LFuHleCDNIYbDIzN < _CzgEGVFbMIWAMPHx.byteLength) {
      const _VDrISzJorrtKKjBm = Math.min(_LFuHleCDNIYbDIzN + _ctGQBKQJiPnaAUmp, _CzgEGVFbMIWAMPHx.byteLength);
      _aiWYatDfmMyyKzTw.send(_CzgEGVFbMIWAMPHx.slice(_LFuHleCDNIYbDIzN, _VDrISzJorrtKKjBm));
      _LFuHleCDNIYbDIzN = _VDrISzJorrtKKjBm;
    }
  };
  const _MZPxpHAviZBzxLRl = () => {
    if (_aiWYatDfmMyyKzTw.readyState !== _VreatkChgrsCrTHo || _sfvvouKgeGIgBCTS.length === 0) return;
    const _wuQfkwNTVhLejlir = _ARedmgdxDqmJfBYN(_sfvvouKgeGIgBCTS);
    _sfvvouKgeGIgBCTS = [];
    _QtsBWKVMFMpPjyHK = 0;
    _VMTRqqalFjxMHSog(_wuQfkwNTVhLejlir);
  };
  const _NOlnyndROYmvnGhq = setInterval(_MZPxpHAviZBzxLRl, _CpHisfIgPYbyYyck);
  const _USJBpMwimVtoHfrK = _fhXxPODpAMzrKCHR.readable.getReader();
  try {
    while (true) {
      const {
        done: _slmtbsjgSxYWfubi,
        value: _GXiJQZbHQbLLzWlX
      } = await _USJBpMwimVtoHfrK.read();
      if (_slmtbsjgSxYWfubi) break;
      _VAAAxxYuMZdABKZT = true;
      if (_aiWYatDfmMyyKzTw.readyState !== _VreatkChgrsCrTHo) break;
      if (!_obktaQEQlAuCMUYC) {
        const _kdFGqQOyoJeHYwxh = new Uint8Array(_MLeYULowpJNGriLo.byteLength + _GXiJQZbHQbLLzWlX.byteLength);
        _kdFGqQOyoJeHYwxh.set(new Uint8Array(_MLeYULowpJNGriLo), 0);
        _kdFGqQOyoJeHYwxh.set(_GXiJQZbHQbLLzWlX, _MLeYULowpJNGriLo.byteLength);
        _sfvvouKgeGIgBCTS.push(_kdFGqQOyoJeHYwxh);
        _QtsBWKVMFMpPjyHK += _kdFGqQOyoJeHYwxh.byteLength;
        _obktaQEQlAuCMUYC = true;
      } else {
        _sfvvouKgeGIgBCTS.push(_GXiJQZbHQbLLzWlX);
        _QtsBWKVMFMpPjyHK += _GXiJQZbHQbLLzWlX.byteLength;
      }
      if (_QtsBWKVMFMpPjyHK >= _FwOgPBsVBWbGiHcN) {
        _MZPxpHAviZBzxLRl();
      }
    }
    _USJBpMwimVtoHfrK.releaseLock();
    _MZPxpHAviZBzxLRl();
    clearInterval(_NOlnyndROYmvnGhq);
    if (!_VAAAxxYuMZdABKZT && _itIUMIIygdxummpk && _jLxPcMVwVdqyggoc < _XzXcAIJOrbTAuMHO) {
      const _UjvGyuGDGbWSBTCt = _CTkqsTSMZexUvTmM * Math.pow(2, _jLxPcMVwVdqyggoc);
      console.warn(`未收到数据，${_UjvGyuGDGbWSBTCt} ms 后重试 (${_jLxPcMVwVdqyggoc + 1}/${_XzXcAIJOrbTAuMHO})`);
      await new Promise(_uaPtpSlAwUTfLcwu => setTimeout(_uaPtpSlAwUTfLcwu, _UjvGyuGDGbWSBTCt));
      await _itIUMIIygdxummpk();
      return;
    }
    if (_aiWYatDfmMyyKzTw.readyState === _VreatkChgrsCrTHo) _aiWYatDfmMyyKzTw.close(1000, '正常关闭');
  } catch (_MLXEEDrAAJBsMEoc) {
    _USJBpMwimVtoHfrK.releaseLock();
    clearInterval(_NOlnyndROYmvnGhq);
    console.error('数据传输错误:', _MLXEEDrAAJBsMEoc);
    _RXMgIGwQdDgqEacg(_fhXxPODpAMzrKCHR);
    if (_itIUMIIygdxummpk && _jLxPcMVwVdqyggoc < _XzXcAIJOrbTAuMHO) {
      const _UjvGyuGDGbWSBTCt = _CTkqsTSMZexUvTmM * Math.pow(2, _jLxPcMVwVdqyggoc);
      console.warn(`错误重试 (${_jLxPcMVwVdqyggoc + 1}/${_XzXcAIJOrbTAuMHO})，将在 ${_UjvGyuGDGbWSBTCt} ms 后重试`);
      await new Promise(_uaPtpSlAwUTfLcwu => setTimeout(_uaPtpSlAwUTfLcwu, _UjvGyuGDGbWSBTCt));
      await _itIUMIIygdxummpk();
      return;
    }
    if (_aiWYatDfmMyyKzTw.readyState === _VreatkChgrsCrTHo) {
      _aiWYatDfmMyyKzTw.close(1011, '数据传输错误');
    }
  }
}
function _RXMgIGwQdDgqEacg(_nJXocTxUynMHqMfd) {
  if (_nJXocTxUynMHqMfd) {
    try {
      _nJXocTxUynMHqMfd.close();
    } catch (_GelmZYfAPYpdTrqT) {}
  }
}
function _HtLqcEouwCUppIwm(_ttvUjIgTETZxqUYH) {
  const _wjaMhNRkhzNQYJqP = Array.from(_ttvUjIgTETZxqUYH, _hSVzuDmKPUyVdMFW => _hSVzuDmKPUyVdMFW.toString(16).padStart(2, '0')).join('');
  return `${_wjaMhNRkhzNQYJqP.slice(0, 8)}-${_wjaMhNRkhzNQYJqP.slice(8, 12)}-${_wjaMhNRkhzNQYJqP.slice(12, 16)}-${_wjaMhNRkhzNQYJqP.slice(16, 20)}-${_wjaMhNRkhzNQYJqP.slice(20)}`;
}
async function _HqMUNflQJMijHZNN(_lautZHNMStHuxtES, _lbuFQLWqYoClMGHT, _NTPIVJAmhzqLEyKG, _rDDUfqBVaMuFvbZX) {
  const {
    username: _OJLngbOGtfRmjSwC,
    password: _IHUQLtdjaOnzrVIR,
    hostname: _IAdYSPkbjVkgfadJ,
    port: _yjyHBtGrUjavLNuo
  } = _rDDUfqBVaMuFvbZX;
  const _nJXocTxUynMHqMfd = connect({
    hostname: _IAdYSPkbjVkgfadJ,
    port: _yjyHBtGrUjavLNuo
  });
  const _VOuFhRwlDVkSVOTC = new Uint8Array([5, 2, 0, 2]);
  const _qEhrGmplaVlrEjGm = _nJXocTxUynMHqMfd.writable.getWriter();
  await _qEhrGmplaVlrEjGm.write(_VOuFhRwlDVkSVOTC);
  const _USJBpMwimVtoHfrK = _nJXocTxUynMHqMfd.readable.getReader();
  const _AwtVFAJLWfZbacVJ = new TextEncoder();
  let _zbsiNjsILTrAaJGf = (await _USJBpMwimVtoHfrK.read()).value;
  if (_zbsiNjsILTrAaJGf[0] !== 0x05) {
    throw new Error(`ppou server version error: ${_zbsiNjsILTrAaJGf[0]} expected: 5`);
  }
  if (_zbsiNjsILTrAaJGf[1] === 0xff) {
    throw new Error("no acceptable methods");
  }
  if (_zbsiNjsILTrAaJGf[1] === 0x02) {
    if (!_OJLngbOGtfRmjSwC || !_IHUQLtdjaOnzrVIR) {
      throw new Error("please provide username/password");
    }
    const _SmRoLGBohsaPjstX = new Uint8Array([1, _OJLngbOGtfRmjSwC.length, ..._AwtVFAJLWfZbacVJ.encode(_OJLngbOGtfRmjSwC), _IHUQLtdjaOnzrVIR.length, ..._AwtVFAJLWfZbacVJ.encode(_IHUQLtdjaOnzrVIR)]);
    await _qEhrGmplaVlrEjGm.write(_SmRoLGBohsaPjstX);
    _zbsiNjsILTrAaJGf = (await _USJBpMwimVtoHfrK.read()).value;
    if (_zbsiNjsILTrAaJGf[0] !== 0x01 || _zbsiNjsILTrAaJGf[1] !== 0x00) {
      throw new Error("fail to auth ppou server");
    }
  }
  let _LZRyvVtmoWfSLjzq;
  switch (_lautZHNMStHuxtES) {
    case 1:
      _LZRyvVtmoWfSLjzq = new Uint8Array([1, ..._lbuFQLWqYoClMGHT.split('.').map(Number)]);
      break;
    case 2:
      _LZRyvVtmoWfSLjzq = new Uint8Array([3, _lbuFQLWqYoClMGHT.length, ..._AwtVFAJLWfZbacVJ.encode(_lbuFQLWqYoClMGHT)]);
      break;
    case 3:
      _LZRyvVtmoWfSLjzq = new Uint8Array([4, ..._lbuFQLWqYoClMGHT.split(':').flatMap(_YuHeTzWHeFhWgRzc => [parseInt(_YuHeTzWHeFhWgRzc.slice(0, 2), 16), parseInt(_YuHeTzWHeFhWgRzc.slice(2), 16)])]);
      break;
    default:
      throw new Error(`invalid addressType is ${_lautZHNMStHuxtES}`);
  }
  const _gFxPSXvdCovUFxVj = new Uint8Array([5, 1, 0, ..._LZRyvVtmoWfSLjzq, _NTPIVJAmhzqLEyKG >> 8, _NTPIVJAmhzqLEyKG & 0xff]);
  await _qEhrGmplaVlrEjGm.write(_gFxPSXvdCovUFxVj);
  _zbsiNjsILTrAaJGf = (await _USJBpMwimVtoHfrK.read()).value;
  if (_zbsiNjsILTrAaJGf[1] === 0x00) {} else {
    throw new Error("fail to open ppou connection");
  }
  _qEhrGmplaVlrEjGm.releaseLock();
  _USJBpMwimVtoHfrK.releaseLock();
  return _nJXocTxUynMHqMfd;
}
async function _BEZFyRVIdkdhsEQb(_lautZHNMStHuxtES, _lbuFQLWqYoClMGHT, _NTPIVJAmhzqLEyKG, _rDDUfqBVaMuFvbZX) {
  const {
    username: _OJLngbOGtfRmjSwC,
    password: _IHUQLtdjaOnzrVIR,
    hostname: _IAdYSPkbjVkgfadJ,
    port: _yjyHBtGrUjavLNuo
  } = _rDDUfqBVaMuFvbZX;
  const _cXqPZjztBhMdKtNi = await connect({
    hostname: _IAdYSPkbjVkgfadJ,
    port: _yjyHBtGrUjavLNuo
  });
  let _FJdeLMzhGtHphWka = `CONNECT ${_lbuFQLWqYoClMGHT}:${_NTPIVJAmhzqLEyKG} HTTP/1.1\r\n`;
  _FJdeLMzhGtHphWka += `Host: ${_lbuFQLWqYoClMGHT}:${_NTPIVJAmhzqLEyKG}\r\n`;
  if (_OJLngbOGtfRmjSwC && _IHUQLtdjaOnzrVIR) {
    const _ydyvixJiOkkBkyCn = `${_OJLngbOGtfRmjSwC}:${_IHUQLtdjaOnzrVIR}`;
    const _nTySnJtbJMKULmRE = btoa(_ydyvixJiOkkBkyCn);
    _FJdeLMzhGtHphWka += `koukou-Authorization: Basic ${_nTySnJtbJMKULmRE}\r\n`;
  }
  _FJdeLMzhGtHphWka += `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36\r\n`;
  _FJdeLMzhGtHphWka += `koukou-Connection: Keep-Alive\r\n`;
  _FJdeLMzhGtHphWka += `Connection: Keep-Alive\r\n`;
  _FJdeLMzhGtHphWka += `\r\n`;
  try {
    const _qEhrGmplaVlrEjGm = _cXqPZjztBhMdKtNi.writable.getWriter();
    await _qEhrGmplaVlrEjGm.write(new TextEncoder().encode(_FJdeLMzhGtHphWka));
    _qEhrGmplaVlrEjGm.releaseLock();
  } catch (_MLXEEDrAAJBsMEoc) {
    console.error('发送HTTP CONNECT请求失败:', _MLXEEDrAAJBsMEoc);
    throw new Error(`发送HTTP CONNECT请求失败: ${_MLXEEDrAAJBsMEoc.message}`);
  }
  const _USJBpMwimVtoHfrK = _cXqPZjztBhMdKtNi.readable.getReader();
  let _thaGifeGbiyzRGHk = '';
  let _FALjskuXZvlgWYCM = false;
  let _gwIuJjIqqjtNQdUd = new Uint8Array(0);
  try {
    while (true) {
      const {
        value: _GXiJQZbHQbLLzWlX,
        done: _slmtbsjgSxYWfubi
      } = await _USJBpMwimVtoHfrK.read();
      if (_slmtbsjgSxYWfubi) {
        console.error('HTTP676连接中断');
        throw new Error('HTTP676连接中断');
      }
      const _nBZfyZbYLxTJTzRL = new Uint8Array(_gwIuJjIqqjtNQdUd.length + _GXiJQZbHQbLLzWlX.length);
      _nBZfyZbYLxTJTzRL.set(_gwIuJjIqqjtNQdUd);
      _nBZfyZbYLxTJTzRL.set(_GXiJQZbHQbLLzWlX, _gwIuJjIqqjtNQdUd.length);
      _gwIuJjIqqjtNQdUd = _nBZfyZbYLxTJTzRL;
      _thaGifeGbiyzRGHk = new TextDecoder().decode(_gwIuJjIqqjtNQdUd);
      if (_thaGifeGbiyzRGHk.includes('\r\n\r\n')) {
        const _uPyBmSqUTUrsYIvH = _thaGifeGbiyzRGHk.indexOf('\r\n\r\n') + 4;
        const _mgmaJhoWPQomtOts = _thaGifeGbiyzRGHk.substring(0, _uPyBmSqUTUrsYIvH);
        if (_mgmaJhoWPQomtOts.startsWith('HTTP/1.1 200') || _mgmaJhoWPQomtOts.startsWith('HTTP/1.0 200')) {
          _FALjskuXZvlgWYCM = true;
          if (_uPyBmSqUTUrsYIvH < _gwIuJjIqqjtNQdUd.length) {
            const _pkixMmtuKIPkKbrG = _gwIuJjIqqjtNQdUd.slice(_uPyBmSqUTUrsYIvH);
            const _VshhygardgZMGCuw = new ReadableStream({
              start(_HSTpfjyzqJWSqjsf) {
                _HSTpfjyzqJWSqjsf.enqueue(_pkixMmtuKIPkKbrG);
              }
            });
            const {
              readable: _fRMPhjXCPjQSpvAc,
              writable: _OAMfcOkzDGNBRRfD
            } = new TransformStream();
            _VshhygardgZMGCuw.pipeTo(_OAMfcOkzDGNBRRfD).catch(_MLXEEDrAAJBsMEoc => console.error('处理剩余数据错误:', _MLXEEDrAAJBsMEoc));
            _cXqPZjztBhMdKtNi.readable = _fRMPhjXCPjQSpvAc;
          }
        } else {
          const _UWSwKVVCzcGbfzul = `HTTP676连接失败: ${_mgmaJhoWPQomtOts.split('\r\n')[0]}`;
          console.error(_UWSwKVVCzcGbfzul);
          throw new Error(_UWSwKVVCzcGbfzul);
        }
        break;
      }
    }
  } catch (_MLXEEDrAAJBsMEoc) {
    _USJBpMwimVtoHfrK.releaseLock();
    throw new Error(`处理HTTP676响应失败: ${_MLXEEDrAAJBsMEoc.message}`);
  }
  _USJBpMwimVtoHfrK.releaseLock();
  if (!_FALjskuXZvlgWYCM) {
    throw new Error('HTTP676连接失败: 未收到成功响应');
  }
  return _cXqPZjztBhMdKtNi;
}
async function _lJUrQKNWTPGOpQPB(_EYTRDKugPhWsCBLM, _jwQttpjoZIptydyp) {
  let _YxKJHsgnHhkOMDxG = false;
  const _qIIIHfbeMmAKpDAD = new TransformStream({
    start(_HSTpfjyzqJWSqjsf) {},
    transform(_YHTGOGcIpQRhAimK, _HSTpfjyzqJWSqjsf) {
      for (let _StpgiOdGABwHDdZU = 0; _StpgiOdGABwHDdZU < _YHTGOGcIpQRhAimK.byteLength;) {
        const _MLIMDvvYNtDsVXtd = _YHTGOGcIpQRhAimK.slice(_StpgiOdGABwHDdZU, _StpgiOdGABwHDdZU + 2);
        const _zLxngXoPUoQjmLLl = new DataView(_MLIMDvvYNtDsVXtd).getUint16(0);
        const _vVHEhgcPDgdjozxr = new Uint8Array(_YHTGOGcIpQRhAimK.slice(_StpgiOdGABwHDdZU + 2, _StpgiOdGABwHDdZU + 2 + _zLxngXoPUoQjmLLl));
        _StpgiOdGABwHDdZU = _StpgiOdGABwHDdZU + 2 + _zLxngXoPUoQjmLLl;
        _HSTpfjyzqJWSqjsf.enqueue(_vVHEhgcPDgdjozxr);
      }
    },
    flush(_HSTpfjyzqJWSqjsf) {}
  });
  _qIIIHfbeMmAKpDAD.readable.pipeTo(new WritableStream({
    async write(_YHTGOGcIpQRhAimK) {
      const _KsWaIYKCjfsnYyLf = await fetch('https://1.1.1.1/dns-query', {
        method: 'POST',
        headers: {
          'content-type': 'application/dns-message'
        },
        body: _YHTGOGcIpQRhAimK
      });
      const _yXlXmfPOkziKXfoL = await _KsWaIYKCjfsnYyLf.arrayBuffer();
      const _dcOfZgbrRYtXOcbj = _yXlXmfPOkziKXfoL.byteLength;
      const _CggQwMaLPRRUazua = new Uint8Array([_dcOfZgbrRYtXOcbj >> 8 & 0xff, _dcOfZgbrRYtXOcbj & 0xff]);
      if (_EYTRDKugPhWsCBLM.readyState === _VreatkChgrsCrTHo) {
        if (_YxKJHsgnHhkOMDxG) {
          _EYTRDKugPhWsCBLM.send(await new Blob([_CggQwMaLPRRUazua, _yXlXmfPOkziKXfoL]).arrayBuffer());
        } else {
          _EYTRDKugPhWsCBLM.send(await new Blob([_jwQttpjoZIptydyp, _CggQwMaLPRRUazua, _yXlXmfPOkziKXfoL]).arrayBuffer());
          _YxKJHsgnHhkOMDxG = true;
        }
      }
    }
  })).catch(_LatHAFNarZGyPEif => {});
  const _qEhrGmplaVlrEjGm = _qIIIHfbeMmAKpDAD.writable.getWriter();
  return {
    write(_YHTGOGcIpQRhAimK) {
      _qEhrGmplaVlrEjGm.write(_YHTGOGcIpQRhAimK);
    }
  };
}
const _VreatkChgrsCrTHo = 1;
import { connect } from 'cloudflare:sockets';
async function _uqaePqpPoDWvOkeS(_dKyGwuPultlbbDxM) {
  _dKyGwuPultlbbDxM = _dKyGwuPultlbbDxM.toLowerCase();
  let _WfRpujAgYbMCJUfW = _dKyGwuPultlbbDxM,
    _EkydgiqhPwOpVqhv = 443;
  if (_dKyGwuPultlbbDxM.includes('.tp')) {
    const _qsVbmlGEHACAgCoh = _dKyGwuPultlbbDxM.match(/\.tp(\d+)/);
    if (_qsVbmlGEHACAgCoh) _EkydgiqhPwOpVqhv = parseInt(_qsVbmlGEHACAgCoh[1], 10);
    return [_WfRpujAgYbMCJUfW, _EkydgiqhPwOpVqhv];
  }
  if (_dKyGwuPultlbbDxM.includes(']:')) {
    const _ADtKpnDNbcFfXynD = _dKyGwuPultlbbDxM.split(']:');
    _WfRpujAgYbMCJUfW = _ADtKpnDNbcFfXynD[0] + ']';
    _EkydgiqhPwOpVqhv = parseInt(_ADtKpnDNbcFfXynD[1], 10) || _EkydgiqhPwOpVqhv;
  } else if (_dKyGwuPultlbbDxM.includes(':') && !_dKyGwuPultlbbDxM.startsWith('[')) {
    const _ZKdHddmODsqbYbFq = _dKyGwuPultlbbDxM.lastIndexOf(':');
    _WfRpujAgYbMCJUfW = _dKyGwuPultlbbDxM.slice(0, _ZKdHddmODsqbYbFq);
    _EkydgiqhPwOpVqhv = parseInt(_dKyGwuPultlbbDxM.slice(_ZKdHddmODsqbYbFq + 1), 10) || _EkydgiqhPwOpVqhv;
  }
  return [_WfRpujAgYbMCJUfW, _EkydgiqhPwOpVqhv];
}
async function _dxOkeHqogtGdttEb(_bsLoCikreIcDnpWn) {
  const _iVRpSkahOMBPjNNu = new URL(_bsLoCikreIcDnpWn.url);
  const {
    pathname: _GdKKcDzjAqJgfcRG,
    searchParams: _GqpxRxFRrVlKsSIr
  } = _iVRpSkahOMBPjNNu;
  const _wwayyKIoGbDKgtne = _GdKKcDzjAqJgfcRG.toLowerCase();
  _aJmndbhhJgRfZCrE = _GqpxRxFRrVlKsSIr.get('ppou5') || _GqpxRxFRrVlKsSIr.get('http') || null;
  _aYzQJfiABVxtlqbb = _GqpxRxFRrVlKsSIr.has('globalkoukou') || false;
  const _PnoUuBKgnBvUarlZ = _wwayyKIoGbDKgtne.match(/\/(koukouip[.=]|pyip=|ip=)(.+)/);
  if (_GqpxRxFRrVlKsSIr.has('koukouip')) {
    const _HURmMksUhLIBZiey = _GqpxRxFRrVlKsSIr.get('koukouip');
    _QNufDckyOlXbKpIx = _HURmMksUhLIBZiey.includes(',') ? _HURmMksUhLIBZiey.split(',')[Math.floor(Math.random() * _HURmMksUhLIBZiey.split(',').length)] : _HURmMksUhLIBZiey;
    return;
  } else if (_PnoUuBKgnBvUarlZ) {
    const _HURmMksUhLIBZiey = _PnoUuBKgnBvUarlZ[1] === 'koukouip.' ? `koukouip.${_PnoUuBKgnBvUarlZ[2]}` : _PnoUuBKgnBvUarlZ[2];
    _QNufDckyOlXbKpIx = _HURmMksUhLIBZiey.includes(',') ? _HURmMksUhLIBZiey.split(',')[Math.floor(Math.random() * _HURmMksUhLIBZiey.split(',').length)] : _HURmMksUhLIBZiey;
    return;
  }
  let _TnsHVZZnAsfGftAR;
  if (_TnsHVZZnAsfGftAR = _GdKKcDzjAqJgfcRG.match(/\/(ppou5?|http):\/?\/?(.+)/i)) {
    _FSpIWzvlVfBjptFo = _TnsHVZZnAsfGftAR[1].toLowerCase() === 'http' ? 'http' : 'ppou5';
    _aJmndbhhJgRfZCrE = _TnsHVZZnAsfGftAR[2].split('#')[0];
    _aYzQJfiABVxtlqbb = true;
    if (_aJmndbhhJgRfZCrE.includes('@')) {
      const _lsPpGslJwJxNIQDQ = _aJmndbhhJgRfZCrE.lastIndexOf('@');
      let _fqFRKWSnjMpPAbHi = _aJmndbhhJgRfZCrE.substring(0, _lsPpGslJwJxNIQDQ).replaceAll('%3D', '=');
      if (/^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i.test(_fqFRKWSnjMpPAbHi) && !_fqFRKWSnjMpPAbHi.includes(':')) {
        _fqFRKWSnjMpPAbHi = atob(_fqFRKWSnjMpPAbHi);
      }
      _aJmndbhhJgRfZCrE = `${_fqFRKWSnjMpPAbHi}@${_aJmndbhhJgRfZCrE.substring(_lsPpGslJwJxNIQDQ + 1)}`;
    }
  } else if (_TnsHVZZnAsfGftAR = _GdKKcDzjAqJgfcRG.match(/\/(g?s5|ppou5|g?http)=(.+)/i)) {
    const _tXqWCqzLNwgfgdLH = _TnsHVZZnAsfGftAR[1].toLowerCase();
    _aJmndbhhJgRfZCrE = _TnsHVZZnAsfGftAR[2];
    _FSpIWzvlVfBjptFo = _tXqWCqzLNwgfgdLH.includes('http') ? 'http' : 'ppou5';
    _aYzQJfiABVxtlqbb = _tXqWCqzLNwgfgdLH.startsWith('g') || _aYzQJfiABVxtlqbb;
  }
  if (_aJmndbhhJgRfZCrE) {
    try {
      _rDDUfqBVaMuFvbZX = await _lYRScrmKZQqbmCKC(_aJmndbhhJgRfZCrE);
      _FSpIWzvlVfBjptFo = _GqpxRxFRrVlKsSIr.get('http') ? 'http' : _FSpIWzvlVfBjptFo;
    } catch (_MLXEEDrAAJBsMEoc) {
      console.error('解析ssty地址失败:', _MLXEEDrAAJBsMEoc.message);
      _FSpIWzvlVfBjptFo = null;
    }
  } else _FSpIWzvlVfBjptFo = null;
}
async function _lYRScrmKZQqbmCKC(_UlIfdbVEtqzhzHlR) {
  const _mQWWiCYVmLyFlUzd = _UlIfdbVEtqzhzHlR.lastIndexOf("@");
  let [_SHQPYZsKnUlLxZoC, _tSEjoflCHCDykHCb] = _mQWWiCYVmLyFlUzd === -1 ? [_UlIfdbVEtqzhzHlR, undefined] : [_UlIfdbVEtqzhzHlR.substring(_mQWWiCYVmLyFlUzd + 1), _UlIfdbVEtqzhzHlR.substring(0, _mQWWiCYVmLyFlUzd)];
  let _OJLngbOGtfRmjSwC, _IHUQLtdjaOnzrVIR, _IAdYSPkbjVkgfadJ, _yjyHBtGrUjavLNuo;
  if (_tSEjoflCHCDykHCb) {
    const _iaFslMsiDtGNMUfi = _tSEjoflCHCDykHCb.split(":");
    if (_iaFslMsiDtGNMUfi.length !== 2) {
      throw new Error('无效的 sst 地址格式：认证部分必须是 "username:password" 的形式');
    }
    [_OJLngbOGtfRmjSwC, _IHUQLtdjaOnzrVIR] = _iaFslMsiDtGNMUfi;
  }
  const _QBPooLNkAtYAQANb = _SHQPYZsKnUlLxZoC.split(":");
  if (_QBPooLNkAtYAQANb.length > 2 && _SHQPYZsKnUlLxZoC.includes("]:")) {
    _yjyHBtGrUjavLNuo = Number(_SHQPYZsKnUlLxZoC.split("]:")[1].replace(/[^\d]/g, ''));
    _IAdYSPkbjVkgfadJ = _SHQPYZsKnUlLxZoC.split("]:")[0] + "]";
  } else if (_QBPooLNkAtYAQANb.length === 2) {
    _yjyHBtGrUjavLNuo = Number(_QBPooLNkAtYAQANb.pop().replace(/[^\d]/g, ''));
    _IAdYSPkbjVkgfadJ = _QBPooLNkAtYAQANb.join(":");
  } else {
    _yjyHBtGrUjavLNuo = 80;
    _IAdYSPkbjVkgfadJ = _SHQPYZsKnUlLxZoC;
  }
  if (isNaN(_yjyHBtGrUjavLNuo)) {
    throw new Error('无效的 sst 地址格式：端口号必须是数字');
  }
  const _QGBdvZPbrqlNcVIQ = /^\[.*\]$/;
  if (_IAdYSPkbjVkgfadJ.includes(":") && !_QGBdvZPbrqlNcVIQ.test(_IAdYSPkbjVkgfadJ)) {
    throw new Error('无效的 sst 地址格式：IPv6 地址必须用方括号括起来，如 [2001:db8::1]');
  }
  return {
    username: _OJLngbOGtfRmjSwC,
    password: _IHUQLtdjaOnzrVIR,
    hostname: _IAdYSPkbjVkgfadJ,
    port: _yjyHBtGrUjavLNuo
  };
}