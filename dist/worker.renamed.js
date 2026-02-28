const _QvETAnGjZwrMdAvL = '276c88bd-165f-4361-aef7-f58f490d7dc3'; // 建议修改为自己的规范化UUID，如不需要可留空 @GoodLiux优化版
let _PRarosdYbfkwOKgx = '',
  _JKXxxCPpvdeVhrTq = null,
  _dIznecnnBzwLohMk = false,
  _BkmCiAnjvxarOBAm = '',
  _NslZiOVxzoZjcOVM = {};
export default {
  async fetch(_NKaUpgnSaskSlqRZ) {
    try {
      const _ifHTWWuQJurDBedM = new URL(_NKaUpgnSaskSlqRZ.url);
      // 检查是否为 WebSocket 升级请求
      const _oyyioZMxBhbwPALz = _NKaUpgnSaskSlqRZ.headers.get('Upgrade');
      if (_oyyioZMxBhbwPALz !== 'websocket') {
        return new Response('Hello World!', {
          status: 200
        });
      } else {
        _PRarosdYbfkwOKgx = _PRarosdYbfkwOKgx ? _PRarosdYbfkwOKgx : _NKaUpgnSaskSlqRZ.cf.colo + '.proxyIP.cmliuSSSS.NET';
        await _IYlgOsfCygCXyTMO(_NKaUpgnSaskSlqRZ);
        const [_eeCCbEvMvTncOQUZ, _gkAXsDkKQefOwJid] = await _NJauVcOufOyalUKT(_PRarosdYbfkwOKgx);
        return await _GIsRDmHCDoRUoDRC(_NKaUpgnSaskSlqRZ, {
          parsedSocks5Address: _NslZiOVxzoZjcOVM,
          enableSocks: _JKXxxCPpvdeVhrTq,
          enableGlobalSocks: _dIznecnnBzwLohMk,
          ProxyIP: _eeCCbEvMvTncOQUZ,
          ProxyPort: _gkAXsDkKQefOwJid
        });
      }
    } catch (_rjCovYYkCuVNlIWp) {
      return new Response(_rjCovYYkCuVNlIWp && _rjCovYYkCuVNlIWp.stack ? _rjCovYYkCuVNlIWp.stack : String(_rjCovYYkCuVNlIWp), {
        status: 500
      });
    }
  }
};
async function _GIsRDmHCDoRUoDRC(_NKaUpgnSaskSlqRZ, _tolgWdNVcCKbBJFS) {
  const {
    parsedSocks5Address: _NslZiOVxzoZjcOVM,
    enableSocks: _HqvhBLtnRkoCwCAv,
    enableGlobalSocks: _xMordStLVhiVQbRq,
    ProxyIP: _jDeFsIPCucRGQlSD,
    ProxyPort: _sYUiLkmPrBahzKAf
  } = _tolgWdNVcCKbBJFS;
  const _ZihPEQdUtaDXbsxN = new WebSocketPair();
  const [_pvTBVRZqcjVjRrEx, _KFOlkgEHMZhtDLKf] = Object.values(_ZihPEQdUtaDXbsxN);
  _KFOlkgEHMZhtDLKf.accept();

  // WebSocket心跳机制，每30秒发送一次
  let _dkkPnjPqKJmfNplf = setInterval(() => {
    if (_KFOlkgEHMZhtDLKf.readyState === _KpyTkrHDDdhwPPdz) {
      try {
        _KFOlkgEHMZhtDLKf.send(new Uint8Array(0));
      } catch (_ybUVWsSPomaaeSTx) {}
    }
  }, 30000);
  function _MBqFOznqxjbZcsnn() {
    if (_dkkPnjPqKJmfNplf) {
      clearInterval(_dkkPnjPqKJmfNplf);
      _dkkPnjPqKJmfNplf = null;
    }
  }
  _KFOlkgEHMZhtDLKf.addEventListener('close', _MBqFOznqxjbZcsnn);
  _KFOlkgEHMZhtDLKf.addEventListener('error', _MBqFOznqxjbZcsnn);

  // 处理 WebSocket 数据流
  const _KGwBiGNTKZtCMoaF = _NKaUpgnSaskSlqRZ.headers.get('sec-websocket-protocol') || '';
  const _rzScWqjdhuKzgSnt = _gRsXweTeRdmylugA(_KFOlkgEHMZhtDLKf, _KGwBiGNTKZtCMoaF);
  let _DgKgVMhBhKFffbeX = null;
  let _QcGYAbisUdjbjFeC = null;
  let _GefUmVbtRmvkrzuz = false;
  _rzScWqjdhuKzgSnt.pipeTo(new WritableStream({
    async write(_PpvofKANtQdmJzdN) {
      if (_GefUmVbtRmvkrzuz && _QcGYAbisUdjbjFeC) {
        return _QcGYAbisUdjbjFeC(_PpvofKANtQdmJzdN);
      }
      if (_DgKgVMhBhKFffbeX) {
        try {
          const _qVBCSbxPPgGkrMld = _DgKgVMhBhKFffbeX.writable.getWriter();
          await _qVBCSbxPPgGkrMld.write(_PpvofKANtQdmJzdN);
          _qVBCSbxPPgGkrMld.releaseLock();
        } catch (_rjCovYYkCuVNlIWp) {
          _bchwAoeJiDToQcCJ(_DgKgVMhBhKFffbeX);
          throw _rjCovYYkCuVNlIWp;
        }
        return;
      }
      const _lKFKHfaENPZsOBEA = _mUDlCixSwbgQFUnb(_PpvofKANtQdmJzdN);
      if (_lKFKHfaENPZsOBEA.hasError) throw new Error(_lKFKHfaENPZsOBEA.message);
      if (_lKFKHfaENPZsOBEA.addressRemote.includes(atob('c3BlZWQuY2xvdWRmbGFyZS5jb20='))) throw new Error('Access');
      const _TDloRORYzpOViGUi = new Uint8Array([_lKFKHfaENPZsOBEA.vlessVersion[0], 0]);
      const _tmtgCBbuWPFoZATR = _PpvofKANtQdmJzdN.slice(_lKFKHfaENPZsOBEA.rawDataIndex);
      if (_lKFKHfaENPZsOBEA.isUDP) {
        if (_lKFKHfaENPZsOBEA.portRemote === 53) {
          _GefUmVbtRmvkrzuz = true;
          const {
            write: _HCvhzCyOeNqkQWsq
          } = await _QOZAPuiVOmPjlmTt(_KFOlkgEHMZhtDLKf, _TDloRORYzpOViGUi);
          _QcGYAbisUdjbjFeC = _HCvhzCyOeNqkQWsq;
          _QcGYAbisUdjbjFeC(_tmtgCBbuWPFoZATR);
          return;
        } else {
          throw new Error('UDP代理仅支持DNS(端口53)');
        }
      }
      async function _TNSAToHrBocDOcPX(_lxjLJymtBmAmZgGY, _RMSpWMICAHxJzECF) {
        const _dqlkqbPbvakRDBsi = await connect({
          hostname: _lxjLJymtBmAmZgGY,
          port: _RMSpWMICAHxJzECF
        }, {
          allowHalfOpen: true
        });
        _DgKgVMhBhKFffbeX = _dqlkqbPbvakRDBsi;
        const _qVBCSbxPPgGkrMld = _dqlkqbPbvakRDBsi.writable.getWriter();
        await _qVBCSbxPPgGkrMld.write(_tmtgCBbuWPFoZATR);
        _qVBCSbxPPgGkrMld.releaseLock();
        return _dqlkqbPbvakRDBsi;
      }
      async function _dRfruoqFUYdsQWSQ(_lxjLJymtBmAmZgGY, _RMSpWMICAHxJzECF) {
        const _dqlkqbPbvakRDBsi = _HqvhBLtnRkoCwCAv === 'socks5' ? await _XhZhglyGiZVsmwyp(_lKFKHfaENPZsOBEA.addressType, _lxjLJymtBmAmZgGY, _RMSpWMICAHxJzECF, _NslZiOVxzoZjcOVM) : await _cqVBHDKRqOXNfEgE(_lKFKHfaENPZsOBEA.addressType, _lxjLJymtBmAmZgGY, _RMSpWMICAHxJzECF, _NslZiOVxzoZjcOVM);
        _DgKgVMhBhKFffbeX = _dqlkqbPbvakRDBsi;
        const _qVBCSbxPPgGkrMld = _dqlkqbPbvakRDBsi.writable.getWriter();
        await _qVBCSbxPPgGkrMld.write(_tmtgCBbuWPFoZATR);
        _qVBCSbxPPgGkrMld.releaseLock();
        return _dqlkqbPbvakRDBsi;
      }
      async function _PNlIoxXcXRmoZKJP() {
        try {
          let _dqlkqbPbvakRDBsi;
          if (_HqvhBLtnRkoCwCAv === 'socks5') {
            _dqlkqbPbvakRDBsi = await _XhZhglyGiZVsmwyp(_lKFKHfaENPZsOBEA.addressType, _lKFKHfaENPZsOBEA.addressRemote, _lKFKHfaENPZsOBEA.portRemote, _NslZiOVxzoZjcOVM);
          } else if (_HqvhBLtnRkoCwCAv === 'http') {
            _dqlkqbPbvakRDBsi = await _cqVBHDKRqOXNfEgE(_lKFKHfaENPZsOBEA.addressType, _lKFKHfaENPZsOBEA.addressRemote, _lKFKHfaENPZsOBEA.portRemote, _NslZiOVxzoZjcOVM);
          } else {
            _dqlkqbPbvakRDBsi = await connect({
              hostname: _jDeFsIPCucRGQlSD,
              port: _sYUiLkmPrBahzKAf
            }, {
              allowHalfOpen: true
            });
          }
          _DgKgVMhBhKFffbeX = _dqlkqbPbvakRDBsi;
          const _qVBCSbxPPgGkrMld = _dqlkqbPbvakRDBsi.writable.getWriter();
          await _qVBCSbxPPgGkrMld.write(_tmtgCBbuWPFoZATR);
          _qVBCSbxPPgGkrMld.releaseLock();
          _dqlkqbPbvakRDBsi.closed.catch(() => {}).finally(() => {
            if (_KFOlkgEHMZhtDLKf.readyState === _KpyTkrHDDdhwPPdz) {
              _KFOlkgEHMZhtDLKf.close(1000, '连接已关闭');
            }
          });
          _DoUHYoZyEwqByaSa(_dqlkqbPbvakRDBsi, _KFOlkgEHMZhtDLKf, _TDloRORYzpOViGUi, null);
        } catch (_rjCovYYkCuVNlIWp) {
          _bchwAoeJiDToQcCJ(_DgKgVMhBhKFffbeX);
          _KFOlkgEHMZhtDLKf.close(1011, '代理连接失败: ' + (_rjCovYYkCuVNlIWp && _rjCovYYkCuVNlIWp.message ? _rjCovYYkCuVNlIWp.message : _rjCovYYkCuVNlIWp));
        }
      }
      try {
        if (_xMordStLVhiVQbRq) {
          const _dqlkqbPbvakRDBsi = await _dRfruoqFUYdsQWSQ(_lKFKHfaENPZsOBEA.addressRemote, _lKFKHfaENPZsOBEA.portRemote);
          _DoUHYoZyEwqByaSa(_dqlkqbPbvakRDBsi, _KFOlkgEHMZhtDLKf, _TDloRORYzpOViGUi, _PNlIoxXcXRmoZKJP);
        } else {
          const _dqlkqbPbvakRDBsi = await _TNSAToHrBocDOcPX(_lKFKHfaENPZsOBEA.addressRemote, _lKFKHfaENPZsOBEA.portRemote);
          _DoUHYoZyEwqByaSa(_dqlkqbPbvakRDBsi, _KFOlkgEHMZhtDLKf, _TDloRORYzpOViGUi, _PNlIoxXcXRmoZKJP);
        }
      } catch (_rjCovYYkCuVNlIWp) {
        _bchwAoeJiDToQcCJ(_DgKgVMhBhKFffbeX);
        _KFOlkgEHMZhtDLKf.close(1011, '连接失败: ' + (_rjCovYYkCuVNlIWp && _rjCovYYkCuVNlIWp.message ? _rjCovYYkCuVNlIWp.message : _rjCovYYkCuVNlIWp));
      }
    },
    close() {
      if (_DgKgVMhBhKFffbeX) {
        _bchwAoeJiDToQcCJ(_DgKgVMhBhKFffbeX);
      }
    }
  })).catch(_rjCovYYkCuVNlIWp => {
    _bchwAoeJiDToQcCJ(_DgKgVMhBhKFffbeX);
    _KFOlkgEHMZhtDLKf.close(1011, '内部错误: ' + (_rjCovYYkCuVNlIWp && _rjCovYYkCuVNlIWp.message ? _rjCovYYkCuVNlIWp.message : _rjCovYYkCuVNlIWp));
  });
  return new Response(null, {
    status: 101,
    webSocket: _pvTBVRZqcjVjRrEx
  });
}
function _gRsXweTeRdmylugA(_pwdfrQqZBsOgZknk, _KGwBiGNTKZtCMoaF) {
  return new ReadableStream({
    start(_hPZYCVqRvGXoAORN) {
      _pwdfrQqZBsOgZknk.addEventListener('message', _nbsKOZPzCZwlVPsw => {
        _hPZYCVqRvGXoAORN.enqueue(_nbsKOZPzCZwlVPsw.data);
      });
      _pwdfrQqZBsOgZknk.addEventListener('close', () => {
        _hPZYCVqRvGXoAORN.close();
      });
      _pwdfrQqZBsOgZknk.addEventListener('error', _rjCovYYkCuVNlIWp => {
        _hPZYCVqRvGXoAORN.error(_rjCovYYkCuVNlIWp);
      });
      if (_KGwBiGNTKZtCMoaF) {
        try {
          const _PPBYgsSDFeWuzcDT = atob(_KGwBiGNTKZtCMoaF.replace(/-/g, '+').replace(/_/g, '/'));
          const _ZPFMYeLaOatRHivq = Uint8Array.from(_PPBYgsSDFeWuzcDT, _HpBkdRKtwVowGdaD => _HpBkdRKtwVowGdaD.charCodeAt(0));
          _hPZYCVqRvGXoAORN.enqueue(_ZPFMYeLaOatRHivq.buffer);
        } catch (_ybUVWsSPomaaeSTx) {}
      }
    }
  });
}

