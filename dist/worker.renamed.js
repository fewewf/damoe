const _NvgcbjVXdrwAvpCH = ''; // 建议修改为自己的规范化UUID，如不需要可留空
let _GBXhqEnlbKhwjRZZ = '',
  _TvGIeYLlVarxeEin = null,
  _ckNNALvLHWbDWbwG = false,
  _zbKBJJkLCPkifKGl = '',
  _ypglkYbBjSoCFLOx = {};
export default {
  async fetch(_BJDShKOxKZPmvMXd) {
    try {
      const _GyctBFNxUuyHTGbm = new URL(_BJDShKOxKZPmvMXd.url);
      // 检查是否为 WebSocket 升级请求
      const _tBEonftMaKHqXfXy = _BJDShKOxKZPmvMXd.headers.get('Upgrade');
      if (_tBEonftMaKHqXfXy !== 'websocket') {
        return new Response('Hello World!', {
          status: 200
        });
      } else {
        _GBXhqEnlbKhwjRZZ = _GBXhqEnlbKhwjRZZ ? _GBXhqEnlbKhwjRZZ : _BJDShKOxKZPmvMXd.cf.colo + '.proxyIP.cmliuSSSS.NET';
        await _fULPCRnDvgyfzqPB(_BJDShKOxKZPmvMXd);
        const [_XStdOrfcUnQNyNhe, _BKAeSbPYmBbHFJnR] = await _aNwxHCaXDxbURzqJ(_GBXhqEnlbKhwjRZZ);
        return await _ntbDpakQINsaWizQ(_BJDShKOxKZPmvMXd, {
          parsedSocks5Address: _ypglkYbBjSoCFLOx,
          enableSocks: _TvGIeYLlVarxeEin,
          enableGlobalSocks: _ckNNALvLHWbDWbwG,
          ProxyIP: _XStdOrfcUnQNyNhe,
          ProxyPort: _BKAeSbPYmBbHFJnR
        });
      }
    } catch (_QNpIHaQMLNgwMocm) {
      return new Response(_QNpIHaQMLNgwMocm && _QNpIHaQMLNgwMocm.stack ? _QNpIHaQMLNgwMocm.stack : String(_QNpIHaQMLNgwMocm), {
        status: 500
      });
    }
  }
};
async function _ntbDpakQINsaWizQ(_BJDShKOxKZPmvMXd, _kgZMrXQMOUYeGYBu) {
  const {
    parsedSocks5Address: _ypglkYbBjSoCFLOx,
    enableSocks: _QxkQMlYBvvBOGMkI,
    enableGlobalSocks: _SmtTQgRXEudqTdtV,
    ProxyIP: _TIjtbkXxtnnLwEpk,
    ProxyPort: _UUQUSzLBpwSfRJae
  } = _kgZMrXQMOUYeGYBu;
  const _oufBhMacZXxCGiSW = new WebSocketPair();
  const [_xAVUUzVMpNOPGRSK, _ViBqkCDWTuOgITrI] = Object.values(_oufBhMacZXxCGiSW);
  _ViBqkCDWTuOgITrI.accept();

  // WebSocket心跳机制，每30秒发送一次ping
  let _xoglFJWjhSePsLOu = setInterval(() => {
    if (_ViBqkCDWTuOgITrI.readyState === _fiZWIygbRCnKHric) {
      try {
        _ViBqkCDWTuOgITrI.send('ping');
      } catch (_JRSHzmHFDHqSSDDm) {}
    }
  }, 30000);
  function _AdjjXzkxJcGpxSPz() {
    if (_xoglFJWjhSePsLOu) {
      clearInterval(_xoglFJWjhSePsLOu);
      _xoglFJWjhSePsLOu = null;
    }
  }
  _ViBqkCDWTuOgITrI.addEventListener('close', _AdjjXzkxJcGpxSPz);
  _ViBqkCDWTuOgITrI.addEventListener('error', _AdjjXzkxJcGpxSPz);

  // 处理 WebSocket 数据流
  const _LOkePHnLaXaWdaKY = _BJDShKOxKZPmvMXd.headers.get('sec-websocket-protocol') || '';
  const _GahKccznQxQKxZMq = _vtiyaxiPLqBQlHoI(_ViBqkCDWTuOgITrI, _LOkePHnLaXaWdaKY);
  let _paDlFRLZvMljyTOy = null;
  let _zfdEnjbvIncviUpk = null;
  let _RxDYnfmppjEqYFlo = false;
  _GahKccznQxQKxZMq.pipeTo(new WritableStream({
    async write(_bfVZieJVcJuAMxyz) {
      if (_RxDYnfmppjEqYFlo && _zfdEnjbvIncviUpk) {
        return _zfdEnjbvIncviUpk(_bfVZieJVcJuAMxyz);
      }
      if (_paDlFRLZvMljyTOy) {
        try {
          const _yVBVNoRLidMCuTgR = _paDlFRLZvMljyTOy.writable.getWriter();
          await _yVBVNoRLidMCuTgR.write(_bfVZieJVcJuAMxyz);
          _yVBVNoRLidMCuTgR.releaseLock();
        } catch (_QNpIHaQMLNgwMocm) {
          _LdrnZnvSfbwKoaDy(_paDlFRLZvMljyTOy);
          throw _QNpIHaQMLNgwMocm;
        }
        return;
      }
      const _WnipBFjqMxGPDCzp = _UQtRyrFiOclEODgZ(_bfVZieJVcJuAMxyz);
      if (_WnipBFjqMxGPDCzp.hasError) throw new Error(_WnipBFjqMxGPDCzp.message);
      if (_WnipBFjqMxGPDCzp.addressRemote.includes(atob('c3BlZWQuY2xvdWRmbGFyZS5jb20='))) throw new Error('Access');
      const _YtnFnEFRwjbKLEvA = new Uint8Array([_WnipBFjqMxGPDCzp.vlessVersion[0], 0]);
      const _MeHHrKZMGdvieLsG = _bfVZieJVcJuAMxyz.slice(_WnipBFjqMxGPDCzp.rawDataIndex);
      if (_WnipBFjqMxGPDCzp.isUDP) {
        if (_WnipBFjqMxGPDCzp.portRemote === 53) {
          _RxDYnfmppjEqYFlo = true;
          const {
            write: _gfEwRdAxycUvRkCN
          } = await _eMCWBLaRKDTIegvc(_ViBqkCDWTuOgITrI, _YtnFnEFRwjbKLEvA);
          _zfdEnjbvIncviUpk = _gfEwRdAxycUvRkCN;
          _zfdEnjbvIncviUpk(_MeHHrKZMGdvieLsG);
          return;
        } else {
          throw new Error('UDP代理仅支持DNS(端口53)');
        }
      }
      async function _jjStGLnjJaFGFvaG(_gQjeGcEbIbElrefG, _NsYWYBnIwbACzPSP) {
        const _wToJJFskaUCbobBg = await connect({
          hostname: _gQjeGcEbIbElrefG,
          port: _NsYWYBnIwbACzPSP
        }, {
          allowHalfOpen: true
        });
        _paDlFRLZvMljyTOy = _wToJJFskaUCbobBg;
        const _yVBVNoRLidMCuTgR = _wToJJFskaUCbobBg.writable.getWriter();
        await _yVBVNoRLidMCuTgR.write(_MeHHrKZMGdvieLsG);
        _yVBVNoRLidMCuTgR.releaseLock();
        return _wToJJFskaUCbobBg;
      }
      async function _xsGCLnQnNSsLXeMP(_gQjeGcEbIbElrefG, _NsYWYBnIwbACzPSP) {
        const _wToJJFskaUCbobBg = _QxkQMlYBvvBOGMkI === 'socks5' ? await _SomCaeWxiNqXERNm(_WnipBFjqMxGPDCzp.addressType, _gQjeGcEbIbElrefG, _NsYWYBnIwbACzPSP, _ypglkYbBjSoCFLOx) : await _mixknTBxtcLMEMOW(_WnipBFjqMxGPDCzp.addressType, _gQjeGcEbIbElrefG, _NsYWYBnIwbACzPSP, _ypglkYbBjSoCFLOx);
        _paDlFRLZvMljyTOy = _wToJJFskaUCbobBg;
        const _yVBVNoRLidMCuTgR = _wToJJFskaUCbobBg.writable.getWriter();
        await _yVBVNoRLidMCuTgR.write(_MeHHrKZMGdvieLsG);
        _yVBVNoRLidMCuTgR.releaseLock();
        return _wToJJFskaUCbobBg;
      }
      async function _AHsYKcAURKQXqIxz() {
        try {
          let _wToJJFskaUCbobBg;
          if (_QxkQMlYBvvBOGMkI === 'socks5') {
            _wToJJFskaUCbobBg = await _SomCaeWxiNqXERNm(_WnipBFjqMxGPDCzp.addressType, _WnipBFjqMxGPDCzp.addressRemote, _WnipBFjqMxGPDCzp.portRemote, _ypglkYbBjSoCFLOx);
          } else if (_QxkQMlYBvvBOGMkI === 'http') {
            _wToJJFskaUCbobBg = await _mixknTBxtcLMEMOW(_WnipBFjqMxGPDCzp.addressType, _WnipBFjqMxGPDCzp.addressRemote, _WnipBFjqMxGPDCzp.portRemote, _ypglkYbBjSoCFLOx);
          } else {
            _wToJJFskaUCbobBg = await connect({
              hostname: _TIjtbkXxtnnLwEpk,
              port: _UUQUSzLBpwSfRJae
            }, {
              allowHalfOpen: true
            });
          }
          _paDlFRLZvMljyTOy = _wToJJFskaUCbobBg;
          const _yVBVNoRLidMCuTgR = _wToJJFskaUCbobBg.writable.getWriter();
          await _yVBVNoRLidMCuTgR.write(_MeHHrKZMGdvieLsG);
          _yVBVNoRLidMCuTgR.releaseLock();
          _wToJJFskaUCbobBg.closed.catch(() => {}).finally(() => {
            if (_ViBqkCDWTuOgITrI.readyState === _fiZWIygbRCnKHric) {
              _ViBqkCDWTuOgITrI.close(1000, '连接已关闭');
            }
          });
          _dpaxDBWWpUWATSRC(_wToJJFskaUCbobBg, _ViBqkCDWTuOgITrI, _YtnFnEFRwjbKLEvA, null);
        } catch (_QNpIHaQMLNgwMocm) {
          _LdrnZnvSfbwKoaDy(_paDlFRLZvMljyTOy);
          _ViBqkCDWTuOgITrI.close(1011, '代理连接失败: ' + (_QNpIHaQMLNgwMocm && _QNpIHaQMLNgwMocm.message ? _QNpIHaQMLNgwMocm.message : _QNpIHaQMLNgwMocm));
        }
      }
      try {
        if (_SmtTQgRXEudqTdtV) {
          const _wToJJFskaUCbobBg = await _xsGCLnQnNSsLXeMP(_WnipBFjqMxGPDCzp.addressRemote, _WnipBFjqMxGPDCzp.portRemote);
          _dpaxDBWWpUWATSRC(_wToJJFskaUCbobBg, _ViBqkCDWTuOgITrI, _YtnFnEFRwjbKLEvA, _AHsYKcAURKQXqIxz);
        } else {
          const _wToJJFskaUCbobBg = await _jjStGLnjJaFGFvaG(_WnipBFjqMxGPDCzp.addressRemote, _WnipBFjqMxGPDCzp.portRemote);
          _dpaxDBWWpUWATSRC(_wToJJFskaUCbobBg, _ViBqkCDWTuOgITrI, _YtnFnEFRwjbKLEvA, _AHsYKcAURKQXqIxz);
        }
      } catch (_QNpIHaQMLNgwMocm) {
        _LdrnZnvSfbwKoaDy(_paDlFRLZvMljyTOy);
        _ViBqkCDWTuOgITrI.close(1011, '连接失败: ' + (_QNpIHaQMLNgwMocm && _QNpIHaQMLNgwMocm.message ? _QNpIHaQMLNgwMocm.message : _QNpIHaQMLNgwMocm));
      }
    },
    close() {
      if (_paDlFRLZvMljyTOy) {
        _LdrnZnvSfbwKoaDy(_paDlFRLZvMljyTOy);
      }
    }
  })).catch(_QNpIHaQMLNgwMocm => {
    _LdrnZnvSfbwKoaDy(_paDlFRLZvMljyTOy);
    _ViBqkCDWTuOgITrI.close(1011, '内部错误: ' + (_QNpIHaQMLNgwMocm && _QNpIHaQMLNgwMocm.message ? _QNpIHaQMLNgwMocm.message : _QNpIHaQMLNgwMocm));
  });
  return new Response(null, {
    status: 101,
    webSocket: _xAVUUzVMpNOPGRSK
  });
}
function _vtiyaxiPLqBQlHoI(_SQuCPCxNEZhfrGWD, _LOkePHnLaXaWdaKY) {
  return new ReadableStream({
    start(_MZCAvxlUfwDbIbZS) {
      _SQuCPCxNEZhfrGWD.addEventListener('message', _cAQHmNnrAWJBIKiW => {
        _MZCAvxlUfwDbIbZS.enqueue(_cAQHmNnrAWJBIKiW.data);
      });
      _SQuCPCxNEZhfrGWD.addEventListener('close', () => {
        _MZCAvxlUfwDbIbZS.close();
      });
      _SQuCPCxNEZhfrGWD.addEventListener('error', _QNpIHaQMLNgwMocm => {
        _MZCAvxlUfwDbIbZS.error(_QNpIHaQMLNgwMocm);
      });
      if (_LOkePHnLaXaWdaKY) {
        try {
          const _EXbUKhFLQKJFWCxa = atob(_LOkePHnLaXaWdaKY.replace(/-/g, '+').replace(/_/g, '/'));
          const _hdqlXMxHJABuoTWS = Uint8Array.from(_EXbUKhFLQKJFWCxa, _rjQIqpusCWxGmtSU => _rjQIqpusCWxGmtSU.charCodeAt(0));
          _MZCAvxlUfwDbIbZS.enqueue(_hdqlXMxHJABuoTWS.buffer);
        } catch (_JRSHzmHFDHqSSDDm) {}
      }
    }
  });
}

