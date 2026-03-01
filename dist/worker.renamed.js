import { connect } from 'cloudflare:sockets';
const _zYKKdoGZqnmEnGPq = new TextDecoder(),
  _jfaHCVrCBFHnxASx = new TextEncoder(),
  _BbSHBjMtKftiFqYl = '123asa',
  _wodtoCkDNSJPtyzB = '56892533-7dad-475a-b0e8-51040d0d04ad',
  _YIeQkaNUtHnHVlWF = 'yx1.9898981.xyz:8443',
  _QTOSmfJbRTcCqJkc = 'Core';
const _kpFHqLdLmlgcXyva = ((_nUSmmfPHomdZlGOs, _VHkyyDtSaKyppgge = new Uint8Array(16)) => {
  for (let _BbSHBjMtKftiFqYl = 0; _BbSHBjMtKftiFqYl < 32; _BbSHBjMtKftiFqYl += 2) _VHkyyDtSaKyppgge[_BbSHBjMtKftiFqYl >> 1] = parseInt(_nUSmmfPHomdZlGOs.substr(_BbSHBjMtKftiFqYl, 2), 16);
  return _VHkyyDtSaKyppgge;
})(_wodtoCkDNSJPtyzB.replace(/-/g, ''));
const _jJFeKUOpdqvDaxGI = _MMOPgudyyilsacfi => {
  for (let _BbSHBjMtKftiFqYl = 0; _BbSHBjMtKftiFqYl < 16; _BbSHBjMtKftiFqYl++) if (_MMOPgudyyilsacfi[_BbSHBjMtKftiFqYl] !== _kpFHqLdLmlgcXyva[_BbSHBjMtKftiFqYl]) return 0;
  return 1;
};
const _RavhGEpFyOMaPebW = async (_nUSmmfPHomdZlGOs, _jSYWbhfVVxvECfKp, _VHkyyDtSaKyppgge) => {
  try {
    const _MfFuucWZGmYDuBSE = await connect({
      hostname: _nUSmmfPHomdZlGOs,
      port: _jSYWbhfVVxvECfKp
    });
    return await _MfFuucWZGmYDuBSE.opened, {
      tcpSocket: _MfFuucWZGmYDuBSE,
      initialData: _VHkyyDtSaKyppgge
    };
  } catch {}
  if (_YIeQkaNUtHnHVlWF) {
    const [_myLJObakZrRsaUea, _wasPMcNEuzTKFNRS] = _YIeQkaNUtHnHVlWF.split(':');
    return _RavhGEpFyOMaPebW(_myLJObakZrRsaUea, +_wasPMcNEuzTKFNRS || _jSYWbhfVVxvECfKp, _VHkyyDtSaKyppgge);
  }
  throw new Error('连失败');
};
const _ppdadVaeELBSJlSg = async _MMOPgudyyilsacfi => {
  _MMOPgudyyilsacfi = new Uint8Array(_MMOPgudyyilsacfi);
  let _nvEbnfYjwDOiyIFK = 18 + _MMOPgudyyilsacfi[17],
    _wasPMcNEuzTKFNRS = _MMOPgudyyilsacfi[_nvEbnfYjwDOiyIFK + 1] << 8 | _MMOPgudyyilsacfi[_nvEbnfYjwDOiyIFK + 2],
    _myLJObakZrRsaUea = '',
    _BbSHBjMtKftiFqYl = _nvEbnfYjwDOiyIFK + 4;
  switch (_MMOPgudyyilsacfi[_nvEbnfYjwDOiyIFK + 3]) {
    case 1:
      _myLJObakZrRsaUea = `${_MMOPgudyyilsacfi[_BbSHBjMtKftiFqYl++]}.${_MMOPgudyyilsacfi[_BbSHBjMtKftiFqYl++]}.${_MMOPgudyyilsacfi[_BbSHBjMtKftiFqYl++]}.${_MMOPgudyyilsacfi[_BbSHBjMtKftiFqYl++]}`;
      break;
    case 2:
      {
        const _TCBCVcrPtEESwRNK = _MMOPgudyyilsacfi[_BbSHBjMtKftiFqYl++];
        _myLJObakZrRsaUea = _zYKKdoGZqnmEnGPq.decode(_MMOPgudyyilsacfi.subarray(_BbSHBjMtKftiFqYl, _BbSHBjMtKftiFqYl + _TCBCVcrPtEESwRNK));
        _BbSHBjMtKftiFqYl += _TCBCVcrPtEESwRNK;
      }
      break;
    case 3:
      _myLJObakZrRsaUea = Array.from({
        length: 8
      }, (_QpEHEQPbzhBuvdid, _MenkEbjGIaQNycrK) => (_MMOPgudyyilsacfi[_BbSHBjMtKftiFqYl + 2 * _MenkEbjGIaQNycrK] << 8 | _MMOPgudyyilsacfi[_BbSHBjMtKftiFqYl + 2 * _MenkEbjGIaQNycrK + 1]).toString(16)).join(':');
      _BbSHBjMtKftiFqYl += 16;
  }
  return _RavhGEpFyOMaPebW(_myLJObakZrRsaUea, _wasPMcNEuzTKFNRS, _MMOPgudyyilsacfi.slice(_BbSHBjMtKftiFqYl));
};
const _tamKYyjZaHuRxMQA = (_MfzovZtdWcuBTkgE, _MfFuucWZGmYDuBSE, _VHkyyDtSaKyppgge) => {
  const _MlWrzAfnJbnGqGyG = _MfFuucWZGmYDuBSE.writable.getWriter();
  _MfzovZtdWcuBTkgE.send(new Uint8Array([0, 0]));
  _VHkyyDtSaKyppgge && _MlWrzAfnJbnGqGyG.write(_VHkyyDtSaKyppgge);
  let _MMOPgudyyilsacfi = [],
    _BNzqiSdOctJUoOmO,
    _kTfSwbkjzEebjDOT = 0;
  const _czrVzVTeVYxgUkuQ = () => {
    _kTfSwbkjzEebjDOT || (_kTfSwbkjzEebjDOT = 1, _BNzqiSdOctJUoOmO && clearTimeout(_BNzqiSdOctJUoOmO), _MlWrzAfnJbnGqGyG.releaseLock().catch(() => {}), _MfFuucWZGmYDuBSE.close().catch(() => {}), _MfzovZtdWcuBTkgE.close().catch(() => {}), _MMOPgudyyilsacfi = null);
  };
  _MfzovZtdWcuBTkgE.onmessage = ({
    data: _prbNInENEpFbjEDu
  }) => {
    if (_kTfSwbkjzEebjDOT) return;
    const _TCBCVcrPtEESwRNK = _prbNInENEpFbjEDu instanceof ArrayBuffer ? new Uint8Array(_prbNInENEpFbjEDu) : _jfaHCVrCBFHnxASx.encode(_prbNInENEpFbjEDu);
    _MMOPgudyyilsacfi.push(_TCBCVcrPtEESwRNK), _BNzqiSdOctJUoOmO || (_BNzqiSdOctJUoOmO = setTimeout(() => {
      if (_kTfSwbkjzEebjDOT) return;
      const _jSYWbhfVVxvECfKp = _MMOPgudyyilsacfi.length === 1 ? _MMOPgudyyilsacfi[0] : (() => {
        let _TCBCVcrPtEESwRNK = 0;
        _MMOPgudyyilsacfi.forEach(_jJFeKUOpdqvDaxGI => _TCBCVcrPtEESwRNK += _jJFeKUOpdqvDaxGI.length);
        const _zYKKdoGZqnmEnGPq = new Uint8Array(_TCBCVcrPtEESwRNK);
        let _JLJtFQVBeuhuqcdr = 0;
        return _MMOPgudyyilsacfi.forEach(_jJFeKUOpdqvDaxGI => (_zYKKdoGZqnmEnGPq.set(_jJFeKUOpdqvDaxGI, _JLJtFQVBeuhuqcdr), _JLJtFQVBeuhuqcdr += _jJFeKUOpdqvDaxGI.length)), _zYKKdoGZqnmEnGPq;
      })();
      _MlWrzAfnJbnGqGyG.write(_jSYWbhfVVxvECfKp).catch(_czrVzVTeVYxgUkuQ), _MMOPgudyyilsacfi.length = 0, _BNzqiSdOctJUoOmO = null;
    }, 5));
  };
  _MfFuucWZGmYDuBSE.readable.pipeTo(new WritableStream({
    write: _zYKKdoGZqnmEnGPq => _MfzovZtdWcuBTkgE.send(_zYKKdoGZqnmEnGPq),
    close: _czrVzVTeVYxgUkuQ,
    abort: _czrVzVTeVYxgUkuQ
  })).catch(_czrVzVTeVYxgUkuQ);
  _MfzovZtdWcuBTkgE.onclose = _czrVzVTeVYxgUkuQ;
};
const _HpSjueljveCRxnCU = _nUSmmfPHomdZlGOs => {
  const _RavhGEpFyOMaPebW = (_VHkyyDtSaKyppgge, _MMOPgudyyilsacfi = _QTOSmfJbRTcCqJkc) => {
    const [_myLJObakZrRsaUea, _wasPMcNEuzTKFNRS = 443] = _VHkyyDtSaKyppgge.split(':');
    return `vs://${_wodtoCkDNSJPtyzB}@${_myLJObakZrRsaUea}:${_wasPMcNEuzTKFNRS}?security=tls&type=ws&host=${_nUSmmfPHomdZlGOs}&fp=chrome&sni=${_nUSmmfPHomdZlGOs}&path=%2Fpp%3D${_YIeQkaNUtHnHVlWF}%3A${_wasPMcNEuzTKFNRS}%3Fed%3D2560&encryption=none&insecure=0&allowInsecure=0#${encodeURIComponent(_MMOPgudyyilsacfi)}`;
  };
  return _RavhGEpFyOMaPebW(_nUSmmfPHomdZlGOs);
};
export default {
  async fetch(_mYcPlBkGDEEhkmtI, _OmLnOsepGgUuxuoQ) {
    const {
        headers: _vFNNbHCZEOwtFdDS,
        url: _WyJJwIzFnEvHCEzq
      } = _mYcPlBkGDEEhkmtI,
      _piOPffquIkTrYSlr = _vFNNbHCZEOwtFdDS.get('Host');
    if (_vFNNbHCZEOwtFdDS.get('Upgrade') !== 'websocket') {
      const {
        pathname: _EVioOKPhEItZfkTe
      } = new URL(_WyJJwIzFnEvHCEzq);
      return new Response(_EVioOKPhEItZfkTe === `/${_BbSHBjMtKftiFqYl}` ? ` https://${_piOPffquIkTrYSlr}/${_BbSHBjMtKftiFqYl}/vless` : _EVioOKPhEItZfkTe === `/${_BbSHBjMtKftiFqYl}/vless` ? _HpSjueljveCRxnCU(_piOPffquIkTrYSlr) : 'He');
    }
    try {
      const _JLJtFQVBeuhuqcdr = _vFNNbHCZEOwtFdDS.get('sec-websocket-protocol'),
        _zYKKdoGZqnmEnGPq = Uint8Array.from(atob(_JLJtFQVBeuhuqcdr.replace(/-/g, '+').replace(/_/g, '/')), _jJFeKUOpdqvDaxGI => _jJFeKUOpdqvDaxGI.charCodeAt(0));
      if (!_jJFeKUOpdqvDaxGI(_zYKKdoGZqnmEnGPq.subarray(1, 17))) return new Response('66', {
        status: 403
      });
      const {
          tcpSocket: _MfFuucWZGmYDuBSE,
          initialData: _VHkyyDtSaKyppgge
        } = await _ppdadVaeELBSJlSg(_zYKKdoGZqnmEnGPq.buffer),
        [_TYaJGGxZgYMDzqiH, _UYPIWwsTfKDTxStX] = Object.values(new WebSocketPair());
      return _UYPIWwsTfKDTxStX.accept(), _tamKYyjZaHuRxMQA(_UYPIWwsTfKDTxStX, _MfFuucWZGmYDuBSE, _VHkyyDtSaKyppgge), new Response(null, {
        status: 101,
        webSocket: _TYaJGGxZgYMDzqiH
      });
    } catch (_jfaHCVrCBFHnxASx) {
      return new Response('连: ' + _jfaHCVrCBFHnxASx.message, {
        status: 502
      });
    }
  }
};