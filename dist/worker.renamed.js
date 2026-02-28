const _sZARXfkluXNtMorU = '04ab5537-a9c5-49aa-9fca-c4601ecf6753'; // 建议修改为自己的规范化UUID，如不需要可留空 @GoodLiux优化版
let _IonpbvMgwRXRdSxK = '',
  _RpiKUBDIqdxrXdZk = null,
  _ZZyGkmHXUlaQUCoM = false,
  _TvRTeUYEWeGFsYcx = '',
  _uOdgTusEJaxWVqQq = {};
export default {
  async fetch(_zMTgxmxxzTXWrlVC) {
    try {
      const _BiCphelQQAWWJLpw = new URL(_zMTgxmxxzTXWrlVC.url);
      // 检查是否为 WebSocket 升级请求
      const _kwTzLEYivYSGwYyc = _zMTgxmxxzTXWrlVC.headers.get('Upgrade');
      if (_kwTzLEYivYSGwYyc !== 'websocket') {
        return new Response('Hello World!', {
          status: 200
        });
      } else {
        _IonpbvMgwRXRdSxK = _IonpbvMgwRXRdSxK ? _IonpbvMgwRXRdSxK : _zMTgxmxxzTXWrlVC.cf.colo + '.proxyIP.cmliuSSSS.NET';
        await _LJTLhGpEKHKjPfDS(_zMTgxmxxzTXWrlVC);
        const [_bFvLPEqoxbBfOoeV, _McLCegQneKfDhOXN] = await _hBXFporDWdgyeZdK(_IonpbvMgwRXRdSxK);
        return await _aidvzrSWPYMxrDDS(_zMTgxmxxzTXWrlVC, {
          parsedSocks5Address: _uOdgTusEJaxWVqQq,
          enableSocks: _RpiKUBDIqdxrXdZk,
          enableGlobalSocks: _ZZyGkmHXUlaQUCoM,
          ProxyIP: _bFvLPEqoxbBfOoeV,
          ProxyPort: _McLCegQneKfDhOXN
        });
      }
    } catch (_xuDHicfzjQOyVjSU) {
      return new Response(_xuDHicfzjQOyVjSU && _xuDHicfzjQOyVjSU.stack ? _xuDHicfzjQOyVjSU.stack : String(_xuDHicfzjQOyVjSU), {
        status: 500
      });
    }
  }
};
async function _aidvzrSWPYMxrDDS(_zMTgxmxxzTXWrlVC, _FQLEvktoxnhgBdEc) {
  const {
    parsedSocks5Address: _uOdgTusEJaxWVqQq,
    enableSocks: _cSdKQVMOWUTvruYO,
    enableGlobalSocks: _RqeauCMRBXFkuJpD,
    ProxyIP: _gcBRthWIPPxbeydU,
    ProxyPort: _AMbgDIlAtBnjBhHn
  } = _FQLEvktoxnhgBdEc;
  const _VZXiukpaCNUAqHtt = new WebSocketPair();
  const [_UtrrcqsFOrKQiKFl, _vUzKWOlygJCnTjKg] = Object.values(_VZXiukpaCNUAqHtt);
  _vUzKWOlygJCnTjKg.accept();

  // WebSocket心跳机制，每30秒发送一次
  let _YmKblpQxGPUTduXT = setInterval(() => {
    if (_vUzKWOlygJCnTjKg.readyState === _TeKvZJoIHvhzyUbT) {
      try {
        _vUzKWOlygJCnTjKg.send(new Uint8Array(0));
      } catch (_XuJmfYxGjzMOsCvg) {}
    }
  }, 30000);
  function _qxJnhgzlUsZMUyow() {
    if (_YmKblpQxGPUTduXT) {
      clearInterval(_YmKblpQxGPUTduXT);
      _YmKblpQxGPUTduXT = null;
    }
  }
  _vUzKWOlygJCnTjKg.addEventListener('close', _qxJnhgzlUsZMUyow);
  _vUzKWOlygJCnTjKg.addEventListener('error', _qxJnhgzlUsZMUyow);

  // 处理 WebSocket 数据流
  const _DqlfXWbUPWXEvGrN = _zMTgxmxxzTXWrlVC.headers.get('sec-websocket-protocol') || '';
  const _nfPOrjPEZojiMhcx = _UQYvNFdclJLlIJeH(_vUzKWOlygJCnTjKg, _DqlfXWbUPWXEvGrN);
  let _YJYFzrpLJasXjSQU = null;
  let _TaKmSkEJBmNGZiCx = null;
  let _FrkOsXXyLChRTSKA = false;
  _nfPOrjPEZojiMhcx.pipeTo(new WritableStream({
    async write(_RpXLkqejXEnJVjaX) {
      if (_FrkOsXXyLChRTSKA && _TaKmSkEJBmNGZiCx) {
        return _TaKmSkEJBmNGZiCx(_RpXLkqejXEnJVjaX);
      }
      if (_YJYFzrpLJasXjSQU) {
        try {
          const _fkwpsKkDapIiyGwA = _YJYFzrpLJasXjSQU.writable.getWriter();
          await _fkwpsKkDapIiyGwA.write(_RpXLkqejXEnJVjaX);
          _fkwpsKkDapIiyGwA.releaseLock();
        } catch (_xuDHicfzjQOyVjSU) {
          _amsjJZguFoXEglXs(_YJYFzrpLJasXjSQU);
          throw _xuDHicfzjQOyVjSU;
        }
        return;
      }
      const _EjrMkAQRvgDSvhEA = _CKPJkLbuXtJdmJKF(_RpXLkqejXEnJVjaX);
      if (_EjrMkAQRvgDSvhEA.hasError) throw new Error(_EjrMkAQRvgDSvhEA.message);
      if (_EjrMkAQRvgDSvhEA.addressRemote.includes(atob('c3BlZWQuY2xvdWRmbGFyZS5jb20='))) throw new Error('Access');
      const _dYjgXOFmqDBDMlUj = new Uint8Array([_EjrMkAQRvgDSvhEA.vlessVersion[0], 0]);
      const _crLDSrCAWFwHPxFi = _RpXLkqejXEnJVjaX.slice(_EjrMkAQRvgDSvhEA.rawDataIndex);
      if (_EjrMkAQRvgDSvhEA.isUDP) {
        if (_EjrMkAQRvgDSvhEA.portRemote === 53) {
          _FrkOsXXyLChRTSKA = true;
          const {
            write: _hHXzhinyLAtXvEFc
          } = await _owNIZNXdktbrcUfy(_vUzKWOlygJCnTjKg, _dYjgXOFmqDBDMlUj);
          _TaKmSkEJBmNGZiCx = _hHXzhinyLAtXvEFc;
          _TaKmSkEJBmNGZiCx(_crLDSrCAWFwHPxFi);
          return;
        } else {
          throw new Error('UDP代理仅支持DNS(端口53)');
        }
      }
      async function _edRBYwhLJjKifTdD(_WuHpIacFthsUMxYV, _nSNjKGMDeuUPrXks) {
        const _YhTDbaYmnSJYIalo = await connect({
          hostname: _WuHpIacFthsUMxYV,
          port: _nSNjKGMDeuUPrXks
        }, {
          allowHalfOpen: true
        });
        _YJYFzrpLJasXjSQU = _YhTDbaYmnSJYIalo;
        const _fkwpsKkDapIiyGwA = _YhTDbaYmnSJYIalo.writable.getWriter();
        await _fkwpsKkDapIiyGwA.write(_crLDSrCAWFwHPxFi);
        _fkwpsKkDapIiyGwA.releaseLock();
        return _YhTDbaYmnSJYIalo;
      }
      async function _jtbTNZrMvxTPvaaP(_WuHpIacFthsUMxYV, _nSNjKGMDeuUPrXks) {
        const _YhTDbaYmnSJYIalo = _cSdKQVMOWUTvruYO === 'socks5' ? await _uMDHUVsdCODYYCBH(_EjrMkAQRvgDSvhEA.addressType, _WuHpIacFthsUMxYV, _nSNjKGMDeuUPrXks, _uOdgTusEJaxWVqQq) : await _nejPMXaPLQCreSOl(_EjrMkAQRvgDSvhEA.addressType, _WuHpIacFthsUMxYV, _nSNjKGMDeuUPrXks, _uOdgTusEJaxWVqQq);
        _YJYFzrpLJasXjSQU = _YhTDbaYmnSJYIalo;
        const _fkwpsKkDapIiyGwA = _YhTDbaYmnSJYIalo.writable.getWriter();
        await _fkwpsKkDapIiyGwA.write(_crLDSrCAWFwHPxFi);
        _fkwpsKkDapIiyGwA.releaseLock();
        return _YhTDbaYmnSJYIalo;
      }
      async function _GeIawmPxYoWnArYU() {
        try {
          let _YhTDbaYmnSJYIalo;
          if (_cSdKQVMOWUTvruYO === 'socks5') {
            _YhTDbaYmnSJYIalo = await _uMDHUVsdCODYYCBH(_EjrMkAQRvgDSvhEA.addressType, _EjrMkAQRvgDSvhEA.addressRemote, _EjrMkAQRvgDSvhEA.portRemote, _uOdgTusEJaxWVqQq);
          } else if (_cSdKQVMOWUTvruYO === 'http') {
            _YhTDbaYmnSJYIalo = await _nejPMXaPLQCreSOl(_EjrMkAQRvgDSvhEA.addressType, _EjrMkAQRvgDSvhEA.addressRemote, _EjrMkAQRvgDSvhEA.portRemote, _uOdgTusEJaxWVqQq);
          } else {
            _YhTDbaYmnSJYIalo = await connect({
              hostname: _gcBRthWIPPxbeydU,
              port: _AMbgDIlAtBnjBhHn
            }, {
              allowHalfOpen: true
            });
          }
          _YJYFzrpLJasXjSQU = _YhTDbaYmnSJYIalo;
          const _fkwpsKkDapIiyGwA = _YhTDbaYmnSJYIalo.writable.getWriter();
          await _fkwpsKkDapIiyGwA.write(_crLDSrCAWFwHPxFi);
          _fkwpsKkDapIiyGwA.releaseLock();
          _YhTDbaYmnSJYIalo.closed.catch(() => {}).finally(() => {
            if (_vUzKWOlygJCnTjKg.readyState === _TeKvZJoIHvhzyUbT) {
              _vUzKWOlygJCnTjKg.close(1000, '连接已关闭');
            }
          });
          _prsixFcgDQhXNRye(_YhTDbaYmnSJYIalo, _vUzKWOlygJCnTjKg, _dYjgXOFmqDBDMlUj, null);
        } catch (_xuDHicfzjQOyVjSU) {
          _amsjJZguFoXEglXs(_YJYFzrpLJasXjSQU);
          _vUzKWOlygJCnTjKg.close(1011, '代理连接失败: ' + (_xuDHicfzjQOyVjSU && _xuDHicfzjQOyVjSU.message ? _xuDHicfzjQOyVjSU.message : _xuDHicfzjQOyVjSU));
        }
      }
      try {
        if (_RqeauCMRBXFkuJpD) {
          const _YhTDbaYmnSJYIalo = await _jtbTNZrMvxTPvaaP(_EjrMkAQRvgDSvhEA.addressRemote, _EjrMkAQRvgDSvhEA.portRemote);
          _prsixFcgDQhXNRye(_YhTDbaYmnSJYIalo, _vUzKWOlygJCnTjKg, _dYjgXOFmqDBDMlUj, _GeIawmPxYoWnArYU);
        } else {
          const _YhTDbaYmnSJYIalo = await _edRBYwhLJjKifTdD(_EjrMkAQRvgDSvhEA.addressRemote, _EjrMkAQRvgDSvhEA.portRemote);
          _prsixFcgDQhXNRye(_YhTDbaYmnSJYIalo, _vUzKWOlygJCnTjKg, _dYjgXOFmqDBDMlUj, _GeIawmPxYoWnArYU);
        }
      } catch (_xuDHicfzjQOyVjSU) {
        _amsjJZguFoXEglXs(_YJYFzrpLJasXjSQU);
        _vUzKWOlygJCnTjKg.close(1011, '连接失败: ' + (_xuDHicfzjQOyVjSU && _xuDHicfzjQOyVjSU.message ? _xuDHicfzjQOyVjSU.message : _xuDHicfzjQOyVjSU));
      }
    },
    close() {
      if (_YJYFzrpLJasXjSQU) {
        _amsjJZguFoXEglXs(_YJYFzrpLJasXjSQU);
      }
    }
  })).catch(_xuDHicfzjQOyVjSU => {
    _amsjJZguFoXEglXs(_YJYFzrpLJasXjSQU);
    _vUzKWOlygJCnTjKg.close(1011, '内部错误: ' + (_xuDHicfzjQOyVjSU && _xuDHicfzjQOyVjSU.message ? _xuDHicfzjQOyVjSU.message : _xuDHicfzjQOyVjSU));
  });
  return new Response(null, {
    status: 101,
    webSocket: _UtrrcqsFOrKQiKFl
  });
}
function _UQYvNFdclJLlIJeH(_zzfliOSyxMTayWHx, _DqlfXWbUPWXEvGrN) {
  return new ReadableStream({
    start(_yKfSlosUkMcqrnEn) {
      _zzfliOSyxMTayWHx.addEventListener('message', _OmqbIgVBlmUThJPd => {
        _yKfSlosUkMcqrnEn.enqueue(_OmqbIgVBlmUThJPd.data);
      });
      _zzfliOSyxMTayWHx.addEventListener('close', () => {
        _yKfSlosUkMcqrnEn.close();
      });
      _zzfliOSyxMTayWHx.addEventListener('error', _xuDHicfzjQOyVjSU => {
        _yKfSlosUkMcqrnEn.error(_xuDHicfzjQOyVjSU);
      });
      if (_DqlfXWbUPWXEvGrN) {
        try {
          const _tslYUCaIauWWDwzh = atob(_DqlfXWbUPWXEvGrN.replace(/-/g, '+').replace(/_/g, '/'));
          const _CfFAZPVYdjcDDHpA = Uint8Array.from(_tslYUCaIauWWDwzh, _MdXNSBTDCvqdekTG => _MdXNSBTDCvqdekTG.charCodeAt(0));
          _yKfSlosUkMcqrnEn.enqueue(_CfFAZPVYdjcDDHpA.buffer);
        } catch (_XuJmfYxGjzMOsCvg) {}
      }
    }
  });
}