// 只允许固定UUID
function _UQtRyrFiOclEODgZ(_xHgfEojGPAzmLgIp) {
  if (_xHgfEojGPAzmLgIp.byteLength < 24) {
    return {
      hasError: true,
      message: '无效的头部长度'
    };
  }
  const _luUtnmtKIixUgoiu = new DataView(_xHgfEojGPAzmLgIp);
  const _KakYSQXJmCkxBtcC = new Uint8Array(_xHgfEojGPAzmLgIp.slice(0, 1));
  const _lDwMAoHXPkuomxrC = _ltTlSiaGDXnkjaYu(new Uint8Array(_xHgfEojGPAzmLgIp.slice(1, 17)));
  if (_NvgcbjVXdrwAvpCH && _lDwMAoHXPkuomxrC !== _NvgcbjVXdrwAvpCH) {
    return {
      hasError: true,
      message: '无效的用户'
    };
  }
  const _YYSTGUzbjLunQGmf = _luUtnmtKIixUgoiu.getUint8(17);
  const _uprbNUnSqUVThZar = _luUtnmtKIixUgoiu.getUint8(18 + _YYSTGUzbjLunQGmf);
  let _PgXblfjEltxUtvdr = false;
  if (_uprbNUnSqUVThZar === 1) {} else if (_uprbNUnSqUVThZar === 2) {
    _PgXblfjEltxUtvdr = true;
  } else {
    return {
      hasError: true,
      message: '不支持的命令，仅支持TCP(01)和UDP(02)'
    };
  }
  let _kvnkOSvQIoJlqKuD = 19 + _YYSTGUzbjLunQGmf;
  const _NsYWYBnIwbACzPSP = _luUtnmtKIixUgoiu.getUint16(_kvnkOSvQIoJlqKuD);
  _kvnkOSvQIoJlqKuD += 2;
  const _JBjENZNxnqMckvCI = _luUtnmtKIixUgoiu.getUint8(_kvnkOSvQIoJlqKuD++);
  let _gQjeGcEbIbElrefG = '';
  switch (_JBjENZNxnqMckvCI) {
    case 1:
      _gQjeGcEbIbElrefG = Array.from(new Uint8Array(_xHgfEojGPAzmLgIp.slice(_kvnkOSvQIoJlqKuD, _kvnkOSvQIoJlqKuD + 4))).join('.');
      _kvnkOSvQIoJlqKuD += 4;
      break;
    case 2:
      const _LOvATxEPZbSQDmBp = _luUtnmtKIixUgoiu.getUint8(_kvnkOSvQIoJlqKuD++);
      _gQjeGcEbIbElrefG = new TextDecoder().decode(_xHgfEojGPAzmLgIp.slice(_kvnkOSvQIoJlqKuD, _kvnkOSvQIoJlqKuD + _LOvATxEPZbSQDmBp));
      _kvnkOSvQIoJlqKuD += _LOvATxEPZbSQDmBp;
      break;
    case 3:
      const _vBKdRGiiXbUZuvcJ = [];
      for (let _AfccYNgMxXTEKtSF = 0; _AfccYNgMxXTEKtSF < 8; _AfccYNgMxXTEKtSF++) {
        _vBKdRGiiXbUZuvcJ.push(_luUtnmtKIixUgoiu.getUint16(_kvnkOSvQIoJlqKuD).toString(16).padStart(4, '0'));
        _kvnkOSvQIoJlqKuD += 2;
      }
      _gQjeGcEbIbElrefG = _vBKdRGiiXbUZuvcJ.join(':').replace(/(^|:)0+(\w)/g, '$1$2');
      break;
    default:
      return {
        hasError: true,
        message: '不支持的地址类型'
      };
  }
  return {
    hasError: false,
    addressRemote: _gQjeGcEbIbElrefG,
    portRemote: _NsYWYBnIwbACzPSP,
    rawDataIndex: _kvnkOSvQIoJlqKuD,
    vlessVersion: _KakYSQXJmCkxBtcC,
    isUDP: _PgXblfjEltxUtvdr,
    addressType: _JBjENZNxnqMckvCI
  };
}
function _dpaxDBWWpUWATSRC(_paDlFRLZvMljyTOy, _SQuCPCxNEZhfrGWD, _ejgewcvxIDwyfIao, _AHsYKcAURKQXqIxz = null) {
  let _SGTsEpYWDGxYQMWD = false;
  let _HOgPBkRqkAIxfCUJ = false;
  _paDlFRLZvMljyTOy.readable.pipeTo(new WritableStream({
    write(_bfVZieJVcJuAMxyz) {
      _HOgPBkRqkAIxfCUJ = true;
      if (_SQuCPCxNEZhfrGWD.readyState === _fiZWIygbRCnKHric) {
        if (!_SGTsEpYWDGxYQMWD) {
          const _maPCjHWhZPXCBpat = new Uint8Array(_ejgewcvxIDwyfIao.byteLength + _bfVZieJVcJuAMxyz.byteLength);
          _maPCjHWhZPXCBpat.set(new Uint8Array(_ejgewcvxIDwyfIao), 0);
          _maPCjHWhZPXCBpat.set(new Uint8Array(_bfVZieJVcJuAMxyz), _ejgewcvxIDwyfIao.byteLength);
          _SQuCPCxNEZhfrGWD.send(_maPCjHWhZPXCBpat.buffer);
          _SGTsEpYWDGxYQMWD = true;
        } else {
          _SQuCPCxNEZhfrGWD.send(_bfVZieJVcJuAMxyz);
        }
      }
    },
    close() {
      if (!_HOgPBkRqkAIxfCUJ && _AHsYKcAURKQXqIxz) {
        _AHsYKcAURKQXqIxz();
        return;
      }
      if (_SQuCPCxNEZhfrGWD.readyState === _fiZWIygbRCnKHric) {
        _SQuCPCxNEZhfrGWD.close(1000, '正常关闭');
      }
    },
    abort() {
      _LdrnZnvSfbwKoaDy(_paDlFRLZvMljyTOy);
    }
  })).catch(_QNpIHaQMLNgwMocm => {
    _LdrnZnvSfbwKoaDy(_paDlFRLZvMljyTOy);
    if (_SQuCPCxNEZhfrGWD.readyState === _fiZWIygbRCnKHric) {
      _SQuCPCxNEZhfrGWD.close(1011, '数据传输错误');
    }
  });
}
function _LdrnZnvSfbwKoaDy(_NzEGQihTOFvbQmkz) {
  if (_NzEGQihTOFvbQmkz) {
    try {
      _NzEGQihTOFvbQmkz.close();
    } catch (_JRSHzmHFDHqSSDDm) {}
  }
}
function _ltTlSiaGDXnkjaYu(_rbqqSGQThSxANOxu) {
  const _brtOxIVBcIuSZaQM = Array.from(_rbqqSGQThSxANOxu, _TvegGJYtLjoaDKwn => _TvegGJYtLjoaDKwn.toString(16).padStart(2, '0')).join('');
  return `${_brtOxIVBcIuSZaQM.slice(0, 8)}-${_brtOxIVBcIuSZaQM.slice(8, 12)}-${_brtOxIVBcIuSZaQM.slice(12, 16)}-${_brtOxIVBcIuSZaQM.slice(16, 20)}-${_brtOxIVBcIuSZaQM.slice(20)}`;
}
async function _SomCaeWxiNqXERNm(_JBjENZNxnqMckvCI, _sewLRPGhtcwFWwrr, _DfPgWOAJoZiceswt, _ypglkYbBjSoCFLOx) {
  const {
    username: _zLWzBaXkgpXiiENQ,
    password: _GuMVtVQOfDrRQpfx,
    hostname: _KZRzrEYXsFwNhnle,
    port: _NsYWYBnIwbACzPSP
  } = _ypglkYbBjSoCFLOx;
  const _NzEGQihTOFvbQmkz = connect({
    hostname: _KZRzrEYXsFwNhnle,
    port: _NsYWYBnIwbACzPSP
  });
  const _ByTEWkCtImAatPtv = new Uint8Array([5, 2, 0, 2]);
  const _yVBVNoRLidMCuTgR = _NzEGQihTOFvbQmkz.writable.getWriter();
  await _yVBVNoRLidMCuTgR.write(_ByTEWkCtImAatPtv);
  const _WkiXZaknndjkjGuN = _NzEGQihTOFvbQmkz.readable.getReader();
  const _duKoMDboezNczVYh = new TextEncoder();
  let _BiLcvCTlxtHXSAPQ = (await _WkiXZaknndjkjGuN.read()).value;
  if (_BiLcvCTlxtHXSAPQ[0] !== 0x05) {
    throw new Error(`socks server version error: ${_BiLcvCTlxtHXSAPQ[0]} expected: 5`);
  }
  if (_BiLcvCTlxtHXSAPQ[1] === 0xff) {
    throw new Error("no acceptable methods");
  }
  if (_BiLcvCTlxtHXSAPQ[1] === 0x02) {
    if (!_zLWzBaXkgpXiiENQ || !_GuMVtVQOfDrRQpfx) {
      throw new Error("please provide username/password");
    }
    const _mSnTIwYdXcaOTQWJ = new Uint8Array([1, _zLWzBaXkgpXiiENQ.length, ..._duKoMDboezNczVYh.encode(_zLWzBaXkgpXiiENQ), _GuMVtVQOfDrRQpfx.length, ..._duKoMDboezNczVYh.encode(_GuMVtVQOfDrRQpfx)]);
    await _yVBVNoRLidMCuTgR.write(_mSnTIwYdXcaOTQWJ);
    _BiLcvCTlxtHXSAPQ = (await _WkiXZaknndjkjGuN.read()).value;
    if (_BiLcvCTlxtHXSAPQ[0] !== 0x01 || _BiLcvCTlxtHXSAPQ[1] !== 0x00) {
      throw new Error("fail to auth socks server");
    }
  }
  let _PAwzbjvbnKPdzgDU;
  switch (_JBjENZNxnqMckvCI) {
    case 1:
      _PAwzbjvbnKPdzgDU = new Uint8Array([1, ..._sewLRPGhtcwFWwrr.split('.').map(Number)]);
      break;
    case 2:
      _PAwzbjvbnKPdzgDU = new Uint8Array([3, _sewLRPGhtcwFWwrr.length, ..._duKoMDboezNczVYh.encode(_sewLRPGhtcwFWwrr)]);
      break;
    case 3:
      _PAwzbjvbnKPdzgDU = new Uint8Array([4, ..._sewLRPGhtcwFWwrr.split(':').flatMap(_IqdMDJCobuxqYech => [parseInt(_IqdMDJCobuxqYech.slice(0, 2), 16), parseInt(_IqdMDJCobuxqYech.slice(2), 16)])]);
      break;
    default:
      throw new Error(`invalid addressType is ${_JBjENZNxnqMckvCI}`);
  }
  const _qkZqZEYzgOYuWPTj = new Uint8Array([5, 1, 0, ..._PAwzbjvbnKPdzgDU, _DfPgWOAJoZiceswt >> 8, _DfPgWOAJoZiceswt & 0xff]);
  await _yVBVNoRLidMCuTgR.write(_qkZqZEYzgOYuWPTj);
  _BiLcvCTlxtHXSAPQ = (await _WkiXZaknndjkjGuN.read()).value;
  if (_BiLcvCTlxtHXSAPQ[1] === 0x00) {} else {
    throw new Error("fail to open socks connection");
  }
  _yVBVNoRLidMCuTgR.releaseLock();
  _WkiXZaknndjkjGuN.releaseLock();
  return _NzEGQihTOFvbQmkz;
}
async function _mixknTBxtcLMEMOW(_JBjENZNxnqMckvCI, _sewLRPGhtcwFWwrr, _DfPgWOAJoZiceswt, _ypglkYbBjSoCFLOx) {
  const {
    username: _zLWzBaXkgpXiiENQ,
    password: _GuMVtVQOfDrRQpfx,
    hostname: _KZRzrEYXsFwNhnle,
    port: _NsYWYBnIwbACzPSP
  } = _ypglkYbBjSoCFLOx;
  const _vGDIfVKiwQAIauTh = await connect({
    hostname: _KZRzrEYXsFwNhnle,
    port: _NsYWYBnIwbACzPSP
  });

  // 构建HTTP CONNECT请求
  let _VrYLnkqkGLCdTBFU = `CONNECT ${_sewLRPGhtcwFWwrr}:${_DfPgWOAJoZiceswt} HTTP/1.1\r\n`;
  _VrYLnkqkGLCdTBFU += `Host: ${_sewLRPGhtcwFWwrr}:${_DfPgWOAJoZiceswt}\r\n`;

  // 添加代理认证（如果需要）
  if (_zLWzBaXkgpXiiENQ && _GuMVtVQOfDrRQpfx) {
    const _mArzIXXoSHwZhmMu = `${_zLWzBaXkgpXiiENQ}:${_GuMVtVQOfDrRQpfx}`;
    const _OQMJGmJNYJPdDdXh = btoa(_mArzIXXoSHwZhmMu);
    _VrYLnkqkGLCdTBFU += `Proxy-Authorization: Basic ${_OQMJGmJNYJPdDdXh}\r\n`;
  }
  _VrYLnkqkGLCdTBFU += `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36\r\n`;
  _VrYLnkqkGLCdTBFU += `Proxy-Connection: Keep-Alive\r\n`;
  _VrYLnkqkGLCdTBFU += `Connection: Keep-Alive\r\n`; // 添加标准 Connection 头
  _VrYLnkqkGLCdTBFU += `\r\n`;
  try {
    // 发送连接请求
    const _yVBVNoRLidMCuTgR = _vGDIfVKiwQAIauTh.writable.getWriter();
    await _yVBVNoRLidMCuTgR.write(new TextEncoder().encode(_VrYLnkqkGLCdTBFU));
    _yVBVNoRLidMCuTgR.releaseLock();
  } catch (_QNpIHaQMLNgwMocm) {
    console.error('发送HTTP CONNECT请求失败:', _QNpIHaQMLNgwMocm);
    throw new Error(`发送HTTP CONNECT请求失败: ${_QNpIHaQMLNgwMocm.message}`);
  }

  // 读取HTTP响应
  const _WkiXZaknndjkjGuN = _vGDIfVKiwQAIauTh.readable.getReader();
  let _ZGIaebgeKJBuNFbZ = '';
  let _lFWoOYqkUcZQrIbr = false;
  let _qZbzgkpOTjtEIPDY = new Uint8Array(0);
  try {
    while (true) {
      const {
        value: _cHooweCiLsEGTVoZ,
        done: _SgXqctxjAkEEcLnw
      } = await _WkiXZaknndjkjGuN.read();
      if (_SgXqctxjAkEEcLnw) {
        console.error('HTTP代理连接中断');
        throw new Error('HTTP代理连接中断');
      }

      // 合并接收到的数据
      const _FLapseWDzEVNYgnn = new Uint8Array(_qZbzgkpOTjtEIPDY.length + _cHooweCiLsEGTVoZ.length);
      _FLapseWDzEVNYgnn.set(_qZbzgkpOTjtEIPDY);
      _FLapseWDzEVNYgnn.set(_cHooweCiLsEGTVoZ, _qZbzgkpOTjtEIPDY.length);
      _qZbzgkpOTjtEIPDY = _FLapseWDzEVNYgnn;

      // 将收到的数据转换为文本
      _ZGIaebgeKJBuNFbZ = new TextDecoder().decode(_qZbzgkpOTjtEIPDY);

      // 检查是否收到完整的HTTP响应头
      if (_ZGIaebgeKJBuNFbZ.includes('\r\n\r\n')) {
        // 分离HTTP头和可能的数据部分
        const _lvfaRkzwcqhQPuPM = _ZGIaebgeKJBuNFbZ.indexOf('\r\n\r\n') + 4;
        const _VKzEOgvxLhmGaLKc = _ZGIaebgeKJBuNFbZ.substring(0, _lvfaRkzwcqhQPuPM);

        // 检查响应状态
        if (_VKzEOgvxLhmGaLKc.startsWith('HTTP/1.1 200') || _VKzEOgvxLhmGaLKc.startsWith('HTTP/1.0 200')) {
          _lFWoOYqkUcZQrIbr = true;

          // 如果响应头之后还有数据，我们需要保存这些数据以便后续处理
          if (_lvfaRkzwcqhQPuPM < _qZbzgkpOTjtEIPDY.length) {
            const _NqFEoVcKeGeZbnjq = _qZbzgkpOTjtEIPDY.slice(_lvfaRkzwcqhQPuPM);
            // 创建一个缓冲区来存储这些数据，以便稍后使用
            const _WNXoTSFTpnjIhlAd = new ReadableStream({
              start(_MZCAvxlUfwDbIbZS) {
                _MZCAvxlUfwDbIbZS.enqueue(_NqFEoVcKeGeZbnjq);
              }
            });

            // 创建一个新的TransformStream来处理额外数据
            const {
              readable: _YkvVqWGJOogChmAT,
              writable: _ObUiuDmVQYwwFQCk
            } = new TransformStream();
            _WNXoTSFTpnjIhlAd.pipeTo(_ObUiuDmVQYwwFQCk).catch(_QNpIHaQMLNgwMocm => console.error('处理剩余数据错误:', _QNpIHaQMLNgwMocm));

            // 替换原始readable流
            // @ts-ignore
            _vGDIfVKiwQAIauTh.readable = _YkvVqWGJOogChmAT;
          }
        } else {
          const _RdcwnrRLgftVBqEh = `HTTP代理连接失败: ${_VKzEOgvxLhmGaLKc.split('\r\n')[0]}`;
          console.error(_RdcwnrRLgftVBqEh);
          throw new Error(_RdcwnrRLgftVBqEh);
        }
        break;
      }
    }
  } catch (_QNpIHaQMLNgwMocm) {
    _WkiXZaknndjkjGuN.releaseLock();
    throw new Error(`处理HTTP代理响应失败: ${_QNpIHaQMLNgwMocm.message}`);
  }
  _WkiXZaknndjkjGuN.releaseLock();
  if (!_lFWoOYqkUcZQrIbr) {
    throw new Error('HTTP代理连接失败: 未收到成功响应');
  }
  return _vGDIfVKiwQAIauTh;
}
async function _eMCWBLaRKDTIegvc(_hHYKQvyUuJJxmaGY, _RhaDeHBHteyUqbXZ) {
  let _BuXVpppCbxkcziMC = false;
  const _zeqrzsJmOpYLYSLg = new TransformStream({
    start(_MZCAvxlUfwDbIbZS) {},
    transform(_bfVZieJVcJuAMxyz, _MZCAvxlUfwDbIbZS) {
      for (let _UNnnjysPFkbqoeRE = 0; _UNnnjysPFkbqoeRE < _bfVZieJVcJuAMxyz.byteLength;) {
        const _cyebDAqGZOggFkNs = _bfVZieJVcJuAMxyz.slice(_UNnnjysPFkbqoeRE, _UNnnjysPFkbqoeRE + 2);
        const _FafzLrufDHzShjHR = new DataView(_cyebDAqGZOggFkNs).getUint16(0);
        const _NWmCbWgHguZhgnAI = new Uint8Array(_bfVZieJVcJuAMxyz.slice(_UNnnjysPFkbqoeRE + 2, _UNnnjysPFkbqoeRE + 2 + _FafzLrufDHzShjHR));
        _UNnnjysPFkbqoeRE = _UNnnjysPFkbqoeRE + 2 + _FafzLrufDHzShjHR;
        _MZCAvxlUfwDbIbZS.enqueue(_NWmCbWgHguZhgnAI);
      }
    },
    flush(_MZCAvxlUfwDbIbZS) {}
  });
  _zeqrzsJmOpYLYSLg.readable.pipeTo(new WritableStream({
    async write(_bfVZieJVcJuAMxyz) {
      const _UqvUzsHqYPnyYGKJ = await fetch('https://1.1.1.1/dns-query', {
        method: 'POST',
        headers: {
          'content-type': 'application/dns-message'
        },
        body: _bfVZieJVcJuAMxyz
      });
      const _rPavDJRoUcHCVSNY = await _UqvUzsHqYPnyYGKJ.arrayBuffer();
      const _vJuUwNCmcAtDOSwH = _rPavDJRoUcHCVSNY.byteLength;
      const _hGJnAdLYUQNGcigd = new Uint8Array([_vJuUwNCmcAtDOSwH >> 8 & 0xff, _vJuUwNCmcAtDOSwH & 0xff]);
      if (_hHYKQvyUuJJxmaGY.readyState === _fiZWIygbRCnKHric) {
        if (_BuXVpppCbxkcziMC) {
          _hHYKQvyUuJJxmaGY.send(await new Blob([_hGJnAdLYUQNGcigd, _rPavDJRoUcHCVSNY]).arrayBuffer());
        } else {
          _hHYKQvyUuJJxmaGY.send(await new Blob([_RhaDeHBHteyUqbXZ, _hGJnAdLYUQNGcigd, _rPavDJRoUcHCVSNY]).arrayBuffer());
          _BuXVpppCbxkcziMC = true;
        }
      }
    }
  })).catch(_FUJqglgIMNGKkOcf => {});
  const _yVBVNoRLidMCuTgR = _zeqrzsJmOpYLYSLg.writable.getWriter();
  return {
    write(_bfVZieJVcJuAMxyz) {
      _yVBVNoRLidMCuTgR.write(_bfVZieJVcJuAMxyz);
    }
  };
}

