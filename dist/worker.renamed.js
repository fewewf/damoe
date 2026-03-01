const _viXDMFkBukKPJbot = '9d4f89db-17bf-4158-9e0b-fe82dfeafa94'; // 建议修改为自己的规范化UUID，如不需要可留空
let _pGZxAKQjMsjtQkWf = 'yx1.9898981.xyz:8443',
  _qDBZHdThPAHXMlQn = null,
  _udAFYAanLbzUwnhC = false,
  _bvxUOgfHxvmQuQor = '',
  _HtEyKxSBDjNlfnqT = {};
export default {
  async fetch(_RbSdrTWWJvbgHbqV) {
    try {
      const _gHRLpdwKVHIERkTg = new URL(_RbSdrTWWJvbgHbqV.url);
      // 检查是否为 WebSocket 升级请求
      const _SpVKfRgfjsIjHITu = _RbSdrTWWJvbgHbqV.headers.get('Upgrade');
      if (_SpVKfRgfjsIjHITu !== 'websocket') {
        return new Response('Hello World!', {
          status: 200
        });
      } else {
        _pGZxAKQjMsjtQkWf = _pGZxAKQjMsjtQkWf ? _pGZxAKQjMsjtQkWf : _RbSdrTWWJvbgHbqV.cf.colo + '.proxyIP.cmliuSSSS.NET';
        await _ZPdNVfQVxRJxLJTf(_RbSdrTWWJvbgHbqV);
        const [_tOgaSILnJVamWtBI, _BFjhdemAIXHPnGoP] = await _mFAQoBxPHSxoUhpA(_pGZxAKQjMsjtQkWf);
        return await _XGEnatXSomBdGzvt(_RbSdrTWWJvbgHbqV, {
          parsedSocks5Address: _HtEyKxSBDjNlfnqT,
          enableSocks: _qDBZHdThPAHXMlQn,
          enableGlobalSocks: _udAFYAanLbzUwnhC,
          ProxyIP: _tOgaSILnJVamWtBI,
          ProxyPort: _BFjhdemAIXHPnGoP
        });
      }
    } catch (_NPIgDwFOuJSDEINh) {
      return new Response(_NPIgDwFOuJSDEINh && _NPIgDwFOuJSDEINh.stack ? _NPIgDwFOuJSDEINh.stack : String(_NPIgDwFOuJSDEINh), {
        status: 500
      });
    }
  }
};
async function _XGEnatXSomBdGzvt(_RbSdrTWWJvbgHbqV, _ynOpkcOQiIYQcqsq) {
  const {
    parsedSocks5Address: _HtEyKxSBDjNlfnqT,
    enableSocks: _HKtvdFHhiAkVGmYb,
    enableGlobalSocks: _TOwSbriVQGGkMroj,
    ProxyIP: _TOpwLbfwrTCWJJJQ,
    ProxyPort: _kAiKCGpCfTxjIFxe
  } = _ynOpkcOQiIYQcqsq;
  const _cqpDkktoUVQTljFG = new WebSocketPair();
  const [_vYdQHlRgueEMUZik, _EaarFjggKSJsdETu] = Object.values(_cqpDkktoUVQTljFG);
  _EaarFjggKSJsdETu.accept();

  // WebSocket心跳机制，每30秒发送一次ping
  let _nmECtmYotPgPWpOa = setInterval(() => {
    if (_EaarFjggKSJsdETu.readyState === _QEJdpPhEDYEgTVvO) {
      try {
        _EaarFjggKSJsdETu.send('ping');
      } catch (_HxxmKCJNKjBfzvLh) {}
    }
  }, 30000);
  function _pJirMSLjzYJtatjG() {
    if (_nmECtmYotPgPWpOa) {
      clearInterval(_nmECtmYotPgPWpOa);
      _nmECtmYotPgPWpOa = null;
    }
  }
  _EaarFjggKSJsdETu.addEventListener('close', _pJirMSLjzYJtatjG);
  _EaarFjggKSJsdETu.addEventListener('error', _pJirMSLjzYJtatjG);

  // 处理 WebSocket 数据流
  const _SXFexsVrhYTWnbNB = _RbSdrTWWJvbgHbqV.headers.get('sec-websocket-protocol') || '';
  const _mTNsvyRXJeSmuwCi = _wdTcYdAfbNBmlyJU(_EaarFjggKSJsdETu, _SXFexsVrhYTWnbNB);
  let _yydFfCBtqOMbBJqh = null;
  let _QbGjnBYntLfWIqdP = null;
  let _AMffeNEsafdHKQKd = false;
  _mTNsvyRXJeSmuwCi.pipeTo(new WritableStream({
    async write(_OgNIoGPboXGYzOmL) {
      if (_AMffeNEsafdHKQKd && _QbGjnBYntLfWIqdP) {
        return _QbGjnBYntLfWIqdP(_OgNIoGPboXGYzOmL);
      }
      if (_yydFfCBtqOMbBJqh) {
        try {
          const _SPVMNWhDwPgXjAwx = _yydFfCBtqOMbBJqh.writable.getWriter();
          await _SPVMNWhDwPgXjAwx.write(_OgNIoGPboXGYzOmL);
          _SPVMNWhDwPgXjAwx.releaseLock();
        } catch (_NPIgDwFOuJSDEINh) {
          _YdTCmADoStVhxqAr(_yydFfCBtqOMbBJqh);
          throw _NPIgDwFOuJSDEINh;
        }
        return;
      }
      const _ABXQvtOZlnCckYgf = _UZffqwErFmJhmdpw(_OgNIoGPboXGYzOmL);
      if (_ABXQvtOZlnCckYgf.hasError) throw new Error(_ABXQvtOZlnCckYgf.message);
      if (_ABXQvtOZlnCckYgf.addressRemote.includes(atob('c3BlZWQuY2xvdWRmbGFyZS5jb20='))) throw new Error('Access');
      const _dArXJMMYzPOnsPcf = new Uint8Array([_ABXQvtOZlnCckYgf.vlessVersion[0], 0]);
      const _ASRxuuJQQnDbhJmN = _OgNIoGPboXGYzOmL.slice(_ABXQvtOZlnCckYgf.rawDataIndex);
      if (_ABXQvtOZlnCckYgf.isUDP) {
        if (_ABXQvtOZlnCckYgf.portRemote === 53) {
          _AMffeNEsafdHKQKd = true;
          const {
            write: _fGYNkZotGlmhRzAS
          } = await _yJXYfEpzGKGjzdZS(_EaarFjggKSJsdETu, _dArXJMMYzPOnsPcf);
          _QbGjnBYntLfWIqdP = _fGYNkZotGlmhRzAS;
          _QbGjnBYntLfWIqdP(_ASRxuuJQQnDbhJmN);
          return;
        } else {
          throw new Error('UDP代理仅支持DNS(端口53)');
        }
      }
      async function _FwImIfehnbiOYnUX(_KiIHVuWZcqGQOnqM, _xhYRWGDxxNlSmeBh) {
        const _FNiQkssSWsfAITDk = await connect({
          hostname: _KiIHVuWZcqGQOnqM,
          port: _xhYRWGDxxNlSmeBh
        }, {
          allowHalfOpen: true
        });
        _yydFfCBtqOMbBJqh = _FNiQkssSWsfAITDk;
        const _SPVMNWhDwPgXjAwx = _FNiQkssSWsfAITDk.writable.getWriter();
        await _SPVMNWhDwPgXjAwx.write(_ASRxuuJQQnDbhJmN);
        _SPVMNWhDwPgXjAwx.releaseLock();
        return _FNiQkssSWsfAITDk;
      }
      async function _dAmukYVjLYmjdInr(_KiIHVuWZcqGQOnqM, _xhYRWGDxxNlSmeBh) {
        const _FNiQkssSWsfAITDk = _HKtvdFHhiAkVGmYb === 'socks5' ? await _fjrAwlBoXeugMEtG(_ABXQvtOZlnCckYgf.addressType, _KiIHVuWZcqGQOnqM, _xhYRWGDxxNlSmeBh, _HtEyKxSBDjNlfnqT) : await _WZAybXjZwWdxgmSF(_ABXQvtOZlnCckYgf.addressType, _KiIHVuWZcqGQOnqM, _xhYRWGDxxNlSmeBh, _HtEyKxSBDjNlfnqT);
        _yydFfCBtqOMbBJqh = _FNiQkssSWsfAITDk;
        const _SPVMNWhDwPgXjAwx = _FNiQkssSWsfAITDk.writable.getWriter();
        await _SPVMNWhDwPgXjAwx.write(_ASRxuuJQQnDbhJmN);
        _SPVMNWhDwPgXjAwx.releaseLock();
        return _FNiQkssSWsfAITDk;
      }
      async function _zgRrmXtZKpKAlcKQ() {
        try {
          let _FNiQkssSWsfAITDk;
          if (_HKtvdFHhiAkVGmYb === 'socks5') {
            _FNiQkssSWsfAITDk = await _fjrAwlBoXeugMEtG(_ABXQvtOZlnCckYgf.addressType, _ABXQvtOZlnCckYgf.addressRemote, _ABXQvtOZlnCckYgf.portRemote, _HtEyKxSBDjNlfnqT);
          } else if (_HKtvdFHhiAkVGmYb === 'http') {
            _FNiQkssSWsfAITDk = await _WZAybXjZwWdxgmSF(_ABXQvtOZlnCckYgf.addressType, _ABXQvtOZlnCckYgf.addressRemote, _ABXQvtOZlnCckYgf.portRemote, _HtEyKxSBDjNlfnqT);
          } else {
            _FNiQkssSWsfAITDk = await connect({
              hostname: _TOpwLbfwrTCWJJJQ,
              port: _kAiKCGpCfTxjIFxe
            }, {
              allowHalfOpen: true
            });
          }
          _yydFfCBtqOMbBJqh = _FNiQkssSWsfAITDk;
          const _SPVMNWhDwPgXjAwx = _FNiQkssSWsfAITDk.writable.getWriter();
          await _SPVMNWhDwPgXjAwx.write(_ASRxuuJQQnDbhJmN);
          _SPVMNWhDwPgXjAwx.releaseLock();
          _FNiQkssSWsfAITDk.closed.catch(() => {}).finally(() => {
            if (_EaarFjggKSJsdETu.readyState === _QEJdpPhEDYEgTVvO) {
              _EaarFjggKSJsdETu.close(1000, '连接已关闭');
            }
          });
          _mZEFqDdefuQLTLkP(_FNiQkssSWsfAITDk, _EaarFjggKSJsdETu, _dArXJMMYzPOnsPcf, null);
        } catch (_NPIgDwFOuJSDEINh) {
          _YdTCmADoStVhxqAr(_yydFfCBtqOMbBJqh);
          _EaarFjggKSJsdETu.close(1011, '代理连接失败: ' + (_NPIgDwFOuJSDEINh && _NPIgDwFOuJSDEINh.message ? _NPIgDwFOuJSDEINh.message : _NPIgDwFOuJSDEINh));
        }
      }
      try {
        if (_TOwSbriVQGGkMroj) {
          const _FNiQkssSWsfAITDk = await _dAmukYVjLYmjdInr(_ABXQvtOZlnCckYgf.addressRemote, _ABXQvtOZlnCckYgf.portRemote);
          _mZEFqDdefuQLTLkP(_FNiQkssSWsfAITDk, _EaarFjggKSJsdETu, _dArXJMMYzPOnsPcf, _zgRrmXtZKpKAlcKQ);
        } else {
          const _FNiQkssSWsfAITDk = await _FwImIfehnbiOYnUX(_ABXQvtOZlnCckYgf.addressRemote, _ABXQvtOZlnCckYgf.portRemote);
          _mZEFqDdefuQLTLkP(_FNiQkssSWsfAITDk, _EaarFjggKSJsdETu, _dArXJMMYzPOnsPcf, _zgRrmXtZKpKAlcKQ);
        }
      } catch (_NPIgDwFOuJSDEINh) {
        _YdTCmADoStVhxqAr(_yydFfCBtqOMbBJqh);
        _EaarFjggKSJsdETu.close(1011, '连接失败: ' + (_NPIgDwFOuJSDEINh && _NPIgDwFOuJSDEINh.message ? _NPIgDwFOuJSDEINh.message : _NPIgDwFOuJSDEINh));
      }
    },
    close() {
      if (_yydFfCBtqOMbBJqh) {
        _YdTCmADoStVhxqAr(_yydFfCBtqOMbBJqh);
      }
    }
  })).catch(_NPIgDwFOuJSDEINh => {
    _YdTCmADoStVhxqAr(_yydFfCBtqOMbBJqh);
    _EaarFjggKSJsdETu.close(1011, '内部错误: ' + (_NPIgDwFOuJSDEINh && _NPIgDwFOuJSDEINh.message ? _NPIgDwFOuJSDEINh.message : _NPIgDwFOuJSDEINh));
  });
  return new Response(null, {
    status: 101,
    webSocket: _vYdQHlRgueEMUZik
  });
}
function _wdTcYdAfbNBmlyJU(_kOSqyhJUMUwDhyWX, _SXFexsVrhYTWnbNB) {
  return new ReadableStream({
    start(_YeBVbdTtQZmEWGdB) {
      _kOSqyhJUMUwDhyWX.addEventListener('message', _vPlMXQVrJmRJtbmi => {
        _YeBVbdTtQZmEWGdB.enqueue(_vPlMXQVrJmRJtbmi.data);
      });
      _kOSqyhJUMUwDhyWX.addEventListener('close', () => {
        _YeBVbdTtQZmEWGdB.close();
      });
      _kOSqyhJUMUwDhyWX.addEventListener('error', _NPIgDwFOuJSDEINh => {
        _YeBVbdTtQZmEWGdB.error(_NPIgDwFOuJSDEINh);
      });
      if (_SXFexsVrhYTWnbNB) {
        try {
          const _MWjsVBzsztzlyHjB = atob(_SXFexsVrhYTWnbNB.replace(/-/g, '+').replace(/_/g, '/'));
          const _byiCulITdAyxicbp = Uint8Array.from(_MWjsVBzsztzlyHjB, _tqDgrABBRJgXBifi => _tqDgrABBRJgXBifi.charCodeAt(0));
          _YeBVbdTtQZmEWGdB.enqueue(_byiCulITdAyxicbp.buffer);
        } catch (_HxxmKCJNKjBfzvLh) {}
      }
    }
  });
}

