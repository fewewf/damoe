const _oiALlIDSZAjfmSoQ = '04ab5537-a9c5-49aa-9fca-c4601ecf6753'; // 天书12
//1. 天书版12.0重构版队列传输模式改，本版再次改变传输逻辑，大幅度提升传输稳定性，建议pages部署，这版是全功能开发者研究版，不适合小白部署
import { connect } from 'cloudflare:sockets';
//////////////////////////////////////////////////////////////////////////配置区块////////////////////////////////////////////////////////////////////////
let _oWiEuTjIKvEjBfMv = '',
  _WtgFapLgZSFIVVFe = null,
  _TWhytzZYgPaZSxgp = false,
  _bJOZqmzFzTMuZbSr = '',
  _MFtgrXlCtQmcaSZK = {};
//////////////////////////////////////////////////////////////////////////个性化配置///////////////////////////////////////////////////////////////////////
//以下是适合开发者研究的个性化配置，如果你是小白保持默认别动就行
let _XekuMLigiiDOUQvN = false; //开启则使用队列传输方式，关闭则是原始管道流传输方式
let _ZxVGXtfMXIlciaQv = false; //仅新版传输方式有效，选择是否启动控流机制，true启动，false关闭，使用控流可降低CPU超时的概率，提升连接稳定性，适合轻度使用，日常使用应该绰绰有余
let _ljxBeOMBrKCPtSYi = 200; //单位毫秒，每传输2m数据暂停多少毫秒
//////////////////////////////////////////////////////////////////////////网页入口////////////////////////////////////////////////////////////////////////
export default {
  async fetch(_uXPYpJBhLUYugxNq) {
    _oWiEuTjIKvEjBfMv = _oWiEuTjIKvEjBfMv ? _oWiEuTjIKvEjBfMv : _uXPYpJBhLUYugxNq.cf.colo + '.PrOxYIp.CmLiUsSsS.nEt';
    if (_uXPYpJBhLUYugxNq.headers.get('Upgrade') === 'websocket') {
      await _PJNElyxODtResHif(_uXPYpJBhLUYugxNq);
      return await _meMdHaXDgFjoHyYK(_uXPYpJBhLUYugxNq);
    } else {
      return new Response('Hello World!', {
        status: 200
      });
    }
  }
};