// 只允许固定UUID
function _mUDlCixSwbgQFUnb(_hsaHRkuxdgfEjpHm) {
  if (_hsaHRkuxdgfEjpHm.byteLength < 24) {
    return {
      hasError: true,
      message: '无效的头部长度'
    };
  }
  const _NLfTMUMcnCvLwvbx = new DataView(_hsaHRkuxdgfEjpHm);
  const _DSkOHYJyaNrbwLjc = new Uint8Array(_hsaHRkuxdgfEjpHm.slice(0, 1));
  const _pZeLiHBXmlVIJjww = _CBQWPoxtjCjmBtEG(new Uint8Array(_hsaHRkuxdgfEjpHm.slice(1, 17)));
  if (_QvETAnGjZwrMdAvL && _pZeLiHBXmlVIJjww !== _QvETAnGjZwrMdAvL) {
    return {
      hasError: true,
      message: '无效的用户'
    };
  }
  const _GSONQEuRyUOppobf = _NLfTMUMcnCvLwvbx.getUint8(17);
  const _zohvTCANUZamhfvk = _NLfTMUMcnCvLwvbx.getUint8(18 + _GSONQEuRyUOppobf);
  let _SvSliksfzSHsDwow = false;
  if (_zohvTCANUZamhfvk === 1) {} else if (_zohvTCANUZamhfvk === 2) {
    _SvSliksfzSHsDwow = true;
  } else {
    return {
      hasError: true,
      message: '不支持的命令，仅支持TCP(01)和UDP(02)'
    };
  }
  let _XItWcGSLQhPOmqxL = 19 + _GSONQEuRyUOppobf;
  const _RMSpWMICAHxJzECF = _NLfTMUMcnCvLwvbx.getUint16(_XItWcGSLQhPOmqxL);
  _XItWcGSLQhPOmqxL += 2;
  const _KlupNMHohVoyEdKZ = _NLfTMUMcnCvLwvbx.getUint8(_XItWcGSLQhPOmqxL++);
  let _lxjLJymtBmAmZgGY = '';
  switch (_KlupNMHohVoyEdKZ) {
    case 1:
      _lxjLJymtBmAmZgGY = Array.from(new Uint8Array(_hsaHRkuxdgfEjpHm.slice(_XItWcGSLQhPOmqxL, _XItWcGSLQhPOmqxL + 4))).join('.');
      _XItWcGSLQhPOmqxL += 4;
      break;
    case 2:
      const _tsmfEJxnEDKjjtdk = _NLfTMUMcnCvLwvbx.getUint8(_XItWcGSLQhPOmqxL++);
      _lxjLJymtBmAmZgGY = new TextDecoder().decode(_hsaHRkuxdgfEjpHm.slice(_XItWcGSLQhPOmqxL, _XItWcGSLQhPOmqxL + _tsmfEJxnEDKjjtdk));
      _XItWcGSLQhPOmqxL += _tsmfEJxnEDKjjtdk;
      break;
    case 3:
      const _rDMmEAdtFFYbZPLH = [];
      for (let _SJnViSvzOlHuhbtP = 0; _SJnViSvzOlHuhbtP < 8; _SJnViSvzOlHuhbtP++) {
        _rDMmEAdtFFYbZPLH.push(_NLfTMUMcnCvLwvbx.getUint16(_XItWcGSLQhPOmqxL).toString(16).padStart(4, '0'));
        _XItWcGSLQhPOmqxL += 2;
      }
      _lxjLJymtBmAmZgGY = _rDMmEAdtFFYbZPLH.join(':').replace(/(^|:)0+(\w)/g, '$1$2');
      break;
    default:
      return {
        hasError: true,
        message: '不支持的地址类型'
      };
  }
  return {
    hasError: false,
    addressRemote: _lxjLJymtBmAmZgGY,
    portRemote: _RMSpWMICAHxJzECF,
    rawDataIndex: _XItWcGSLQhPOmqxL,
    vlessVersion: _DSkOHYJyaNrbwLjc,
    isUDP: _SvSliksfzSHsDwow,
    addressType: _KlupNMHohVoyEdKZ
  };
}
async function _DoUHYoZyEwqByaSa(_DgKgVMhBhKFffbeX, _pwdfrQqZBsOgZknk, _vgvBGhvbbQWdDlOM, _PNlIoxXcXRmoZKJP = null, _tgTdgNtzUmcIXein = 0) {
  const _mEGVSNizSDMyeLLt = 8; // 最大重试8次
  const _IlHRzjEvZeRAzaTp = 128 * 1024; // 单帧最大 128 KB
  const _aAhmbwbmNtvmMicQ = 2 * 1024 * 1024; // 最大缓存 2 MB
  const _geGiRZBwRZpxUhoQ = 10; // ms，定期 flush
  const _zMScnauMYkrBbocA = 200; // ms，初始重试延迟

  let _ZLufczQrsPSKBCNv = false;
  let _ubJfeWdCAJRJOCTp = false;
  let _lYnoVjqyjpZDqvrH = [];
  let _TENxUpOvpXbbudbR = 0;

  // --- 工具函数 ---

  const _jQzaaXEHMQacCTsT = _bOTwqCuQvFdximrt => {
    if (_bOTwqCuQvFdximrt.length === 1) return _bOTwqCuQvFdximrt[0];
    const _HQiktuQNAYoIfpen = _bOTwqCuQvFdximrt.reduce((_iJOoHJPSIxBYKeKt, _HpBkdRKtwVowGdaD) => _iJOoHJPSIxBYKeKt + _HpBkdRKtwVowGdaD.byteLength, 0);
    const _WokwedzIyQHMwCJY = new Uint8Array(_HQiktuQNAYoIfpen);
    let _XItWcGSLQhPOmqxL = 0;
    for (const _HpBkdRKtwVowGdaD of _bOTwqCuQvFdximrt) {
      _WokwedzIyQHMwCJY.set(_HpBkdRKtwVowGdaD, _XItWcGSLQhPOmqxL);
      _XItWcGSLQhPOmqxL += _HpBkdRKtwVowGdaD.byteLength;
    }
    return _WokwedzIyQHMwCJY;
  };

  // 分包发送（每帧 ≤ 128 KB）
  const _ZnmVnmRNMWYhXfrk = _ZPFMYeLaOatRHivq => {
    let _XItWcGSLQhPOmqxL = 0;
    while (_XItWcGSLQhPOmqxL < _ZPFMYeLaOatRHivq.byteLength) {
      const _koNAvSiqYLgdRigy = Math.min(_XItWcGSLQhPOmqxL + _IlHRzjEvZeRAzaTp, _ZPFMYeLaOatRHivq.byteLength);
      _pwdfrQqZBsOgZknk.send(_ZPFMYeLaOatRHivq.slice(_XItWcGSLQhPOmqxL, _koNAvSiqYLgdRigy));
      _XItWcGSLQhPOmqxL = _koNAvSiqYLgdRigy;
    }
  };
  const _VUsOpnPenpnmDvGF = () => {
    if (_pwdfrQqZBsOgZknk.readyState !== _KpyTkrHDDdhwPPdz || _lYnoVjqyjpZDqvrH.length === 0) return;
    const _WokwedzIyQHMwCJY = _jQzaaXEHMQacCTsT(_lYnoVjqyjpZDqvrH);
    _lYnoVjqyjpZDqvrH = [];
    _TENxUpOvpXbbudbR = 0;
    _ZnmVnmRNMWYhXfrk(_WokwedzIyQHMwCJY);
  };
  const _cNhFTNKEHRziHaag = setInterval(_VUsOpnPenpnmDvGF, _geGiRZBwRZpxUhoQ);

  // --- 主读循环 ---
  const _HYxunSiTTTIrlhDC = _DgKgVMhBhKFffbeX.readable.getReader();
  try {
    while (true) {
      const {
        done: _mdkrWJDDApCnCOOX,
        value: _MUbQcgzGIqimSWUM
      } = await _HYxunSiTTTIrlhDC.read();
      if (_mdkrWJDDApCnCOOX) break;
      _ubJfeWdCAJRJOCTp = true;
      if (_pwdfrQqZBsOgZknk.readyState !== _KpyTkrHDDdhwPPdz) break;

      // 首包带 vlessHeader
      if (!_ZLufczQrsPSKBCNv) {
        const _MaTipSWpYammZTFX = new Uint8Array(_vgvBGhvbbQWdDlOM.byteLength + _MUbQcgzGIqimSWUM.byteLength);
        _MaTipSWpYammZTFX.set(new Uint8Array(_vgvBGhvbbQWdDlOM), 0);
        _MaTipSWpYammZTFX.set(_MUbQcgzGIqimSWUM, _vgvBGhvbbQWdDlOM.byteLength);
        _lYnoVjqyjpZDqvrH.push(_MaTipSWpYammZTFX);
        _TENxUpOvpXbbudbR += _MaTipSWpYammZTFX.byteLength;
        _ZLufczQrsPSKBCNv = true;
      } else {
        _lYnoVjqyjpZDqvrH.push(_MUbQcgzGIqimSWUM);
        _TENxUpOvpXbbudbR += _MUbQcgzGIqimSWUM.byteLength;
      }

      // 缓存超过 2 MB 立即 flush
      if (_TENxUpOvpXbbudbR >= _aAhmbwbmNtvmMicQ) {
        _VUsOpnPenpnmDvGF();
      }
    }
    _HYxunSiTTTIrlhDC.releaseLock();
    _VUsOpnPenpnmDvGF();
    clearInterval(_cNhFTNKEHRziHaag);

    // --- 关闭逻辑 ---
    if (!_ubJfeWdCAJRJOCTp && _PNlIoxXcXRmoZKJP && _tgTdgNtzUmcIXein < _mEGVSNizSDMyeLLt) {
      const _jyZzGzTaZGpwFsFM = _zMScnauMYkrBbocA * Math.pow(2, _tgTdgNtzUmcIXein);
      console.warn(`未收到数据，${_jyZzGzTaZGpwFsFM} ms 后重试 (${_tgTdgNtzUmcIXein + 1}/${_mEGVSNizSDMyeLLt})`);
      await new Promise(_YOuaIfXJABGlwUfW => setTimeout(_YOuaIfXJABGlwUfW, _jyZzGzTaZGpwFsFM));
      await _PNlIoxXcXRmoZKJP();
      return;
    }
    if (_pwdfrQqZBsOgZknk.readyState === _KpyTkrHDDdhwPPdz) _pwdfrQqZBsOgZknk.close(1000, '正常关闭');
  } catch (_rjCovYYkCuVNlIWp) {
    _HYxunSiTTTIrlhDC.releaseLock();
    clearInterval(_cNhFTNKEHRziHaag);
    console.error('数据传输错误:', _rjCovYYkCuVNlIWp);
    _bchwAoeJiDToQcCJ(_DgKgVMhBhKFffbeX);
    if (_PNlIoxXcXRmoZKJP && _tgTdgNtzUmcIXein < _mEGVSNizSDMyeLLt) {
      const _jyZzGzTaZGpwFsFM = _zMScnauMYkrBbocA * Math.pow(2, _tgTdgNtzUmcIXein);
      console.warn(`错误重试 (${_tgTdgNtzUmcIXein + 1}/${_mEGVSNizSDMyeLLt})，将在 ${_jyZzGzTaZGpwFsFM} ms 后重试`);
      await new Promise(_YOuaIfXJABGlwUfW => setTimeout(_YOuaIfXJABGlwUfW, _jyZzGzTaZGpwFsFM));
      await _PNlIoxXcXRmoZKJP();
      return;
    }
    if (_pwdfrQqZBsOgZknk.readyState === _KpyTkrHDDdhwPPdz) {
      _pwdfrQqZBsOgZknk.close(1011, '数据传输错误');
    }
  }
}
function _bchwAoeJiDToQcCJ(_ipSZHCMCxBRKxCyy) {
  if (_ipSZHCMCxBRKxCyy) {
    try {
      _ipSZHCMCxBRKxCyy.close();
    } catch (_ybUVWsSPomaaeSTx) {}
  }
}
function _CBQWPoxtjCjmBtEG(_GwBEWKYlptFAnrpz) {
  const _bimggOqaJzGuVOuj = Array.from(_GwBEWKYlptFAnrpz, _miHrmtsRYoyeEZer => _miHrmtsRYoyeEZer.toString(16).padStart(2, '0')).join('');
  return `${_bimggOqaJzGuVOuj.slice(0, 8)}-${_bimggOqaJzGuVOuj.slice(8, 12)}-${_bimggOqaJzGuVOuj.slice(12, 16)}-${_bimggOqaJzGuVOuj.slice(16, 20)}-${_bimggOqaJzGuVOuj.slice(20)}`;
}
async function _XhZhglyGiZVsmwyp(_KlupNMHohVoyEdKZ, _NFVxWJHPuUKgKLkC, _OONmttnpwSgeszwx, _NslZiOVxzoZjcOVM) {
  const {
    username: _SgvjPFBWuLPmiTKx,
    password: _CYwRjdiOpoemTofm,
    hostname: _DgGDAJNPlryaOedJ,
    port: _RMSpWMICAHxJzECF
  } = _NslZiOVxzoZjcOVM;
  const _ipSZHCMCxBRKxCyy = connect({
    hostname: _DgGDAJNPlryaOedJ,
    port: _RMSpWMICAHxJzECF
  });
  const _ZzwBboENafuxFyim = new Uint8Array([5, 2, 0, 2]);
  const _qVBCSbxPPgGkrMld = _ipSZHCMCxBRKxCyy.writable.getWriter();
  await _qVBCSbxPPgGkrMld.write(_ZzwBboENafuxFyim);
  const _HYxunSiTTTIrlhDC = _ipSZHCMCxBRKxCyy.readable.getReader();
  const _dcZeNEvQudWQNmvl = new TextEncoder();
  let _lqwWSbIkJEXXEbJp = (await _HYxunSiTTTIrlhDC.read()).value;
  if (_lqwWSbIkJEXXEbJp[0] !== 0x05) {
    throw new Error(`socks server version error: ${_lqwWSbIkJEXXEbJp[0]} expected: 5`);
  }
  if (_lqwWSbIkJEXXEbJp[1] === 0xff) {
    throw new Error("no acceptable methods");
  }
  if (_lqwWSbIkJEXXEbJp[1] === 0x02) {
    if (!_SgvjPFBWuLPmiTKx || !_CYwRjdiOpoemTofm) {
      throw new Error("please provide username/password");
    }
    const _qgEQNSzpGWqSJHbk = new Uint8Array([1, _SgvjPFBWuLPmiTKx.length, ..._dcZeNEvQudWQNmvl.encode(_SgvjPFBWuLPmiTKx), _CYwRjdiOpoemTofm.length, ..._dcZeNEvQudWQNmvl.encode(_CYwRjdiOpoemTofm)]);
    await _qVBCSbxPPgGkrMld.write(_qgEQNSzpGWqSJHbk);
    _lqwWSbIkJEXXEbJp = (await _HYxunSiTTTIrlhDC.read()).value;
    if (_lqwWSbIkJEXXEbJp[0] !== 0x01 || _lqwWSbIkJEXXEbJp[1] !== 0x00) {
      throw new Error("fail to auth socks server");
    }
  }
  let _CDihRsZTRmtSqIrk;
  switch (_KlupNMHohVoyEdKZ) {
    case 1:
      _CDihRsZTRmtSqIrk = new Uint8Array([1, ..._NFVxWJHPuUKgKLkC.split('.').map(Number)]);
      break;
    case 2:
      _CDihRsZTRmtSqIrk = new Uint8Array([3, _NFVxWJHPuUKgKLkC.length, ..._dcZeNEvQudWQNmvl.encode(_NFVxWJHPuUKgKLkC)]);
      break;
    case 3:
      _CDihRsZTRmtSqIrk = new Uint8Array([4, ..._NFVxWJHPuUKgKLkC.split(':').flatMap(_zqLThIdYqfKmNOrF => [parseInt(_zqLThIdYqfKmNOrF.slice(0, 2), 16), parseInt(_zqLThIdYqfKmNOrF.slice(2), 16)])]);
      break;
    default:
      throw new Error(`invalid addressType is ${_KlupNMHohVoyEdKZ}`);
  }
  const _cmDbVCXvLvHMEjkk = new Uint8Array([5, 1, 0, ..._CDihRsZTRmtSqIrk, _OONmttnpwSgeszwx >> 8, _OONmttnpwSgeszwx & 0xff]);
  await _qVBCSbxPPgGkrMld.write(_cmDbVCXvLvHMEjkk);
  _lqwWSbIkJEXXEbJp = (await _HYxunSiTTTIrlhDC.read()).value;
  if (_lqwWSbIkJEXXEbJp[1] === 0x00) {} else {
    throw new Error("fail to open socks connection");
  }
  _qVBCSbxPPgGkrMld.releaseLock();
  _HYxunSiTTTIrlhDC.releaseLock();
  return _ipSZHCMCxBRKxCyy;
}
async function _cqVBHDKRqOXNfEgE(_KlupNMHohVoyEdKZ, _NFVxWJHPuUKgKLkC, _OONmttnpwSgeszwx, _NslZiOVxzoZjcOVM) {
  const {
    username: _SgvjPFBWuLPmiTKx,
    password: _CYwRjdiOpoemTofm,
    hostname: _DgGDAJNPlryaOedJ,
    port: _RMSpWMICAHxJzECF
  } = _NslZiOVxzoZjcOVM;
  const _xsuElQCWGSBExssT = await connect({
    hostname: _DgGDAJNPlryaOedJ,
    port: _RMSpWMICAHxJzECF
  });

  // 构建HTTP CONNECT请求
  let _oeuFfKYZQXrtmutS = `CONNECT ${_NFVxWJHPuUKgKLkC}:${_OONmttnpwSgeszwx} HTTP/1.1\r\n`;
  _oeuFfKYZQXrtmutS += `Host: ${_NFVxWJHPuUKgKLkC}:${_OONmttnpwSgeszwx}\r\n`;

  // 添加代理认证（如果需要）
  if (_SgvjPFBWuLPmiTKx && _CYwRjdiOpoemTofm) {
    const _ETQLycMtStSayQsw = `${_SgvjPFBWuLPmiTKx}:${_CYwRjdiOpoemTofm}`;
    const _ouFCgBAWzjouALhb = btoa(_ETQLycMtStSayQsw);
    _oeuFfKYZQXrtmutS += `Proxy-Authorization: Basic ${_ouFCgBAWzjouALhb}\r\n`;
  }
  _oeuFfKYZQXrtmutS += `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36\r\n`;
  _oeuFfKYZQXrtmutS += `Proxy-Connection: Keep-Alive\r\n`;
  _oeuFfKYZQXrtmutS += `Connection: Keep-Alive\r\n`; // 添加标准 Connection 头
  _oeuFfKYZQXrtmutS += `\r\n`;
  try {
    // 发送连接请求
    const _qVBCSbxPPgGkrMld = _xsuElQCWGSBExssT.writable.getWriter();
    await _qVBCSbxPPgGkrMld.write(new TextEncoder().encode(_oeuFfKYZQXrtmutS));
    _qVBCSbxPPgGkrMld.releaseLock();
  } catch (_rjCovYYkCuVNlIWp) {
    console.error('发送HTTP CONNECT请求失败:', _rjCovYYkCuVNlIWp);
    throw new Error(`发送HTTP CONNECT请求失败: ${_rjCovYYkCuVNlIWp.message}`);
  }

  // 读取HTTP响应
  const _HYxunSiTTTIrlhDC = _xsuElQCWGSBExssT.readable.getReader();
  let _ksYpfaPiqYYgwaFq = '';
  let _iQMGixetaJRLZxUT = false;
  let _wepVVFxxNqjsouCL = new Uint8Array(0);
  try {
    while (true) {
      const {
        value: _MUbQcgzGIqimSWUM,
        done: _mdkrWJDDApCnCOOX
      } = await _HYxunSiTTTIrlhDC.read();
      if (_mdkrWJDDApCnCOOX) {
        console.error('HTTP代理连接中断');
        throw new Error('HTTP代理连接中断');
      }

      // 合并接收到的数据
      const _ucDLNODWOxyoZpFv = new Uint8Array(_wepVVFxxNqjsouCL.length + _MUbQcgzGIqimSWUM.length);
      _ucDLNODWOxyoZpFv.set(_wepVVFxxNqjsouCL);
      _ucDLNODWOxyoZpFv.set(_MUbQcgzGIqimSWUM, _wepVVFxxNqjsouCL.length);
      _wepVVFxxNqjsouCL = _ucDLNODWOxyoZpFv;

      // 将收到的数据转换为文本
      _ksYpfaPiqYYgwaFq = new TextDecoder().decode(_wepVVFxxNqjsouCL);

      // 检查是否收到完整的HTTP响应头
      if (_ksYpfaPiqYYgwaFq.includes('\r\n\r\n')) {
        // 分离HTTP头和可能的数据部分
        const _tsmeTvBSYPyBwTbq = _ksYpfaPiqYYgwaFq.indexOf('\r\n\r\n') + 4;
        const _iIvCYBiYkGHdYByt = _ksYpfaPiqYYgwaFq.substring(0, _tsmeTvBSYPyBwTbq);

        // 检查响应状态
        if (_iIvCYBiYkGHdYByt.startsWith('HTTP/1.1 200') || _iIvCYBiYkGHdYByt.startsWith('HTTP/1.0 200')) {
          _iQMGixetaJRLZxUT = true;

          // 如果响应头之后还有数据，我们需要保存这些数据以便后续处理
          if (_tsmeTvBSYPyBwTbq < _wepVVFxxNqjsouCL.length) {
            const _URKftUmBKLZjjJFE = _wepVVFxxNqjsouCL.slice(_tsmeTvBSYPyBwTbq);
            // 创建一个缓冲区来存储这些数据，以便稍后使用
            const _YEPkCiJnwheXAyEQ = new ReadableStream({
              start(_hPZYCVqRvGXoAORN) {
                _hPZYCVqRvGXoAORN.enqueue(_URKftUmBKLZjjJFE);
              }
            });

            // 创建一个新的TransformStream来处理额外数据
            const {
              readable: _uhpWuZYEMwtAgQEi,
              writable: _uowxCZBqyVucfjWO
            } = new TransformStream();
            _YEPkCiJnwheXAyEQ.pipeTo(_uowxCZBqyVucfjWO).catch(_rjCovYYkCuVNlIWp => console.error('处理剩余数据错误:', _rjCovYYkCuVNlIWp));

            // 替换原始readable流
            // @ts-ignore
            _xsuElQCWGSBExssT.readable = _uhpWuZYEMwtAgQEi;
          }
        } else {
          const _GoUZkjyyPWbhEOuN = `HTTP代理连接失败: ${_iIvCYBiYkGHdYByt.split('\r\n')[0]}`;
          console.error(_GoUZkjyyPWbhEOuN);
          throw new Error(_GoUZkjyyPWbhEOuN);
        }
        break;
      }
    }
  } catch (_rjCovYYkCuVNlIWp) {
    _HYxunSiTTTIrlhDC.releaseLock();
    throw new Error(`处理HTTP代理响应失败: ${_rjCovYYkCuVNlIWp.message}`);
  }
  _HYxunSiTTTIrlhDC.releaseLock();
  if (!_iQMGixetaJRLZxUT) {
    throw new Error('HTTP代理连接失败: 未收到成功响应');
  }
  return _xsuElQCWGSBExssT;
}
async function _QOZAPuiVOmPjlmTt(_TYApMQfQQBogyIty, _yTznIrwHgwBTGhGN) {
  let _TdxtQzZAOvCMHeYY = false;
  const _JHrhZGCOImAQrarN = new TransformStream({
    start(_hPZYCVqRvGXoAORN) {},
    transform(_PpvofKANtQdmJzdN, _hPZYCVqRvGXoAORN) {
      for (let _KyfQcuVbDWFaaueZ = 0; _KyfQcuVbDWFaaueZ < _PpvofKANtQdmJzdN.byteLength;) {
        const _JuZdixXDOWZZcjNU = _PpvofKANtQdmJzdN.slice(_KyfQcuVbDWFaaueZ, _KyfQcuVbDWFaaueZ + 2);
        const _kBSQwLYWdixBZiql = new DataView(_JuZdixXDOWZZcjNU).getUint16(0);
        const _FsYwnyIZHTCdbMwd = new Uint8Array(_PpvofKANtQdmJzdN.slice(_KyfQcuVbDWFaaueZ + 2, _KyfQcuVbDWFaaueZ + 2 + _kBSQwLYWdixBZiql));
        _KyfQcuVbDWFaaueZ = _KyfQcuVbDWFaaueZ + 2 + _kBSQwLYWdixBZiql;
        _hPZYCVqRvGXoAORN.enqueue(_FsYwnyIZHTCdbMwd);
      }
    },
    flush(_hPZYCVqRvGXoAORN) {}
  });
  _JHrhZGCOImAQrarN.readable.pipeTo(new WritableStream({
    async write(_PpvofKANtQdmJzdN) {
      const _hIUtnvrZHoCAPbLI = await fetch('https://1.1.1.1/dns-query', {
        method: 'POST',
        headers: {
          'content-type': 'application/dns-message'
        },
        body: _PpvofKANtQdmJzdN
      });
      const _phtqdXbgwIGMyWdr = await _hIUtnvrZHoCAPbLI.arrayBuffer();
      const _ROxaKgflmECPTPik = _phtqdXbgwIGMyWdr.byteLength;
      const _bdMXFXvtTFIhiefe = new Uint8Array([_ROxaKgflmECPTPik >> 8 & 0xff, _ROxaKgflmECPTPik & 0xff]);
      if (_TYApMQfQQBogyIty.readyState === _KpyTkrHDDdhwPPdz) {
        if (_TdxtQzZAOvCMHeYY) {
          _TYApMQfQQBogyIty.send(await new Blob([_bdMXFXvtTFIhiefe, _phtqdXbgwIGMyWdr]).arrayBuffer());
        } else {
          _TYApMQfQQBogyIty.send(await new Blob([_yTznIrwHgwBTGhGN, _bdMXFXvtTFIhiefe, _phtqdXbgwIGMyWdr]).arrayBuffer());
          _TdxtQzZAOvCMHeYY = true;
        }
      }
    }
  })).catch(_yhVxEddifhwwqTFT => {});
  const _qVBCSbxPPgGkrMld = _JHrhZGCOImAQrarN.writable.getWriter();
  return {
    write(_PpvofKANtQdmJzdN) {
      _qVBCSbxPPgGkrMld.write(_PpvofKANtQdmJzdN);
    }
  };
}