// 只允许固定UUID
function _UZffqwErFmJhmdpw(_AcHYqnSCbeRODHaZ) {
  if (_AcHYqnSCbeRODHaZ.byteLength < 24) {
    return {
      hasError: true,
      message: '无效的头部长度'
    };
  }
  const _uVraCHeqaBoOMMmD = new DataView(_AcHYqnSCbeRODHaZ);
  const _tBNsuzUcCBCjKVtS = new Uint8Array(_AcHYqnSCbeRODHaZ.slice(0, 1));
  const _JpgngHhGdTuYFuEs = _kRumDkXbggFhylJe(new Uint8Array(_AcHYqnSCbeRODHaZ.slice(1, 17)));
  if (_viXDMFkBukKPJbot && _JpgngHhGdTuYFuEs !== _viXDMFkBukKPJbot) {
    return {
      hasError: true,
      message: '无效的用户'
    };
  }
  const _wAPAgGCwiuHxfEMI = _uVraCHeqaBoOMMmD.getUint8(17);
  const _qzHURavwJKwtLXMg = _uVraCHeqaBoOMMmD.getUint8(18 + _wAPAgGCwiuHxfEMI);
  let _yEgXjldeASOvwHMg = false;
  if (_qzHURavwJKwtLXMg === 1) {} else if (_qzHURavwJKwtLXMg === 2) {
    _yEgXjldeASOvwHMg = true;
  } else {
    return {
      hasError: true,
      message: '不支持的命令，仅支持TCP(01)和UDP(02)'
    };
  }
  let _eqdQStiJHICQvIKi = 19 + _wAPAgGCwiuHxfEMI;
  const _xhYRWGDxxNlSmeBh = _uVraCHeqaBoOMMmD.getUint16(_eqdQStiJHICQvIKi);
  _eqdQStiJHICQvIKi += 2;
  const _ovBYndTgfRATaVcm = _uVraCHeqaBoOMMmD.getUint8(_eqdQStiJHICQvIKi++);
  let _KiIHVuWZcqGQOnqM = '';
  switch (_ovBYndTgfRATaVcm) {
    case 1:
      _KiIHVuWZcqGQOnqM = Array.from(new Uint8Array(_AcHYqnSCbeRODHaZ.slice(_eqdQStiJHICQvIKi, _eqdQStiJHICQvIKi + 4))).join('.');
      _eqdQStiJHICQvIKi += 4;
      break;
    case 2:
      const _aFAPiGxueejQcUZO = _uVraCHeqaBoOMMmD.getUint8(_eqdQStiJHICQvIKi++);
      _KiIHVuWZcqGQOnqM = new TextDecoder().decode(_AcHYqnSCbeRODHaZ.slice(_eqdQStiJHICQvIKi, _eqdQStiJHICQvIKi + _aFAPiGxueejQcUZO));
      _eqdQStiJHICQvIKi += _aFAPiGxueejQcUZO;
      break;
    case 3:
      const _eDTBLlmSULbZlsfl = [];
      for (let _wxyJCZrpMXbNohHL = 0; _wxyJCZrpMXbNohHL < 8; _wxyJCZrpMXbNohHL++) {
        _eDTBLlmSULbZlsfl.push(_uVraCHeqaBoOMMmD.getUint16(_eqdQStiJHICQvIKi).toString(16).padStart(4, '0'));
        _eqdQStiJHICQvIKi += 2;
      }
      _KiIHVuWZcqGQOnqM = _eDTBLlmSULbZlsfl.join(':').replace(/(^|:)0+(\w)/g, '$1$2');
      break;
    default:
      return {
        hasError: true,
        message: '不支持的地址类型'
      };
  }
  return {
    hasError: false,
    addressRemote: _KiIHVuWZcqGQOnqM,
    portRemote: _xhYRWGDxxNlSmeBh,
    rawDataIndex: _eqdQStiJHICQvIKi,
    vlessVersion: _tBNsuzUcCBCjKVtS,
    isUDP: _yEgXjldeASOvwHMg,
    addressType: _ovBYndTgfRATaVcm
  };
}
function _mZEFqDdefuQLTLkP(_yydFfCBtqOMbBJqh, _kOSqyhJUMUwDhyWX, _mPuPWIpKrwxFHFGk, _zgRrmXtZKpKAlcKQ = null) {
  let _JXSWBsZvIpwSLPLF = false;
  let _IUhSdoucZbKTMGZH = false;
  _yydFfCBtqOMbBJqh.readable.pipeTo(new WritableStream({
    write(_OgNIoGPboXGYzOmL) {
      _IUhSdoucZbKTMGZH = true;
      if (_kOSqyhJUMUwDhyWX.readyState === _QEJdpPhEDYEgTVvO) {
        if (!_JXSWBsZvIpwSLPLF) {
          const _FCnqJykPDnPzkoLY = new Uint8Array(_mPuPWIpKrwxFHFGk.byteLength + _OgNIoGPboXGYzOmL.byteLength);
          _FCnqJykPDnPzkoLY.set(new Uint8Array(_mPuPWIpKrwxFHFGk), 0);
          _FCnqJykPDnPzkoLY.set(new Uint8Array(_OgNIoGPboXGYzOmL), _mPuPWIpKrwxFHFGk.byteLength);
          _kOSqyhJUMUwDhyWX.send(_FCnqJykPDnPzkoLY.buffer);
          _JXSWBsZvIpwSLPLF = true;
        } else {
          _kOSqyhJUMUwDhyWX.send(_OgNIoGPboXGYzOmL);
        }
      }
    },
    close() {
      if (!_IUhSdoucZbKTMGZH && _zgRrmXtZKpKAlcKQ) {
        _zgRrmXtZKpKAlcKQ();
        return;
      }
      if (_kOSqyhJUMUwDhyWX.readyState === _QEJdpPhEDYEgTVvO) {
        _kOSqyhJUMUwDhyWX.close(1000, '正常关闭');
      }
    },
    abort() {
      _YdTCmADoStVhxqAr(_yydFfCBtqOMbBJqh);
    }
  })).catch(_NPIgDwFOuJSDEINh => {
    _YdTCmADoStVhxqAr(_yydFfCBtqOMbBJqh);
    if (_kOSqyhJUMUwDhyWX.readyState === _QEJdpPhEDYEgTVvO) {
      _kOSqyhJUMUwDhyWX.close(1011, '数据传输错误');
    }
  });
}
function _YdTCmADoStVhxqAr(_GbMWjTQriDanFzbo) {
  if (_GbMWjTQriDanFzbo) {
    try {
      _GbMWjTQriDanFzbo.close();
    } catch (_HxxmKCJNKjBfzvLh) {}
  }
}
function _kRumDkXbggFhylJe(_wIzsIbwvCxKTSDUo) {
  const _vwCLUJzjyWmZrxUQ = Array.from(_wIzsIbwvCxKTSDUo, _esBxyJxBtBhwmOSy => _esBxyJxBtBhwmOSy.toString(16).padStart(2, '0')).join('');
  return `${_vwCLUJzjyWmZrxUQ.slice(0, 8)}-${_vwCLUJzjyWmZrxUQ.slice(8, 12)}-${_vwCLUJzjyWmZrxUQ.slice(12, 16)}-${_vwCLUJzjyWmZrxUQ.slice(16, 20)}-${_vwCLUJzjyWmZrxUQ.slice(20)}`;
}
async function _fjrAwlBoXeugMEtG(_ovBYndTgfRATaVcm, _EmKoZZsFEniLVMbr, _YATKDVkcsTEMnNCy, _HtEyKxSBDjNlfnqT) {
  const {
    username: _exioVRlQyimggynB,
    password: _sAEqhGxeyWOQphmT,
    hostname: _LoQKNzLGIjZKDJBr,
    port: _xhYRWGDxxNlSmeBh
  } = _HtEyKxSBDjNlfnqT;
  const _GbMWjTQriDanFzbo = connect({
    hostname: _LoQKNzLGIjZKDJBr,
    port: _xhYRWGDxxNlSmeBh
  });
  const _MwKEthMPZbbjHevW = new Uint8Array([5, 2, 0, 2]);
  const _SPVMNWhDwPgXjAwx = _GbMWjTQriDanFzbo.writable.getWriter();
  await _SPVMNWhDwPgXjAwx.write(_MwKEthMPZbbjHevW);
  const _CakOrdMlcZyanwNW = _GbMWjTQriDanFzbo.readable.getReader();
  const _uEDOkNWMCoqnyfjp = new TextEncoder();
  let _hSsVxiFbSxmyvYZg = (await _CakOrdMlcZyanwNW.read()).value;
  if (_hSsVxiFbSxmyvYZg[0] !== 0x05) {
    throw new Error(`socks server version error: ${_hSsVxiFbSxmyvYZg[0]} expected: 5`);
  }
  if (_hSsVxiFbSxmyvYZg[1] === 0xff) {
    throw new Error("no acceptable methods");
  }
  if (_hSsVxiFbSxmyvYZg[1] === 0x02) {
    if (!_exioVRlQyimggynB || !_sAEqhGxeyWOQphmT) {
      throw new Error("please provide username/password");
    }
    const _HquxffLDpQRlsWJc = new Uint8Array([1, _exioVRlQyimggynB.length, ..._uEDOkNWMCoqnyfjp.encode(_exioVRlQyimggynB), _sAEqhGxeyWOQphmT.length, ..._uEDOkNWMCoqnyfjp.encode(_sAEqhGxeyWOQphmT)]);
    await _SPVMNWhDwPgXjAwx.write(_HquxffLDpQRlsWJc);
    _hSsVxiFbSxmyvYZg = (await _CakOrdMlcZyanwNW.read()).value;
    if (_hSsVxiFbSxmyvYZg[0] !== 0x01 || _hSsVxiFbSxmyvYZg[1] !== 0x00) {
      throw new Error("fail to auth socks server");
    }
  }
  let _uFJgBzYPmlsbkFIN;
  switch (_ovBYndTgfRATaVcm) {
    case 1:
      _uFJgBzYPmlsbkFIN = new Uint8Array([1, ..._EmKoZZsFEniLVMbr.split('.').map(Number)]);
      break;
    case 2:
      _uFJgBzYPmlsbkFIN = new Uint8Array([3, _EmKoZZsFEniLVMbr.length, ..._uEDOkNWMCoqnyfjp.encode(_EmKoZZsFEniLVMbr)]);
      break;
    case 3:
      _uFJgBzYPmlsbkFIN = new Uint8Array([4, ..._EmKoZZsFEniLVMbr.split(':').flatMap(_KzsjCyGuEgbfiPvR => [parseInt(_KzsjCyGuEgbfiPvR.slice(0, 2), 16), parseInt(_KzsjCyGuEgbfiPvR.slice(2), 16)])]);
      break;
    default:
      throw new Error(`invalid addressType is ${_ovBYndTgfRATaVcm}`);
  }
  const _CuZoRZuxzJSvlapX = new Uint8Array([5, 1, 0, ..._uFJgBzYPmlsbkFIN, _YATKDVkcsTEMnNCy >> 8, _YATKDVkcsTEMnNCy & 0xff]);
  await _SPVMNWhDwPgXjAwx.write(_CuZoRZuxzJSvlapX);
  _hSsVxiFbSxmyvYZg = (await _CakOrdMlcZyanwNW.read()).value;
  if (_hSsVxiFbSxmyvYZg[1] === 0x00) {} else {
    throw new Error("fail to open socks connection");
  }
  _SPVMNWhDwPgXjAwx.releaseLock();
  _CakOrdMlcZyanwNW.releaseLock();
  return _GbMWjTQriDanFzbo;
}
async function _WZAybXjZwWdxgmSF(_ovBYndTgfRATaVcm, _EmKoZZsFEniLVMbr, _YATKDVkcsTEMnNCy, _HtEyKxSBDjNlfnqT) {
  const {
    username: _exioVRlQyimggynB,
    password: _sAEqhGxeyWOQphmT,
    hostname: _LoQKNzLGIjZKDJBr,
    port: _xhYRWGDxxNlSmeBh
  } = _HtEyKxSBDjNlfnqT;
  const _CBgzNgcNwNInurob = await connect({
    hostname: _LoQKNzLGIjZKDJBr,
    port: _xhYRWGDxxNlSmeBh
  });

  // 构建HTTP CONNECT请求
  let _auRajUSIZvlJyYRa = `CONNECT ${_EmKoZZsFEniLVMbr}:${_YATKDVkcsTEMnNCy} HTTP/1.1\r\n`;
  _auRajUSIZvlJyYRa += `Host: ${_EmKoZZsFEniLVMbr}:${_YATKDVkcsTEMnNCy}\r\n`;

  // 添加代理认证（如果需要）
  if (_exioVRlQyimggynB && _sAEqhGxeyWOQphmT) {
    const _DhCYBZTICzkEzdyl = `${_exioVRlQyimggynB}:${_sAEqhGxeyWOQphmT}`;
    const _QJbsnpilIyFderpJ = btoa(_DhCYBZTICzkEzdyl);
    _auRajUSIZvlJyYRa += `Proxy-Authorization: Basic ${_QJbsnpilIyFderpJ}\r\n`;
  }
  _auRajUSIZvlJyYRa += `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36\r\n`;
  _auRajUSIZvlJyYRa += `Proxy-Connection: Keep-Alive\r\n`;
  _auRajUSIZvlJyYRa += `Connection: Keep-Alive\r\n`; // 添加标准 Connection 头
  _auRajUSIZvlJyYRa += `\r\n`;
  try {
    // 发送连接请求
    const _SPVMNWhDwPgXjAwx = _CBgzNgcNwNInurob.writable.getWriter();
    await _SPVMNWhDwPgXjAwx.write(new TextEncoder().encode(_auRajUSIZvlJyYRa));
    _SPVMNWhDwPgXjAwx.releaseLock();
  } catch (_NPIgDwFOuJSDEINh) {
    console.error('发送HTTP CONNECT请求失败:', _NPIgDwFOuJSDEINh);
    throw new Error(`发送HTTP CONNECT请求失败: ${_NPIgDwFOuJSDEINh.message}`);
  }

  // 读取HTTP响应
  const _CakOrdMlcZyanwNW = _CBgzNgcNwNInurob.readable.getReader();
  let _LXhgMYCiGfORjUam = '';
  let _obmrACTDYmHpyJrm = false;
  let _uObfBpQsNYlxxTwf = new Uint8Array(0);
  try {
    while (true) {
      const {
        value: _uzpLGVWypLjaJcuX,
        done: _jYGkzrPsRsAqkXyO
      } = await _CakOrdMlcZyanwNW.read();
      if (_jYGkzrPsRsAqkXyO) {
        console.error('HTTP代理连接中断');
        throw new Error('HTTP代理连接中断');
      }

      // 合并接收到的数据
      const _WbJgWkfIECYKhgMP = new Uint8Array(_uObfBpQsNYlxxTwf.length + _uzpLGVWypLjaJcuX.length);
      _WbJgWkfIECYKhgMP.set(_uObfBpQsNYlxxTwf);
      _WbJgWkfIECYKhgMP.set(_uzpLGVWypLjaJcuX, _uObfBpQsNYlxxTwf.length);
      _uObfBpQsNYlxxTwf = _WbJgWkfIECYKhgMP;

      // 将收到的数据转换为文本
      _LXhgMYCiGfORjUam = new TextDecoder().decode(_uObfBpQsNYlxxTwf);

      // 检查是否收到完整的HTTP响应头
      if (_LXhgMYCiGfORjUam.includes('\r\n\r\n')) {
        // 分离HTTP头和可能的数据部分
        const _VTSbnMTKBEiQFfJY = _LXhgMYCiGfORjUam.indexOf('\r\n\r\n') + 4;
        const _WKhpHDoVLvCJcztl = _LXhgMYCiGfORjUam.substring(0, _VTSbnMTKBEiQFfJY);

        // 检查响应状态
        if (_WKhpHDoVLvCJcztl.startsWith('HTTP/1.1 200') || _WKhpHDoVLvCJcztl.startsWith('HTTP/1.0 200')) {
          _obmrACTDYmHpyJrm = true;

          // 如果响应头之后还有数据，我们需要保存这些数据以便后续处理
          if (_VTSbnMTKBEiQFfJY < _uObfBpQsNYlxxTwf.length) {
            const _aGisiTJjRVBbMxbU = _uObfBpQsNYlxxTwf.slice(_VTSbnMTKBEiQFfJY);
            // 创建一个缓冲区来存储这些数据，以便稍后使用
            const _USIWYDMkCPNOQLEi = new ReadableStream({
              start(_YeBVbdTtQZmEWGdB) {
                _YeBVbdTtQZmEWGdB.enqueue(_aGisiTJjRVBbMxbU);
              }
            });

            // 创建一个新的TransformStream来处理额外数据
            const {
              readable: _xVAHdWAxfJJbMdAn,
              writable: _BGgAxlbjfqsnRTQk
            } = new TransformStream();
            _USIWYDMkCPNOQLEi.pipeTo(_BGgAxlbjfqsnRTQk).catch(_NPIgDwFOuJSDEINh => console.error('处理剩余数据错误:', _NPIgDwFOuJSDEINh));

            // 替换原始readable流
            // @ts-ignore
            _CBgzNgcNwNInurob.readable = _xVAHdWAxfJJbMdAn;
          }
        } else {
          const _pPgBhexFrZsZfEVY = `HTTP代理连接失败: ${_WKhpHDoVLvCJcztl.split('\r\n')[0]}`;
          console.error(_pPgBhexFrZsZfEVY);
          throw new Error(_pPgBhexFrZsZfEVY);
        }
        break;
      }
    }
  } catch (_NPIgDwFOuJSDEINh) {
    _CakOrdMlcZyanwNW.releaseLock();
    throw new Error(`处理HTTP代理响应失败: ${_NPIgDwFOuJSDEINh.message}`);
  }
  _CakOrdMlcZyanwNW.releaseLock();
  if (!_obmrACTDYmHpyJrm) {
    throw new Error('HTTP代理连接失败: 未收到成功响应');
  }
  return _CBgzNgcNwNInurob;
}
async function _yJXYfEpzGKGjzdZS(_FmJYhZOQqjdGWRuF, _WlcycYqcQKCTQABm) {
  let _ieFmiBqbvtSAsTaY = false;
  const _KUivZlORKWcxwnVA = new TransformStream({
    start(_YeBVbdTtQZmEWGdB) {},
    transform(_OgNIoGPboXGYzOmL, _YeBVbdTtQZmEWGdB) {
      for (let _PKWIoeQplQurLKDr = 0; _PKWIoeQplQurLKDr < _OgNIoGPboXGYzOmL.byteLength;) {
        const _WYxxwzPHpnZnVkRk = _OgNIoGPboXGYzOmL.slice(_PKWIoeQplQurLKDr, _PKWIoeQplQurLKDr + 2);
        const _UPKtvJqelvgfoltJ = new DataView(_WYxxwzPHpnZnVkRk).getUint16(0);
        const _UMUyzzwguoOVtFIv = new Uint8Array(_OgNIoGPboXGYzOmL.slice(_PKWIoeQplQurLKDr + 2, _PKWIoeQplQurLKDr + 2 + _UPKtvJqelvgfoltJ));
        _PKWIoeQplQurLKDr = _PKWIoeQplQurLKDr + 2 + _UPKtvJqelvgfoltJ;
        _YeBVbdTtQZmEWGdB.enqueue(_UMUyzzwguoOVtFIv);
      }
    },
    flush(_YeBVbdTtQZmEWGdB) {}
  });
  _KUivZlORKWcxwnVA.readable.pipeTo(new WritableStream({
    async write(_OgNIoGPboXGYzOmL) {
      const _LKHhAtkDbtaIIzGZ = await fetch('https://1.1.1.1/dns-query', {
        method: 'POST',
        headers: {
          'content-type': 'application/dns-message'
        },
        body: _OgNIoGPboXGYzOmL
      });
      const _MERhXSutYyuEJiLC = await _LKHhAtkDbtaIIzGZ.arrayBuffer();
      const _DEYNbxmLcIctgQeX = _MERhXSutYyuEJiLC.byteLength;
      const _LRUoUpGTOROkCkIA = new Uint8Array([_DEYNbxmLcIctgQeX >> 8 & 0xff, _DEYNbxmLcIctgQeX & 0xff]);
      if (_FmJYhZOQqjdGWRuF.readyState === _QEJdpPhEDYEgTVvO) {
        if (_ieFmiBqbvtSAsTaY) {
          _FmJYhZOQqjdGWRuF.send(await new Blob([_LRUoUpGTOROkCkIA, _MERhXSutYyuEJiLC]).arrayBuffer());
        } else {
          _FmJYhZOQqjdGWRuF.send(await new Blob([_WlcycYqcQKCTQABm, _LRUoUpGTOROkCkIA, _MERhXSutYyuEJiLC]).arrayBuffer());
          _ieFmiBqbvtSAsTaY = true;
        }
      }
    }
  })).catch(_yyFJvTPoWSMdBNyz => {});
  const _SPVMNWhDwPgXjAwx = _KUivZlORKWcxwnVA.writable.getWriter();
  return {
    write(_OgNIoGPboXGYzOmL) {
      _SPVMNWhDwPgXjAwx.write(_OgNIoGPboXGYzOmL);
    }
  };
}