////////////////////////////////////////////////////////////////////////脚本主要架构//////////////////////////////////////////////////////////////////////
//第一步，读取和构建基础访问结构
async function _meMdHaXDgFjoHyYK(_uXPYpJBhLUYugxNq) {
  const _kyiBLyDrvUwawAJk = new WebSocketPair();
  const [_bEsOCHgGmOKzwjht, _IjLVIWJxiTTStyfk] = Object.values(_kyiBLyDrvUwawAJk);
  _IjLVIWJxiTTStyfk.accept();
  _RtZXGTuMiKVNyhiN(_uXPYpJBhLUYugxNq, _IjLVIWJxiTTStyfk);
  return new Response(null, {
    status: 101,
    webSocket: _bEsOCHgGmOKzwjht
  }); //一切准备就绪后，回复客户端WS连接升级成功
}
async function _RtZXGTuMiKVNyhiN(_uXPYpJBhLUYugxNq, _IjLVIWJxiTTStyfk) {
  let _iQBXwkxrODdOyOoU;
  const _BArbpbuUvbIdXHyI = _uXPYpJBhLUYugxNq.headers.get('sec-websocket-protocol'); //读取访问标头中的WS通信数据
  if (!_BArbpbuUvbIdXHyI) {
    _iQBXwkxrODdOyOoU = await new Promise(_EcjtxEGwVAxIRDjc => {
      _IjLVIWJxiTTStyfk.addEventListener('message', _FgcfruffnLGWGszM => {
        _EcjtxEGwVAxIRDjc(new Uint8Array(_FgcfruffnLGWGszM.data));
      }, {
        once: true
      });
    });
  } else {
    _iQBXwkxrODdOyOoU = _vpLzurpdPOHbqeJU(_BArbpbuUvbIdXHyI); //解码目标访问数据，传递给TCP握手进程
  }
  _CPviNBhhowHojFvZ(_iQBXwkxrODdOyOoU, _IjLVIWJxiTTStyfk); //解析VL数据并进行TCP握手
}
function _vpLzurpdPOHbqeJU(_OrhpXurgHhYlpIJP) {
  const _aPanxBJibtFWJGsz = _OrhpXurgHhYlpIJP.replace(/-/g, '+').replace(/_/g, '/');
  const _YFZDSLecyALwsVur = atob(_aPanxBJibtFWJGsz);
  const _LWvwWAQiXdTrmHwW = Uint8Array.from(_YFZDSLecyALwsVur, _OEHXkoxBkJfqiodE => _OEHXkoxBkJfqiodE.charCodeAt(0));
  return _LWvwWAQiXdTrmHwW;
}
//第二步，解读VL协议数据，创建TCP握手
async function _CPviNBhhowHojFvZ(_FNCkrAylVjujIHBF, _IjLVIWJxiTTStyfk, _fphussbjeZnctzzh) {
  let _esoseAFiXrdndtyY, _QxHvLTDEZfqfbtuV, _uEarvhoMSCmdMnhw;
  try {
    const _rzqqWxoxYkAIKhQR = _FNCkrAylVjujIHBF[0];
    _IjLVIWJxiTTStyfk.send(new Uint8Array([_rzqqWxoxYkAIKhQR, 0]));
    const _HCmbOjSnuEmxLKUR = _FNCkrAylVjujIHBF[17];
    const _nqwIxFxLKoAwPtcd = 18 + _HCmbOjSnuEmxLKUR + 1;
    const _LhvqQHemHBNQLDyM = new DataView(_FNCkrAylVjujIHBF.buffer, _nqwIxFxLKoAwPtcd, 2).getUint16(0);
    if (_LhvqQHemHBNQLDyM === 53) {
      //这个处理是应对某些客户端优先强制查询dns的情况，也是通过加密通道udp over tcp的，放心使用
      const _eFVWmFFYyGJFvpGP = _FNCkrAylVjujIHBF.slice(_nqwIxFxLKoAwPtcd + 9);
      const _lIUsAsTFarwGaCII = await fetch('https://1.1.1.1/dns-query', {
        //不是所有doh都支持二进制查询，默认的是最快的地址，想更换可以换成"https://dns.google/dns-query"
        method: 'POST',
        headers: {
          'content-type': 'application/dns-message'
        },
        body: _eFVWmFFYyGJFvpGP
      });
      const _GYYgbBNXOpObPeTi = await _lIUsAsTFarwGaCII.arrayBuffer();
      const _HqezuslnYXBlWqRT = new Uint8Array([_GYYgbBNXOpObPeTi.byteLength >> 8 & 0xff, _GYYgbBNXOpObPeTi.byteLength & 0xff]);
      _IjLVIWJxiTTStyfk.send(await new Blob([_HqezuslnYXBlWqRT, _GYYgbBNXOpObPeTi, new TextEncoder().encode(_IefwWjgzGIwooJXo())]).arrayBuffer());
      return;
    }
    const _YQqEvDwvgmKtoyqz = _nqwIxFxLKoAwPtcd + 2;
    _esoseAFiXrdndtyY = _FNCkrAylVjujIHBF[_YQqEvDwvgmKtoyqz];
    let _PFbYQcvEfKJpcQUj = _YQqEvDwvgmKtoyqz + 1;
    switch (_esoseAFiXrdndtyY) {
      case 1:
        _uEarvhoMSCmdMnhw = 4;
        _QxHvLTDEZfqfbtuV = _FNCkrAylVjujIHBF.slice(_PFbYQcvEfKJpcQUj, _PFbYQcvEfKJpcQUj + _uEarvhoMSCmdMnhw).join('.');
        break;
      case 2:
        _uEarvhoMSCmdMnhw = _FNCkrAylVjujIHBF[_PFbYQcvEfKJpcQUj];
        _PFbYQcvEfKJpcQUj += 1;
        _QxHvLTDEZfqfbtuV = new TextDecoder().decode(_FNCkrAylVjujIHBF.slice(_PFbYQcvEfKJpcQUj, _PFbYQcvEfKJpcQUj + _uEarvhoMSCmdMnhw));
        break;
      case 3:
        _uEarvhoMSCmdMnhw = 16;
        const _nVITSDEMscvmfYyU = [];
        const _IJEaDWnXERNmbuGk = new DataView(_FNCkrAylVjujIHBF.buffer, _PFbYQcvEfKJpcQUj, 16);
        for (let _cIzprtGKSIQJgcMw = 0; _cIzprtGKSIQJgcMw < 8; _cIzprtGKSIQJgcMw++) _nVITSDEMscvmfYyU.push(_IJEaDWnXERNmbuGk.getUint16(_cIzprtGKSIQJgcMw * 2).toString(16));
        _QxHvLTDEZfqfbtuV = _nVITSDEMscvmfYyU.join(':');
        break;
      default:
        throw new Error('无效的访问地址');
    }
    if (_oiALlIDSZAjfmSoQ && _lJUVOgphFiYwAiCY(_FNCkrAylVjujIHBF.slice(1, 17)) !== _oiALlIDSZAjfmSoQ) throw new Error('UUID验证失败');
    if (_QxHvLTDEZfqfbtuV.includes(atob('c3BlZWQuY2xvdWRmbGFyZS5jb20='))) throw new Error('Access');
    if (_WtgFapLgZSFIVVFe == 'sst5' && _TWhytzZYgPaZSxgp) {
      _fphussbjeZnctzzh = await _uAlndLuboXaImMAE(_esoseAFiXrdndtyY, _QxHvLTDEZfqfbtuV, _LhvqQHemHBNQLDyM);
    } else if (_WtgFapLgZSFIVVFe == 'http' && _TWhytzZYgPaZSxgp) {
      _fphussbjeZnctzzh = await _AVqTkQkBYLcBPmLV(_QxHvLTDEZfqfbtuV, _LhvqQHemHBNQLDyM);
    } else {
      try {
        if (_esoseAFiXrdndtyY === 3) {
          const _yFAYeZmOMxYvBNbG = `[${_QxHvLTDEZfqfbtuV}]`;
          _fphussbjeZnctzzh = connect({
            hostname: _yFAYeZmOMxYvBNbG,
            port: _LhvqQHemHBNQLDyM
          });
        } else {
          _fphussbjeZnctzzh = connect({
            hostname: _QxHvLTDEZfqfbtuV,
            port: _LhvqQHemHBNQLDyM
          });
        }
        await _fphussbjeZnctzzh.opened;
      } catch {
        if (_WtgFapLgZSFIVVFe == 'sst5') {
          _fphussbjeZnctzzh = await _uAlndLuboXaImMAE(_esoseAFiXrdndtyY, _QxHvLTDEZfqfbtuV, _LhvqQHemHBNQLDyM);
        } else if (_WtgFapLgZSFIVVFe == 'http') {
          _fphussbjeZnctzzh = await _AVqTkQkBYLcBPmLV(_QxHvLTDEZfqfbtuV, _LhvqQHemHBNQLDyM);
        } else {
          const [_YuBagWFiuEevfktr, _SKYfMUAnCCxkQhDW] = await _FzmjMfyXIsZxxsVm(_oWiEuTjIKvEjBfMv);
          _fphussbjeZnctzzh = connect({
            hostname: _YuBagWFiuEevfktr,
            port: _SKYfMUAnCCxkQhDW
          });
        }
      }
    }
    await _fphussbjeZnctzzh.opened;
    const _kGZDpwAQglhxhCpx = _FNCkrAylVjujIHBF.slice(_PFbYQcvEfKJpcQUj + _uEarvhoMSCmdMnhw);
    const _vdLYIJWkRUMCdtYj = _fphussbjeZnctzzh.writable.getWriter();
    if (_kGZDpwAQglhxhCpx.length > 0) {
      await _vdLYIJWkRUMCdtYj.write(_kGZDpwAQglhxhCpx);
    }
    if (_XekuMLigiiDOUQvN) {
      const _IGGmJXPhRjGtfrZq = _fphussbjeZnctzzh.readable.getReader();
      _LyDLKfcUrdIrBVPo(_QxHvLTDEZfqfbtuV, _vdLYIJWkRUMCdtYj, _IGGmJXPhRjGtfrZq, _IjLVIWJxiTTStyfk); //建立WS接口与TCP接口的传输管道
    } else {
      _NQgTNqgDVHmGVMIB(_vdLYIJWkRUMCdtYj, _fphussbjeZnctzzh, _IjLVIWJxiTTStyfk);
    }
  } catch (_tpJrqyfCzVgGpEVh) {
    return new Response(`连接握手失败: ${_tpJrqyfCzVgGpEVh}`, {
      status: 500
    });
  }
}
function _lJUVOgphFiYwAiCY(_fPQbsUzneZaOqCvY, _PWLOLOeXIOkOSSDE = 0) {
  const _lyaiTMKEdsKgamQm = Array.from({
    length: 256
  }, (_flCICfUvcSVReoSj, _mTHruKAQDzWjgWPt) => (_mTHruKAQDzWjgWPt + 256).toString(16).slice(1));
  const _TZrGSsiVCKnXbNgD = [4, 2, 2, 2, 6];
  let _AKaXwKeEXiXodJkw = _PWLOLOeXIOkOSSDE;
  const _opQiMFALiIgeOURq = _TZrGSsiVCKnXbNgD.map(_vTcwcrvmAFSAhyzI => Array.from({
    length: _vTcwcrvmAFSAhyzI
  }, () => _lyaiTMKEdsKgamQm[_fPQbsUzneZaOqCvY[_AKaXwKeEXiXodJkw++]]).join('')).join('-').toLowerCase();
  return _opQiMFALiIgeOURq;
}
globalThis.DNS缓存记录 = globalThis.DNS缓存记录 ??= new Map();
async function _FzmjMfyXIsZxxsVm(_AisqFnrvhvbKbxBi) {
  _AisqFnrvhvbKbxBi = _AisqFnrvhvbKbxBi.toLowerCase();
  let _TpoJxCLvKygyfTQd = _AisqFnrvhvbKbxBi,
    _GSNstMlgCKAVNGXw = 443;
  if (_AisqFnrvhvbKbxBi.includes('.tp')) {
    const _shOdFJoxvvSjsRZr = _AisqFnrvhvbKbxBi.match(/\.tp(\d+)/);
    if (_shOdFJoxvvSjsRZr) _GSNstMlgCKAVNGXw = parseInt(_shOdFJoxvvSjsRZr[1], 10);
    return [_TpoJxCLvKygyfTQd, _GSNstMlgCKAVNGXw];
  }
  if (_AisqFnrvhvbKbxBi.includes(']:')) {
    const _aDfNjPJefqQJBVPr = _AisqFnrvhvbKbxBi.split(']:');
    _TpoJxCLvKygyfTQd = _aDfNjPJefqQJBVPr[0] + ']';
    _GSNstMlgCKAVNGXw = parseInt(_aDfNjPJefqQJBVPr[1], 10) || _GSNstMlgCKAVNGXw;
  } else if (_AisqFnrvhvbKbxBi.includes(':') && !_AisqFnrvhvbKbxBi.startsWith('[')) {
    const _OwrVsrgZHxgRHAzL = _AisqFnrvhvbKbxBi.lastIndexOf(':');
    _TpoJxCLvKygyfTQd = _AisqFnrvhvbKbxBi.slice(0, _OwrVsrgZHxgRHAzL);
    _GSNstMlgCKAVNGXw = parseInt(_AisqFnrvhvbKbxBi.slice(_OwrVsrgZHxgRHAzL + 1), 10) || _GSNstMlgCKAVNGXw;
  }
  return [_TpoJxCLvKygyfTQd, _GSNstMlgCKAVNGXw];
}
//第三步，创建客户端WS-CF-目标的传输通道并监听状态
async function _NQgTNqgDVHmGVMIB(_vdLYIJWkRUMCdtYj, _fphussbjeZnctzzh, _IjLVIWJxiTTStyfk) {
  _IjLVIWJxiTTStyfk.addEventListener('message', async _FgcfruffnLGWGszM => {
    try {
      await _vdLYIJWkRUMCdtYj.write(new Uint8Array(_FgcfruffnLGWGszM.data));
    } catch {}
    ;
  }); //监听客户端WS接口后续数据，推送给TCP接口
  _fphussbjeZnctzzh.readable.pipeTo(new WritableStream({
    async write(_nxESgRbkqcpGPlcb) {
      _IjLVIWJxiTTStyfk.send(_nxESgRbkqcpGPlcb);
    }
  })); //将TCP接口返回的数据回写至客户端WS接口
}
async function _LyDLKfcUrdIrBVPo(_QxHvLTDEZfqfbtuV, _vdLYIJWkRUMCdtYj, _IGGmJXPhRjGtfrZq, _IjLVIWJxiTTStyfk, _aHlyWRCpoijGleTX = Promise.resolve(), _bOtBkLOSmZjMQwVm = performance.now(), _GvlvXdkquyDFUDMB = 0, _ByZVqQjqxkTGxFSx = 0, _wGpKsXEgoIoKuVfG = false, _kFaffuEEWFuohpic = false) {
  _IjLVIWJxiTTStyfk.addEventListener('message', _FgcfruffnLGWGszM => _aHlyWRCpoijGleTX = _aHlyWRCpoijGleTX.then(async () => {
    let _EOEsWtELMzoYslto = 0;
    let _nxGudyLAQxTDnXRD = 4 * 1024;
    const _wnMhepkAwjqOfXIu = new Uint8Array(_FgcfruffnLGWGszM.data);
    while (_EOEsWtELMzoYslto < _wnMhepkAwjqOfXIu.length) {
      const _KwGeVLCcLinHUUqy = _wnMhepkAwjqOfXIu.slice(_EOEsWtELMzoYslto, _EOEsWtELMzoYslto + _nxGudyLAQxTDnXRD);
      try {
        await _vdLYIJWkRUMCdtYj.write(_KwGeVLCcLinHUUqy);
      } catch {}
      ;
      _ByZVqQjqxkTGxFSx += _KwGeVLCcLinHUUqy.length;
      _EOEsWtELMzoYslto += _nxGudyLAQxTDnXRD;
    }
    _ByZVqQjqxkTGxFSx += _wnMhepkAwjqOfXIu.length;
  }).catch());
  const _koTyPgiSmJZztRxl = setInterval(async () => {
    if (_kFaffuEEWFuohpic) {
      clearInterval(_koTyPgiSmJZztRxl);
    } else {
      _aHlyWRCpoijGleTX = _aHlyWRCpoijGleTX.then(async () => await _vdLYIJWkRUMCdtYj.write(new Uint8Array(0))).catch();
    }
  }, 30000);
  while (true) {
    const {
      done: _UizohpfYlPVltZkX,
      value: _nxESgRbkqcpGPlcb
    } = await _IGGmJXPhRjGtfrZq.read();
    if (_nxESgRbkqcpGPlcb && _nxESgRbkqcpGPlcb.length > 0) {
      if (!_wGpKsXEgoIoKuVfG && _nxESgRbkqcpGPlcb.length >= 4096) {
        let _ViBnFzjebeIVSXkp = [];
        let _lvwdqBbusXTHLXha = 0;
        _wGpKsXEgoIoKuVfG = true;
        _ViBnFzjebeIVSXkp.push(_nxESgRbkqcpGPlcb);
        _lvwdqBbusXTHLXha += _nxESgRbkqcpGPlcb.length;
        while (true) {
          const {
            done: _UizohpfYlPVltZkX,
            value: _nxESgRbkqcpGPlcb
          } = await _IGGmJXPhRjGtfrZq.read();
          if (_UizohpfYlPVltZkX) _kFaffuEEWFuohpic = true;
          if (_nxESgRbkqcpGPlcb && _nxESgRbkqcpGPlcb.length > 0) {
            _ViBnFzjebeIVSXkp.push(_nxESgRbkqcpGPlcb);
            _lvwdqBbusXTHLXha += _nxESgRbkqcpGPlcb.length;
            if (_nxESgRbkqcpGPlcb.length < 4096 || _lvwdqBbusXTHLXha >= 512 * 1024) {
              let _ggQHMqBirqSCjtDr = 0;
              let _RNNLmWpxYOyNBzrb = new Uint8Array(_lvwdqBbusXTHLXha);
              for (const _KwGeVLCcLinHUUqy of _ViBnFzjebeIVSXkp) {
                _RNNLmWpxYOyNBzrb.set(_KwGeVLCcLinHUUqy, _ggQHMqBirqSCjtDr);
                _ggQHMqBirqSCjtDr += _KwGeVLCcLinHUUqy.length;
              }
              _aHlyWRCpoijGleTX = _aHlyWRCpoijGleTX.then(() => _IjLVIWJxiTTStyfk.send(_RNNLmWpxYOyNBzrb)).catch();
              _ByZVqQjqxkTGxFSx += _RNNLmWpxYOyNBzrb.length;
              _wGpKsXEgoIoKuVfG = false;
              break;
            }
          }
        }
      } else {
        _aHlyWRCpoijGleTX = _aHlyWRCpoijGleTX.then(() => _IjLVIWJxiTTStyfk.send(_nxESgRbkqcpGPlcb)).catch();
        _ByZVqQjqxkTGxFSx += _nxESgRbkqcpGPlcb.length;
      }
      if (_ZxVGXtfMXIlciaQv && _ByZVqQjqxkTGxFSx - _GvlvXdkquyDFUDMB > 2 * 1024 * 1024) {
        _aHlyWRCpoijGleTX = _aHlyWRCpoijGleTX.then(async () => await new Promise(_EcjtxEGwVAxIRDjc => setTimeout(_EcjtxEGwVAxIRDjc, _ljxBeOMBrKCPtSYi))).catch();
        _GvlvXdkquyDFUDMB = _ByZVqQjqxkTGxFSx;
      }
    }
    if (_UizohpfYlPVltZkX || _kFaffuEEWFuohpic) {
      _kFaffuEEWFuohpic = true;
      break;
    }
  }
}
//////////////////////////////////////////////////////////////////////////sst5部分//////////////////////////////////////////////////////////////////////
async function _uAlndLuboXaImMAE(_esoseAFiXrdndtyY, _QxHvLTDEZfqfbtuV, _LhvqQHemHBNQLDyM, _iwuxmSyWYlNyyclg, _vdLYIJWkRUMCdtYj, _IGGmJXPhRjGtfrZq) {
  let _vkgpkyPeSwGoGmOr, _wzmViDKohGdCYmBM, _OdAbLapUqLCGlRkr, _TpoJxCLvKygyfTQd, _GSNstMlgCKAVNGXw;
  try {
    ({
      username: _wzmViDKohGdCYmBM,
      password: _OdAbLapUqLCGlRkr,
      hostname: _TpoJxCLvKygyfTQd,
      port: _GSNstMlgCKAVNGXw
    } = _MFtgrXlCtQmcaSZK);
    _vkgpkyPeSwGoGmOr = connect({
      hostname: _TpoJxCLvKygyfTQd,
      port: _GSNstMlgCKAVNGXw
    });
    await _vkgpkyPeSwGoGmOr.opened;
    _vdLYIJWkRUMCdtYj = _vkgpkyPeSwGoGmOr.writable.getWriter();
    _IGGmJXPhRjGtfrZq = _vkgpkyPeSwGoGmOr.readable.getReader();
    const _DDVkUgJxhZyMMeTM = new TextEncoder(); //把文本内容转换为字节数组，如账号，密码，域名，方便与S5建立连接
    const _ygxvRyDwAHzsYIyt = new Uint8Array([5, 2, 0, 2]); //构建认证信息,支持无认证和用户名/密码认证
    await _vdLYIJWkRUMCdtYj.write(_ygxvRyDwAHzsYIyt); //发送认证信息，确认目标是否需要用户名密码认证
    const _zlsaNfjQtoGtYzZT = (await _IGGmJXPhRjGtfrZq.read()).value;
    if (_zlsaNfjQtoGtYzZT[1] === 0x02) {
      //检查是否需要用户名/密码认证
      if (!_wzmViDKohGdCYmBM || !_OdAbLapUqLCGlRkr) {
        throw new Error(`未配置账号密码`);
      }
      const _JEaVhbseQmDAVNur = new Uint8Array([1, _wzmViDKohGdCYmBM.length, ..._DDVkUgJxhZyMMeTM.encode(_wzmViDKohGdCYmBM), _OdAbLapUqLCGlRkr.length, ..._DDVkUgJxhZyMMeTM.encode(_OdAbLapUqLCGlRkr)]); //构建账号密码数据包，把字符转换为字节数组
      await _vdLYIJWkRUMCdtYj.write(_JEaVhbseQmDAVNur); //发送账号密码认证信息
      const _LijCiNGZvxwVMGUD = (await _IGGmJXPhRjGtfrZq.read()).value;
      if (_LijCiNGZvxwVMGUD[0] !== 0x01 || _LijCiNGZvxwVMGUD[1] !== 0x00) {
        //检查账号密码认证结果，认证失败则退出
        throw new Error(`账号密码错误`);
      }
    }
    switch (_esoseAFiXrdndtyY) {
      case 1:
        // IPv4
        _iwuxmSyWYlNyyclg = new Uint8Array([1, ..._QxHvLTDEZfqfbtuV.split('.').map(Number)]);
        break;
      case 2:
        // 域名
        _iwuxmSyWYlNyyclg = new Uint8Array([3, _QxHvLTDEZfqfbtuV.length, ..._DDVkUgJxhZyMMeTM.encode(_QxHvLTDEZfqfbtuV)]);
        break;
      case 3:
        // IPv6
        _iwuxmSyWYlNyyclg = _SQqZFDyzlGDeplbv(_QxHvLTDEZfqfbtuV);
        function _SQqZFDyzlGDeplbv(_fBximRgSlWLtpJjj) {
          const _JaBivvkFxAWPIzKx = _fBximRgSlWLtpJjj.startsWith('[') && _fBximRgSlWLtpJjj.endsWith(']') ? _fBximRgSlWLtpJjj.slice(1, -1) : _fBximRgSlWLtpJjj;
          const _acURxTzMKZxtNsyl = _JaBivvkFxAWPIzKx.split('::');
          const _iFSbsYEDAZboRadV = _acURxTzMKZxtNsyl[0] ? _acURxTzMKZxtNsyl[0].split(':').filter(Boolean) : [];
          const _hESHxLOLcEBhnBdT = _acURxTzMKZxtNsyl[1] ? _acURxTzMKZxtNsyl[1].split(':').filter(Boolean) : [];
          const _zOcpZnzuXuFZVzDT = 8 - (_iFSbsYEDAZboRadV.length + _hESHxLOLcEBhnBdT.length);
          if (_zOcpZnzuXuFZVzDT < 0) throw new Error('IPv6地址格式错误');
          const _BkDOtVkXMfuakobK = [..._iFSbsYEDAZboRadV, ...Array(_zOcpZnzuXuFZVzDT).fill('0'), ..._hESHxLOLcEBhnBdT];
          const _VRlvkBDBfOKIMwkO = _BkDOtVkXMfuakobK.flatMap(_bwwwknJzLqYRkmIP => {
            const _HOWzrhAPFxALQGnv = parseInt(_bwwwknJzLqYRkmIP || '0', 16);
            return [_HOWzrhAPFxALQGnv >> 8 & 0xff, _HOWzrhAPFxALQGnv & 0xff];
          });
          return new Uint8Array([0x04, ..._VRlvkBDBfOKIMwkO]);
        }
        break;
    }
    const _hGWNKwwJbNWPPraQ = new Uint8Array([5, 1, 0, ..._iwuxmSyWYlNyyclg, _LhvqQHemHBNQLDyM >> 8, _LhvqQHemHBNQLDyM & 0xff]); //构建转换好的地址消息
    await _vdLYIJWkRUMCdtYj.write(_hGWNKwwJbNWPPraQ); //发送转换后的地址
    const _bxKiiCPBlEFjGNsB = (await _IGGmJXPhRjGtfrZq.read()).value;
    if (_bxKiiCPBlEFjGNsB[0] !== 0x05 || _bxKiiCPBlEFjGNsB[1] !== 0x00) {
      throw new Error(`目标地址连接失败，访问地址: ${_QxHvLTDEZfqfbtuV}，地址类型: ${_esoseAFiXrdndtyY}`);
    }
    _vdLYIJWkRUMCdtYj.releaseLock();
    _IGGmJXPhRjGtfrZq.releaseLock();
    return _vkgpkyPeSwGoGmOr;
  } catch {}
  ;
  _vdLYIJWkRUMCdtYj?.releaseLock();
  _IGGmJXPhRjGtfrZq?.releaseLock();
  await _vkgpkyPeSwGoGmOr?.close();
  throw new Error(`所有sst5账号失效`);
}
async function _dCztXyDLXdsRKOzN(_ztRXINrXyjTDOVNo) {
  // 使用 "@" 分割地址，分为认证部分和服务器地址部分
  const _TwBOzhNxPAfQDcpN = _ztRXINrXyjTDOVNo.lastIndexOf("@");
  let [_fLbSzWKxPySRXmHW, _vbaTGOwUwsldxTOw] = _TwBOzhNxPAfQDcpN === -1 ? [_ztRXINrXyjTDOVNo, undefined] : [_ztRXINrXyjTDOVNo.substring(_TwBOzhNxPAfQDcpN + 1), _ztRXINrXyjTDOVNo.substring(0, _TwBOzhNxPAfQDcpN)];
  let _fGjJoKrLUuMhYRfn, _ABjQYBGrRuAKyMwA, _zFQkLlTiBlRHpLTG, _kDPdqmPAEViIMnZM;

  // 如果存在 former 部分，说明提供了认证信息
  if (_vbaTGOwUwsldxTOw) {
    const _ETbvsNeEJurUhepy = _vbaTGOwUwsldxTOw.split(":");
    if (_ETbvsNeEJurUhepy.length !== 2) {
      throw new Error('无效的 ss4 地址格式：认证部分必须是 "username:password" 的形式');
    }
    [_fGjJoKrLUuMhYRfn, _ABjQYBGrRuAKyMwA] = _ETbvsNeEJurUhepy;
  }

  // 解析服务器地址部分
  const _QRoqwmhzWZVVhHro = _fLbSzWKxPySRXmHW.split(":");
  // 检查是否是IPv6地址带端口格式 [xxx]:port
  if (_QRoqwmhzWZVVhHro.length > 2 && _fLbSzWKxPySRXmHW.includes("]:")) {
    // IPv6地址带端口格式：[2001:db8::1]:8080
    _kDPdqmPAEViIMnZM = Number(_fLbSzWKxPySRXmHW.split("]:")[1].replace(/[^\d]/g, ''));
    _zFQkLlTiBlRHpLTG = _fLbSzWKxPySRXmHW.split("]:")[0] + "]"; // 正确提取hostname部分
  } else if (_QRoqwmhzWZVVhHro.length === 2) {
    // IPv4地址带端口或域名带端口
    _kDPdqmPAEViIMnZM = Number(_QRoqwmhzWZVVhHro.pop().replace(/[^\d]/g, ''));
    _zFQkLlTiBlRHpLTG = _QRoqwmhzWZVVhHro.join(":");
  } else {
    _kDPdqmPAEViIMnZM = 80;
    _zFQkLlTiBlRHpLTG = _fLbSzWKxPySRXmHW;
  }
  if (isNaN(_kDPdqmPAEViIMnZM)) {
    throw new Error('无效的 ss4 地址格式：端口号必须是数字');
  }

  // 处理 IPv6 地址的特殊情况
  // IPv6 地址包含多个冒号，所以必须用方括号括起来，如 [2001:db8::1]
  const _nDscXmrfRjmTegfE = /^\[.*\]$/;
  if (_zFQkLlTiBlRHpLTG.includes(":") && !_nDscXmrfRjmTegfE.test(_zFQkLlTiBlRHpLTG)) {
    throw new Error('无效的 ss4 地址格式：IPv6 地址必须用方括号括起来，如 [2001:db8::1]');
  }

  //if (/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(hostname)) hostname = `${atob('d3d3Lg==')}${hostname}${atob('LmlwLjA5MDIyNy54eXo=')}`;
  // 返回解析后的结果
  return {
    username: _fGjJoKrLUuMhYRfn,
    // 用户名，如果没有则为 undefined
    password: _ABjQYBGrRuAKyMwA,
    // 密码，如果没有则为 undefined
    hostname: _zFQkLlTiBlRHpLTG,
    // 主机名，可以是域名、IPv4 或 IPv6 地址
    port: _kDPdqmPAEViIMnZM // 端口号，已转换为数字类型
  };
}
//////////////////////////////////////////////////////////////////////////订阅页面////////////////////////////////////////////////////////////////////////

