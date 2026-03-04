import { connect } from 'cloudflare:sockets';

// ===== 核心配置 =====
const _UOVTfzHcPYNYJeaJ = '/t-vip-9026/auth-888999';
const _KbNfiUWMsbEqLvCX = '56892533-7dad-324a-b0e8-51040d0d04ad';
const _szUrrRnOdcPHkGwp = 'yx1.9898981.xyz';
const _ukKnuvGZSgWzCjAB = 8443;
const _EPwoPYeqYBYwlBKl = (_ZGVKSWBgwYNgqfgL, _iWNGBByIvSOFvzmH = 404) => {
  const _vrSkhttfsFAeVuWH = {
    timestamp: new Date().toISOString(),
    status: _iWNGBByIvSOFvzmH,
    error: _iWNGBByIvSOFvzmH === 404 ? "Not Found" : "Unauthorized",
    message: `No static resource or API endpoint found for: ${_ZGVKSWBgwYNgqfgL.pathname}`,
    path: _ZGVKSWBgwYNgqfgL.pathname,
    requestId: Math.random().toString(36).substring(2, 15).toUpperCase(),
    service: "api-gateway-v2"
  };
  return new Response(JSON.stringify(_vrSkhttfsFAeVuWH), {
    status: _iWNGBByIvSOFvzmH,
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
export default {
  async fetch(_uwLDYMdtnoUHnAkZ) {
    const _ZGVKSWBgwYNgqfgL = new URL(_uwLDYMdtnoUHnAkZ.url);
    if (_ZGVKSWBgwYNgqfgL.pathname !== _UOVTfzHcPYNYJeaJ) {
      return _EPwoPYeqYBYwlBKl(_ZGVKSWBgwYNgqfgL, 404);
    }
    if (_uwLDYMdtnoUHnAkZ.headers.get('Upgrade') !== 'websocket') {
      return new Response(JSON.stringify({
        status: "UP",
        version: "2.4.1-RELEASE",
        uptime: Math.floor(Math.random() * 100000) + "s"
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    const _PfAvNUtuLvjNoajX = new WebSocketPair();
    const [_LxzpKLAjIrhXcxVb, _rDauTOGbZlovimMl] = Object.values(_PfAvNUtuLvjNoajX);
    _rDauTOGbZlovimMl.accept();
    _cFoFnwGBAYkaOoVo(_rDauTOGbZlovimMl).catch(_hgjvoSLoZvylwsKo => {
      console.error("Critical WS Error:", _hgjvoSLoZvylwsKo.message);
      _rDauTOGbZlovimMl.close();
    });
    return new Response(null, {
      status: 101,
      webSocket: _LxzpKLAjIrhXcxVb,
      headers: {
        'Sec-WebSocket-Protocol': _uwLDYMdtnoUHnAkZ.headers.get('Sec-WebSocket-Protocol') || '',
        'Connection': 'Upgrade',
        'Upgrade': 'websocket'
      }
    });
  }
};
async function _cFoFnwGBAYkaOoVo(_rDauTOGbZlovimMl) {
  const _JxyqneMyYbLJathy = _pXoCSVRQTgdFOLaA(_rDauTOGbZlovimMl);
  let _TQbRNYUfjznANiZK = null;
  let _hNmruUjwBBaOMDcS = null;
  let _ogjqXMtFxcCzHHth = null;
  const _PVDvMIyIRGgCOubP = _JxyqneMyYbLJathy.getReader();
  try {
    const {
      done: _QXcIvpvSRqnQPcAe,
      value: _qLXDqhcLoLZTeVqO
    } = await _PVDvMIyIRGgCOubP.read();
    if (_QXcIvpvSRqnQPcAe) return;
    const _yAUpTmUNUWABDPdb = _FhxcHfuZwCAvudUF(_qLXDqhcLoLZTeVqO);
    if (_yAUpTmUNUWABDPdb.hasError) throw new Error(_yAUpTmUNUWABDPdb.message);
    _hNmruUjwBBaOMDcS = new Uint8Array([_yAUpTmUNUWABDPdb.vlessVersion[0], 0]);
    _ogjqXMtFxcCzHHth = _qLXDqhcLoLZTeVqO.slice(_yAUpTmUNUWABDPdb.rawDataIndex);
    try {
      _TQbRNYUfjznANiZK = await connect({
        hostname: _yAUpTmUNUWABDPdb.addressRemote,
        port: _yAUpTmUNUWABDPdb.portRemote
      }, {
        allowHalfOpen: true
      });
      const _bkFrrGZHalsFtCEQ = _TQbRNYUfjznANiZK.writable.getWriter();
      await _bkFrrGZHalsFtCEQ.write(_ogjqXMtFxcCzHHth);
      _bkFrrGZHalsFtCEQ.releaseLock();
    } catch (_VOOOXwJxyXpjwOzE) {
      // Fallback 到 ProxyIP
      _TQbRNYUfjznANiZK = await connect({
        hostname: PROXY_IP,
        port: _ukKnuvGZSgWzCjAB
      }, {
        allowHalfOpen: true
      });
      const _bkFrrGZHalsFtCEQ = _TQbRNYUfjznANiZK.writable.getWriter();
      await _bkFrrGZHalsFtCEQ.write(_ogjqXMtFxcCzHHth);
      _bkFrrGZHalsFtCEQ.releaseLock();
    }
    const _KAPRBnnMyKnpUGPH = _GrlTWqcdNuZbqSWo(_TQbRNYUfjznANiZK, _rDauTOGbZlovimMl, _hNmruUjwBBaOMDcS);
    const _wsGpcZQmqvahuerv = (async () => {
      const _bkFrrGZHalsFtCEQ = _TQbRNYUfjznANiZK.writable.getWriter();
      try {
        while (true) {
          const {
            done: _QXcIvpvSRqnQPcAe,
            value: _qLXDqhcLoLZTeVqO
          } = await _PVDvMIyIRGgCOubP.read();
          if (_QXcIvpvSRqnQPcAe) break;
          await _bkFrrGZHalsFtCEQ.write(_qLXDqhcLoLZTeVqO);
        }
      } finally {
        _bkFrrGZHalsFtCEQ.releaseLock();
      }
    })();
    await Promise.race([_KAPRBnnMyKnpUGPH, _wsGpcZQmqvahuerv]);
  } catch (_hgjvoSLoZvylwsKo) {
    console.error("HandleWS Error:", _hgjvoSLoZvylwsKo.message);
  } finally {
    _PVDvMIyIRGgCOubP.releaseLock();
    if (_TQbRNYUfjznANiZK) try {
      _TQbRNYUfjznANiZK.close();
    } catch {}
    if (_rDauTOGbZlovimMl.readyState === 1) _rDauTOGbZlovimMl.close();
  }
}
async function _GrlTWqcdNuZbqSWo(_TQbRNYUfjznANiZK, _WUBydMtEwSdvmzSH, _wCsZtlxVDicupPNY) {
  const _PVDvMIyIRGgCOubP = _TQbRNYUfjznANiZK.readable.getReader();
  let _VcYwhmVZGtGSwWex = false;
  try {
    while (true) {
      const {
        done: _QXcIvpvSRqnQPcAe,
        value: _qLXDqhcLoLZTeVqO
      } = await _PVDvMIyIRGgCOubP.read();
      if (_QXcIvpvSRqnQPcAe) break;
      if (_WUBydMtEwSdvmzSH.readyState !== 1) break;
      if (!_VcYwhmVZGtGSwWex) {
        const _IyKasJqqxTDpzutL = new Uint8Array(_wCsZtlxVDicupPNY.byteLength + _qLXDqhcLoLZTeVqO.byteLength);
        _IyKasJqqxTDpzutL.set(_wCsZtlxVDicupPNY, 0);
        _IyKasJqqxTDpzutL.set(_qLXDqhcLoLZTeVqO, _wCsZtlxVDicupPNY.byteLength);
        _WUBydMtEwSdvmzSH.send(_IyKasJqqxTDpzutL);
        _VcYwhmVZGtGSwWex = true;
      } else {
        _WUBydMtEwSdvmzSH.send(_qLXDqhcLoLZTeVqO);
      }
    }
  } finally {
    _PVDvMIyIRGgCOubP.releaseLock();
  }
}
function _pXoCSVRQTgdFOLaA(_WUBydMtEwSdvmzSH) {
  return new ReadableStream({
    start(_zRePrztcFnPCChpc) {
      _WUBydMtEwSdvmzSH.addEventListener('message', _xSVCRvfikcrzPFIs => _zRePrztcFnPCChpc.enqueue(new Uint8Array(_xSVCRvfikcrzPFIs.data)));
      _WUBydMtEwSdvmzSH.addEventListener('close', () => _zRePrztcFnPCChpc.close());
      _WUBydMtEwSdvmzSH.addEventListener('error', _xSVCRvfikcrzPFIs => _zRePrztcFnPCChpc.error(_xSVCRvfikcrzPFIs));
    }
  });
}
function _FhxcHfuZwCAvudUF(_TwOPzwLotGYsZnIt) {
  if (_TwOPzwLotGYsZnIt.byteLength < 24) return {
    hasError: true,
    message: 'Invalid header'
  };
  const _GpmCeTlcflvokPVy = new DataView(_TwOPzwLotGYsZnIt.buffer);
  const _umtsmGvnpQEtpMjs = Array.from(new Uint8Array(_TwOPzwLotGYsZnIt.slice(1, 17))).map(_oTQcbblIUIKPrNou => _oTQcbblIUIKPrNou.toString(16).padStart(2, '0')).join('');
  if (_umtsmGvnpQEtpMjs !== FIXED_UUID.replace(/-/g, '')) return {
    hasError: true,
    message: 'Unauthorized'
  };
  const _AoEZcPaihShliUSq = _GpmCeTlcflvokPVy.getUint8(17);
  let _GWOtrqcwANTkfStA = 18 + _AoEZcPaihShliUSq;
  const _YAWWpanvZtrxPjRO = _GpmCeTlcflvokPVy.getUint8(_GWOtrqcwANTkfStA++);
  const _cbsAvHDJHWVTfZEd = _GpmCeTlcflvokPVy.getUint16(_GWOtrqcwANTkfStA);
  _GWOtrqcwANTkfStA += 2;
  const _BqgIsmjiRcrBPfrY = _GpmCeTlcflvokPVy.getUint8(_GWOtrqcwANTkfStA++);
  let _qikfdLhpCvkzGzDS = '';
  if (_BqgIsmjiRcrBPfrY === 1) {
    _qikfdLhpCvkzGzDS = Array.from(new Uint8Array(_TwOPzwLotGYsZnIt.slice(_GWOtrqcwANTkfStA, _GWOtrqcwANTkfStA + 4))).join('.');
    _GWOtrqcwANTkfStA += 4;
  } else if (_BqgIsmjiRcrBPfrY === 2) {
    const _rmOnTJoWFhIShDby = _GpmCeTlcflvokPVy.getUint8(_GWOtrqcwANTkfStA++);
    _qikfdLhpCvkzGzDS = new TextDecoder().decode(_TwOPzwLotGYsZnIt.slice(_GWOtrqcwANTkfStA, _GWOtrqcwANTkfStA + _rmOnTJoWFhIShDby));
    _GWOtrqcwANTkfStA += _rmOnTJoWFhIShDby;
  } else if (_BqgIsmjiRcrBPfrY === 3) {
    _qikfdLhpCvkzGzDS = Array.from({
      length: 8
    }, (_uIzBzIzYYRvjnamX, _aOfwilYscQUANkeK) => _GpmCeTlcflvokPVy.getUint16(_GWOtrqcwANTkfStA + _aOfwilYscQUANkeK * 2).toString(16)).join(':');
    _GWOtrqcwANTkfStA += 16;
  }
  return {
    hasError: false,
    addressRemote: _qikfdLhpCvkzGzDS,
    portRemote: _cbsAvHDJHWVTfZEd,
    rawDataIndex: _GWOtrqcwANTkfStA,
    vlessVersion: new Uint8Array(_TwOPzwLotGYsZnIt.slice(0, 1))
  };
}