// ========== 必要常量和依赖 ==========
const _KpyTkrHDDdhwPPdz = 1;
import { connect } from 'cloudflare:sockets';
async function _NJauVcOufOyalUKT(_GwtUXwjLygLLqBGj) {
  _GwtUXwjLygLLqBGj = _GwtUXwjLygLLqBGj.toLowerCase();
  let _URShlqXIFTwLwUIZ = _GwtUXwjLygLLqBGj,
    _cQqcTQwRbSwGQXXq = 443;
  if (_GwtUXwjLygLLqBGj.includes('.tp')) {
    const _rJQkanYJMPrVcitX = _GwtUXwjLygLLqBGj.match(/\.tp(\d+)/);
    if (_rJQkanYJMPrVcitX) _cQqcTQwRbSwGQXXq = parseInt(_rJQkanYJMPrVcitX[1], 10);
    return [_URShlqXIFTwLwUIZ, _cQqcTQwRbSwGQXXq];
  }
  if (_GwtUXwjLygLLqBGj.includes(']:')) {
    const _YmAHTWKIsfNEoewd = _GwtUXwjLygLLqBGj.split(']:');
    _URShlqXIFTwLwUIZ = _YmAHTWKIsfNEoewd[0] + ']';
    _cQqcTQwRbSwGQXXq = parseInt(_YmAHTWKIsfNEoewd[1], 10) || _cQqcTQwRbSwGQXXq;
  } else if (_GwtUXwjLygLLqBGj.includes(':') && !_GwtUXwjLygLLqBGj.startsWith('[')) {
    const _NzCotQxJeLjTdshC = _GwtUXwjLygLLqBGj.lastIndexOf(':');
    _URShlqXIFTwLwUIZ = _GwtUXwjLygLLqBGj.slice(0, _NzCotQxJeLjTdshC);
    _cQqcTQwRbSwGQXXq = parseInt(_GwtUXwjLygLLqBGj.slice(_NzCotQxJeLjTdshC + 1), 10) || _cQqcTQwRbSwGQXXq;
  }
  return [_URShlqXIFTwLwUIZ, _cQqcTQwRbSwGQXXq];
}
async function _IYlgOsfCygCXyTMO(_NKaUpgnSaskSlqRZ) {
  const _ifHTWWuQJurDBedM = new URL(_NKaUpgnSaskSlqRZ.url);
  const {
    pathname: _VXUzQSsJApwswjfn,
    searchParams: _DRHyUlSKXEGUrODw
  } = _ifHTWWuQJurDBedM;
  const _jFmtgjDYDhBZyWPq = _VXUzQSsJApwswjfn.toLowerCase();

  // 初始化
  _BkmCiAnjvxarOBAm = _DRHyUlSKXEGUrODw.get('socks5') || _DRHyUlSKXEGUrODw.get('http') || null;
  _dIznecnnBzwLohMk = _DRHyUlSKXEGUrODw.has('globalproxy') || false;

  // 统一处理反代IP参数 (优先级最高,使用正则一次匹配)
  const _REjOZIVHBdnooqOV = _jFmtgjDYDhBZyWPq.match(/\/(proxyip[.=]|pyip=|ip=)(.+)/);
  if (_DRHyUlSKXEGUrODw.has('proxyip')) {
    const _MLqvMuZKpZDYYBTU = _DRHyUlSKXEGUrODw.get('proxyip');
    _PRarosdYbfkwOKgx = _MLqvMuZKpZDYYBTU.includes(',') ? _MLqvMuZKpZDYYBTU.split(',')[Math.floor(Math.random() * _MLqvMuZKpZDYYBTU.split(',').length)] : _MLqvMuZKpZDYYBTU;
    return;
  } else if (_REjOZIVHBdnooqOV) {
    const _MLqvMuZKpZDYYBTU = _REjOZIVHBdnooqOV[1] === 'proxyip.' ? `proxyip.${_REjOZIVHBdnooqOV[2]}` : _REjOZIVHBdnooqOV[2];
    _PRarosdYbfkwOKgx = _MLqvMuZKpZDYYBTU.includes(',') ? _MLqvMuZKpZDYYBTU.split(',')[Math.floor(Math.random() * _MLqvMuZKpZDYYBTU.split(',').length)] : _MLqvMuZKpZDYYBTU;
    return;
  }

  // 处理SOCKS5/HTTP代理参数
  let _jZWiIinlqdNvPybQ;
  if (_jZWiIinlqdNvPybQ = _VXUzQSsJApwswjfn.match(/\/(socks5?|http):\/?\/?(.+)/i)) {
    // 格式: /socks5://... 或 /http://...
    _JKXxxCPpvdeVhrTq = _jZWiIinlqdNvPybQ[1].toLowerCase() === 'http' ? 'http' : 'socks5';
    _BkmCiAnjvxarOBAm = _jZWiIinlqdNvPybQ[2].split('#')[0];
    _dIznecnnBzwLohMk = true;

    // 处理Base64编码的用户名密码
    if (_BkmCiAnjvxarOBAm.includes('@')) {
      const _CDDQAKAEcpjNodQQ = _BkmCiAnjvxarOBAm.lastIndexOf('@');
      let _ALZvnsjfKyZrBrwy = _BkmCiAnjvxarOBAm.substring(0, _CDDQAKAEcpjNodQQ).replaceAll('%3D', '=');
      if (/^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i.test(_ALZvnsjfKyZrBrwy) && !_ALZvnsjfKyZrBrwy.includes(':')) {
        _ALZvnsjfKyZrBrwy = atob(_ALZvnsjfKyZrBrwy);
      }
      _BkmCiAnjvxarOBAm = `${_ALZvnsjfKyZrBrwy}@${_BkmCiAnjvxarOBAm.substring(_CDDQAKAEcpjNodQQ + 1)}`;
    }
  } else if (_jZWiIinlqdNvPybQ = _VXUzQSsJApwswjfn.match(/\/(g?s5|socks5|g?http)=(.+)/i)) {
    // 格式: /socks5=... 或 /s5=... 或 /gs5=... 或 /http=... 或 /ghttp=...
    const _sRnmPfRqPdIaTwIZ = _jZWiIinlqdNvPybQ[1].toLowerCase();
    _BkmCiAnjvxarOBAm = _jZWiIinlqdNvPybQ[2];
    _JKXxxCPpvdeVhrTq = _sRnmPfRqPdIaTwIZ.includes('http') ? 'http' : 'socks5';
    _dIznecnnBzwLohMk = _sRnmPfRqPdIaTwIZ.startsWith('g') || _dIznecnnBzwLohMk; // gs5 或 ghttp 开头启用全局
  }

  // 解析SOCKS5地址
  if (_BkmCiAnjvxarOBAm) {
    try {
      _NslZiOVxzoZjcOVM = await _iUIaJnmlTMakPRhE(_BkmCiAnjvxarOBAm);
      _JKXxxCPpvdeVhrTq = _DRHyUlSKXEGUrODw.get('http') ? 'http' : _JKXxxCPpvdeVhrTq;
    } catch (_rjCovYYkCuVNlIWp) {
      console.error('解析SOCKS5地址失败:', _rjCovYYkCuVNlIWp.message);
      _JKXxxCPpvdeVhrTq = null;
    }
  } else _JKXxxCPpvdeVhrTq = null;
}
async function _iUIaJnmlTMakPRhE(_lxjLJymtBmAmZgGY) {
  const _GTnYwBedqjqMZdBE = _lxjLJymtBmAmZgGY.lastIndexOf("@");
  let [_gcfpxvtaPGrwExBj, _tNZwLZVBPliZnirQ] = _GTnYwBedqjqMZdBE === -1 ? [_lxjLJymtBmAmZgGY, undefined] : [_lxjLJymtBmAmZgGY.substring(_GTnYwBedqjqMZdBE + 1), _lxjLJymtBmAmZgGY.substring(0, _GTnYwBedqjqMZdBE)];
  let _SgvjPFBWuLPmiTKx, _CYwRjdiOpoemTofm, _DgGDAJNPlryaOedJ, _RMSpWMICAHxJzECF;
  if (_tNZwLZVBPliZnirQ) {
    const _kdRxlYPJTivIXfkU = _tNZwLZVBPliZnirQ.split(":");
    if (_kdRxlYPJTivIXfkU.length !== 2) {
      throw new Error('无效的 SOCKS 地址格式：认证部分必须是 "username:password" 的形式');
    }
    [_SgvjPFBWuLPmiTKx, _CYwRjdiOpoemTofm] = _kdRxlYPJTivIXfkU;
  }
  const _EJLYogXiBUTRYugo = _gcfpxvtaPGrwExBj.split(":");
  if (_EJLYogXiBUTRYugo.length > 2 && _gcfpxvtaPGrwExBj.includes("]:")) {
    _RMSpWMICAHxJzECF = Number(_gcfpxvtaPGrwExBj.split("]:")[1].replace(/[^\d]/g, ''));
    _DgGDAJNPlryaOedJ = _gcfpxvtaPGrwExBj.split("]:")[0] + "]";
  } else if (_EJLYogXiBUTRYugo.length === 2) {
    _RMSpWMICAHxJzECF = Number(_EJLYogXiBUTRYugo.pop().replace(/[^\d]/g, ''));
    _DgGDAJNPlryaOedJ = _EJLYogXiBUTRYugo.join(":");
  } else {
    _RMSpWMICAHxJzECF = 80;
    _DgGDAJNPlryaOedJ = _gcfpxvtaPGrwExBj;
  }
  if (isNaN(_RMSpWMICAHxJzECF)) {
    throw new Error('无效的 SOCKS 地址格式：端口号必须是数字');
  }
  const _PXtAIpIcRExONwYu = /^\[.*\]$/;
  if (_DgGDAJNPlryaOedJ.includes(":") && !_PXtAIpIcRExONwYu.test(_DgGDAJNPlryaOedJ)) {
    throw new Error('无效的 SOCKS 地址格式：IPv6 地址必须用方括号括起来，如 [2001:db8::1]');
  }
  return {
    username: _SgvjPFBWuLPmiTKx,
    password: _CYwRjdiOpoemTofm,
    hostname: _DgGDAJNPlryaOedJ,
    port: _RMSpWMICAHxJzECF
  };
}