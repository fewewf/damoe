const _CdFflCNignuaMVAL = '04ab5537-a9c5-49aa-9fca-c4601ecf6753'; // stallTCP v1.32 from https://t.me/Enkelte_notif/784
import { connect } from 'cloudflare:sockets';
let _NjUSiMdluFdmGrXB = '',
  _dumkiUGAYBAKlhDb = null,
  _DvJwFfHabQEGrOsu = false,
  _RLHZuAuWNfwPSted = '',
  _qvUkrfVXaYFlBDik = {};
//////////////////////////////////////////////////////////////////////////stall参数////////////////////////////////////////////////////////////////////////
const _rGZggFhLsPZeAVzX = 2097152,
  _accKHtdGSHoMiRah = 15000,
  _DCaHAQzbwXhHobLV = 8000,
  _ufwubpaKYDbKzlLU = 12,
  _PjHenkwDEGLJnWMK = 24;
//////////////////////////////////////////////////////////////////////////主要架构////////////////////////////////////////////////////////////////////////
const _gJTnKnUEXvqzHIVq = (_GKEmNwAzEvFDCCcV, _GhfFjgmBwlywiNbK) => Array.from(_GKEmNwAzEvFDCCcV.slice(_GhfFjgmBwlywiNbK, _GhfFjgmBwlywiNbK + 16)).map(_yxovJCkwrGUmArJp => _yxovJCkwrGUmArJp.toString(16).padStart(2, '0')).join('').replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');
const _QKWZYgqghAmIFBVb = _MHFLjhtTfdyPjBVP => {
  const _mYPZwKnFBQKUksbN = 18 + _MHFLjhtTfdyPjBVP[17] + 1,
    _fNjIotlWVphzjKxQ = _MHFLjhtTfdyPjBVP[_mYPZwKnFBQKUksbN] << 8 | _MHFLjhtTfdyPjBVP[_mYPZwKnFBQKUksbN + 1],
    _kkMyhDPfBApveNtL = _MHFLjhtTfdyPjBVP[_mYPZwKnFBQKUksbN + 2];
  let _ikplGSckYAQqzQAK = _mYPZwKnFBQKUksbN + 3,
    _OtvehJlGSXchsvZO,
    _IkjMdgQSvYwwbkSB;
  switch (_kkMyhDPfBApveNtL) {
    case 1:
      _IkjMdgQSvYwwbkSB = 4;
      _OtvehJlGSXchsvZO = _MHFLjhtTfdyPjBVP.slice(_ikplGSckYAQqzQAK, _ikplGSckYAQqzQAK + _IkjMdgQSvYwwbkSB).join('.');
      break;
    case 2:
      _IkjMdgQSvYwwbkSB = _MHFLjhtTfdyPjBVP[_ikplGSckYAQqzQAK++];
      _OtvehJlGSXchsvZO = new TextDecoder().decode(_MHFLjhtTfdyPjBVP.slice(_ikplGSckYAQqzQAK, _ikplGSckYAQqzQAK + _IkjMdgQSvYwwbkSB));
      break;
    case 3:
      _IkjMdgQSvYwwbkSB = 16;
      _OtvehJlGSXchsvZO = `[${Array.from({
        length: 8
      }, (_wAunYCpWNGzAZCgO, _GhfFjgmBwlywiNbK) => (_MHFLjhtTfdyPjBVP[_ikplGSckYAQqzQAK + _GhfFjgmBwlywiNbK * 2] << 8 | _MHFLjhtTfdyPjBVP[_ikplGSckYAQqzQAK + _GhfFjgmBwlywiNbK * 2 + 1]).toString(16)).join(':')}]`;
      break;
    default:
      throw new Error('Invalid address type.');
  }
  return {
    host: _OtvehJlGSXchsvZO,
    port: _fNjIotlWVphzjKxQ,
    payload: _MHFLjhtTfdyPjBVP.slice(_ikplGSckYAQqzQAK + _IkjMdgQSvYwwbkSB)
  };
};
class _SDHFwFZySUDyDjhC {
  constructor() {
    this.buf = new ArrayBuffer(16384);
    this.ptr = 0;
    this.pool = [];
    this.max = 8;
    this.large = false;
  }
  alloc = _wjxtqJygMnBbtgcY => {
    if (_wjxtqJygMnBbtgcY <= 4096 && _wjxtqJygMnBbtgcY <= 16384 - this.ptr) {
      const _gKRXcnFVOfdMcnhg = new Uint8Array(this.buf, this.ptr, _wjxtqJygMnBbtgcY);
      this.ptr += _wjxtqJygMnBbtgcY;
      return _gKRXcnFVOfdMcnhg;
    }
    const _DtbaXsJDQHWvwfLY = this.pool.pop();
    if (_DtbaXsJDQHWvwfLY && _DtbaXsJDQHWvwfLY.byteLength >= _wjxtqJygMnBbtgcY) return new Uint8Array(_DtbaXsJDQHWvwfLY.buffer, 0, _wjxtqJygMnBbtgcY);
    return new Uint8Array(_wjxtqJygMnBbtgcY);
  };
  free = _MHFLjhtTfdyPjBVP => {
    if (_MHFLjhtTfdyPjBVP.buffer === this.buf) {
      this.ptr = Math.max(0, this.ptr - _MHFLjhtTfdyPjBVP.length);
      return;
    }
    if (this.pool.length < this.max && _MHFLjhtTfdyPjBVP.byteLength >= 1024) this.pool.push(_MHFLjhtTfdyPjBVP);
  };
  enableLarge = () => {
    this.large = true;
  };
  reset = () => {
    this.ptr = 0;
    this.pool.length = 0;
    this.large = false;
  };
}
export default {
  async fetch(_XXHlGEBXdeKGtYiO) {
    _NjUSiMdluFdmGrXB = _NjUSiMdluFdmGrXB ? _NjUSiMdluFdmGrXB : _XXHlGEBXdeKGtYiO.cf.colo + '.PrOxYip.CmLiuSsSs.nEt';
    if (_XXHlGEBXdeKGtYiO.headers.get('Upgrade') !== 'websocket') return new Response('Hello World!', {
      status: 200
    });
    await _BqEBAwTMlOpAhoEi(_XXHlGEBXdeKGtYiO);
    const {
      0: _TQJkDNxKxXbPecZU,
      1: _wjxtqJygMnBbtgcY
    } = new WebSocketPair();
    _wjxtqJygMnBbtgcY.accept();
    _OpXyfgkrSpEyGijE(_wjxtqJygMnBbtgcY);
    return new Response(null, {
      status: 101,
      webSocket: _TQJkDNxKxXbPecZU
    });
  }
};
const _OpXyfgkrSpEyGijE = _kgpRCESpJSNewXah => {
  const _dduSrvomJBRuQiOM = new _SDHFwFZySUDyDjhC();
  let _qVJAPLbExorasSEl,
    _ivSnZsUNRHkcYfna,
    _DtbaXsJDQHWvwfLY,
    _OTHrklREQvwbVvIL,
    _uIjnMYbiZsWYruIs = true,
    _SKTBqvDBAnnpyUUk = 0,
    _QJzxZGxLiZhRImGU = 0,
    _pyduKAgcmrvFFEDT = 0;
  let _UPoutEdRXjjfFsCu = Date.now(),
    _utugnhLnSNZmpJgA = false,
    _DEjfXbYUZIwGQItH = false;
  const _kFZVGQzsueHEIQxg = {},
    _sirprpawWTJYpgFc = [];
  let _EcAabcEqXZvarTxa = 0,
    _StoLqurZBsQibzNX = 1.0,
    _xjIUgrzPSudguMgI = Date.now(),
    _nuzZsUGREBBrjyrT = 0,
    _TaVmrDmFTseonadP = 0,
    _rCLTWtHZhsItxJDy = 0;
  let _YRhuuXJScKVuyfWN = {
    tot: 0,
    cnt: 0,
    big: 0,
    win: 0,
    ts: Date.now()
  };
  let _jGYCRBzoMhMVJWtc = 'adaptive',
    _vXnWKQoAEYJiEUZe = 0,
    _daipTvSOPMlNbrie = [];
  const _xCMmJrvXwarfHYMi = _wjxtqJygMnBbtgcY => {
    _YRhuuXJScKVuyfWN.tot += _wjxtqJygMnBbtgcY;
    _YRhuuXJScKVuyfWN.cnt++;
    if (_wjxtqJygMnBbtgcY > 8192) _YRhuuXJScKVuyfWN.big++;
    _vXnWKQoAEYJiEUZe = _vXnWKQoAEYJiEUZe * 0.9 + _wjxtqJygMnBbtgcY * 0.1;
    const _vHHdzQGLhpQrHaYE = Date.now();
    if (_vHHdzQGLhpQrHaYE - _YRhuuXJScKVuyfWN.ts > 1000) {
      const _EdXIeacGTGWzWkXE = _YRhuuXJScKVuyfWN.win;
      _daipTvSOPMlNbrie.push(_EdXIeacGTGWzWkXE);
      if (_daipTvSOPMlNbrie.length > 5) _daipTvSOPMlNbrie.shift();
      _YRhuuXJScKVuyfWN.win = _wjxtqJygMnBbtgcY;
      _YRhuuXJScKVuyfWN.ts = _vHHdzQGLhpQrHaYE;
      const _kmnKAlwcTKRyxccU = _daipTvSOPMlNbrie.reduce((_GKEmNwAzEvFDCCcV, _MHFLjhtTfdyPjBVP) => _GKEmNwAzEvFDCCcV + _MHFLjhtTfdyPjBVP, 0) / _daipTvSOPMlNbrie.length;
      if (_YRhuuXJScKVuyfWN.cnt >= 20) {
        if (_kmnKAlwcTKRyxccU < 8388608 || _vXnWKQoAEYJiEUZe < 4096) {
          if (_jGYCRBzoMhMVJWtc !== 'buffered') {
            _jGYCRBzoMhMVJWtc = 'buffered';
            _dduSrvomJBRuQiOM.enableLarge();
          }
        } else if (_kmnKAlwcTKRyxccU > 16777216 && _vXnWKQoAEYJiEUZe > 12288) {
          if (_jGYCRBzoMhMVJWtc !== 'direct') _jGYCRBzoMhMVJWtc = 'direct';
        } else {
          if (_jGYCRBzoMhMVJWtc !== 'adaptive') _jGYCRBzoMhMVJWtc = 'adaptive';
        }
      }
    } else {
      _YRhuuXJScKVuyfWN.win += _wjxtqJygMnBbtgcY;
    }
  };
  const _juZZdGEshUSswCAP = async () => {
    if (_DEjfXbYUZIwGQItH) return;
    _DEjfXbYUZIwGQItH = true;
    let _HvhFHNGAEFHJXJIN = [],
      _lsqVLpdmbFrsdqfR = 0,
      _NEBHaCissiAfgcmf = null;
    const _qECWSeFPcnrwQVzK = () => {
      if (!_lsqVLpdmbFrsdqfR) return;
      const _OSbLYVydlPdWZrRX = new Uint8Array(_lsqVLpdmbFrsdqfR);
      let _fNjIotlWVphzjKxQ = 0;
      for (const _TQJkDNxKxXbPecZU of _HvhFHNGAEFHJXJIN) {
        _OSbLYVydlPdWZrRX.set(_TQJkDNxKxXbPecZU, _fNjIotlWVphzjKxQ);
        _fNjIotlWVphzjKxQ += _TQJkDNxKxXbPecZU.length;
      }
      if (_kgpRCESpJSNewXah.readyState === 1) _kgpRCESpJSNewXah.send(_OSbLYVydlPdWZrRX);
      _HvhFHNGAEFHJXJIN = [];
      _lsqVLpdmbFrsdqfR = 0;
      if (_NEBHaCissiAfgcmf) {
        clearTimeout(_NEBHaCissiAfgcmf);
        _NEBHaCissiAfgcmf = null;
      }
    };
    try {
      while (true) {
        if (_EcAabcEqXZvarTxa > _rGZggFhLsPZeAVzX) {
          await new Promise(_KrALwzcbubJLnUHQ => setTimeout(_KrALwzcbubJLnUHQ, 100));
          continue;
        }
        const {
          done: _LxGTDuWrxPSEfYdg,
          value: _gKRXcnFVOfdMcnhg
        } = await _DtbaXsJDQHWvwfLY.read();
        if (_gKRXcnFVOfdMcnhg?.length) {
          _SKTBqvDBAnnpyUUk += _gKRXcnFVOfdMcnhg.length;
          _UPoutEdRXjjfFsCu = Date.now();
          _QJzxZGxLiZhRImGU = 0;
          _xCMmJrvXwarfHYMi(_gKRXcnFVOfdMcnhg.length);
          const _vHHdzQGLhpQrHaYE = Date.now();
          if (_vHHdzQGLhpQrHaYE - _xjIUgrzPSudguMgI > 5000) {
            const _UdmVJUwwYxzoXOti = _vHHdzQGLhpQrHaYE - _xjIUgrzPSudguMgI,
              _wtXglhPlTCUZwpfW = _SKTBqvDBAnnpyUUk - _nuzZsUGREBBrjyrT,
              _MSZEQNbSzlNGcMCi = _wtXglhPlTCUZwpfW / _UdmVJUwwYxzoXOti;
            if (_MSZEQNbSzlNGcMCi > 500) _StoLqurZBsQibzNX = Math.min(1.0, _StoLqurZBsQibzNX + 0.05);else if (_MSZEQNbSzlNGcMCi < 50) _StoLqurZBsQibzNX = Math.max(0.1, _StoLqurZBsQibzNX - 0.05);
            _xjIUgrzPSudguMgI = _vHHdzQGLhpQrHaYE;
            _nuzZsUGREBBrjyrT = _SKTBqvDBAnnpyUUk;
          }
          if (_jGYCRBzoMhMVJWtc === 'buffered') {
            if (_gKRXcnFVOfdMcnhg.length < 16384) {
              _HvhFHNGAEFHJXJIN.push(_gKRXcnFVOfdMcnhg);
              _lsqVLpdmbFrsdqfR += _gKRXcnFVOfdMcnhg.length;
              if (_lsqVLpdmbFrsdqfR >= 65536) _qECWSeFPcnrwQVzK();else if (!_NEBHaCissiAfgcmf) _NEBHaCissiAfgcmf = setTimeout(_qECWSeFPcnrwQVzK, _vXnWKQoAEYJiEUZe > 8192 ? 8 : 25);
            } else {
              _qECWSeFPcnrwQVzK();
              if (_kgpRCESpJSNewXah.readyState === 1) _kgpRCESpJSNewXah.send(_gKRXcnFVOfdMcnhg);
            }
          } else if (_jGYCRBzoMhMVJWtc === 'direct') {
            _qECWSeFPcnrwQVzK();
            if (_kgpRCESpJSNewXah.readyState === 1) _kgpRCESpJSNewXah.send(_gKRXcnFVOfdMcnhg);
          } else if (_jGYCRBzoMhMVJWtc === 'adaptive') {
            if (_gKRXcnFVOfdMcnhg.length < 8192) {
              _HvhFHNGAEFHJXJIN.push(_gKRXcnFVOfdMcnhg);
              _lsqVLpdmbFrsdqfR += _gKRXcnFVOfdMcnhg.length;
              if (_lsqVLpdmbFrsdqfR >= 49152) _qECWSeFPcnrwQVzK();else if (!_NEBHaCissiAfgcmf) _NEBHaCissiAfgcmf = setTimeout(_qECWSeFPcnrwQVzK, 12);
            } else {
              _qECWSeFPcnrwQVzK();
              if (_kgpRCESpJSNewXah.readyState === 1) _kgpRCESpJSNewXah.send(_gKRXcnFVOfdMcnhg);
            }
          }
        }
        if (_LxGTDuWrxPSEfYdg) {
          _qECWSeFPcnrwQVzK();
          _DEjfXbYUZIwGQItH = false;
          _QhzpaKPwZPoWUUPi();
          break;
        }
      }
    } catch (_GEVEMzoIiWzlnXfi) {
      _qECWSeFPcnrwQVzK();
      if (_NEBHaCissiAfgcmf) clearTimeout(_NEBHaCissiAfgcmf);
      _DEjfXbYUZIwGQItH = false;
      _rCLTWtHZhsItxJDy++;
      _QhzpaKPwZPoWUUPi();
    }
  };
  const _mnwaEhAHtzeYDIlh = async _llMDzWsgVXkaltJq => {
    try {
      _qVJAPLbExorasSEl = await _llMDzWsgVXkaltJq;
      await _qVJAPLbExorasSEl.opened;
      _ivSnZsUNRHkcYfna = _qVJAPLbExorasSEl.writable.getWriter();
      _DtbaXsJDQHWvwfLY = _qVJAPLbExorasSEl.readable.getReader();
      const _FaSCZntuRfpjxkFu = _sirprpawWTJYpgFc.splice(0, 10);
      for (const _MHFLjhtTfdyPjBVP of _FaSCZntuRfpjxkFu) {
        await _ivSnZsUNRHkcYfna.write(_MHFLjhtTfdyPjBVP);
        _EcAabcEqXZvarTxa -= _MHFLjhtTfdyPjBVP.length;
        _dduSrvomJBRuQiOM.free(_MHFLjhtTfdyPjBVP);
      }
      _utugnhLnSNZmpJgA = false;
      _pyduKAgcmrvFFEDT = 0;
      _StoLqurZBsQibzNX = Math.min(1.0, _StoLqurZBsQibzNX + 0.15);
      _TaVmrDmFTseonadP++;
      _UPoutEdRXjjfFsCu = Date.now();
      _juZZdGEshUSswCAP();
    } catch (_GEVEMzoIiWzlnXfi) {
      _utugnhLnSNZmpJgA = false;
      _rCLTWtHZhsItxJDy++;
      _StoLqurZBsQibzNX = Math.max(0.1, _StoLqurZBsQibzNX - 0.2);
      _QhzpaKPwZPoWUUPi();
    }
  };
  const _QhzpaKPwZPoWUUPi = async () => {
    if (!_OTHrklREQvwbVvIL || _kgpRCESpJSNewXah.readyState !== 1) {
      _NdJoLvvsRfenstNY();
      _kgpRCESpJSNewXah.close(1011, 'Invalid.');
      return;
    }
    if (_pyduKAgcmrvFFEDT >= _PjHenkwDEGLJnWMK) {
      _NdJoLvvsRfenstNY();
      _kgpRCESpJSNewXah.close(1011, 'Max reconnect.');
      return;
    }
    if (_StoLqurZBsQibzNX < 0.3 && _pyduKAgcmrvFFEDT > 5 && Math.random() > 0.6) {
      _NdJoLvvsRfenstNY();
      _kgpRCESpJSNewXah.close(1011, 'Poor network.');
      return;
    }
    if (_utugnhLnSNZmpJgA) return;
    _pyduKAgcmrvFFEDT++;
    let _WBboUUdSPtoYZaEJ = Math.min(50 * Math.pow(1.5, _pyduKAgcmrvFFEDT - 1), 3000);
    _WBboUUdSPtoYZaEJ *= 1.5 - _StoLqurZBsQibzNX * 0.5;
    _WBboUUdSPtoYZaEJ += (Math.random() - 0.5) * _WBboUUdSPtoYZaEJ * 0.2;
    _WBboUUdSPtoYZaEJ = Math.max(50, Math.floor(_WBboUUdSPtoYZaEJ));
    try {
      _BSCFispUjkuvDdTo();
      if (_EcAabcEqXZvarTxa > _rGZggFhLsPZeAVzX * 2) {
        while (_EcAabcEqXZvarTxa > _rGZggFhLsPZeAVzX && _sirprpawWTJYpgFc.length > 5) {
          const _VStoawfJzSOVKmPf = _sirprpawWTJYpgFc.shift();
          _EcAabcEqXZvarTxa -= _VStoawfJzSOVKmPf.length;
          _dduSrvomJBRuQiOM.free(_VStoawfJzSOVKmPf);
        }
      }
      await new Promise(_KrALwzcbubJLnUHQ => setTimeout(_KrALwzcbubJLnUHQ, _WBboUUdSPtoYZaEJ));
      _utugnhLnSNZmpJgA = true;
      _qVJAPLbExorasSEl = connect({
        hostname: _OTHrklREQvwbVvIL.host,
        port: _OTHrklREQvwbVvIL.port
      });
      await _qVJAPLbExorasSEl.opened;
      _ivSnZsUNRHkcYfna = _qVJAPLbExorasSEl.writable.getWriter();
      _DtbaXsJDQHWvwfLY = _qVJAPLbExorasSEl.readable.getReader();
      const _FaSCZntuRfpjxkFu = _sirprpawWTJYpgFc.splice(0, 10);
      for (const _MHFLjhtTfdyPjBVP of _FaSCZntuRfpjxkFu) {
        await _ivSnZsUNRHkcYfna.write(_MHFLjhtTfdyPjBVP);
        _EcAabcEqXZvarTxa -= _MHFLjhtTfdyPjBVP.length;
        _dduSrvomJBRuQiOM.free(_MHFLjhtTfdyPjBVP);
      }
      _utugnhLnSNZmpJgA = false;
      _pyduKAgcmrvFFEDT = 0;
      _StoLqurZBsQibzNX = Math.min(1.0, _StoLqurZBsQibzNX + 0.15);
      _TaVmrDmFTseonadP++;
      _QJzxZGxLiZhRImGU = 0;
      _UPoutEdRXjjfFsCu = Date.now();
      _juZZdGEshUSswCAP();
    } catch (_GEVEMzoIiWzlnXfi) {
      _utugnhLnSNZmpJgA = false;
      _rCLTWtHZhsItxJDy++;
      _StoLqurZBsQibzNX = Math.max(0.1, _StoLqurZBsQibzNX - 0.2);
      if (_pyduKAgcmrvFFEDT < _PjHenkwDEGLJnWMK && _kgpRCESpJSNewXah.readyState === 1) setTimeout(_QhzpaKPwZPoWUUPi, 500);else {
        _NdJoLvvsRfenstNY();
        _kgpRCESpJSNewXah.close(1011, 'Exhausted.');
      }
    }
  };
  const _iKMmxIVQuIVYRUoQ = () => {
    _kFZVGQzsueHEIQxg.ka = setInterval(async () => {
      if (!_utugnhLnSNZmpJgA && _ivSnZsUNRHkcYfna && Date.now() - _UPoutEdRXjjfFsCu > _accKHtdGSHoMiRah) {
        try {
          await _ivSnZsUNRHkcYfna.write(new Uint8Array(0));
          _UPoutEdRXjjfFsCu = Date.now();
        } catch (_GEVEMzoIiWzlnXfi) {
          _QhzpaKPwZPoWUUPi();
        }
      }
    }, _accKHtdGSHoMiRah / 3);
    _kFZVGQzsueHEIQxg.hc = setInterval(() => {
      if (!_utugnhLnSNZmpJgA && _YRhuuXJScKVuyfWN.tot > 0 && Date.now() - _UPoutEdRXjjfFsCu > _DCaHAQzbwXhHobLV) {
        _QJzxZGxLiZhRImGU++;
        if (_QJzxZGxLiZhRImGU >= _ufwubpaKYDbKzlLU) {
          if (_pyduKAgcmrvFFEDT < _PjHenkwDEGLJnWMK) {
            _QJzxZGxLiZhRImGU = 0;
            _QhzpaKPwZPoWUUPi();
          } else {
            _NdJoLvvsRfenstNY();
            _kgpRCESpJSNewXah.close(1011, 'Stall.');
          }
        }
      }
    }, _DCaHAQzbwXhHobLV / 2);
  };
  const _BSCFispUjkuvDdTo = () => {
    _DEjfXbYUZIwGQItH = false;
    try {
      _ivSnZsUNRHkcYfna?.releaseLock();
      _DtbaXsJDQHWvwfLY?.releaseLock();
      _qVJAPLbExorasSEl?.close();
    } catch {}
  };
  const _NdJoLvvsRfenstNY = () => {
    Object.values(_kFZVGQzsueHEIQxg).forEach(clearInterval);
    _BSCFispUjkuvDdTo();
    while (_sirprpawWTJYpgFc.length) _dduSrvomJBRuQiOM.free(_sirprpawWTJYpgFc.shift());
    _EcAabcEqXZvarTxa = 0;
    _YRhuuXJScKVuyfWN = {
      tot: 0,
      cnt: 0,
      big: 0,
      win: 0,
      ts: Date.now()
    };
    _jGYCRBzoMhMVJWtc = 'adaptive';
    _vXnWKQoAEYJiEUZe = 0;
    _daipTvSOPMlNbrie = [];
    _dduSrvomJBRuQiOM.reset();
  };
  _kgpRCESpJSNewXah.addEventListener('message', async _GEVEMzoIiWzlnXfi => {
    try {
      if (_uIjnMYbiZsWYruIs) {
        _uIjnMYbiZsWYruIs = false;
        const _MHFLjhtTfdyPjBVP = new Uint8Array(_GEVEMzoIiWzlnXfi.data);
        _kgpRCESpJSNewXah.send(new Uint8Array([_MHFLjhtTfdyPjBVP[0], 0]));
        if (_CdFflCNignuaMVAL && _gJTnKnUEXvqzHIVq(_MHFLjhtTfdyPjBVP, 1) !== _CdFflCNignuaMVAL) throw new Error('Auth failed.');
        const {
          host: _HjFWJuCohlOqaaVY,
          port: _KLDHtbIKYGypjqAZ,
          payload: _CiYgkiHLuStFdRgm
        } = _QKWZYgqghAmIFBVb(_MHFLjhtTfdyPjBVP);
        if (_HjFWJuCohlOqaaVY.includes(atob('c3BlZWQuY2xvdWRmbGFyZS5jb20='))) throw new Error('Access');
        _OTHrklREQvwbVvIL = {
          host: _HjFWJuCohlOqaaVY,
          port: _KLDHtbIKYGypjqAZ
        };
        _utugnhLnSNZmpJgA = true;
        let _llMDzWsgVXkaltJq;
        if (_dumkiUGAYBAKlhDb == 'socks5' && _DvJwFfHabQEGrOsu) {
          _llMDzWsgVXkaltJq = await _YgAKPMCKnVgfqlEj(_HjFWJuCohlOqaaVY, _KLDHtbIKYGypjqAZ);
        } else if (_dumkiUGAYBAKlhDb == 'http' && _DvJwFfHabQEGrOsu) {
          _llMDzWsgVXkaltJq = await _OSrkvUoUTiXXfdeJ(_HjFWJuCohlOqaaVY, _KLDHtbIKYGypjqAZ);
        } else {
          try {
            _llMDzWsgVXkaltJq = connect({
              hostname: _HjFWJuCohlOqaaVY,
              port: _KLDHtbIKYGypjqAZ
            });
            await _llMDzWsgVXkaltJq.opened;
          } catch {
            if (_dumkiUGAYBAKlhDb == 'socks5') {
              _llMDzWsgVXkaltJq = await _YgAKPMCKnVgfqlEj(_HjFWJuCohlOqaaVY, _KLDHtbIKYGypjqAZ);
            } else if (_dumkiUGAYBAKlhDb == 'http') {
              _llMDzWsgVXkaltJq = await _OSrkvUoUTiXXfdeJ(_HjFWJuCohlOqaaVY, _KLDHtbIKYGypjqAZ);
            } else {
              const [_nhXbPoZWwbGWONpX, _EoJQojXRMCrJHtRd] = await _kCNZulqzwgWNczIg(_NjUSiMdluFdmGrXB);
              _llMDzWsgVXkaltJq = connect({
                hostname: _nhXbPoZWwbGWONpX,
                port: _EoJQojXRMCrJHtRd
              });
            }
          }
        }
        await _llMDzWsgVXkaltJq.opened;
        if (_CiYgkiHLuStFdRgm.length) {
          const _KYUWpAwfXYARmEgl = _dduSrvomJBRuQiOM.alloc(_CiYgkiHLuStFdRgm.length);
          _KYUWpAwfXYARmEgl.set(_CiYgkiHLuStFdRgm);
          _sirprpawWTJYpgFc.push(_KYUWpAwfXYARmEgl);
          _EcAabcEqXZvarTxa += _KYUWpAwfXYARmEgl.length;
        }
        _iKMmxIVQuIVYRUoQ();
        _mnwaEhAHtzeYDIlh(_llMDzWsgVXkaltJq);
      } else {
        _UPoutEdRXjjfFsCu = Date.now();
        if (_utugnhLnSNZmpJgA || !_ivSnZsUNRHkcYfna) {
          const _KYUWpAwfXYARmEgl = _dduSrvomJBRuQiOM.alloc(_GEVEMzoIiWzlnXfi.data.byteLength);
          _KYUWpAwfXYARmEgl.set(new Uint8Array(_GEVEMzoIiWzlnXfi.data));
          _sirprpawWTJYpgFc.push(_KYUWpAwfXYARmEgl);
          _EcAabcEqXZvarTxa += _KYUWpAwfXYARmEgl.length;
        } else {
          await _ivSnZsUNRHkcYfna.write(_GEVEMzoIiWzlnXfi.data);
        }
      }
    } catch (_ATUkxpBkvpqxIfXS) {
      _NdJoLvvsRfenstNY();
      _kgpRCESpJSNewXah.close(1006, 'Error.');
    }
  });
  _kgpRCESpJSNewXah.addEventListener('close', _NdJoLvvsRfenstNY);
  _kgpRCESpJSNewXah.addEventListener('error', _NdJoLvvsRfenstNY);
};
async function _JmvbLaAWxsmTBcJG(_PjIxntlEinYglftY) {
  const _yFXDWigtfxsTANGJ = _PjIxntlEinYglftY.lastIndexOf("@");
  let [_kAcYtruQleXepRPd, _UKusLnIByTJNPvYo] = _yFXDWigtfxsTANGJ === -1 ? [_PjIxntlEinYglftY, undefined] : [_PjIxntlEinYglftY.substring(_yFXDWigtfxsTANGJ + 1), _PjIxntlEinYglftY.substring(0, _yFXDWigtfxsTANGJ)];
  let _ncpGkBevTsObfcrd, _ZRGOGUnTxwaCKeum, _FWvpuGDOWtsGXmqn, _KLDHtbIKYGypjqAZ;
  if (_UKusLnIByTJNPvYo) {
    const _yTHvSxyTYOnQdenY = _UKusLnIByTJNPvYo.split(":");
    if (_yTHvSxyTYOnQdenY.length !== 2) {
      throw new Error('无效的 SOCKS 地址格式：认证部分必须是 "username:password" 的形式');
    }
    [_ncpGkBevTsObfcrd, _ZRGOGUnTxwaCKeum] = _yTHvSxyTYOnQdenY;
  }
  const _yjECsTiusOumfYAo = _kAcYtruQleXepRPd.split(":");
  if (_yjECsTiusOumfYAo.length > 2 && _kAcYtruQleXepRPd.includes("]:")) {
    _KLDHtbIKYGypjqAZ = Number(_kAcYtruQleXepRPd.split("]:")[1].replace(/[^\d]/g, ''));
    _FWvpuGDOWtsGXmqn = _kAcYtruQleXepRPd.split("]:")[0] + "]";
  } else if (_yjECsTiusOumfYAo.length === 2) {
    _KLDHtbIKYGypjqAZ = Number(_yjECsTiusOumfYAo.pop().replace(/[^\d]/g, ''));
    _FWvpuGDOWtsGXmqn = _yjECsTiusOumfYAo.join(":");
  } else {
    _KLDHtbIKYGypjqAZ = 80;
    _FWvpuGDOWtsGXmqn = _kAcYtruQleXepRPd;
  }
  if (isNaN(_KLDHtbIKYGypjqAZ)) {
    throw new Error('无效的 SOCKS 地址格式：端口号必须是数字');
  }
  const _JeAasNfDSRMZCiVx = /^\[.*\]$/;
  if (_FWvpuGDOWtsGXmqn.includes(":") && !_JeAasNfDSRMZCiVx.test(_FWvpuGDOWtsGXmqn)) {
    throw new Error('无效的 SOCKS 地址格式：IPv6 地址必须用方括号括起来，如 [2001:db8::1]');
  }
  return {
    username: _ncpGkBevTsObfcrd,
    password: _ZRGOGUnTxwaCKeum,
    hostname: _FWvpuGDOWtsGXmqn,
    port: _KLDHtbIKYGypjqAZ
  };
}
async function _kCNZulqzwgWNczIg(_KpXGFGWsANBYODFG) {
  _KpXGFGWsANBYODFG = _KpXGFGWsANBYODFG.toLowerCase();
  let _OzdAMkKffQEuSNGx = _KpXGFGWsANBYODFG,
    _eunQYpBzccrksPxn = 443;
  if (_KpXGFGWsANBYODFG.includes('.tp')) {
    const _wShDVgvPseTHmayM = _KpXGFGWsANBYODFG.match(/\.tp(\d+)/);
    if (_wShDVgvPseTHmayM) _eunQYpBzccrksPxn = parseInt(_wShDVgvPseTHmayM[1], 10);
    return [_OzdAMkKffQEuSNGx, _eunQYpBzccrksPxn];
  }
  if (_KpXGFGWsANBYODFG.includes(']:')) {
    const _TTIErRVKDrDFaJdJ = _KpXGFGWsANBYODFG.split(']:');
    _OzdAMkKffQEuSNGx = _TTIErRVKDrDFaJdJ[0] + ']';
    _eunQYpBzccrksPxn = parseInt(_TTIErRVKDrDFaJdJ[1], 10) || _eunQYpBzccrksPxn;
  } else if (_KpXGFGWsANBYODFG.includes(':') && !_KpXGFGWsANBYODFG.startsWith('[')) {
    const _tBIHMjlOVyOvMLpJ = _KpXGFGWsANBYODFG.lastIndexOf(':');
    _OzdAMkKffQEuSNGx = _KpXGFGWsANBYODFG.slice(0, _tBIHMjlOVyOvMLpJ);
    _eunQYpBzccrksPxn = parseInt(_KpXGFGWsANBYODFG.slice(_tBIHMjlOVyOvMLpJ + 1), 10) || _eunQYpBzccrksPxn;
  }
  return [_OzdAMkKffQEuSNGx, _eunQYpBzccrksPxn];
}
async function _OSrkvUoUTiXXfdeJ(_qPhBJQfAvijCBubv, _GtvMWsNiggQpsQip) {
  const {
    username: _ncpGkBevTsObfcrd,
    password: _ZRGOGUnTxwaCKeum,
    hostname: _FWvpuGDOWtsGXmqn,
    port: _KLDHtbIKYGypjqAZ
  } = _qvUkrfVXaYFlBDik;
  const _qVJAPLbExorasSEl = await connect({
    hostname: _FWvpuGDOWtsGXmqn,
    port: _KLDHtbIKYGypjqAZ
  });
  const _AtRDhntFsTILRbRB = _ncpGkBevTsObfcrd && _ZRGOGUnTxwaCKeum ? `Proxy-Authorization: Basic ${btoa(`${_ncpGkBevTsObfcrd}:${_ZRGOGUnTxwaCKeum}`)}\r\n` : '';
  const _XTeeffzFERQibKqk = `CONNECT ${_qPhBJQfAvijCBubv}:${_GtvMWsNiggQpsQip} HTTP/1.1\r\n` + `Host: ${_qPhBJQfAvijCBubv}:${_GtvMWsNiggQpsQip}\r\n` + _AtRDhntFsTILRbRB + `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36\r\n` + `Proxy-Connection: Keep-Alive\r\n` + `Connection: Keep-Alive\r\n\r\n`;
  const _FrGntacesWLqrvyh = _qVJAPLbExorasSEl.writable.getWriter();
  try {
    await _FrGntacesWLqrvyh.write(new TextEncoder().encode(_XTeeffzFERQibKqk));
  } catch (_ATUkxpBkvpqxIfXS) {
    throw new Error(`发送HTTP CONNECT请求失败: ${_ATUkxpBkvpqxIfXS.message}`);
  } finally {
    _FrGntacesWLqrvyh.releaseLock();
  }
  const _RCqMasThvXikeBFC = _qVJAPLbExorasSEl.readable.getReader();
  let _YxNoEUuQESGXXCOy = new Uint8Array(0);
  try {
    while (true) {
      const {
        value: _tagbVuRvfRwcwmTN,
        done: _LxGTDuWrxPSEfYdg
      } = await _RCqMasThvXikeBFC.read();
      if (_LxGTDuWrxPSEfYdg) throw new Error('HTTP代理连接中断');
      const _FnxIpcioSXBaURJE = new Uint8Array(_YxNoEUuQESGXXCOy.length + _tagbVuRvfRwcwmTN.length);
      _FnxIpcioSXBaURJE.set(_YxNoEUuQESGXXCOy);
      _FnxIpcioSXBaURJE.set(_tagbVuRvfRwcwmTN, _YxNoEUuQESGXXCOy.length);
      _YxNoEUuQESGXXCOy = _FnxIpcioSXBaURJE;
      const _ANeRccgmfMysBVcK = new TextDecoder().decode(_YxNoEUuQESGXXCOy);
      if (_ANeRccgmfMysBVcK.includes('\r\n\r\n')) {
        const _yvzSnMuTgZyEGRWu = _ANeRccgmfMysBVcK.indexOf('\r\n\r\n') + 4;
        const _jrcONbSxMgeQfJrx = _ANeRccgmfMysBVcK.substring(0, _yvzSnMuTgZyEGRWu);
        if (!_jrcONbSxMgeQfJrx.startsWith('HTTP/1.1 200') && !_jrcONbSxMgeQfJrx.startsWith('HTTP/1.0 200')) {
          throw new Error(`HTTP代理连接失败: ${_jrcONbSxMgeQfJrx.split('\r\n')[0]}`);
        }
        if (_yvzSnMuTgZyEGRWu < _YxNoEUuQESGXXCOy.length) {
          const _sFBWCqndyUuNeUgK = _YxNoEUuQESGXXCOy.slice(_yvzSnMuTgZyEGRWu);
          const {
            readable: _jLmmMoNryGzIrdCI,
            writable: _phHvbLEnCrSLjRTT
          } = new TransformStream();
          new ReadableStream({
            start(_fFfdjZMvnSZgrwAf) {
              _fFfdjZMvnSZgrwAf.enqueue(_sFBWCqndyUuNeUgK);
            }
          }).pipeTo(_phHvbLEnCrSLjRTT).catch(() => {});
          // @ts-ignore
          _qVJAPLbExorasSEl.readable = _jLmmMoNryGzIrdCI;
        }
        break;
      }
    }
  } catch (_ATUkxpBkvpqxIfXS) {
    throw new Error(`处理HTTP代理响应失败: ${_ATUkxpBkvpqxIfXS.message}`);
  } finally {
    _RCqMasThvXikeBFC.releaseLock();
  }
  return _qVJAPLbExorasSEl;
}
async function _YgAKPMCKnVgfqlEj(_sMPPkyQuXThqKane, _uILnlIreTBcMnstf) {
  const {
    username: _ncpGkBevTsObfcrd,
    password: _ZRGOGUnTxwaCKeum,
    hostname: _FWvpuGDOWtsGXmqn,
    port: _KLDHtbIKYGypjqAZ
  } = _qvUkrfVXaYFlBDik;
  const _qVJAPLbExorasSEl = connect({
    hostname: _FWvpuGDOWtsGXmqn,
    port: _KLDHtbIKYGypjqAZ
  });
  await _qVJAPLbExorasSEl.opened;
  const _ivSnZsUNRHkcYfna = _qVJAPLbExorasSEl.writable.getWriter();
  const _DtbaXsJDQHWvwfLY = _qVJAPLbExorasSEl.readable.getReader();
  await _ivSnZsUNRHkcYfna.write(new Uint8Array([5, 2, 0, 2]));
  const _TGuADfsRkLSgosAA = (await _DtbaXsJDQHWvwfLY.read()).value;
  if (_TGuADfsRkLSgosAA[1] === 2 && _ncpGkBevTsObfcrd) {
    const _jjEtlzUXiiXiBMus = new TextEncoder().encode(_ncpGkBevTsObfcrd);
    const _vixTNMiNFiomhsRW = new TextEncoder().encode(_ZRGOGUnTxwaCKeum);
    await _ivSnZsUNRHkcYfna.write(new Uint8Array([1, _jjEtlzUXiiXiBMus.length, ..._jjEtlzUXiiXiBMus, _vixTNMiNFiomhsRW.length, ..._vixTNMiNFiomhsRW]));
    await _DtbaXsJDQHWvwfLY.read();
  }
  const _NWrzECsYNhrdzYLy = new TextEncoder().encode(_sMPPkyQuXThqKane);
  await _ivSnZsUNRHkcYfna.write(new Uint8Array([5, 1, 0, 3, _NWrzECsYNhrdzYLy.length, ..._NWrzECsYNhrdzYLy, _uILnlIreTBcMnstf >> 8, _uILnlIreTBcMnstf & 0xff]));
  await _DtbaXsJDQHWvwfLY.read();
  _ivSnZsUNRHkcYfna.releaseLock();
  _DtbaXsJDQHWvwfLY.releaseLock();
  return _qVJAPLbExorasSEl;
}
async function _BqEBAwTMlOpAhoEi(_XXHlGEBXdeKGtYiO) {
  const _DKbJmLMePayxhOtr = new URL(_XXHlGEBXdeKGtYiO.url);
  const {
    pathname: _HetmHyozfAkiYbcG,
    searchParams: _SrGhNnLwPqarHThX
  } = _DKbJmLMePayxhOtr;
  const _tgzUlstPYAhOXEEX = _HetmHyozfAkiYbcG.toLowerCase();

  // 初始化
  _RLHZuAuWNfwPSted = _SrGhNnLwPqarHThX.get('socks5') || _SrGhNnLwPqarHThX.get('http') || null;
  _DvJwFfHabQEGrOsu = _SrGhNnLwPqarHThX.has('globalproxy') || false;

  // 统一处理反代IP参数 (优先级最高,使用正则一次匹配)
  const _AcXfASPzEWnyLeEA = _tgzUlstPYAhOXEEX.match(/\/(proxyip[.=]|pyip=|ip=)(.+)/);
  if (_SrGhNnLwPqarHThX.has('proxyip')) {
    const _ysLQfhVMqNoEcqTX = _SrGhNnLwPqarHThX.get('proxyip');
    _NjUSiMdluFdmGrXB = _ysLQfhVMqNoEcqTX.includes(',') ? _ysLQfhVMqNoEcqTX.split(',')[Math.floor(Math.random() * _ysLQfhVMqNoEcqTX.split(',').length)] : _ysLQfhVMqNoEcqTX;
    return;
  } else if (_AcXfASPzEWnyLeEA) {
    const _ysLQfhVMqNoEcqTX = _AcXfASPzEWnyLeEA[1] === 'proxyip.' ? `proxyip.${_AcXfASPzEWnyLeEA[2]}` : _AcXfASPzEWnyLeEA[2];
    _NjUSiMdluFdmGrXB = _ysLQfhVMqNoEcqTX.includes(',') ? _ysLQfhVMqNoEcqTX.split(',')[Math.floor(Math.random() * _ysLQfhVMqNoEcqTX.split(',').length)] : _ysLQfhVMqNoEcqTX;
    return;
  }

  // 处理SOCKS5/HTTP代理参数
  let _hxvfaQJKCegUFvcd;
  if (_hxvfaQJKCegUFvcd = _HetmHyozfAkiYbcG.match(/\/(socks5?|http):\/?\/?(.+)/i)) {
    // 格式: /socks5://... 或 /http://...
    _dumkiUGAYBAKlhDb = _hxvfaQJKCegUFvcd[1].toLowerCase() === 'http' ? 'http' : 'socks5';
    _RLHZuAuWNfwPSted = _hxvfaQJKCegUFvcd[2].split('#')[0];
    _DvJwFfHabQEGrOsu = true;

    // 处理Base64编码的用户名密码
    if (_RLHZuAuWNfwPSted.includes('@')) {
      const _fAKZswJVrEJYFozG = _RLHZuAuWNfwPSted.lastIndexOf('@');
      let _kaVbrvQndnzqCumD = _RLHZuAuWNfwPSted.substring(0, _fAKZswJVrEJYFozG).replaceAll('%3D', '=');
      if (/^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i.test(_kaVbrvQndnzqCumD) && !_kaVbrvQndnzqCumD.includes(':')) {
        _kaVbrvQndnzqCumD = atob(_kaVbrvQndnzqCumD);
      }
      _RLHZuAuWNfwPSted = `${_kaVbrvQndnzqCumD}@${_RLHZuAuWNfwPSted.substring(_fAKZswJVrEJYFozG + 1)}`;
    }
  } else if (_hxvfaQJKCegUFvcd = _HetmHyozfAkiYbcG.match(/\/(g?s5|socks5|g?http)=(.+)/i)) {
    // 格式: /socks5=... 或 /s5=... 或 /gs5=... 或 /http=... 或 /ghttp=...
    const _obSVtuhhYPkCnRkz = _hxvfaQJKCegUFvcd[1].toLowerCase();
    _RLHZuAuWNfwPSted = _hxvfaQJKCegUFvcd[2];
    _dumkiUGAYBAKlhDb = _obSVtuhhYPkCnRkz.includes('http') ? 'http' : 'socks5';
    _DvJwFfHabQEGrOsu = _obSVtuhhYPkCnRkz.startsWith('g') || _DvJwFfHabQEGrOsu; // gs5 或 ghttp 开头启用全局
  }

  // 解析SOCKS5地址
  if (_RLHZuAuWNfwPSted) {
    try {
      _qvUkrfVXaYFlBDik = await _JmvbLaAWxsmTBcJG(_RLHZuAuWNfwPSted);
      _dumkiUGAYBAKlhDb = _SrGhNnLwPqarHThX.get('http') ? 'http' : _dumkiUGAYBAKlhDb;
    } catch (_ATUkxpBkvpqxIfXS) {
      console.error('解析SOCKS5地址失败:', _ATUkxpBkvpqxIfXS.message);
      _dumkiUGAYBAKlhDb = null;
    }
  } else _dumkiUGAYBAKlhDb = null;
}