function _IefwWjgzGIwooJXo(_NFQheumaONdnrmHM = 8, _IFdPBTXhQBUmKyFL = 24) {
  const _dEFrDiumXsoFNaxY = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const _jgFXZwbVgOQqotOh = _NFQheumaONdnrmHM + Math.floor(Math.random() * (_IFdPBTXhQBUmKyFL - _NFQheumaONdnrmHM + 1));
  const _FGDrgkDdmISVtMwR = [];
  const _XJkMoZejpOwRPFmF = new Uint8Array(_jgFXZwbVgOQqotOh);
  crypto.getRandomValues(_XJkMoZejpOwRPFmF);
  for (let _cIzprtGKSIQJgcMw = 0; _cIzprtGKSIQJgcMw < _jgFXZwbVgOQqotOh; _cIzprtGKSIQJgcMw++) {
    const _prjMrlrvyOYeExFW = _XJkMoZejpOwRPFmF[_cIzprtGKSIQJgcMw] % _dEFrDiumXsoFNaxY.length;
    _FGDrgkDdmISVtMwR.push(_dEFrDiumXsoFNaxY[_prjMrlrvyOYeExFW]);
  }
  return _FGDrgkDdmISVtMwR.join('');
}
async function _AVqTkQkBYLcBPmLV(_ngGGAZmtFPqKHFGl, _VHoBxBQAksYcKhVS) {
  const {
    username: _fGjJoKrLUuMhYRfn,
    password: _ABjQYBGrRuAKyMwA,
    hostname: _zFQkLlTiBlRHpLTG,
    port: _kDPdqmPAEViIMnZM
  } = _MFtgrXlCtQmcaSZK;
  const _QUXwuqKnQYZIwzyy = await connect({
    hostname: _zFQkLlTiBlRHpLTG,
    port: _kDPdqmPAEViIMnZM
  });

  // 构建HTTP CONNECT请求
  let _uywuayPLtHmSfKbb = `CONNECT ${_ngGGAZmtFPqKHFGl}:${_VHoBxBQAksYcKhVS} HTTP/1.1\r\n`;
  _uywuayPLtHmSfKbb += `Host: ${_ngGGAZmtFPqKHFGl}:${_VHoBxBQAksYcKhVS}\r\n`;

  // 添加代理认证（如果需要）
  if (_fGjJoKrLUuMhYRfn && _ABjQYBGrRuAKyMwA) {
    const _adcbPzodZfDyVnpk = `${_fGjJoKrLUuMhYRfn}:${_ABjQYBGrRuAKyMwA}`;
    const _LEXaPmaKUgYydino = btoa(_adcbPzodZfDyVnpk);
    _uywuayPLtHmSfKbb += `Proxy-Authorization: Basic ${_LEXaPmaKUgYydino}\r\n`;
  }
  _uywuayPLtHmSfKbb += `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36\r\n`;
  _uywuayPLtHmSfKbb += `Proxy-Connection: Keep-Alive\r\n`;
  _uywuayPLtHmSfKbb += `Connection: Keep-Alive\r\n`; // 添加标准 Connection 头
  _uywuayPLtHmSfKbb += `\r\n`;
  try {
    // 发送连接请求
    const _IMEMZTvhbylZBOcE = _QUXwuqKnQYZIwzyy.writable.getWriter();
    await _IMEMZTvhbylZBOcE.write(new TextEncoder().encode(_uywuayPLtHmSfKbb));
    _IMEMZTvhbylZBOcE.releaseLock();
  } catch (_jjwfCUFlmIXaOWnN) {
    console.error('发送HTTP CONNECT请求失败:', _jjwfCUFlmIXaOWnN);
    throw new Error(`发送HTTP CONNECT请求失败: ${_jjwfCUFlmIXaOWnN.message}`);
  }

  // 读取HTTP响应
  const _JxQIZeNodhtihwsA = _QUXwuqKnQYZIwzyy.readable.getReader();
  let _wMXJlYgOnyogtJZq = '';
  let _XHXjbMLCGReawFCF = false;
  let _ithSbBGnvmqSpxva = new Uint8Array(0);
  try {
    while (true) {
      const {
        value: _cskRFMRjMeDTjxrl,
        done: _kMBQcQamsqerzGgX
      } = await _JxQIZeNodhtihwsA.read();
      if (_kMBQcQamsqerzGgX) {
        console.error('HTTP代理连接中断');
        throw new Error('HTTP代理连接中断');
      }

      // 合并接收到的数据
      const _XkOISElvdktlUvFe = new Uint8Array(_ithSbBGnvmqSpxva.length + _cskRFMRjMeDTjxrl.length);
      _XkOISElvdktlUvFe.set(_ithSbBGnvmqSpxva);
      _XkOISElvdktlUvFe.set(_cskRFMRjMeDTjxrl, _ithSbBGnvmqSpxva.length);
      _ithSbBGnvmqSpxva = _XkOISElvdktlUvFe;

      // 将收到的数据转换为文本
      _wMXJlYgOnyogtJZq = new TextDecoder().decode(_ithSbBGnvmqSpxva);

      // 检查是否收到完整的HTTP响应头
      if (_wMXJlYgOnyogtJZq.includes('\r\n\r\n')) {
        // 分离HTTP头和可能的数据部分
        const _JeMwNtwnYZgccNNb = _wMXJlYgOnyogtJZq.indexOf('\r\n\r\n') + 4;
        const _fPkhACmTnroPCoZM = _wMXJlYgOnyogtJZq.substring(0, _JeMwNtwnYZgccNNb);

        // 检查响应状态
        if (_fPkhACmTnroPCoZM.startsWith('HTTP/1.1 200') || _fPkhACmTnroPCoZM.startsWith('HTTP/1.0 200')) {
          _XHXjbMLCGReawFCF = true;

          // 如果响应头之后还有数据，我们需要保存这些数据以便后续处理
          if (_JeMwNtwnYZgccNNb < _ithSbBGnvmqSpxva.length) {
            const _fyqdJRjxlDWSmYJv = _ithSbBGnvmqSpxva.slice(_JeMwNtwnYZgccNNb);
            // 创建一个缓冲区来存储这些数据，以便稍后使用
            const _shaqyyvqoipegKud = new ReadableStream({
              start(_iXgjagZiHwhTCKQp) {
                _iXgjagZiHwhTCKQp.enqueue(_fyqdJRjxlDWSmYJv);
              }
            });

            // 创建一个新的TransformStream来处理额外数据
            const {
              readable: _RNUziLGHGldtAgvt,
              writable: _UoGJSfGWvuZpLsMa
            } = new TransformStream();
            _shaqyyvqoipegKud.pipeTo(_UoGJSfGWvuZpLsMa).catch(_jjwfCUFlmIXaOWnN => console.error('处理剩余数据错误:', _jjwfCUFlmIXaOWnN));

            // 替换原始readable流
            // @ts-ignore
            _QUXwuqKnQYZIwzyy.readable = _RNUziLGHGldtAgvt;
          }
        } else {
          const _oktMOIlYpGSaQvmU = `HTTP代理连接失败: ${_fPkhACmTnroPCoZM.split('\r\n')[0]}`;
          console.error(_oktMOIlYpGSaQvmU);
          throw new Error(_oktMOIlYpGSaQvmU);
        }
        break;
      }
    }
  } catch (_jjwfCUFlmIXaOWnN) {
    _JxQIZeNodhtihwsA.releaseLock();
    throw new Error(`处理HTTP代理响应失败: ${_jjwfCUFlmIXaOWnN.message}`);
  }
  _JxQIZeNodhtihwsA.releaseLock();
  if (!_XHXjbMLCGReawFCF) {
    throw new Error('HTTP代理连接失败: 未收到成功响应');
  }
  return _QUXwuqKnQYZIwzyy;
}
async function _PJNElyxODtResHif(_tDrlAnqRibOUMqsd) {
  const _sANmYqRWfpFkxoCv = new URL(_tDrlAnqRibOUMqsd.url);
  const {
    pathname: _PyZInAjWeJlsVhhI,
    searchParams: _OHuDtKAmbzZPiZMn
  } = _sANmYqRWfpFkxoCv;
  const _sziDxHXTAzuVsqZE = _PyZInAjWeJlsVhhI.toLowerCase();

  // 初始化
  _bJOZqmzFzTMuZbSr = _OHuDtKAmbzZPiZMn.get('sst5') || _OHuDtKAmbzZPiZMn.get('http') || null;
  _TWhytzZYgPaZSxgp = _OHuDtKAmbzZPiZMn.has('globalproxy') || false;

  // 统一处理反代IP参数 (优先级最高,使用正则一次匹配)
  const _LMCbYTzQbDFZagSc = _sziDxHXTAzuVsqZE.match(/\/(proxyip[.=]|pyip=|ip=)(.+)/);
  if (_OHuDtKAmbzZPiZMn.has('proxyip')) {
    const _MXKUpdRDCNaXUOVq = _OHuDtKAmbzZPiZMn.get('proxyip');
    _oWiEuTjIKvEjBfMv = _MXKUpdRDCNaXUOVq.includes(',') ? _MXKUpdRDCNaXUOVq.split(',')[Math.floor(Math.random() * _MXKUpdRDCNaXUOVq.split(',').length)] : _MXKUpdRDCNaXUOVq;
    return;
  } else if (_LMCbYTzQbDFZagSc) {
    const _MXKUpdRDCNaXUOVq = _LMCbYTzQbDFZagSc[1] === 'proxyip.' ? `proxyip.${_LMCbYTzQbDFZagSc[2]}` : _LMCbYTzQbDFZagSc[2];
    _oWiEuTjIKvEjBfMv = _MXKUpdRDCNaXUOVq.includes(',') ? _MXKUpdRDCNaXUOVq.split(',')[Math.floor(Math.random() * _MXKUpdRDCNaXUOVq.split(',').length)] : _MXKUpdRDCNaXUOVq;
    return;
  }

  // 处理sst5/HTTP代理参数
  let _CEZtsvhoBqzyNimM;
  if (_CEZtsvhoBqzyNimM = _PyZInAjWeJlsVhhI.match(/\/(sst5?|http):\/?\/?(.+)/i)) {
    // 格式: /sst5://... 或 /http://...
    _WtgFapLgZSFIVVFe = _CEZtsvhoBqzyNimM[1].toLowerCase() === 'http' ? 'http' : 'sst5';
    _bJOZqmzFzTMuZbSr = _CEZtsvhoBqzyNimM[2].split('#')[0];
    _TWhytzZYgPaZSxgp = true;

    // 处理Base64编码的用户名密码
    if (_bJOZqmzFzTMuZbSr.includes('@')) {
      const _gbnoVaJKQAbhbABB = _bJOZqmzFzTMuZbSr.lastIndexOf('@');
      let _ROAoodJdNmNNNLjY = _bJOZqmzFzTMuZbSr.substring(0, _gbnoVaJKQAbhbABB).replaceAll('%3D', '=');
      if (/^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i.test(_ROAoodJdNmNNNLjY) && !_ROAoodJdNmNNNLjY.includes(':')) {
        _ROAoodJdNmNNNLjY = atob(_ROAoodJdNmNNNLjY);
      }
      _bJOZqmzFzTMuZbSr = `${_ROAoodJdNmNNNLjY}@${_bJOZqmzFzTMuZbSr.substring(_gbnoVaJKQAbhbABB + 1)}`;
    }
  } else if (_CEZtsvhoBqzyNimM = _PyZInAjWeJlsVhhI.match(/\/(g?s5|sst5|g?http)=(.+)/i)) {
    // 格式: /sst5=... 或 /s5=... 或 /gs5=... 或 /http=... 或 /ghttp=...
    const _DKduSFYUMYqJYkki = _CEZtsvhoBqzyNimM[1].toLowerCase();
    _bJOZqmzFzTMuZbSr = _CEZtsvhoBqzyNimM[2];
    _WtgFapLgZSFIVVFe = _DKduSFYUMYqJYkki.includes('http') ? 'http' : 'sst5';
    _TWhytzZYgPaZSxgp = _DKduSFYUMYqJYkki.startsWith('g') || _TWhytzZYgPaZSxgp; // gs5 或 ghttp 开头启用全局
  }

  // 解析sst5地址
  if (_bJOZqmzFzTMuZbSr) {
    try {
      _MFtgrXlCtQmcaSZK = await _dCztXyDLXdsRKOzN(_bJOZqmzFzTMuZbSr);
      _WtgFapLgZSFIVVFe = _OHuDtKAmbzZPiZMn.get('http') ? 'http' : _WtgFapLgZSFIVVFe;
    } catch (_jjwfCUFlmIXaOWnN) {
      console.error('解析sst5地址失败:', _jjwfCUFlmIXaOWnN.message);
      _WtgFapLgZSFIVVFe = null;
    }
  } else _WtgFapLgZSFIVVFe = null;
}