// 只允许固定UUID
function _CKPJkLbuXtJdmJKF(_dSKClrDjahgJoHxQ) {
  if (_dSKClrDjahgJoHxQ.byteLength < 24) {
    return {
      hasError: true,
      message: '无效的头部长度'
    };
  }
  const _GKnmQiwlCUMiRLTo = new DataView(_dSKClrDjahgJoHxQ);
  const _ukVZVTawmxCZaPvK = new Uint8Array(_dSKClrDjahgJoHxQ.slice(0, 1));
  const _ekUjqvPQiHpuCwsd = _fFRzzfjPKooJJAIN(new Uint8Array(_dSKClrDjahgJoHxQ.slice(1, 17)));
  if (_sZARXfkluXNtMorU && _ekUjqvPQiHpuCwsd !== _sZARXfkluXNtMorU) {
    return {
      hasError: true,
      message: '无效的用户'
    };
  }
  const _atnZvyNcPmPwhXhc = _GKnmQiwlCUMiRLTo.getUint8(17);
  const _XLrEhqgcgaywFVtE = _GKnmQiwlCUMiRLTo.getUint8(18 + _atnZvyNcPmPwhXhc);
  let _aZsNQvLrtRfGJnmc = false;
  if (_XLrEhqgcgaywFVtE === 1) {} else if (_XLrEhqgcgaywFVtE === 2) {
    _aZsNQvLrtRfGJnmc = true;
  } else {
    return {
      hasError: true,
      message: '不支持的命令，仅支持TCP(01)和UDP(02)'
    };
  }
  let _dSDpJJXBYeZVggaE = 19 + _atnZvyNcPmPwhXhc;
  const _nSNjKGMDeuUPrXks = _GKnmQiwlCUMiRLTo.getUint16(_dSDpJJXBYeZVggaE);
  _dSDpJJXBYeZVggaE += 2;
  const _chNrfxYFzhEBXtxK = _GKnmQiwlCUMiRLTo.getUint8(_dSDpJJXBYeZVggaE++);
  let _WuHpIacFthsUMxYV = '';
  switch (_chNrfxYFzhEBXtxK) {
    case 1:
      _WuHpIacFthsUMxYV = Array.from(new Uint8Array(_dSKClrDjahgJoHxQ.slice(_dSDpJJXBYeZVggaE, _dSDpJJXBYeZVggaE + 4))).join('.');
      _dSDpJJXBYeZVggaE += 4;
      break;
    case 2:
      const _GBKpytEvbiMMAEmS = _GKnmQiwlCUMiRLTo.getUint8(_dSDpJJXBYeZVggaE++);
      _WuHpIacFthsUMxYV = new TextDecoder().decode(_dSKClrDjahgJoHxQ.slice(_dSDpJJXBYeZVggaE, _dSDpJJXBYeZVggaE + _GBKpytEvbiMMAEmS));
      _dSDpJJXBYeZVggaE += _GBKpytEvbiMMAEmS;
      break;
    case 3:
      const _QEncyMNWLXLAvurN = [];
      for (let _SZmNswvHoZxFtKVn = 0; _SZmNswvHoZxFtKVn < 8; _SZmNswvHoZxFtKVn++) {
        _QEncyMNWLXLAvurN.push(_GKnmQiwlCUMiRLTo.getUint16(_dSDpJJXBYeZVggaE).toString(16).padStart(4, '0'));
        _dSDpJJXBYeZVggaE += 2;
      }
      _WuHpIacFthsUMxYV = _QEncyMNWLXLAvurN.join(':').replace(/(^|:)0+(\w)/g, '$1$2');
      break;
    default:
      return {
        hasError: true,
        message: '不支持的地址类型'
      };
  }
  return {
    hasError: false,
    addressRemote: _WuHpIacFthsUMxYV,
    portRemote: _nSNjKGMDeuUPrXks,
    rawDataIndex: _dSDpJJXBYeZVggaE,
    vlessVersion: _ukVZVTawmxCZaPvK,
    isUDP: _aZsNQvLrtRfGJnmc,
    addressType: _chNrfxYFzhEBXtxK
  };
}
async function _prsixFcgDQhXNRye(_YJYFzrpLJasXjSQU, _zzfliOSyxMTayWHx, _TgOpVGTrQBZBlwKU, _GeIawmPxYoWnArYU = null, _CoSwvkBWAnXySorG = 0) {
  const _QdAMUKjXqpEqVebu = 8; // 最大重试8次
  const _sngVWWusVGOrgxAI = 128 * 1024; // 单帧最大 128 KB
  const _INNSjZQjPkQpVRmb = 2 * 1024 * 1024; // 最大缓存 2 MB
  const _gaHJDUYYSlqHywyQ = 10; // ms，定期 flush
  const _gzdzRpbuYENzCFnT = 200; // ms，初始重试延迟

  let _KVAPIuPDzeTZGRSY = false;
  let _WGGGgCELSbUUNhZD = false;
  let _YybLcZNPOccYjAhw = [];
  let _ptdwySrbxbYaqIPU = 0;

  // --- 工具函数 ---

  const _ohHVvHszVKTSXGSb = _EzdjoMmckQAfvtyx => {
    if (_EzdjoMmckQAfvtyx.length === 1) return _EzdjoMmckQAfvtyx[0];
    const _cuJGGvdgicsPpsAd = _EzdjoMmckQAfvtyx.reduce((_qKxQVNRyCESLOFaF, _MdXNSBTDCvqdekTG) => _qKxQVNRyCESLOFaF + _MdXNSBTDCvqdekTG.byteLength, 0);
    const _zQxvcPVmVmxzadlz = new Uint8Array(_cuJGGvdgicsPpsAd);
    let _dSDpJJXBYeZVggaE = 0;
    for (const _MdXNSBTDCvqdekTG of _EzdjoMmckQAfvtyx) {
      _zQxvcPVmVmxzadlz.set(_MdXNSBTDCvqdekTG, _dSDpJJXBYeZVggaE);
      _dSDpJJXBYeZVggaE += _MdXNSBTDCvqdekTG.byteLength;
    }
    return _zQxvcPVmVmxzadlz;
  };

  // 分包发送（每帧 ≤ 128 KB）
  const _ilYVeLnYTJjNOkNh = _CfFAZPVYdjcDDHpA => {
    let _dSDpJJXBYeZVggaE = 0;
    while (_dSDpJJXBYeZVggaE < _CfFAZPVYdjcDDHpA.byteLength) {
      const _IaptmtlvNneOtfDg = Math.min(_dSDpJJXBYeZVggaE + _sngVWWusVGOrgxAI, _CfFAZPVYdjcDDHpA.byteLength);
      _zzfliOSyxMTayWHx.send(_CfFAZPVYdjcDDHpA.slice(_dSDpJJXBYeZVggaE, _IaptmtlvNneOtfDg));
      _dSDpJJXBYeZVggaE = _IaptmtlvNneOtfDg;
    }
  };
  const _NBrOnzDurzaKFVYJ = () => {
    if (_zzfliOSyxMTayWHx.readyState !== _TeKvZJoIHvhzyUbT || _YybLcZNPOccYjAhw.length === 0) return;
    const _zQxvcPVmVmxzadlz = _ohHVvHszVKTSXGSb(_YybLcZNPOccYjAhw);
    _YybLcZNPOccYjAhw = [];
    _ptdwySrbxbYaqIPU = 0;
    _ilYVeLnYTJjNOkNh(_zQxvcPVmVmxzadlz);
  };
  const _YMVEyyRnBcaSyCxl = setInterval(_NBrOnzDurzaKFVYJ, _gaHJDUYYSlqHywyQ);

  // --- 主读循环 ---
  const _TnpBCbdgUAxjuIEi = _YJYFzrpLJasXjSQU.readable.getReader();
  try {
    while (true) {
      const {
        done: _mHcnRCTIomYEaVUK,
        value: _RKDvNqTpEiYxpmDS
      } = await _TnpBCbdgUAxjuIEi.read();
      if (_mHcnRCTIomYEaVUK) break;
      _WGGGgCELSbUUNhZD = true;
      if (_zzfliOSyxMTayWHx.readyState !== _TeKvZJoIHvhzyUbT) break;

      // 首包带 vlessHeader
      if (!_KVAPIuPDzeTZGRSY) {
        const _dFkJGOFsFvFIKqNa = new Uint8Array(_TgOpVGTrQBZBlwKU.byteLength + _RKDvNqTpEiYxpmDS.byteLength);
        _dFkJGOFsFvFIKqNa.set(new Uint8Array(_TgOpVGTrQBZBlwKU), 0);
        _dFkJGOFsFvFIKqNa.set(_RKDvNqTpEiYxpmDS, _TgOpVGTrQBZBlwKU.byteLength);
        _YybLcZNPOccYjAhw.push(_dFkJGOFsFvFIKqNa);
        _ptdwySrbxbYaqIPU += _dFkJGOFsFvFIKqNa.byteLength;
        _KVAPIuPDzeTZGRSY = true;
      } else {
        _YybLcZNPOccYjAhw.push(_RKDvNqTpEiYxpmDS);
        _ptdwySrbxbYaqIPU += _RKDvNqTpEiYxpmDS.byteLength;
      }

      // 缓存超过 2 MB 立即 flush
      if (_ptdwySrbxbYaqIPU >= _INNSjZQjPkQpVRmb) {
        _NBrOnzDurzaKFVYJ();
      }
    }
    _TnpBCbdgUAxjuIEi.releaseLock();
    _NBrOnzDurzaKFVYJ();
    clearInterval(_YMVEyyRnBcaSyCxl);

    // --- 关闭逻辑 ---
    if (!_WGGGgCELSbUUNhZD && _GeIawmPxYoWnArYU && _CoSwvkBWAnXySorG < _QdAMUKjXqpEqVebu) {
      const _ryomVMPOXZPDnOeW = _gzdzRpbuYENzCFnT * Math.pow(2, _CoSwvkBWAnXySorG);
      console.warn(`未收到数据，${_ryomVMPOXZPDnOeW} ms 后重试 (${_CoSwvkBWAnXySorG + 1}/${_QdAMUKjXqpEqVebu})`);
      await new Promise(_UuKLFrVqEtrzTMsz => setTimeout(_UuKLFrVqEtrzTMsz, _ryomVMPOXZPDnOeW));
      await _GeIawmPxYoWnArYU();
      return;
    }
    if (_zzfliOSyxMTayWHx.readyState === _TeKvZJoIHvhzyUbT) _zzfliOSyxMTayWHx.close(1000, '正常关闭');
  } catch (_xuDHicfzjQOyVjSU) {
    _TnpBCbdgUAxjuIEi.releaseLock();
    clearInterval(_YMVEyyRnBcaSyCxl);
    console.error('数据传输错误:', _xuDHicfzjQOyVjSU);
    _amsjJZguFoXEglXs(_YJYFzrpLJasXjSQU);
    if (_GeIawmPxYoWnArYU && _CoSwvkBWAnXySorG < _QdAMUKjXqpEqVebu) {
      const _ryomVMPOXZPDnOeW = _gzdzRpbuYENzCFnT * Math.pow(2, _CoSwvkBWAnXySorG);
      console.warn(`错误重试 (${_CoSwvkBWAnXySorG + 1}/${_QdAMUKjXqpEqVebu})，将在 ${_ryomVMPOXZPDnOeW} ms 后重试`);
      await new Promise(_UuKLFrVqEtrzTMsz => setTimeout(_UuKLFrVqEtrzTMsz, _ryomVMPOXZPDnOeW));
      await _GeIawmPxYoWnArYU();
      return;
    }
    if (_zzfliOSyxMTayWHx.readyState === _TeKvZJoIHvhzyUbT) {
      _zzfliOSyxMTayWHx.close(1011, '数据传输错误');
    }
  }
}
function _amsjJZguFoXEglXs(_YOqLUyXDxctqyqKv) {
  if (_YOqLUyXDxctqyqKv) {
    try {
      _YOqLUyXDxctqyqKv.close();
    } catch (_XuJmfYxGjzMOsCvg) {}
  }
}
function _fFRzzfjPKooJJAIN(_eVgtvLzHlbPBMgWQ) {
  const _sWTNvTLjHrijQOtX = Array.from(_eVgtvLzHlbPBMgWQ, _kcVtYFdiCjedVFho => _kcVtYFdiCjedVFho.toString(16).padStart(2, '0')).join('');
  return `${_sWTNvTLjHrijQOtX.slice(0, 8)}-${_sWTNvTLjHrijQOtX.slice(8, 12)}-${_sWTNvTLjHrijQOtX.slice(12, 16)}-${_sWTNvTLjHrijQOtX.slice(16, 20)}-${_sWTNvTLjHrijQOtX.slice(20)}`;
}
async function _uMDHUVsdCODYYCBH(_chNrfxYFzhEBXtxK, _onRxQojEdgFrEBsn, _ZbstUaYZljaadhJe, _uOdgTusEJaxWVqQq) {
  const {
    username: _hDEWKhCMEBPZHQxk,
    password: _zpsGJMtChYYdHiQS,
    hostname: _WFwbPHZovYMxrKhv,
    port: _nSNjKGMDeuUPrXks
  } = _uOdgTusEJaxWVqQq;
  const _YOqLUyXDxctqyqKv = connect({
    hostname: _WFwbPHZovYMxrKhv,
    port: _nSNjKGMDeuUPrXks
  });
  const _wdZkiwUXBREUgiSh = new Uint8Array([5, 2, 0, 2]);
  const _fkwpsKkDapIiyGwA = _YOqLUyXDxctqyqKv.writable.getWriter();
  await _fkwpsKkDapIiyGwA.write(_wdZkiwUXBREUgiSh);
  const _TnpBCbdgUAxjuIEi = _YOqLUyXDxctqyqKv.readable.getReader();
  const _PgvuzzJzzeHNkqre = new TextEncoder();
  let _tsVzSPJyipqxfqYt = (await _TnpBCbdgUAxjuIEi.read()).value;
  if (_tsVzSPJyipqxfqYt[0] !== 0x05) {
    throw new Error(`socks server version error: ${_tsVzSPJyipqxfqYt[0]} expected: 5`);
  }
  if (_tsVzSPJyipqxfqYt[1] === 0xff) {
    throw new Error("no acceptable methods");
  }
  if (_tsVzSPJyipqxfqYt[1] === 0x02) {
    if (!_hDEWKhCMEBPZHQxk || !_zpsGJMtChYYdHiQS) {
      throw new Error("please provide username/password");
    }
    const _MNvWGMEwhioDrkwN = new Uint8Array([1, _hDEWKhCMEBPZHQxk.length, ..._PgvuzzJzzeHNkqre.encode(_hDEWKhCMEBPZHQxk), _zpsGJMtChYYdHiQS.length, ..._PgvuzzJzzeHNkqre.encode(_zpsGJMtChYYdHiQS)]);
    await _fkwpsKkDapIiyGwA.write(_MNvWGMEwhioDrkwN);
    _tsVzSPJyipqxfqYt = (await _TnpBCbdgUAxjuIEi.read()).value;
    if (_tsVzSPJyipqxfqYt[0] !== 0x01 || _tsVzSPJyipqxfqYt[1] !== 0x00) {
      throw new Error("fail to auth socks server");
    }
  }
  let _HQUbmXKDeDOFBBuQ;
  switch (_chNrfxYFzhEBXtxK) {
    case 1:
      _HQUbmXKDeDOFBBuQ = new Uint8Array([1, ..._onRxQojEdgFrEBsn.split('.').map(Number)]);
      break;
    case 2:
      _HQUbmXKDeDOFBBuQ = new Uint8Array([3, _onRxQojEdgFrEBsn.length, ..._PgvuzzJzzeHNkqre.encode(_onRxQojEdgFrEBsn)]);
      break;
    case 3:
      _HQUbmXKDeDOFBBuQ = new Uint8Array([4, ..._onRxQojEdgFrEBsn.split(':').flatMap(_bnCUVNrhumPRdqIl => [parseInt(_bnCUVNrhumPRdqIl.slice(0, 2), 16), parseInt(_bnCUVNrhumPRdqIl.slice(2), 16)])]);
      break;
    default:
      throw new Error(`invalid addressType is ${_chNrfxYFzhEBXtxK}`);
  }
  const _wdgmYQoqdZkMkJsa = new Uint8Array([5, 1, 0, ..._HQUbmXKDeDOFBBuQ, _ZbstUaYZljaadhJe >> 8, _ZbstUaYZljaadhJe & 0xff]);
  await _fkwpsKkDapIiyGwA.write(_wdgmYQoqdZkMkJsa);
  _tsVzSPJyipqxfqYt = (await _TnpBCbdgUAxjuIEi.read()).value;
  if (_tsVzSPJyipqxfqYt[1] === 0x00) {} else {
    throw new Error("fail to open socks connection");
  }
  _fkwpsKkDapIiyGwA.releaseLock();
  _TnpBCbdgUAxjuIEi.releaseLock();
  return _YOqLUyXDxctqyqKv;
}
async function _nejPMXaPLQCreSOl(_chNrfxYFzhEBXtxK, _onRxQojEdgFrEBsn, _ZbstUaYZljaadhJe, _uOdgTusEJaxWVqQq) {
  const {
    username: _hDEWKhCMEBPZHQxk,
    password: _zpsGJMtChYYdHiQS,
    hostname: _WFwbPHZovYMxrKhv,
    port: _nSNjKGMDeuUPrXks
  } = _uOdgTusEJaxWVqQq;
  const _OmVGfFkZEotbmFYI = await connect({
    hostname: _WFwbPHZovYMxrKhv,
    port: _nSNjKGMDeuUPrXks
  });

  // 构建HTTP CONNECT请求
  let _GJvJLEchtxmkPkQA = `CONNECT ${_onRxQojEdgFrEBsn}:${_ZbstUaYZljaadhJe} HTTP/1.1\r\n`;
  _GJvJLEchtxmkPkQA += `Host: ${_onRxQojEdgFrEBsn}:${_ZbstUaYZljaadhJe}\r\n`;

  // 添加代理认证（如果需要）
  if (_hDEWKhCMEBPZHQxk && _zpsGJMtChYYdHiQS) {
    const _JEaclSLcRAGCSfmB = `${_hDEWKhCMEBPZHQxk}:${_zpsGJMtChYYdHiQS}`;
    const _tHGwyJtWgyoixzPj = btoa(_JEaclSLcRAGCSfmB);
    _GJvJLEchtxmkPkQA += `Proxy-Authorization: Basic ${_tHGwyJtWgyoixzPj}\r\n`;
  }
  _GJvJLEchtxmkPkQA += `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36\r\n`;
  _GJvJLEchtxmkPkQA += `Proxy-Connection: Keep-Alive\r\n`;
  _GJvJLEchtxmkPkQA += `Connection: Keep-Alive\r\n`; // 添加标准 Connection 头
  _GJvJLEchtxmkPkQA += `\r\n`;
  try {
    // 发送连接请求
    const _fkwpsKkDapIiyGwA = _OmVGfFkZEotbmFYI.writable.getWriter();
    await _fkwpsKkDapIiyGwA.write(new TextEncoder().encode(_GJvJLEchtxmkPkQA));
    _fkwpsKkDapIiyGwA.releaseLock();
  } catch (_xuDHicfzjQOyVjSU) {
    console.error('发送HTTP CONNECT请求失败:', _xuDHicfzjQOyVjSU);
    throw new Error(`发送HTTP CONNECT请求失败: ${_xuDHicfzjQOyVjSU.message}`);
  }

  // 读取HTTP响应
  const _TnpBCbdgUAxjuIEi = _OmVGfFkZEotbmFYI.readable.getReader();
  let _kGofpcWjhYjtPqex = '';
  let _uDHjFdErosFbiuhr = false;
  let _mbTOtpHntYfDeZhT = new Uint8Array(0);
  try {
    while (true) {
      const {
        value: _RKDvNqTpEiYxpmDS,
        done: _mHcnRCTIomYEaVUK
      } = await _TnpBCbdgUAxjuIEi.read();
      if (_mHcnRCTIomYEaVUK) {
        console.error('HTTP代理连接中断');
        throw new Error('HTTP代理连接中断');
      }

      // 合并接收到的数据
      const _wtolnjMUHSwlDNbk = new Uint8Array(_mbTOtpHntYfDeZhT.length + _RKDvNqTpEiYxpmDS.length);
      _wtolnjMUHSwlDNbk.set(_mbTOtpHntYfDeZhT);
      _wtolnjMUHSwlDNbk.set(_RKDvNqTpEiYxpmDS, _mbTOtpHntYfDeZhT.length);
      _mbTOtpHntYfDeZhT = _wtolnjMUHSwlDNbk;

      // 将收到的数据转换为文本
      _kGofpcWjhYjtPqex = new TextDecoder().decode(_mbTOtpHntYfDeZhT);

      // 检查是否收到完整的HTTP响应头
      if (_kGofpcWjhYjtPqex.includes('\r\n\r\n')) {
        // 分离HTTP头和可能的数据部分
        const _dxZiEpjJQfChZQap = _kGofpcWjhYjtPqex.indexOf('\r\n\r\n') + 4;
        const _qMjWjnPNnJFdfERT = _kGofpcWjhYjtPqex.substring(0, _dxZiEpjJQfChZQap);

        // 检查响应状态
        if (_qMjWjnPNnJFdfERT.startsWith('HTTP/1.1 200') || _qMjWjnPNnJFdfERT.startsWith('HTTP/1.0 200')) {
          _uDHjFdErosFbiuhr = true;

          // 如果响应头之后还有数据，我们需要保存这些数据以便后续处理
          if (_dxZiEpjJQfChZQap < _mbTOtpHntYfDeZhT.length) {
            const _zRaamTUvhJQATJgu = _mbTOtpHntYfDeZhT.slice(_dxZiEpjJQfChZQap);
            // 创建一个缓冲区来存储这些数据，以便稍后使用
            const _eUgvPaLNajDDHTzd = new ReadableStream({
              start(_yKfSlosUkMcqrnEn) {
                _yKfSlosUkMcqrnEn.enqueue(_zRaamTUvhJQATJgu);
              }
            });

            // 创建一个新的TransformStream来处理额外数据
            const {
              readable: _qjRKoutAGXDgUGjr,
              writable: _MWRRGiheFGolagDI
            } = new TransformStream();
            _eUgvPaLNajDDHTzd.pipeTo(_MWRRGiheFGolagDI).catch(_xuDHicfzjQOyVjSU => console.error('处理剩余数据错误:', _xuDHicfzjQOyVjSU));

            // 替换原始readable流
            // @ts-ignore
            _OmVGfFkZEotbmFYI.readable = _qjRKoutAGXDgUGjr;
          }
        } else {
          const _FcmImzSquMQEiQuL = `HTTP代理连接失败: ${_qMjWjnPNnJFdfERT.split('\r\n')[0]}`;
          console.error(_FcmImzSquMQEiQuL);
          throw new Error(_FcmImzSquMQEiQuL);
        }
        break;
      }
    }
  } catch (_xuDHicfzjQOyVjSU) {
    _TnpBCbdgUAxjuIEi.releaseLock();
    throw new Error(`处理HTTP代理响应失败: ${_xuDHicfzjQOyVjSU.message}`);
  }
  _TnpBCbdgUAxjuIEi.releaseLock();
  if (!_uDHjFdErosFbiuhr) {
    throw new Error('HTTP代理连接失败: 未收到成功响应');
  }
  return _OmVGfFkZEotbmFYI;
}
async function _owNIZNXdktbrcUfy(_mqpKjCkdVNzfdMGZ, _ufddnPoSpnUjFPIZ) {
  let _rEpoZkFzRGfSGONM = false;
  const _sPeizVMPrJZiTrfO = new TransformStream({
    start(_yKfSlosUkMcqrnEn) {},
    transform(_RpXLkqejXEnJVjaX, _yKfSlosUkMcqrnEn) {
      for (let _CFmSQyweQucjDfwX = 0; _CFmSQyweQucjDfwX < _RpXLkqejXEnJVjaX.byteLength;) {
        const _oCtLCVlEZrbyvFmY = _RpXLkqejXEnJVjaX.slice(_CFmSQyweQucjDfwX, _CFmSQyweQucjDfwX + 2);
        const _MezyYGlDbRiCUmVa = new DataView(_oCtLCVlEZrbyvFmY).getUint16(0);
        const _lhTheOvrNkueutlJ = new Uint8Array(_RpXLkqejXEnJVjaX.slice(_CFmSQyweQucjDfwX + 2, _CFmSQyweQucjDfwX + 2 + _MezyYGlDbRiCUmVa));
        _CFmSQyweQucjDfwX = _CFmSQyweQucjDfwX + 2 + _MezyYGlDbRiCUmVa;
        _yKfSlosUkMcqrnEn.enqueue(_lhTheOvrNkueutlJ);
      }
    },
    flush(_yKfSlosUkMcqrnEn) {}
  });
  _sPeizVMPrJZiTrfO.readable.pipeTo(new WritableStream({
    async write(_RpXLkqejXEnJVjaX) {
      const _RgUcYJzIhFAksEbx = await fetch('https://1.1.1.1/dns-query', {
        method: 'POST',
        headers: {
          'content-type': 'application/dns-message'
        },
        body: _RpXLkqejXEnJVjaX
      });
      const _SHGXCLAjUGUfEKzb = await _RgUcYJzIhFAksEbx.arrayBuffer();
      const _DteDQakDBzDbjtrx = _SHGXCLAjUGUfEKzb.byteLength;
      const _tbmhBjIbkNkCJMma = new Uint8Array([_DteDQakDBzDbjtrx >> 8 & 0xff, _DteDQakDBzDbjtrx & 0xff]);
      if (_mqpKjCkdVNzfdMGZ.readyState === _TeKvZJoIHvhzyUbT) {
        if (_rEpoZkFzRGfSGONM) {
          _mqpKjCkdVNzfdMGZ.send(await new Blob([_tbmhBjIbkNkCJMma, _SHGXCLAjUGUfEKzb]).arrayBuffer());
        } else {
          _mqpKjCkdVNzfdMGZ.send(await new Blob([_ufddnPoSpnUjFPIZ, _tbmhBjIbkNkCJMma, _SHGXCLAjUGUfEKzb]).arrayBuffer());
          _rEpoZkFzRGfSGONM = true;
        }
      }
    }
  })).catch(_UuOFzBLgJHpduMBn => {});
  const _fkwpsKkDapIiyGwA = _sPeizVMPrJZiTrfO.writable.getWriter();
  return {
    write(_RpXLkqejXEnJVjaX) {
      _fkwpsKkDapIiyGwA.write(_RpXLkqejXEnJVjaX);
    }
  };
}

