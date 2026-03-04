const _OVnPLbWPEJBarSuC = '04ab5537-a9c5-49aa-9fca-c4601ecf6753'; // 天书13
import { connect } from 'cloudflare:sockets';
//本脚本不支持任何苹果ios客户端
//说明：抛弃了ed配置，不要设置/?ed=2560等任何ed，重构全部传输逻辑，去除订阅功能，自己手戳节点，支持基础反代路径传参/proxyip=，建议pages部署
let _BsvBwAfjUGbMbfZR = 'yx1.9898981.xyz:443',
  _HgWPrZptYiIJuSfH = null,
  _yNSHsbyfbLncHkLx = false,
  _gnJZFOqPCpwgfQHI = '',
  _juuZiCFqEsICIehU = {};
//////////////////////////////////////////////////////////////////////////流控配置////////////////////////////////////////////////////////////////////////
let _uwAFudSNbmnVXdTx = true; //true启动，false关闭，使用控流可降低CPU超时的概率，提升连接稳定性，适合轻度使用，日常使用应该绰绰有余
let _pOgdnJmerDsbDYdI = 64; //单位字节，相当于分片大小
//////////////////////////////////////////////////////////////////////////主要架构////////////////////////////////////////////////////////////////////////
export default {
  async fetch(_FRUdesihDpgzWBMK) {
    _BsvBwAfjUGbMbfZR = _BsvBwAfjUGbMbfZR ? _BsvBwAfjUGbMbfZR : _FRUdesihDpgzWBMK.cf.colo + '.PROXyIP.CMLIussss.NET';
    if (_FRUdesihDpgzWBMK.headers.get('Upgrade') === 'websocket') {
      await _MlacKlMplAFEUEDR(_FRUdesihDpgzWBMK);
      const [_eojxUMRzJUXuhpRC, _NcGbaSHwkdfujGjI] = Object.values(new WebSocketPair());
      _NcGbaSHwkdfujGjI.accept();
      _FvPfvOMwREgkcIZn(_NcGbaSHwkdfujGjI);
      return new Response(null, {
        status: 101,
        webSocket: _eojxUMRzJUXuhpRC
      }); //一切准备就绪后，回复客户端WS连接升级成功
    } else {
      return new Response('Hello World!', {
        status: 200
      });
    }
  }
};
async function _FvPfvOMwREgkcIZn(_NcGbaSHwkdfujGjI, _mumRoacVRsaQBGLB) {
  let _KiURdxepXPGojPbO,
    _lpMRLhaUSGsQIfwC,
    _YQdBmsRcibMIixxm,
    _vlMuByzMhWytEeLy = false,
    _qMdJiXWidjIccvKN = null,
    _MLaLDKmZfzUliYxS,
    _FUcNlSiVcWvRSDLO,
    _fBcwwwbZqcUepPvQ = Promise.resolve(),
    _qhdUOHqsQcLUDYTj = 0,
    _ophQQrSfiHYGKlIi = performance.now();
  try {
    _NcGbaSHwkdfujGjI.addEventListener('message', async _WHtEfBMiFJCsSGNB => {
      if (!_vlMuByzMhWytEeLy) {
        _vlMuByzMhWytEeLy = true;
        _qMdJiXWidjIccvKN = _hgLEYuqPooaZOqxn(_WHtEfBMiFJCsSGNB.data);
        _fBcwwwbZqcUepPvQ = _fBcwwwbZqcUepPvQ.then(() => _qMdJiXWidjIccvKN).catch(_bUDGKWojdiINEWMg => {
          throw _bUDGKWojdiINEWMg;
        });
        _qhdUOHqsQcLUDYTj += _WHtEfBMiFJCsSGNB.data.length;
      } else {
        await _qMdJiXWidjIccvKN;
        _fBcwwwbZqcUepPvQ = _fBcwwwbZqcUepPvQ.then(() => _MLaLDKmZfzUliYxS.write(_WHtEfBMiFJCsSGNB.data)).catch(_bUDGKWojdiINEWMg => {
          throw _bUDGKWojdiINEWMg;
        });
        _qhdUOHqsQcLUDYTj += _WHtEfBMiFJCsSGNB.data.length;
      }
    });
    async function _hgLEYuqPooaZOqxn(_vlMuByzMhWytEeLy) {
      const _gSvHfPtpiJzszJUD = new Uint8Array(_vlMuByzMhWytEeLy);
      const _QxhUQQuRKLQiaROd = _gSvHfPtpiJzszJUD[0];
      const _kOqaiTCliYreAOts = (_vzfoyJyBteToIGJb, _FjifiUWGNiAuFGnl = 0) => [..._vzfoyJyBteToIGJb.slice(_FjifiUWGNiAuFGnl, _FjifiUWGNiAuFGnl + 16)].map(_UHFIKgAaKCFSsXdb => _UHFIKgAaKCFSsXdb.toString(16).padStart(2, '0')).join('').replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');
      if (_OVnPLbWPEJBarSuC && _kOqaiTCliYreAOts(_gSvHfPtpiJzszJUD.slice(1, 17)) !== _OVnPLbWPEJBarSuC) throw new Error('UUID验证失败');
      _NcGbaSHwkdfujGjI.send(new Uint8Array([_QxhUQQuRKLQiaROd, 0]));
      const _BvuiDCWUvwoyGrWR = 18 + _gSvHfPtpiJzszJUD[17] + 1;
      const _JVVauyhsYJvcibWx = new DataView(_gSvHfPtpiJzszJUD.buffer, _BvuiDCWUvwoyGrWR, 2).getUint16(0);
      if (_JVVauyhsYJvcibWx === 53) {
        //这个处理是应对某些客户端优先强制查询dns的情况，通过加密通道udp over tcp的
        const _ioWhEYcFQXwuBXwk = _gSvHfPtpiJzszJUD.slice(_BvuiDCWUvwoyGrWR + 9);
        const _pYsjzLOFwLIuXJbw = await fetch('https://1.1.1.1/dns-query', {
          method: 'POST',
          headers: {
            'content-type': 'application/dns-message'
          },
          body: _ioWhEYcFQXwuBXwk
        });
        const _SBWkTOeSsXqmoORb = await _pYsjzLOFwLIuXJbw.arrayBuffer();
        const _ulwchQOKEcKMPgrV = new Uint8Array([_SBWkTOeSsXqmoORb.byteLength >> 8 & 0xff, _SBWkTOeSsXqmoORb.byteLength & 0xff]);
        _NcGbaSHwkdfujGjI.send(await new Blob([_ulwchQOKEcKMPgrV, _SBWkTOeSsXqmoORb]));
        return;
      }
      const _eNOhKgmaWRzGYUbo = _BvuiDCWUvwoyGrWR + 2;
      _KiURdxepXPGojPbO = _gSvHfPtpiJzszJUD[_eNOhKgmaWRzGYUbo];
      let _bJKxINKuGjrkggCD = _eNOhKgmaWRzGYUbo + 1;
      switch (_KiURdxepXPGojPbO) {
        case 1:
          _YQdBmsRcibMIixxm = 4;
          _lpMRLhaUSGsQIfwC = _gSvHfPtpiJzszJUD.slice(_bJKxINKuGjrkggCD, _bJKxINKuGjrkggCD + _YQdBmsRcibMIixxm).join('.');
          break;
        case 2:
          _YQdBmsRcibMIixxm = _gSvHfPtpiJzszJUD[_bJKxINKuGjrkggCD];
          _bJKxINKuGjrkggCD += 1;
          const _zKWbBHqFWZPINZRb = new TextDecoder().decode(_gSvHfPtpiJzszJUD.slice(_bJKxINKuGjrkggCD, _bJKxINKuGjrkggCD + _YQdBmsRcibMIixxm));
          _lpMRLhaUSGsQIfwC = _zKWbBHqFWZPINZRb;
          break;
        case 3:
          _YQdBmsRcibMIixxm = 16;
          const _XWTMLxqiBlauIiob = [];
          const _uRQrydHCykltfjcD = new DataView(_gSvHfPtpiJzszJUD.buffer, _bJKxINKuGjrkggCD, 16);
          for (let _FjifiUWGNiAuFGnl = 0; _FjifiUWGNiAuFGnl < 8; _FjifiUWGNiAuFGnl++) _XWTMLxqiBlauIiob.push(_uRQrydHCykltfjcD.getUint16(_FjifiUWGNiAuFGnl * 2).toString(16));
          _lpMRLhaUSGsQIfwC = _XWTMLxqiBlauIiob.join(':');
          break;
        default:
          throw new Error('无效的访问地址');
      }
      if (_lpMRLhaUSGsQIfwC.includes(atob('c3BlZWQuY2xvdWRmbGFyZS5jb20='))) throw new Error('Access');
      if (_HgWPrZptYiIJuSfH == 'socks5' && _yNSHsbyfbLncHkLx) {
        _mumRoacVRsaQBGLB = await _TdNCPDWvDAHWXqHA(_KiURdxepXPGojPbO, _lpMRLhaUSGsQIfwC, _JVVauyhsYJvcibWx);
      } else if (_HgWPrZptYiIJuSfH == 'http' && _yNSHsbyfbLncHkLx) {
        _mumRoacVRsaQBGLB = await _UWGFmllJkAGTTpnt(_lpMRLhaUSGsQIfwC, _JVVauyhsYJvcibWx);
      } else {
        try {
          if (_KiURdxepXPGojPbO === 3) {
            const _KDwKnZBAEbNqCxqd = `[${_lpMRLhaUSGsQIfwC}]`;
            _mumRoacVRsaQBGLB = connect({
              hostname: _KDwKnZBAEbNqCxqd,
              port: _JVVauyhsYJvcibWx
            });
          } else {
            _mumRoacVRsaQBGLB = connect({
              hostname: _lpMRLhaUSGsQIfwC,
              port: _JVVauyhsYJvcibWx
            });
          }
          await _mumRoacVRsaQBGLB.opened;
        } catch {
          if (_HgWPrZptYiIJuSfH == 'socks5') {
            _mumRoacVRsaQBGLB = await _TdNCPDWvDAHWXqHA(_KiURdxepXPGojPbO, _lpMRLhaUSGsQIfwC, _JVVauyhsYJvcibWx);
          } else if (_HgWPrZptYiIJuSfH == 'http') {
            _mumRoacVRsaQBGLB = await _UWGFmllJkAGTTpnt(_lpMRLhaUSGsQIfwC, _JVVauyhsYJvcibWx);
          } else {
            const [_svmeKthlkEVVjDvD, _tnzbTWQbKxisrvKW] = await _VhTWmLfAVOYDbBtJ(_BsvBwAfjUGbMbfZR);
            _mumRoacVRsaQBGLB = connect({
              hostname: _svmeKthlkEVVjDvD,
              port: _tnzbTWQbKxisrvKW
            });
          }
        }
      }
      await _mumRoacVRsaQBGLB.opened;
      _MLaLDKmZfzUliYxS = _mumRoacVRsaQBGLB.writable.getWriter();
      _FUcNlSiVcWvRSDLO = _mumRoacVRsaQBGLB.readable.getReader();
      const _JvbjvByepQqQSJgX = _gSvHfPtpiJzszJUD.slice(_bJKxINKuGjrkggCD + _YQdBmsRcibMIixxm);
      if (_JvbjvByepQqQSJgX) try {
        await _MLaLDKmZfzUliYxS.write(_JvbjvByepQqQSJgX);
      } catch (_bUDGKWojdiINEWMg) {
        throw _bUDGKWojdiINEWMg;
      }
      ;
      _OBGXlbSSyxDnUpjw();
    }
    async function _OBGXlbSSyxDnUpjw() {
      while (true) {
        await _fBcwwwbZqcUepPvQ;
        const {
          done: _dxUcfWglacnxwpuY,
          value: _dvilxwHzonLMVxFF
        } = await _FUcNlSiVcWvRSDLO.read();
        if (_dvilxwHzonLMVxFF && _dvilxwHzonLMVxFF.length > 0) {
          if (_uwAFudSNbmnVXdTx) {
            let _iZogwDHBdHVyQQeV = 0;
            let _WoChLaNCekXgPwBU = _pOgdnJmerDsbDYdI;
            while (_iZogwDHBdHVyQQeV < _dvilxwHzonLMVxFF.length) {
              const _WUnemBfRdBqxhZSI = _dvilxwHzonLMVxFF.slice(_iZogwDHBdHVyQQeV, _iZogwDHBdHVyQQeV + _WoChLaNCekXgPwBU);
              _fBcwwwbZqcUepPvQ = _fBcwwwbZqcUepPvQ.then(() => _NcGbaSHwkdfujGjI.send(_WUnemBfRdBqxhZSI)).catch(_bUDGKWojdiINEWMg => {
                throw _bUDGKWojdiINEWMg;
              });
              _iZogwDHBdHVyQQeV += _WoChLaNCekXgPwBU;
            }
          } else {
            _fBcwwwbZqcUepPvQ = _fBcwwwbZqcUepPvQ.then(() => _NcGbaSHwkdfujGjI.send(_dvilxwHzonLMVxFF)).catch(_bUDGKWojdiINEWMg => {
              throw _bUDGKWojdiINEWMg;
            });
          }
        }
        _qhdUOHqsQcLUDYTj += _dvilxwHzonLMVxFF.length;
        if (_dxUcfWglacnxwpuY) break;
      }
      throw new Error('传输完成');
    }
  } catch (_bUDGKWojdiINEWMg) {
    try {
      await _mumRoacVRsaQBGLB.close?.();
    } catch {}
    ;
    _NcGbaSHwkdfujGjI.close?.();
  }
}
globalThis.DNS缓存记录 = globalThis.DNS缓存记录 ??= new Map();
//////////////////////////////////////////////////////////////////////////SOCKS5部分//////////////////////////////////////////////////////////////////////
async function _TdNCPDWvDAHWXqHA(_KiURdxepXPGojPbO, _lpMRLhaUSGsQIfwC, _JVVauyhsYJvcibWx, _tOEMLYSDejxLGjru, _MLaLDKmZfzUliYxS, _FUcNlSiVcWvRSDLO) {
  let _HEIXqplwGNJlzMfh, _bBdVeFgjMveJQjWe, _GwerWBUxsnEeuwJf, _ZbweIDmrfOpsUjsm, _MqhuOnKCvTgZGGPq;
  try {
    ({
      username: _bBdVeFgjMveJQjWe,
      password: _GwerWBUxsnEeuwJf,
      hostname: _ZbweIDmrfOpsUjsm,
      port: _MqhuOnKCvTgZGGPq
    } = _juuZiCFqEsICIehU);
    _HEIXqplwGNJlzMfh = connect({
      hostname: _ZbweIDmrfOpsUjsm,
      port: _MqhuOnKCvTgZGGPq
    });
    await _HEIXqplwGNJlzMfh.opened;
    _MLaLDKmZfzUliYxS = _HEIXqplwGNJlzMfh.writable.getWriter();
    _FUcNlSiVcWvRSDLO = _HEIXqplwGNJlzMfh.readable.getReader();
    const _meZXghQUJntQOGtb = new TextEncoder(); //把文本内容转换为字节数组，如账号，密码，域名，方便与S5建立连接
    const _HcmsUYOgTgsHDCre = new Uint8Array([5, 2, 0, 2]); //构建认证信息,支持无认证和用户名/密码认证
    await _MLaLDKmZfzUliYxS.write(_HcmsUYOgTgsHDCre); //发送认证信息，确认目标是否需要用户名密码认证
    const _VLZQPdhPlzBEDvcH = (await _FUcNlSiVcWvRSDLO.read()).value;
    if (_VLZQPdhPlzBEDvcH[1] === 0x02) {
      //检查是否需要用户名/密码认证
      if (!_bBdVeFgjMveJQjWe || !_GwerWBUxsnEeuwJf) {
        throw new Error(`未配置账号密码`);
      }
      const _jOgsxDNZtqBTNAoy = new Uint8Array([1, _bBdVeFgjMveJQjWe.length, ..._meZXghQUJntQOGtb.encode(_bBdVeFgjMveJQjWe), _GwerWBUxsnEeuwJf.length, ..._meZXghQUJntQOGtb.encode(_GwerWBUxsnEeuwJf)]); //构建账号密码数据包，把字符转换为字节数组
      await _MLaLDKmZfzUliYxS.write(_jOgsxDNZtqBTNAoy); //发送账号密码认证信息
      const _PYRriPtEnljPQEQK = (await _FUcNlSiVcWvRSDLO.read()).value;
      if (_PYRriPtEnljPQEQK[0] !== 0x01 || _PYRriPtEnljPQEQK[1] !== 0x00) {
        //检查账号密码认证结果，认证失败则退出
        throw new Error(`账号密码错误`);
      }
    }
    switch (_KiURdxepXPGojPbO) {
      case 1:
        // IPv4
        _tOEMLYSDejxLGjru = new Uint8Array([1, ..._lpMRLhaUSGsQIfwC.split('.').map(Number)]);
        break;
      case 2:
        // 域名
        _tOEMLYSDejxLGjru = new Uint8Array([3, _lpMRLhaUSGsQIfwC.length, ..._meZXghQUJntQOGtb.encode(_lpMRLhaUSGsQIfwC)]);
        break;
      case 3:
        // IPv6
        _tOEMLYSDejxLGjru = _zjsLtHXrcnqWldUE(_lpMRLhaUSGsQIfwC);
        function _zjsLtHXrcnqWldUE(_LkbuYcXElpVWISCy) {
          const _ECjfxwtqsWqUTmbS = _LkbuYcXElpVWISCy.startsWith('[') && _LkbuYcXElpVWISCy.endsWith(']') ? _LkbuYcXElpVWISCy.slice(1, -1) : _LkbuYcXElpVWISCy;
          const _sjWzOzERYelPhAWc = _ECjfxwtqsWqUTmbS.split('::');
          const _mLQYSlFJfKByamzd = _sjWzOzERYelPhAWc[0] ? _sjWzOzERYelPhAWc[0].split(':').filter(Boolean) : [];
          const _qAJsziSOtLRhyEyP = _sjWzOzERYelPhAWc[1] ? _sjWzOzERYelPhAWc[1].split(':').filter(Boolean) : [];
          const _QCcxolGZxmBXLbFE = 8 - (_mLQYSlFJfKByamzd.length + _qAJsziSOtLRhyEyP.length);
          if (_QCcxolGZxmBXLbFE < 0) throw new Error('IPv6地址格式错误');
          const _qPLGslGlWaBXQxsf = [..._mLQYSlFJfKByamzd, ...Array(_QCcxolGZxmBXLbFE).fill('0'), ..._qAJsziSOtLRhyEyP];
          const _DPjnCNoWFeQcYNer = _qPLGslGlWaBXQxsf.flatMap(_zrFTkxAOxGThmFeM => {
            const _vqkRZoqfUUnclGTO = parseInt(_zrFTkxAOxGThmFeM || '0', 16);
            return [_vqkRZoqfUUnclGTO >> 8 & 0xff, _vqkRZoqfUUnclGTO & 0xff];
          });
          return new Uint8Array([0x04, ..._DPjnCNoWFeQcYNer]);
        }
        break;
    }
    const _SwizpFfcaRPQWHUW = new Uint8Array([5, 1, 0, ..._tOEMLYSDejxLGjru, _JVVauyhsYJvcibWx >> 8, _JVVauyhsYJvcibWx & 0xff]); //构建转换好的地址消息
    await _MLaLDKmZfzUliYxS.write(_SwizpFfcaRPQWHUW); //发送转换后的地址
    const _bPaSfsgawWwmJltX = (await _FUcNlSiVcWvRSDLO.read()).value;
    if (_bPaSfsgawWwmJltX[0] !== 0x05 || _bPaSfsgawWwmJltX[1] !== 0x00) {
      throw new Error(`目标地址连接失败，访问地址: ${_lpMRLhaUSGsQIfwC}，地址类型: ${_KiURdxepXPGojPbO}`);
    }
    _MLaLDKmZfzUliYxS.releaseLock();
    _FUcNlSiVcWvRSDLO.releaseLock();
    return _HEIXqplwGNJlzMfh;
  } catch {}
  ;
  _MLaLDKmZfzUliYxS?.releaseLock();
  _FUcNlSiVcWvRSDLO?.releaseLock();
  await _HEIXqplwGNJlzMfh?.close();
  throw new Error(`所有SOCKS5账号失效`);
}
async function _ccSGlAiuzGNuRrPE(_ejIYzQDSFfzOXqkB) {
  // 使用 "@" 分割地址，分为认证部分和服务器地址部分
  const _eCnIHgQjNGjStNIj = _ejIYzQDSFfzOXqkB.lastIndexOf("@");
  let [_rrkJqUgqbFzSiAex, _tTHXIDkqIdeqHrHa] = _eCnIHgQjNGjStNIj === -1 ? [_ejIYzQDSFfzOXqkB, undefined] : [_ejIYzQDSFfzOXqkB.substring(_eCnIHgQjNGjStNIj + 1), _ejIYzQDSFfzOXqkB.substring(0, _eCnIHgQjNGjStNIj)];
  let _ZnGOVDxFQACYnAsP, _WutETHbOqdCQvrcb, _huAIzpTAeeTYppTu, _wiaWHRCzJgtiuxIA;

  // 如果存在 former 部分，说明提供了认证信息
  if (_tTHXIDkqIdeqHrHa) {
    const _lXeQIqarbhzGivGg = _tTHXIDkqIdeqHrHa.split(":");
    if (_lXeQIqarbhzGivGg.length !== 2) {
      throw new Error('无效的 SOCKS 地址格式：认证部分必须是 "username:password" 的形式');
    }
    [_ZnGOVDxFQACYnAsP, _WutETHbOqdCQvrcb] = _lXeQIqarbhzGivGg;
  }

  // 解析服务器地址部分
  const _pXEEbcuOBgtLYrNz = _rrkJqUgqbFzSiAex.split(":");
  // 检查是否是IPv6地址带端口格式 [xxx]:port
  if (_pXEEbcuOBgtLYrNz.length > 2 && _rrkJqUgqbFzSiAex.includes("]:")) {
    // IPv6地址带端口格式：[2001:db8::1]:8080
    _wiaWHRCzJgtiuxIA = Number(_rrkJqUgqbFzSiAex.split("]:")[1].replace(/[^\d]/g, ''));
    _huAIzpTAeeTYppTu = _rrkJqUgqbFzSiAex.split("]:")[0] + "]"; // 正确提取hostname部分
  } else if (_pXEEbcuOBgtLYrNz.length === 2) {
    // IPv4地址带端口或域名带端口
    _wiaWHRCzJgtiuxIA = Number(_pXEEbcuOBgtLYrNz.pop().replace(/[^\d]/g, ''));
    _huAIzpTAeeTYppTu = _pXEEbcuOBgtLYrNz.join(":");
  } else {
    _wiaWHRCzJgtiuxIA = 80;
    _huAIzpTAeeTYppTu = _rrkJqUgqbFzSiAex;
  }
  if (isNaN(_wiaWHRCzJgtiuxIA)) {
    throw new Error('无效的 SOCKS 地址格式：端口号必须是数字');
  }

  // 处理 IPv6 地址的特殊情况
  // IPv6 地址包含多个冒号，所以必须用方括号括起来，如 [2001:db8::1]
  const _xZMtLgkQgkbAOmkx = /^\[.*\]$/;
  if (_huAIzpTAeeTYppTu.includes(":") && !_xZMtLgkQgkbAOmkx.test(_huAIzpTAeeTYppTu)) {
    throw new Error('无效的 SOCKS 地址格式：IPv6 地址必须用方括号括起来，如 [2001:db8::1]');
  }

  //if (/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(hostname)) hostname = `${atob('d3d3Lg==')}${hostname}${atob('LmlwLjA5MDIyNy54eXo=')}`;
  // 返回解析后的结果
  return {
    username: _ZnGOVDxFQACYnAsP,
    // 用户名，如果没有则为 undefined
    password: _WutETHbOqdCQvrcb,
    // 密码，如果没有则为 undefined
    hostname: _huAIzpTAeeTYppTu,
    // 主机名，可以是域名、IPv4 或 IPv6 地址
    port: _wiaWHRCzJgtiuxIA // 端口号，已转换为数字类型
  };
}
async function _VhTWmLfAVOYDbBtJ(_YabMEegAvKxkWNZn) {
  _YabMEegAvKxkWNZn = _YabMEegAvKxkWNZn.toLowerCase();
  let _ZbweIDmrfOpsUjsm = _YabMEegAvKxkWNZn,
    _MqhuOnKCvTgZGGPq = 443;
  if (_YabMEegAvKxkWNZn.includes('.tp')) {
    const _IUbXSDWItLRwohbp = _YabMEegAvKxkWNZn.match(/\.tp(\d+)/);
    if (_IUbXSDWItLRwohbp) _MqhuOnKCvTgZGGPq = parseInt(_IUbXSDWItLRwohbp[1], 10);
    return [_ZbweIDmrfOpsUjsm, _MqhuOnKCvTgZGGPq];
  }
  if (_YabMEegAvKxkWNZn.includes(']:')) {
    const _VqRnWkKOsIyNsKtP = _YabMEegAvKxkWNZn.split(']:');
    _ZbweIDmrfOpsUjsm = _VqRnWkKOsIyNsKtP[0] + ']';
    _MqhuOnKCvTgZGGPq = parseInt(_VqRnWkKOsIyNsKtP[1], 10) || _MqhuOnKCvTgZGGPq;
  } else if (_YabMEegAvKxkWNZn.includes(':') && !_YabMEegAvKxkWNZn.startsWith('[')) {
    const _VHFvnQKIgAxbCdZm = _YabMEegAvKxkWNZn.lastIndexOf(':');
    _ZbweIDmrfOpsUjsm = _YabMEegAvKxkWNZn.slice(0, _VHFvnQKIgAxbCdZm);
    _MqhuOnKCvTgZGGPq = parseInt(_YabMEegAvKxkWNZn.slice(_VHFvnQKIgAxbCdZm + 1), 10) || _MqhuOnKCvTgZGGPq;
  }
  return [_ZbweIDmrfOpsUjsm, _MqhuOnKCvTgZGGPq];
}
async function _UWGFmllJkAGTTpnt(_QHhBFGhjtFQLRavn, _xLbWepPVGHEtMDqm) {
  const {
    username: _ZnGOVDxFQACYnAsP,
    password: _WutETHbOqdCQvrcb,
    hostname: _huAIzpTAeeTYppTu,
    port: _wiaWHRCzJgtiuxIA
  } = _juuZiCFqEsICIehU;
  const _FPHpqPozWXDWkzFc = await connect({
    hostname: _huAIzpTAeeTYppTu,
    port: _wiaWHRCzJgtiuxIA
  });

  // 构建HTTP CONNECT请求
  let _msWsqbVUNxATmlTz = `CONNECT ${_QHhBFGhjtFQLRavn}:${_xLbWepPVGHEtMDqm} HTTP/1.1\r\n`;
  _msWsqbVUNxATmlTz += `Host: ${_QHhBFGhjtFQLRavn}:${_xLbWepPVGHEtMDqm}\r\n`;

  // 添加代理认证（如果需要）
  if (_ZnGOVDxFQACYnAsP && _WutETHbOqdCQvrcb) {
    const _vrobcgwMULecVZCc = `${_ZnGOVDxFQACYnAsP}:${_WutETHbOqdCQvrcb}`;
    const _djRcnJhtJdkWYcYh = btoa(_vrobcgwMULecVZCc);
    _msWsqbVUNxATmlTz += `Proxy-Authorization: Basic ${_djRcnJhtJdkWYcYh}\r\n`;
  }
  _msWsqbVUNxATmlTz += `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36\r\n`;
  _msWsqbVUNxATmlTz += `Proxy-Connection: Keep-Alive\r\n`;
  _msWsqbVUNxATmlTz += `Connection: Keep-Alive\r\n`; // 添加标准 Connection 头
  _msWsqbVUNxATmlTz += `\r\n`;
  try {
    // 发送连接请求
    const _GYoInCmfHlOYzzBL = _FPHpqPozWXDWkzFc.writable.getWriter();
    await _GYoInCmfHlOYzzBL.write(new TextEncoder().encode(_msWsqbVUNxATmlTz));
    _GYoInCmfHlOYzzBL.releaseLock();
  } catch (_pTKNYvZyhMAjwJEV) {
    console.error('发送HTTP CONNECT请求失败:', _pTKNYvZyhMAjwJEV);
    throw new Error(`发送HTTP CONNECT请求失败: ${_pTKNYvZyhMAjwJEV.message}`);
  }

  // 读取HTTP响应
  const _pQjDZRXVdTnmmFeP = _FPHpqPozWXDWkzFc.readable.getReader();
  let _oOwipODGgknBWJzR = '';
  let _bGXJmJCkNIhGdlnK = false;
  let _qMLQBumqPqutiabY = new Uint8Array(0);
  try {
    while (true) {
      const {
        value: _wvwYEoTiWTbLLspb,
        done: _nUITYZzxCVPJQfAO
      } = await _pQjDZRXVdTnmmFeP.read();
      if (_nUITYZzxCVPJQfAO) {
        console.error('HTTP代理连接中断');
        throw new Error('HTTP代理连接中断');
      }

      // 合并接收到的数据
      const _AlISGWovhXHVmLtV = new Uint8Array(_qMLQBumqPqutiabY.length + _wvwYEoTiWTbLLspb.length);
      _AlISGWovhXHVmLtV.set(_qMLQBumqPqutiabY);
      _AlISGWovhXHVmLtV.set(_wvwYEoTiWTbLLspb, _qMLQBumqPqutiabY.length);
      _qMLQBumqPqutiabY = _AlISGWovhXHVmLtV;

      // 将收到的数据转换为文本
      _oOwipODGgknBWJzR = new TextDecoder().decode(_qMLQBumqPqutiabY);

      // 检查是否收到完整的HTTP响应头
      if (_oOwipODGgknBWJzR.includes('\r\n\r\n')) {
        // 分离HTTP头和可能的数据部分
        const _NFsqHfQJsRObcYwY = _oOwipODGgknBWJzR.indexOf('\r\n\r\n') + 4;
        const _aUiSVtGFwdaZEjqq = _oOwipODGgknBWJzR.substring(0, _NFsqHfQJsRObcYwY);

        // 检查响应状态
        if (_aUiSVtGFwdaZEjqq.startsWith('HTTP/1.1 200') || _aUiSVtGFwdaZEjqq.startsWith('HTTP/1.0 200')) {
          _bGXJmJCkNIhGdlnK = true;

          // 如果响应头之后还有数据，我们需要保存这些数据以便后续处理
          if (_NFsqHfQJsRObcYwY < _qMLQBumqPqutiabY.length) {
            const _aOVGGkRQOCRKbPND = _qMLQBumqPqutiabY.slice(_NFsqHfQJsRObcYwY);
            // 创建一个缓冲区来存储这些数据，以便稍后使用
            const _eTVqLqhiArvCxIoa = new ReadableStream({
              start(_BsELyjBkcyofjtYu) {
                _BsELyjBkcyofjtYu.enqueue(_aOVGGkRQOCRKbPND);
              }
            });

            // 创建一个新的TransformStream来处理额外数据
            const {
              readable: _khTOmSMuWvhVWRaB,
              writable: _ScVBFCzbKxCoUyGn
            } = new TransformStream();
            _eTVqLqhiArvCxIoa.pipeTo(_ScVBFCzbKxCoUyGn).catch(_pTKNYvZyhMAjwJEV => console.error('处理剩余数据错误:', _pTKNYvZyhMAjwJEV));

            // 替换原始readable流
            // @ts-ignore
            _FPHpqPozWXDWkzFc.readable = _khTOmSMuWvhVWRaB;
          }
        } else {
          const _URwOclbDYjgcMIoN = `HTTP代理连接失败: ${_aUiSVtGFwdaZEjqq.split('\r\n')[0]}`;
          console.error(_URwOclbDYjgcMIoN);
          throw new Error(_URwOclbDYjgcMIoN);
        }
        break;
      }
    }
  } catch (_pTKNYvZyhMAjwJEV) {
    _pQjDZRXVdTnmmFeP.releaseLock();
    throw new Error(`处理HTTP代理响应失败: ${_pTKNYvZyhMAjwJEV.message}`);
  }
  _pQjDZRXVdTnmmFeP.releaseLock();
  if (!_bGXJmJCkNIhGdlnK) {
    throw new Error('HTTP代理连接失败: 未收到成功响应');
  }
  return _FPHpqPozWXDWkzFc;
}
async function _MlacKlMplAFEUEDR(_cxFKfkTdNejBbjGf) {
  const _ZzmsIVLrvSNutmqL = new URL(_cxFKfkTdNejBbjGf.url);
  const {
    pathname: _hOVXpGxanhElpFIM,
    searchParams: _DDHcpvNqZrvDDdEd
  } = _ZzmsIVLrvSNutmqL;
  const _OjLQXhZidQIKUyDP = _hOVXpGxanhElpFIM.toLowerCase();

  // 初始化
  _gnJZFOqPCpwgfQHI = _DDHcpvNqZrvDDdEd.get('socks5') || _DDHcpvNqZrvDDdEd.get('http') || null;
  _yNSHsbyfbLncHkLx = _DDHcpvNqZrvDDdEd.has('globalproxy') || false;

  // 统一处理反代IP参数 (优先级最高,使用正则一次匹配)
  const _DcnRvLYzlHkvNObL = _OjLQXhZidQIKUyDP.match(/\/(proxyip[.=]|pyip=|ip=)(.+)/);
  if (_DDHcpvNqZrvDDdEd.has('proxyip')) {
    const _cXnNIicWZKLQOqWP = _DDHcpvNqZrvDDdEd.get('proxyip');
    _BsvBwAfjUGbMbfZR = _cXnNIicWZKLQOqWP.includes(',') ? _cXnNIicWZKLQOqWP.split(',')[Math.floor(Math.random() * _cXnNIicWZKLQOqWP.split(',').length)] : _cXnNIicWZKLQOqWP;
    return;
  } else if (_DcnRvLYzlHkvNObL) {
    const _cXnNIicWZKLQOqWP = _DcnRvLYzlHkvNObL[1] === 'proxyip.' ? `proxyip.${_DcnRvLYzlHkvNObL[2]}` : _DcnRvLYzlHkvNObL[2];
    _BsvBwAfjUGbMbfZR = _cXnNIicWZKLQOqWP.includes(',') ? _cXnNIicWZKLQOqWP.split(',')[Math.floor(Math.random() * _cXnNIicWZKLQOqWP.split(',').length)] : _cXnNIicWZKLQOqWP;
    return;
  }

  // 处理SOCKS5/HTTP代理参数
  let _yFWcVOItaSUTaJVL;
  if (_yFWcVOItaSUTaJVL = _hOVXpGxanhElpFIM.match(/\/(socks5?|http):\/?\/?(.+)/i)) {
    // 格式: /socks5://... 或 /http://...
    _HgWPrZptYiIJuSfH = _yFWcVOItaSUTaJVL[1].toLowerCase() === 'http' ? 'http' : 'socks5';
    _gnJZFOqPCpwgfQHI = _yFWcVOItaSUTaJVL[2].split('#')[0];
    _yNSHsbyfbLncHkLx = true;

    // 处理Base64编码的用户名密码
    if (_gnJZFOqPCpwgfQHI.includes('@')) {
      const _ZLNurxLZAmFNNbOs = _gnJZFOqPCpwgfQHI.lastIndexOf('@');
      let _VmmHrmtFbbJJsAux = _gnJZFOqPCpwgfQHI.substring(0, _ZLNurxLZAmFNNbOs).replaceAll('%3D', '=');
      if (/^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i.test(_VmmHrmtFbbJJsAux) && !_VmmHrmtFbbJJsAux.includes(':')) {
        _VmmHrmtFbbJJsAux = atob(_VmmHrmtFbbJJsAux);
      }
      _gnJZFOqPCpwgfQHI = `${_VmmHrmtFbbJJsAux}@${_gnJZFOqPCpwgfQHI.substring(_ZLNurxLZAmFNNbOs + 1)}`;
    }
  } else if (_yFWcVOItaSUTaJVL = _hOVXpGxanhElpFIM.match(/\/(g?s5|socks5|g?http)=(.+)/i)) {
    // 格式: /socks5=... 或 /s5=... 或 /gs5=... 或 /http=... 或 /ghttp=...
    const _cFbRIlZYyEGTwLgt = _yFWcVOItaSUTaJVL[1].toLowerCase();
    _gnJZFOqPCpwgfQHI = _yFWcVOItaSUTaJVL[2];
    _HgWPrZptYiIJuSfH = _cFbRIlZYyEGTwLgt.includes('http') ? 'http' : 'socks5';
    _yNSHsbyfbLncHkLx = _cFbRIlZYyEGTwLgt.startsWith('g') || _yNSHsbyfbLncHkLx; // gs5 或 ghttp 开头启用全局
  }

  // 解析SOCKS5地址
  if (_gnJZFOqPCpwgfQHI) {
    try {
      _juuZiCFqEsICIehU = await _ccSGlAiuzGNuRrPE(_gnJZFOqPCpwgfQHI);
      _HgWPrZptYiIJuSfH = _DDHcpvNqZrvDDdEd.get('http') ? 'http' : _HgWPrZptYiIJuSfH;
    } catch (_pTKNYvZyhMAjwJEV) {
      console.error('解析SOCKS5地址失败:', _pTKNYvZyhMAjwJEV.message);
      _HgWPrZptYiIJuSfH = null;
    }
  } else _HgWPrZptYiIJuSfH = null;
}