// ========== 必要常量和依赖 ==========
const _QEJdpPhEDYEgTVvO = 1;
import { connect } from 'cloudflare:sockets';
async function _mFAQoBxPHSxoUhpA(_dfJiXryyApxlWbNN) {
  _dfJiXryyApxlWbNN = _dfJiXryyApxlWbNN.toLowerCase();
  let _SlRsHSKlmWFNzuyx = _dfJiXryyApxlWbNN,
    _zkzCagUjBjSQVCvB = 443;
  if (_dfJiXryyApxlWbNN.includes('.tp')) {
    const _KhyUksxJtWAcaPHs = _dfJiXryyApxlWbNN.match(/\.tp(\d+)/);
    if (_KhyUksxJtWAcaPHs) _zkzCagUjBjSQVCvB = parseInt(_KhyUksxJtWAcaPHs[1], 10);
    return [_SlRsHSKlmWFNzuyx, _zkzCagUjBjSQVCvB];
  }
  if (_dfJiXryyApxlWbNN.includes(']:')) {
    const _JnLDiNUlqZyvhLyf = _dfJiXryyApxlWbNN.split(']:');
    _SlRsHSKlmWFNzuyx = _JnLDiNUlqZyvhLyf[0] + ']';
    _zkzCagUjBjSQVCvB = parseInt(_JnLDiNUlqZyvhLyf[1], 10) || _zkzCagUjBjSQVCvB;
  } else if (_dfJiXryyApxlWbNN.includes(':') && !_dfJiXryyApxlWbNN.startsWith('[')) {
    const _tkbgfuThAHBewlaS = _dfJiXryyApxlWbNN.lastIndexOf(':');
    _SlRsHSKlmWFNzuyx = _dfJiXryyApxlWbNN.slice(0, _tkbgfuThAHBewlaS);
    _zkzCagUjBjSQVCvB = parseInt(_dfJiXryyApxlWbNN.slice(_tkbgfuThAHBewlaS + 1), 10) || _zkzCagUjBjSQVCvB;
  }
  return [_SlRsHSKlmWFNzuyx, _zkzCagUjBjSQVCvB];
}
async function _ZPdNVfQVxRJxLJTf(_RbSdrTWWJvbgHbqV) {
  const _gHRLpdwKVHIERkTg = new URL(_RbSdrTWWJvbgHbqV.url);
  const {
    pathname: _moOSnPeqZHzLaWJP,
    searchParams: _nJVnuESKWWjMESKO
  } = _gHRLpdwKVHIERkTg;
  const _btFddhUmvRPfoqHk = _moOSnPeqZHzLaWJP.toLowerCase();

  // 初始化
  _bvxUOgfHxvmQuQor = _nJVnuESKWWjMESKO.get('socks5') || _nJVnuESKWWjMESKO.get('http') || null;
  _udAFYAanLbzUwnhC = _nJVnuESKWWjMESKO.has('globalproxy') || false;

  // 统一处理反代IP参数 (优先级最高,使用正则一次匹配)
  const _cnZkcFtgqPBGDKqd = _btFddhUmvRPfoqHk.match(/\/(proxyip[.=]|pyip=|ip=)(.+)/);
  if (_nJVnuESKWWjMESKO.has('proxyip')) {
    const _AdgOadgCGgETATTJ = _nJVnuESKWWjMESKO.get('proxyip');
    _pGZxAKQjMsjtQkWf = _AdgOadgCGgETATTJ.includes(',') ? _AdgOadgCGgETATTJ.split(',')[Math.floor(Math.random() * _AdgOadgCGgETATTJ.split(',').length)] : _AdgOadgCGgETATTJ;
    return;
  } else if (_cnZkcFtgqPBGDKqd) {
    const _AdgOadgCGgETATTJ = _cnZkcFtgqPBGDKqd[1] === 'proxyip.' ? `proxyip.${_cnZkcFtgqPBGDKqd[2]}` : _cnZkcFtgqPBGDKqd[2];
    _pGZxAKQjMsjtQkWf = _AdgOadgCGgETATTJ.includes(',') ? _AdgOadgCGgETATTJ.split(',')[Math.floor(Math.random() * _AdgOadgCGgETATTJ.split(',').length)] : _AdgOadgCGgETATTJ;
    return;
  }

  // 处理SOCKS5/HTTP代理参数
  let _PPFQkgdZfiJnBnJR;
  if (_PPFQkgdZfiJnBnJR = _moOSnPeqZHzLaWJP.match(/\/(socks5?|http):\/?\/?(.+)/i)) {
    // 格式: /socks5://... 或 /http://...
    _qDBZHdThPAHXMlQn = _PPFQkgdZfiJnBnJR[1].toLowerCase() === 'http' ? 'http' : 'socks5';
    _bvxUOgfHxvmQuQor = _PPFQkgdZfiJnBnJR[2].split('#')[0];
    _udAFYAanLbzUwnhC = true;

    // 处理Base64编码的用户名密码
    if (_bvxUOgfHxvmQuQor.includes('@')) {
      const _dcOdZMizpZvZoSld = _bvxUOgfHxvmQuQor.lastIndexOf('@');
      let _aEFcPUJpLAUqOAus = _bvxUOgfHxvmQuQor.substring(0, _dcOdZMizpZvZoSld).replaceAll('%3D', '=');
      if (/^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i.test(_aEFcPUJpLAUqOAus) && !_aEFcPUJpLAUqOAus.includes(':')) {
        _aEFcPUJpLAUqOAus = atob(_aEFcPUJpLAUqOAus);
      }
      _bvxUOgfHxvmQuQor = `${_aEFcPUJpLAUqOAus}@${_bvxUOgfHxvmQuQor.substring(_dcOdZMizpZvZoSld + 1)}`;
    }
  } else if (_PPFQkgdZfiJnBnJR = _moOSnPeqZHzLaWJP.match(/\/(g?s5|socks5|g?http)=(.+)/i)) {
    // 格式: /socks5=... 或 /s5=... 或 /gs5=... 或 /http=... 或 /ghttp=...
    const _hZPOysbDBVOJKzwY = _PPFQkgdZfiJnBnJR[1].toLowerCase();
    _bvxUOgfHxvmQuQor = _PPFQkgdZfiJnBnJR[2];
    _qDBZHdThPAHXMlQn = _hZPOysbDBVOJKzwY.includes('http') ? 'http' : 'socks5';
    _udAFYAanLbzUwnhC = _hZPOysbDBVOJKzwY.startsWith('g') || _udAFYAanLbzUwnhC; // gs5 或 ghttp 开头启用全局
  }

  // 解析SOCKS5地址
  if (_bvxUOgfHxvmQuQor) {
    try {
      _HtEyKxSBDjNlfnqT = await _LVyqzfXaiIhALIjM(_bvxUOgfHxvmQuQor);
      _qDBZHdThPAHXMlQn = _nJVnuESKWWjMESKO.get('http') ? 'http' : _qDBZHdThPAHXMlQn;
    } catch (_NPIgDwFOuJSDEINh) {
      console.error('解析SOCKS5地址失败:', _NPIgDwFOuJSDEINh.message);
      _qDBZHdThPAHXMlQn = null;
    }
  } else _qDBZHdThPAHXMlQn = null;
}
async function _LVyqzfXaiIhALIjM(_KiIHVuWZcqGQOnqM) {
  const _FFOgqsGauOLpfsrn = _KiIHVuWZcqGQOnqM.lastIndexOf("@");
  let [_zEiiQcmRPXYHzcse, _pvJafwIWIyFBzcIT] = _FFOgqsGauOLpfsrn === -1 ? [_KiIHVuWZcqGQOnqM, undefined] : [_KiIHVuWZcqGQOnqM.substring(_FFOgqsGauOLpfsrn + 1), _KiIHVuWZcqGQOnqM.substring(0, _FFOgqsGauOLpfsrn)];
  let _exioVRlQyimggynB, _sAEqhGxeyWOQphmT, _LoQKNzLGIjZKDJBr, _xhYRWGDxxNlSmeBh;
  if (_pvJafwIWIyFBzcIT) {
    const _VdytYcKCtWHstkJU = _pvJafwIWIyFBzcIT.split(":");
    if (_VdytYcKCtWHstkJU.length !== 2) {
      throw new Error('无效的 SOCKS 地址格式：认证部分必须是 "username:password" 的形式');
    }
    [_exioVRlQyimggynB, _sAEqhGxeyWOQphmT] = _VdytYcKCtWHstkJU;
  }
  const _yUWCvAIPfDkwzTOo = _zEiiQcmRPXYHzcse.split(":");
  if (_yUWCvAIPfDkwzTOo.length > 2 && _zEiiQcmRPXYHzcse.includes("]:")) {
    _xhYRWGDxxNlSmeBh = Number(_zEiiQcmRPXYHzcse.split("]:")[1].replace(/[^\d]/g, ''));
    _LoQKNzLGIjZKDJBr = _zEiiQcmRPXYHzcse.split("]:")[0] + "]";
  } else if (_yUWCvAIPfDkwzTOo.length === 2) {
    _xhYRWGDxxNlSmeBh = Number(_yUWCvAIPfDkwzTOo.pop().replace(/[^\d]/g, ''));
    _LoQKNzLGIjZKDJBr = _yUWCvAIPfDkwzTOo.join(":");
  } else {
    _xhYRWGDxxNlSmeBh = 80;
    _LoQKNzLGIjZKDJBr = _zEiiQcmRPXYHzcse;
  }
  if (isNaN(_xhYRWGDxxNlSmeBh)) {
    throw new Error('无效的 SOCKS 地址格式：端口号必须是数字');
  }
  const _GCHdLQafIAdSllGl = /^\[.*\]$/;
  if (_LoQKNzLGIjZKDJBr.includes(":") && !_GCHdLQafIAdSllGl.test(_LoQKNzLGIjZKDJBr)) {
    throw new Error('无效的 SOCKS 地址格式：IPv6 地址必须用方括号括起来，如 [2001:db8::1]');
  }
  return {
    username: _exioVRlQyimggynB,
    password: _sAEqhGxeyWOQphmT,
    hostname: _LoQKNzLGIjZKDJBr,
    port: _xhYRWGDxxNlSmeBh
  };
}