// ========== 必要常量和依赖 ==========
const _TeKvZJoIHvhzyUbT = 1;
import { connect } from 'cloudflare:sockets';
async function _hBXFporDWdgyeZdK(_pZEBmgkkgjrgDMGN) {
  _pZEBmgkkgjrgDMGN = _pZEBmgkkgjrgDMGN.toLowerCase();
  let _AozzgAkRPRjnPzCB = _pZEBmgkkgjrgDMGN,
    _XeRTDsOBNRQinyRZ = 443;
  if (_pZEBmgkkgjrgDMGN.includes('.tp')) {
    const _xHablDABIvSRRfIZ = _pZEBmgkkgjrgDMGN.match(/\.tp(\d+)/);
    if (_xHablDABIvSRRfIZ) _XeRTDsOBNRQinyRZ = parseInt(_xHablDABIvSRRfIZ[1], 10);
    return [_AozzgAkRPRjnPzCB, _XeRTDsOBNRQinyRZ];
  }
  if (_pZEBmgkkgjrgDMGN.includes(']:')) {
    const _itXqJmUUMhPnKlmm = _pZEBmgkkgjrgDMGN.split(']:');
    _AozzgAkRPRjnPzCB = _itXqJmUUMhPnKlmm[0] + ']';
    _XeRTDsOBNRQinyRZ = parseInt(_itXqJmUUMhPnKlmm[1], 10) || _XeRTDsOBNRQinyRZ;
  } else if (_pZEBmgkkgjrgDMGN.includes(':') && !_pZEBmgkkgjrgDMGN.startsWith('[')) {
    const _jqnXlkLcdqhxxRdO = _pZEBmgkkgjrgDMGN.lastIndexOf(':');
    _AozzgAkRPRjnPzCB = _pZEBmgkkgjrgDMGN.slice(0, _jqnXlkLcdqhxxRdO);
    _XeRTDsOBNRQinyRZ = parseInt(_pZEBmgkkgjrgDMGN.slice(_jqnXlkLcdqhxxRdO + 1), 10) || _XeRTDsOBNRQinyRZ;
  }
  return [_AozzgAkRPRjnPzCB, _XeRTDsOBNRQinyRZ];
}
async function _LJTLhGpEKHKjPfDS(_zMTgxmxxzTXWrlVC) {
  const _BiCphelQQAWWJLpw = new URL(_zMTgxmxxzTXWrlVC.url);
  const {
    pathname: _hfEetiDOmZZpjExD,
    searchParams: _HxiravacpVQcYziE
  } = _BiCphelQQAWWJLpw;
  const _DHnKemhTIQjffwQG = _hfEetiDOmZZpjExD.toLowerCase();

  // 初始化
  _TvRTeUYEWeGFsYcx = _HxiravacpVQcYziE.get('socks5') || _HxiravacpVQcYziE.get('http') || null;
  _ZZyGkmHXUlaQUCoM = _HxiravacpVQcYziE.has('globalproxy') || false;

  // 统一处理反代IP参数 (优先级最高,使用正则一次匹配)
  const _zezIavOoAKYCSStl = _DHnKemhTIQjffwQG.match(/\/(proxyip[.=]|pyip=|ip=)(.+)/);
  if (_HxiravacpVQcYziE.has('proxyip')) {
    const _tCfwHKefprWDpLkX = _HxiravacpVQcYziE.get('proxyip');
    _IonpbvMgwRXRdSxK = _tCfwHKefprWDpLkX.includes(',') ? _tCfwHKefprWDpLkX.split(',')[Math.floor(Math.random() * _tCfwHKefprWDpLkX.split(',').length)] : _tCfwHKefprWDpLkX;
    return;
  } else if (_zezIavOoAKYCSStl) {
    const _tCfwHKefprWDpLkX = _zezIavOoAKYCSStl[1] === 'proxyip.' ? `proxyip.${_zezIavOoAKYCSStl[2]}` : _zezIavOoAKYCSStl[2];
    _IonpbvMgwRXRdSxK = _tCfwHKefprWDpLkX.includes(',') ? _tCfwHKefprWDpLkX.split(',')[Math.floor(Math.random() * _tCfwHKefprWDpLkX.split(',').length)] : _tCfwHKefprWDpLkX;
    return;
  }

  // 处理SOCKS5/HTTP代理参数
  let _iSMOMRjtLAVZJoht;
  if (_iSMOMRjtLAVZJoht = _hfEetiDOmZZpjExD.match(/\/(socks5?|http):\/?\/?(.+)/i)) {
    // 格式: /socks5://... 或 /http://...
    _RpiKUBDIqdxrXdZk = _iSMOMRjtLAVZJoht[1].toLowerCase() === 'http' ? 'http' : 'socks5';
    _TvRTeUYEWeGFsYcx = _iSMOMRjtLAVZJoht[2].split('#')[0];
    _ZZyGkmHXUlaQUCoM = true;

    // 处理Base64编码的用户名密码
    if (_TvRTeUYEWeGFsYcx.includes('@')) {
      const _BKSIjiNVHsvnDWvn = _TvRTeUYEWeGFsYcx.lastIndexOf('@');
      let _BGLidOfxxdeGBete = _TvRTeUYEWeGFsYcx.substring(0, _BKSIjiNVHsvnDWvn).replaceAll('%3D', '=');
      if (/^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i.test(_BGLidOfxxdeGBete) && !_BGLidOfxxdeGBete.includes(':')) {
        _BGLidOfxxdeGBete = atob(_BGLidOfxxdeGBete);
      }
      _TvRTeUYEWeGFsYcx = `${_BGLidOfxxdeGBete}@${_TvRTeUYEWeGFsYcx.substring(_BKSIjiNVHsvnDWvn + 1)}`;
    }
  } else if (_iSMOMRjtLAVZJoht = _hfEetiDOmZZpjExD.match(/\/(g?s5|socks5|g?http)=(.+)/i)) {
    // 格式: /socks5=... 或 /s5=... 或 /gs5=... 或 /http=... 或 /ghttp=...
    const _oejBFNzWGQqWldva = _iSMOMRjtLAVZJoht[1].toLowerCase();
    _TvRTeUYEWeGFsYcx = _iSMOMRjtLAVZJoht[2];
    _RpiKUBDIqdxrXdZk = _oejBFNzWGQqWldva.includes('http') ? 'http' : 'socks5';
    _ZZyGkmHXUlaQUCoM = _oejBFNzWGQqWldva.startsWith('g') || _ZZyGkmHXUlaQUCoM; // gs5 或 ghttp 开头启用全局
  }

  // 解析SOCKS5地址
  if (_TvRTeUYEWeGFsYcx) {
    try {
      _uOdgTusEJaxWVqQq = await _dgCrLaRPXOenRgsP(_TvRTeUYEWeGFsYcx);
      _RpiKUBDIqdxrXdZk = _HxiravacpVQcYziE.get('http') ? 'http' : _RpiKUBDIqdxrXdZk;
    } catch (_xuDHicfzjQOyVjSU) {
      console.error('解析SOCKS5地址失败:', _xuDHicfzjQOyVjSU.message);
      _RpiKUBDIqdxrXdZk = null;
    }
  } else _RpiKUBDIqdxrXdZk = null;
}
async function _dgCrLaRPXOenRgsP(_WuHpIacFthsUMxYV) {
  const _yLfzPrWjBXLpttwP = _WuHpIacFthsUMxYV.lastIndexOf("@");
  let [_yDXEQESuSqyOfNwV, _wgDnCpXVOlwREaUD] = _yLfzPrWjBXLpttwP === -1 ? [_WuHpIacFthsUMxYV, undefined] : [_WuHpIacFthsUMxYV.substring(_yLfzPrWjBXLpttwP + 1), _WuHpIacFthsUMxYV.substring(0, _yLfzPrWjBXLpttwP)];
  let _hDEWKhCMEBPZHQxk, _zpsGJMtChYYdHiQS, _WFwbPHZovYMxrKhv, _nSNjKGMDeuUPrXks;
  if (_wgDnCpXVOlwREaUD) {
    const _ojoAMdHfcfvQwqMu = _wgDnCpXVOlwREaUD.split(":");
    if (_ojoAMdHfcfvQwqMu.length !== 2) {
      throw new Error('无效的 SOCKS 地址格式：认证部分必须是 "username:password" 的形式');
    }
    [_hDEWKhCMEBPZHQxk, _zpsGJMtChYYdHiQS] = _ojoAMdHfcfvQwqMu;
  }
  const _olMwRzeGGdolDDuk = _yDXEQESuSqyOfNwV.split(":");
  if (_olMwRzeGGdolDDuk.length > 2 && _yDXEQESuSqyOfNwV.includes("]:")) {
    _nSNjKGMDeuUPrXks = Number(_yDXEQESuSqyOfNwV.split("]:")[1].replace(/[^\d]/g, ''));
    _WFwbPHZovYMxrKhv = _yDXEQESuSqyOfNwV.split("]:")[0] + "]";
  } else if (_olMwRzeGGdolDDuk.length === 2) {
    _nSNjKGMDeuUPrXks = Number(_olMwRzeGGdolDDuk.pop().replace(/[^\d]/g, ''));
    _WFwbPHZovYMxrKhv = _olMwRzeGGdolDDuk.join(":");
  } else {
    _nSNjKGMDeuUPrXks = 80;
    _WFwbPHZovYMxrKhv = _yDXEQESuSqyOfNwV;
  }
  if (isNaN(_nSNjKGMDeuUPrXks)) {
    throw new Error('无效的 SOCKS 地址格式：端口号必须是数字');
  }
  const _FGOubIXfLEbIwnMJ = /^\[.*\]$/;
  if (_WFwbPHZovYMxrKhv.includes(":") && !_FGOubIXfLEbIwnMJ.test(_WFwbPHZovYMxrKhv)) {
    throw new Error('无效的 SOCKS 地址格式：IPv6 地址必须用方括号括起来，如 [2001:db8::1]');
  }
  return {
    username: _hDEWKhCMEBPZHQxk,
    password: _zpsGJMtChYYdHiQS,
    hostname: _WFwbPHZovYMxrKhv,
    port: _nSNjKGMDeuUPrXks
  };
}