// ========== 必要常量和依赖 ==========
const _fiZWIygbRCnKHric = 1;
import { connect } from 'cloudflare:sockets';
async function _aNwxHCaXDxbURzqJ(_qXgJOWzqnKUrGfJG) {
  _qXgJOWzqnKUrGfJG = _qXgJOWzqnKUrGfJG.toLowerCase();
  let _iIxkEbGpJWPLlNjX = _qXgJOWzqnKUrGfJG,
    _GbzNWZvtdQAFZlKn = 443;
  if (_qXgJOWzqnKUrGfJG.includes('.tp')) {
    const _GhtKzLdCbwUGUsgP = _qXgJOWzqnKUrGfJG.match(/\.tp(\d+)/);
    if (_GhtKzLdCbwUGUsgP) _GbzNWZvtdQAFZlKn = parseInt(_GhtKzLdCbwUGUsgP[1], 10);
    return [_iIxkEbGpJWPLlNjX, _GbzNWZvtdQAFZlKn];
  }
  if (_qXgJOWzqnKUrGfJG.includes(']:')) {
    const _PjklRgEFlZepFGeR = _qXgJOWzqnKUrGfJG.split(']:');
    _iIxkEbGpJWPLlNjX = _PjklRgEFlZepFGeR[0] + ']';
    _GbzNWZvtdQAFZlKn = parseInt(_PjklRgEFlZepFGeR[1], 10) || _GbzNWZvtdQAFZlKn;
  } else if (_qXgJOWzqnKUrGfJG.includes(':') && !_qXgJOWzqnKUrGfJG.startsWith('[')) {
    const _zQUcPvPhLHNYhnpH = _qXgJOWzqnKUrGfJG.lastIndexOf(':');
    _iIxkEbGpJWPLlNjX = _qXgJOWzqnKUrGfJG.slice(0, _zQUcPvPhLHNYhnpH);
    _GbzNWZvtdQAFZlKn = parseInt(_qXgJOWzqnKUrGfJG.slice(_zQUcPvPhLHNYhnpH + 1), 10) || _GbzNWZvtdQAFZlKn;
  }
  return [_iIxkEbGpJWPLlNjX, _GbzNWZvtdQAFZlKn];
}
async function _fULPCRnDvgyfzqPB(_BJDShKOxKZPmvMXd) {
  const _GyctBFNxUuyHTGbm = new URL(_BJDShKOxKZPmvMXd.url);
  const {
    pathname: _YTRaOQgOpfQtNIRf,
    searchParams: _hbOofKftYiFonVSH
  } = _GyctBFNxUuyHTGbm;
  const _IanQzMQcixikJbay = _YTRaOQgOpfQtNIRf.toLowerCase();

  // 初始化
  _zbKBJJkLCPkifKGl = _hbOofKftYiFonVSH.get('socks5') || _hbOofKftYiFonVSH.get('http') || null;
  _ckNNALvLHWbDWbwG = _hbOofKftYiFonVSH.has('globalproxy') || false;

  // 统一处理反代IP参数 (优先级最高,使用正则一次匹配)
  const _daHmAPOsXMnEwcQr = _IanQzMQcixikJbay.match(/\/(proxyip[.=]|pyip=|ip=)(.+)/);
  if (_hbOofKftYiFonVSH.has('proxyip')) {
    const _hWvzDQwqapOULxNy = _hbOofKftYiFonVSH.get('proxyip');
    _GBXhqEnlbKhwjRZZ = _hWvzDQwqapOULxNy.includes(',') ? _hWvzDQwqapOULxNy.split(',')[Math.floor(Math.random() * _hWvzDQwqapOULxNy.split(',').length)] : _hWvzDQwqapOULxNy;
    return;
  } else if (_daHmAPOsXMnEwcQr) {
    const _hWvzDQwqapOULxNy = _daHmAPOsXMnEwcQr[1] === 'proxyip.' ? `proxyip.${_daHmAPOsXMnEwcQr[2]}` : _daHmAPOsXMnEwcQr[2];
    _GBXhqEnlbKhwjRZZ = _hWvzDQwqapOULxNy.includes(',') ? _hWvzDQwqapOULxNy.split(',')[Math.floor(Math.random() * _hWvzDQwqapOULxNy.split(',').length)] : _hWvzDQwqapOULxNy;
    return;
  }

  // 处理SOCKS5/HTTP代理参数
  let _FxjkXrYxOfmcIOsy;
  if (_FxjkXrYxOfmcIOsy = _YTRaOQgOpfQtNIRf.match(/\/(socks5?|http):\/?\/?(.+)/i)) {
    // 格式: /socks5://... 或 /http://...
    _TvGIeYLlVarxeEin = _FxjkXrYxOfmcIOsy[1].toLowerCase() === 'http' ? 'http' : 'socks5';
    _zbKBJJkLCPkifKGl = _FxjkXrYxOfmcIOsy[2].split('#')[0];
    _ckNNALvLHWbDWbwG = true;

    // 处理Base64编码的用户名密码
    if (_zbKBJJkLCPkifKGl.includes('@')) {
      const _QNWfusMyDQkyVzXr = _zbKBJJkLCPkifKGl.lastIndexOf('@');
      let _HMImQELmBJWNOsvl = _zbKBJJkLCPkifKGl.substring(0, _QNWfusMyDQkyVzXr).replaceAll('%3D', '=');
      if (/^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i.test(_HMImQELmBJWNOsvl) && !_HMImQELmBJWNOsvl.includes(':')) {
        _HMImQELmBJWNOsvl = atob(_HMImQELmBJWNOsvl);
      }
      _zbKBJJkLCPkifKGl = `${_HMImQELmBJWNOsvl}@${_zbKBJJkLCPkifKGl.substring(_QNWfusMyDQkyVzXr + 1)}`;
    }
  } else if (_FxjkXrYxOfmcIOsy = _YTRaOQgOpfQtNIRf.match(/\/(g?s5|socks5|g?http)=(.+)/i)) {
    // 格式: /socks5=... 或 /s5=... 或 /gs5=... 或 /http=... 或 /ghttp=...
    const _oailHmqWERbmkLll = _FxjkXrYxOfmcIOsy[1].toLowerCase();
    _zbKBJJkLCPkifKGl = _FxjkXrYxOfmcIOsy[2];
    _TvGIeYLlVarxeEin = _oailHmqWERbmkLll.includes('http') ? 'http' : 'socks5';
    _ckNNALvLHWbDWbwG = _oailHmqWERbmkLll.startsWith('g') || _ckNNALvLHWbDWbwG; // gs5 或 ghttp 开头启用全局
  }

  // 解析SOCKS5地址
  if (_zbKBJJkLCPkifKGl) {
    try {
      _ypglkYbBjSoCFLOx = await _uPDxZdMDWxHdIRig(_zbKBJJkLCPkifKGl);
      _TvGIeYLlVarxeEin = _hbOofKftYiFonVSH.get('http') ? 'http' : _TvGIeYLlVarxeEin;
    } catch (_QNpIHaQMLNgwMocm) {
      console.error('解析SOCKS5地址失败:', _QNpIHaQMLNgwMocm.message);
      _TvGIeYLlVarxeEin = null;
    }
  } else _TvGIeYLlVarxeEin = null;
}
async function _uPDxZdMDWxHdIRig(_gQjeGcEbIbElrefG) {
  const _INuHjLBcLDXPdtoF = _gQjeGcEbIbElrefG.lastIndexOf("@");
  let [_IrTgxEQibcuwvVIi, _HShxyiPighJGTmqB] = _INuHjLBcLDXPdtoF === -1 ? [_gQjeGcEbIbElrefG, undefined] : [_gQjeGcEbIbElrefG.substring(_INuHjLBcLDXPdtoF + 1), _gQjeGcEbIbElrefG.substring(0, _INuHjLBcLDXPdtoF)];
  let _zLWzBaXkgpXiiENQ, _GuMVtVQOfDrRQpfx, _KZRzrEYXsFwNhnle, _NsYWYBnIwbACzPSP;
  if (_HShxyiPighJGTmqB) {
    const _UxZnYgahLQxdnTAk = _HShxyiPighJGTmqB.split(":");
    if (_UxZnYgahLQxdnTAk.length !== 2) {
      throw new Error('无效的 SOCKS 地址格式：认证部分必须是 "username:password" 的形式');
    }
    [_zLWzBaXkgpXiiENQ, _GuMVtVQOfDrRQpfx] = _UxZnYgahLQxdnTAk;
  }
  const _rRrxCIPARAySkKec = _IrTgxEQibcuwvVIi.split(":");
  if (_rRrxCIPARAySkKec.length > 2 && _IrTgxEQibcuwvVIi.includes("]:")) {
    _NsYWYBnIwbACzPSP = Number(_IrTgxEQibcuwvVIi.split("]:")[1].replace(/[^\d]/g, ''));
    _KZRzrEYXsFwNhnle = _IrTgxEQibcuwvVIi.split("]:")[0] + "]";
  } else if (_rRrxCIPARAySkKec.length === 2) {
    _NsYWYBnIwbACzPSP = Number(_rRrxCIPARAySkKec.pop().replace(/[^\d]/g, ''));
    _KZRzrEYXsFwNhnle = _rRrxCIPARAySkKec.join(":");
  } else {
    _NsYWYBnIwbACzPSP = 80;
    _KZRzrEYXsFwNhnle = _IrTgxEQibcuwvVIi;
  }
  if (isNaN(_NsYWYBnIwbACzPSP)) {
    throw new Error('无效的 SOCKS 地址格式：端口号必须是数字');
  }
  const _FfCSupfHQpMpBzyj = /^\[.*\]$/;
  if (_KZRzrEYXsFwNhnle.includes(":") && !_FfCSupfHQpMpBzyj.test(_KZRzrEYXsFwNhnle)) {
    throw new Error('无效的 SOCKS 地址格式：IPv6 地址必须用方括号括起来，如 [2001:db8::1]');
  }
  return {
    username: _zLWzBaXkgpXiiENQ,
    password: _GuMVtVQOfDrRQpfx,
    hostname: _KZRzrEYXsFwNhnle,
    port: _NsYWYBnIwbACzPSP
  };
}