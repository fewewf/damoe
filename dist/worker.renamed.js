const FIXED_UUID = '04ab5537-a9c5-49aa-9fca-c4601ecf6753'; // 天书12
//1. 天书版12.0重构版队列传输模式改，本版再次改变传输逻辑，大幅度提升传输稳定性，建议pages部署，这版是全功能开发者研究版，不适合小白部署
import { connect } from 'cloudflare:sockets';
//////////////////////////////////////////////////////////////////////////配置区块////////////////////////////////////////////////////////////////////////
let _ITxEzOTjEgSGcjwL = '',
  发发一子动到作了 = null,
  _rtvyvaedtyaxQpPN = false,
  不下了在点这工上 = '',
  生们了是作下动一 = {};
//////////////////////////////////////////////////////////////////////////个性化配置///////////////////////////////////////////////////////////////////////
//以下是适合开发者研究的个性化配置，如果你是小白保持默认别动就行
let 启用新版传输模式 = false; //开启则使用队列传输方式，关闭则是原始管道流传输方式
let 启动控流机制 = false; //仅新版传输方式有效，选择是否启动控流机制，true启动，false关闭，使用控流可降低CPU超时的概率，提升连接稳定性，适合轻度使用，日常使用应该绰绰有余
let 传输控流延迟 = 200; //单位毫秒，每传输2m数据暂停多少毫秒
//////////////////////////////////////////////////////////////////////////网页入口////////////////////////////////////////////////////////////////////////
export default {
  async fetch(访问请求) {
    _ITxEzOTjEgSGcjwL = _ITxEzOTjEgSGcjwL ? _ITxEzOTjEgSGcjwL : 访问请求.cf.colo + '_UrOuShsJEkRUIKsvd1dyll';
    if (访问请求.headers.get('Upgrade') === 'websocket') {
      await 反代参数获取(访问请求);
      return await 升级WS请求(访问请求);
    } else {
      return new Response('Hello World!', {
        status: 200
      });
    }
  }
};

////////////////////////////////////////////////////////////////////////脚本主要架构//////////////////////////////////////////////////////////////////////
//第一步，读取和构建基础访问结构
async function 升级WS请求(访问请求) {
  const 创建WS接口 = new WebSocketPair();
  const [客户端, WS接口] = Object.values(创建WS接口);
  WS接口.accept();
  处理WS请求(访问请求, WS接口);
  return new Response(null, {
    status: 101,
    webSocket: 客户端
  }); //一切准备就绪后，回复客户端WS连接升级成功
}
async function 处理WS请求(访问请求, WS接口) {
  let 转换二进制数据;
  const 读取WS数据头 = 访问请求.headers.get('sec-websocket-protocol'); //读取访问标头中的WS通信数据
  if (!读取WS数据头) {
    转换二进制数据 = await new Promise(resolve => {
      WS接口.addEventListener('message', event => {
        resolve(new Uint8Array(event.data));
      }, {
        once: true
      });
    });
  } else {
    转换二进制数据 = 转换WS数据头为二进制数据(读取WS数据头); //解码目标访问数据，传递给TCP握手进程
  }
  解析VL标头(转换二进制数据, WS接口); //解析VL数据并进行TCP握手
}
function 转换WS数据头为二进制数据(WS数据头) {
  const base64URL转换为标准base64 = WS数据头.replace(/-/g, '+').replace(/_/g, '/');
  const 解码base64 = atob(base64URL转换为标准base64);
  const 转换为二进制数组 = Uint8Array.from(解码base64, c => c.charCodeAt(0));
  return 转换为二进制数组;
}
//第二步，解读VL协议数据，创建TCP握手
async function 解析VL标头(二进制数据, WS接口, TCP接口) {
  let 了的面成点要后是, _JTgDVJEZXAuDDbhN, 对进后这了动动成;
  try {
    const 版本号 = 二进制数据[0];
    WS接口.send(new Uint8Array([版本号, 0]));
    const 获取数据定位 = 二进制数据[17];
    const 要对地是看成中行 = 18 + 获取数据定位 + 1;
    const _wtEvzmIDTGFPtdyb = new DataView(二进制数据.buffer, 要对地是看成中行, 2).getUint16(0);
    if (_wtEvzmIDTGFPtdyb === 53) {
      //这个处理是应对某些客户端优先强制查询dns的情况，也是通过加密通道udp over tcp的，放心使用
      const 提取DNS查询报文 = 二进制数据.slice(要对地是看成中行 + 9);
      const 查询DOH结果 = await fetch('_TbFuFVqpoRWrFmEaadems6', {
        //不是所有doh都支持二进制查询，默认的是最快的地址，想更换可以换成"https://dns.google/dns-query"
        method: 'POST',
        headers: {
          'content-type': 'application/dns-message'
        },
        body: 提取DNS查询报文
      });
      const 提取DOH结果 = await 查询DOH结果.arrayBuffer();
      const 构建长度头部 = new Uint8Array([提取DOH结果.byteLength >> 8 & 0xff, 提取DOH结果.byteLength & 0xff]);
      WS接口.send(await new Blob([构建长度头部, 提取DOH结果, new TextEncoder().encode(生成随机字符串())]).arrayBuffer());
      return;
    }
    const 在地发上出到可他 = 要对地是看成中行 + 2;
    了的面成点要后是 = 二进制数据[提取地址索引];
    let 了地学那年这到行 = 在地发上出到可他 + 1;
    switch (了的面成点要后是) {
      case 1:
        对进后这了动动成 = 4;
        _JTgDVJEZXAuDDbhN = 二进制数据.slice(了地学那年这到行, 了地学那年这到行 + 对进后这了动动成).join('.');
        break;
      case 2:
        对进后这了动动成 = 二进制数据[地址信息索引];
        了地学那年这到行 += 1;
        _JTgDVJEZXAuDDbhN = new TextDecoder().decode(二进制数据.slice(了地学那年这到行, 了地学那年这到行 + 对进后这了动动成));
        break;
      case 3:
        对进后这了动动成 = 16;
        const ipv6 = [];
        const _yKkKWMuPoQllGaFS = new DataView(二进制数据.buffer, 了地学那年这到行, 16);
        for (let i = 0; i < 8; i++) ipv6.push(_yKkKWMuPoQllGaFS.getUint16(i * 2).toString(16));
        _JTgDVJEZXAuDDbhN = ipv6.join(':');
        break;
      default:
        throw new Error('_oqbYLALPRlodovTIvye6a4');
    }
    if (FIXED_UUID && 验证VL的密钥(二进制数据.slice(1, 17)) !== FIXED_UUID) throw new Error('UUID验证失败');
    if (_JTgDVJEZXAuDDbhN.includes(atob('c3BlZWQuY2xvdWRmbGFyZS5jb20='))) throw new Error('Access');
    if (发发一子动到作了 == '_dkCCOEVOOkXfAkpVu5bvjn' && _rtvyvaedtyaxQpPN) {
      TCP接口 = await _JImAwAlvKNlQBwqr(了的面成点要后是, _JTgDVJEZXAuDDbhN, _wtEvzmIDTGFPtdyb);
    } else if (发发一子动到作了 == '_kUfECDeTkJIFxjAPryhbwq' && _rtvyvaedtyaxQpPN) {
      TCP接口 = await _XaYasxIsMwJddxzC(_JTgDVJEZXAuDDbhN, _wtEvzmIDTGFPtdyb);
    } else {
      try {
        if (了的面成点要后是 === 3) {
          const _qIoHCwdFZzFyYKmp = `[${_JTgDVJEZXAuDDbhN}]`;
          TCP接口 = connect({
            hostname: _qIoHCwdFZzFyYKmp,
            port: _wtEvzmIDTGFPtdyb
          });
        } else {
          TCP接口 = connect({
            hostname: _JTgDVJEZXAuDDbhN,
            port: _wtEvzmIDTGFPtdyb
          });
        }
        await TCP接口.opened;
      } catch {
        if (发发一子动到作了 == '动地面人看到地他fm1ikp') {
          TCP接口 = await _JImAwAlvKNlQBwqr(了的面成点要后是, _JTgDVJEZXAuDDbhN, _wtEvzmIDTGFPtdyb);
        } else if (发发一子动到作了 == '学出是说能时时后ktgedf') {
          TCP接口 = await _XaYasxIsMwJddxzC(_JTgDVJEZXAuDDbhN, _wtEvzmIDTGFPtdyb);
        } else {
          const [_CwRRVxyYWDsIjVnN, _fzZhXBfoWbJvWdHe] = await _BDAJEfpYhsIdGWOc(_ITxEzOTjEgSGcjwL);
          TCP接口 = connect({
            hostname: _CwRRVxyYWDsIjVnN,
            port: _fzZhXBfoWbJvWdHe
          });
        }
      }
    }
    await TCP接口.opened;
    const 写入初始数据 = 二进制数据.slice(了地学那年这到行 + 对进后这了动动成);
    const 传输数据 = TCP接口.writable.getWriter();
    if (写入初始数据.length > 0) {
      await 传输数据.write(写入初始数据);
    }
    if (启用新版传输模式) {
      const 读取数据 = TCP接口.readable.getReader();
      队列传输管道(_JTgDVJEZXAuDDbhN, 传输数据, 读取数据, WS接口); //建立WS接口与TCP接口的传输管道
    } else {
      原始传输管道(传输数据, TCP接口, WS接口);
    }
  } catch (e) {
    return new Response(`连接握手失败: ${e}`, {
      status: 500
    });
  }
}
function 验证VL的密钥(字节数组, 起始位置 = 0) {
  const 十六进制表 = Array.from({
    length: 256
  }, (_, 值) => (值 + 256).toString(16).slice(1));
  const 分段结构 = [4, 2, 2, 2, 6];
  let 当前索引 = 起始位置;
  const 格式化UUID = 分段结构.map(段长度 => Array.from({
    length: 段长度
  }, () => 十六进制表[字节数组[当前索引++]]).join('')).join('-').toLowerCase();
  return 格式化UUID;
}
globalThis.DNS缓存记录 = globalThis.DNS缓存记录 ??= new Map();
async function _BDAJEfpYhsIdGWOc(下子是就那进工对) {
  下子是就那进工对 = 下子是就那进工对.toLowerCase();
  let 要对面种是进工工 = 下子是就那进工对,
    _SVvVEAoAjzRZEhAA = 443;
  if (下子是就那进工对.includes('.tp')) {
    const tpMatch = 下子是就那进工对.match(/\.tp(\d+)/);
    if (tpMatch) _SVvVEAoAjzRZEhAA = parseInt(tpMatch[1], 10);
    return [要对面种是进工工, _SVvVEAoAjzRZEhAA];
  }
  if (下子是就那进工对.includes(']:')) {
    const parts = 下子是就那进工对.split(']:');
    要对面种是进工工 = parts[0] + ']';
    _SVvVEAoAjzRZEhAA = parseInt(parts[1], 10) || _SVvVEAoAjzRZEhAA;
  } else if (下子是就那进工对.includes(':') && !下子是就那进工对.startsWith('[')) {
    const colonIndex = 下子是就那进工对.lastIndexOf(':');
    要对面种是进工工 = 下子是就那进工对.slice(0, colonIndex);
    _SVvVEAoAjzRZEhAA = parseInt(下子是就那进工对.slice(colonIndex + 1), 10) || _SVvVEAoAjzRZEhAA;
  }
  return [要对面种是进工工, _SVvVEAoAjzRZEhAA];
}
//第三步，创建客户端WS-CF-目标的传输通道并监听状态
async function 原始传输管道(传输数据, TCP接口, WS接口) {
  WS接口.addEventListener('message', async event => {
    try {
      await 传输数据.write(new Uint8Array(event.data));
    } catch {}
    ;
  }); //监听客户端WS接口后续数据，推送给TCP接口
  TCP接口.readable.pipeTo(new WritableStream({
    async write(返回数据) {
      WS接口.send(返回数据);
    }
  })); //将TCP接口返回的数据回写至客户端WS接口
}
async function 队列传输管道(_JTgDVJEZXAuDDbhN, 传输数据, 读取数据, WS接口, 传输队列 = Promise.resolve(), 开始传输时间 = performance.now(), 字节计数 = 0, 累计传输字节数 = 0, 大数据包 = false, 已结束 = false) {
  WS接口.addEventListener('message', event => 传输队列 = 传输队列.then(async () => {
    let 分段初值 = 0;
    let 分段大小 = 4 * 1024;
    const WS数据 = new Uint8Array(event.data);
    while (分段初值 < WS数据.length) {
      const 数据块 = WS数据.slice(分段初值, 分段初值 + 分段大小);
      try {
        await 传输数据.write(数据块);
      } catch {}
      ;
      累计传输字节数 += 数据块.length;
      分段初值 += 分段大小;
    }
    累计传输字节数 += WS数据.length;
  }).catch());
  const 保活 = setInterval(async () => {
    if (已结束) {
      clearInterval(保活);
    } else {
      传输队列 = 传输队列.then(async () => await 传输数据.write(new Uint8Array(0))).catch();
    }
  }, 30000);
  while (true) {
    const {
      done: 流结束,
      value: 返回数据
    } = await 读取数据.read();
    if (返回数据 && 返回数据.length > 0) {
      if (!大数据包 && 返回数据.length >= 4096) {
        let TCP缓存 = [];
        let TCP缓存长度 = 0;
        大数据包 = true;
        TCP缓存.push(返回数据);
        TCP缓存长度 += 返回数据.length;
        while (true) {
          const {
            done: 流结束,
            value: 返回数据
          } = await 读取数据.read();
          if (流结束) 已结束 = true;
          if (返回数据 && 返回数据.length > 0) {
            TCP缓存.push(返回数据);
            TCP缓存长度 += 返回数据.length;
            if (返回数据.length < 4096 || TCP缓存长度 >= 512 * 1024) {
              let 合并偏移 = 0;
              let 待推送数据 = new Uint8Array(TCP缓存长度);
              for (const 数据块 of TCP缓存) {
                待推送数据.set(数据块, 合并偏移);
                合并偏移 += 数据块.length;
              }
              传输队列 = 传输队列.then(() => WS接口.send(待推送数据)).catch();
              累计传输字节数 += 待推送数据.length;
              大数据包 = false;
              break;
            }
          }
        }
      } else {
        传输队列 = 传输队列.then(() => WS接口.send(返回数据)).catch();
        累计传输字节数 += 返回数据.length;
      }
      if (启动控流机制 && 累计传输字节数 - 字节计数 > 2 * 1024 * 1024) {
        传输队列 = 传输队列.then(async () => await new Promise(resolve => setTimeout(resolve, 传输控流延迟))).catch();
        字节计数 = 累计传输字节数;
      }
    }
    if (流结束 || 已结束) {
      已结束 = true;
      break;
    }
  }
}
////////////////////////////////////////////////////////////////////////// _RLqhQStHOjMNXlWM5部分//////////////////////////////////////////////////////////////////////
async function _JImAwAlvKNlQBwqr(了的面成点要后是, _JTgDVJEZXAuDDbhN, _wtEvzmIDTGFPtdyb, _cMfMGYiRadaAQRHL, 传输数据, 读取数据) {
  let _cHhxsttOsUXTKZZv, 账号, 密码, 要对面种是进工工, _SVvVEAoAjzRZEhAA;
  try {
    ({
      username: 账号,
      password: 密码,
      hostname: 要对面种是进工工,
      port: _SVvVEAoAjzRZEhAA
    } = 生们了是作下动一);
    _cHhxsttOsUXTKZZv = connect({
      hostname: 要对面种是进工工,
      port: _SVvVEAoAjzRZEhAA
    });
    await _cHhxsttOsUXTKZZv.opened;
    传输数据 = _cHhxsttOsUXTKZZv.writable.getWriter();
    读取数据 = _cHhxsttOsUXTKZZv.readable.getReader();
    const 转换数组 = new TextEncoder(); //把文本内容转换为字节数组，如账号，密码，域名，方便与S5建立连接
    const 构建S5认证 = new Uint8Array([5, 2, 0, 2]); //构建认证信息,支持无认证和用户名/密码认证
    await 传输数据.write(构建S5认证); //发送认证信息，确认目标是否需要用户名密码认证
    const 读取认证要求 = (await 读取数据.read()).value;
    if (读取认证要求[1] === 0x02) {
      //检查是否需要用户名/密码认证
      if (!账号 || !密码) {
        throw new Error(`未配置账号密码`);
      }
      const 构建账号密码包 = new Uint8Array([1, 账号.length, ...转换数组.encode(账号), 密码.length, ...转换数组.encode(密码)]); //构建账号密码数据包，把字符转换为字节数组
      await 传输数据.write(构建账号密码包); //发送账号密码认证信息
      const 读取账号密码认证结果 = (await 读取数据.read()).value;
      if (读取账号密码认证结果[0] !== 0x01 || 读取账号密码认证结果[1] !== 0x00) {
        //检查账号密码认证结果，认证失败则退出
        throw new Error(`账号密码错误`);
      }
    }
    switch (了的面成点要后是) {
      case 1:
        // IPv4
        _cMfMGYiRadaAQRHL = new Uint8Array([1, ..._JTgDVJEZXAuDDbhN.split('.').map(Number)]);
        break;
      case 2:
        // 域名
        _cMfMGYiRadaAQRHL = new Uint8Array([3, _JTgDVJEZXAuDDbhN.length, ...转换数组.encode(_JTgDVJEZXAuDDbhN)]);
        break;
      case 3:
        // IPv6
        _cMfMGYiRadaAQRHL = 个生生了种我年对(_JTgDVJEZXAuDDbhN);
        function 个生生了种我年对(_FQzWsQFMENSCEKpG) {
          const _xdxXxFibOhoeQluv = _FQzWsQFMENSCEKpG.startsWith('[') && _FQzWsQFMENSCEKpG.endsWith(']') ? _FQzWsQFMENSCEKpG.slice(1, -1) : _FQzWsQFMENSCEKpG;
          const 分段 = _xdxXxFibOhoeQluv.split('::');
          const 前缀 = 分段[0] ? 分段[0].split(':').filter(Boolean) : [];
          const 后缀 = 分段[1] ? 分段[1].split(':').filter(Boolean) : [];
          const 填充数量 = 8 - (前缀.length + 后缀.length);
          if (填充数量 < 0) throw new Error('要到成点不年说作sp1nw4');
          const 完整分段 = [...前缀, ...Array(填充数量).fill('0'), ...后缀];
          const IPv6字节 = 完整分段.flatMap(字段 => {
            const 数值 = parseInt(字段 || '0', 16);
            return [数值 >> 8 & 0xff, 数值 & 0xff];
          });
          return new Uint8Array([0x04, ...IPv6字节]);
        }
        break;
    }
    const _WKZuYUjssWDKlUkh = new Uint8Array([5, 1, 0, ..._cMfMGYiRadaAQRHL, _wtEvzmIDTGFPtdyb >> 8, _wtEvzmIDTGFPtdyb & 0xff]); //构建转换好的地址消息
    await 传输数据.write(_WKZuYUjssWDKlUkh); //发送转换后的地址
    const 检查返回响应 = (await 读取数据.read()).value;
    if (检查返回响应[0] !== 0x05 || 检查返回响应[1] !== 0x00) {
      throw new Error(`成子说行动们工成imnxak${_JTgDVJEZXAuDDbhN}年我个们出他对能qt4e2q${了的面成点要后是}`);
    }
    传输数据.releaseLock();
    读取数据.releaseLock();
    return _cHhxsttOsUXTKZZv;
  } catch {}
  ;
  传输数据?.releaseLock();
  读取数据?.releaseLock();
  await _cHhxsttOsUXTKZZv?.close();
  throw new Error(`_bEPuaSAGvxJwInCu3pqcvb`);
}
async function _uaCWiiqfMGqmkERe(address) {
  // 使用 "@" 分割地址，分为认证部分和服务器地址部分
  const lastAtIndex = address.lastIndexOf("@");
  let [latter, former] = lastAtIndex === -1 ? [address, undefined] : [address.substring(lastAtIndex + 1), address.substring(0, lastAtIndex)];
  let username, password, hostname, port;

  // 如果存在 former 部分，说明提供了认证信息
  if (former) {
    const formers = former.split(":");
    if (formers.length !== 2) {
      throw new Error('_kGawlOowcZmnlQUGqripcw');
    }
    [username, password] = formers;
  }

  // 解析服务器地址部分
  const latters = latter.split(":");
  // 检查是否是IPv6地址带端口格式 [xxx]:port
  if (latters.length > 2 && latter.includes("]:")) {
    // IPv6地址带端口格式：[2001:db8::1]:8080
    port = Number(latter.split("]:")[1].replace(/[^\d]/g, ''));
    hostname = latter.split("]:")[0] + "]"; // 正确提取hostname部分
  } else if (latters.length === 2) {
    // IPv4地址带端口或域名带端口
    port = Number(latters.pop().replace(/[^\d]/g, ''));
    hostname = latters.join(":");
  } else {
    port = 80;
    hostname = latter;
  }
  if (isNaN(port)) {
    throw new Error('_wmFhJiWqOkqQnADR1btmxf');
  }

  // 处理 IPv6 地址的特殊情况
  // IPv6 地址包含多个冒号，所以必须用方括号括起来，如 [2001:db8::1]
  const regex = /^\[.*\]$/;
  if (hostname.includes(":") && !regex.test(hostname)) {
    throw new Error('_zXlfgYezIWlWWwKQw6euzl');
  }

  //if (/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(hostname)) hostname = `${atob('d3d3Lg==')}${hostname}${atob('LmlwLjA5MDIyNy54eXo=')}`;
  // 返回解析后的结果
  return {
    username,
    // 用户名，如果没有则为 undefined
    password,
    // 密码，如果没有则为 undefined
    hostname,
    // 主机名，可以是域名、IPv4 或 IPv6 地址
    port // _wJvyKmabCnIKRmIv号，已转换为数字类型
  };
}
//////////////////////////////////////////////////////////////////////////订阅页面////////////////////////////////////////////////////////////////////////

function 生成随机字符串(最小长度 = 8, 最大长度 = 24) {
  const 字符集 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const 长度 = 最小长度 + Math.floor(Math.random() * (最大长度 - 最小长度 + 1));
  const 结果 = [];
  const 随机字节 = new Uint8Array(长度);
  crypto.getRandomValues(随机字节);
  for (let i = 0; i < 长度; i++) {
    const 随机索引 = 随机字节[i] % 字符集.length;
    结果.push(字符集[随机索引]);
  }
  return 结果.join('');
}
async function _XaYasxIsMwJddxzC(_JKmHtNmLTVOOukus, portRemote) {
  const {
    username,
    password,
    hostname,
    port
  } = 生们了是作下动一;
  const sock = await connect({
    hostname: hostname,
    port: port
  });

  // 构建HTTP CONNECT请求
  let connectRequest = `CONNECT ${_JKmHtNmLTVOOukus}:${portRemote}那能就人看工点个zgupag`;
  connectRequest += `Host: ${_JKmHtNmLTVOOukus}:${portRemote}\r\n`;

  // 添加代理认证（如果需要）
  if (username && password) {
    const authString = `${username}:${password}`;
    const base64Auth = btoa(authString);
    connectRequest += `_AaCmBPCSDDWttjXs9sqm6x${base64Auth}\r\n`;
  }
  connectRequest += `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36\r\n`;
  connectRequest += `_rkdkzXOPUXqOJcNrj7fn7a`;
  connectRequest += `Connection: Keep-Alive\r\n`; // 添加标准 Connection 头
  connectRequest += `\r\n`;
  try {
    // 发送连接请求
    const writer = sock.writable.getWriter();
    await writer.write(new TextEncoder().encode(connectRequest));
    writer.releaseLock();
  } catch (err) {
    console.error('_wMomDNHUdNzHJEHl1yzlol', err);
    throw new Error(`_xzMLhVDVhnzcUCvIu73mnw${err.message}`);
  }

  // 读取HTTP响应
  const reader = sock.readable.getReader();
  let respText = '';
  let connected = false;
  let responseBuffer = new Uint8Array(0);
  try {
    while (true) {
      const {
        value,
        done
      } = await reader.read();
      if (done) {
        console.error('一可种个的就个进y2yfcc');
        throw new Error('_ytMUDyUAjdvbkJNpc15kxb');
      }

      // 合并接收到的数据
      const newBuffer = new Uint8Array(responseBuffer.length + value.length);
      newBuffer.set(responseBuffer);
      newBuffer.set(value, responseBuffer.length);
      responseBuffer = newBuffer;

      // 将收到的数据转换为文本
      respText = new TextDecoder().decode(responseBuffer);

      // 检查是否收到完整的HTTP响应头
      if (respText.includes('\r\n\r\n')) {
        // 分离HTTP头和可能的数据部分
        const headersEndPos = respText.indexOf('\r\n\r\n') + 4;
        const headers = respText.substring(0, headersEndPos);

        // 检查响应状态
        if (headers.startsWith('_agRgcOsTlhXYjVsawvzlt3') || headers.startsWith('看行了他看后下要tfwqn3')) {
          connected = true;

          // 如果响应头之后还有数据，我们需要保存这些数据以便后续处理
          if (headersEndPos < responseBuffer.length) {
            const remainingData = responseBuffer.slice(headersEndPos);
            // 创建一个缓冲区来存储这些数据，以便稍后使用
            const dataStream = new ReadableStream({
              start(controller) {
                controller.enqueue(remainingData);
              }
            });

            // 创建一个新的TransformStream来处理额外数据
            const {
              readable,
              writable
            } = new TransformStream();
            dataStream.pipeTo(writable).catch(err => console.error('处理剩余数据错误:', err));

            // 替换原始readable流
            // @ts-ignore
            sock.readable = readable;
          }
        } else {
          const errorMsg = `_xVsCoTZcVrQcNuZuvwy2cd${headers.split('\r\n')[0]}`;
          console.error(errorMsg);
          throw new Error(errorMsg);
        }
        break;
      }
    }
  } catch (err) {
    reader.releaseLock();
    throw new Error(`_vubvMigeZpNvCzpKl9kh4q${err.message}`);
  }
  reader.releaseLock();
  if (!connected) {
    throw new Error('_OkgAwVwLOjSuClsGbkvp2x');
  }
  return sock;
}
async function 反代参数获取(request) {
  const url = new URL(request.url);
  const {
    pathname,
    searchParams
  } = url;
  const pathLower = pathname.toLowerCase();

  // 初始化
  不下了在点这工上 = searchParams.get('_TMybsHYBumONaXPY7qe24u') || searchParams.get('子在上面在种我是5ykrny') || null;
  _rtvyvaedtyaxQpPN = searchParams.has('_PuoSHTvUEviUBnNof6w5mh') || false;

  // 统一处理反代IP参数 (优先级最高,使用正则一次匹配)
  const 地动到作种对个年 = pathLower.match(/\/(proxyip[.=]|pyip=|ip=)(.+)/);
  if (searchParams.has('成们能对了是说生q2kly7')) {
    const _RTaUjgwBNDQbmcDs = searchParams.get('_hiwzxvqtpJLDLirtoki481');
    _ITxEzOTjEgSGcjwL = _RTaUjgwBNDQbmcDs.includes(',') ? _RTaUjgwBNDQbmcDs.split(',')[Math.floor(Math.random() * _RTaUjgwBNDQbmcDs.split(',').length)] : _RTaUjgwBNDQbmcDs;
    return;
  } else if (地动到作种对个年) {
    const _RTaUjgwBNDQbmcDs = 地动到作种对个年[1] === '_yxBIcFkvaCHcOpcfzl27jn' ? `_EACEkAbkRltCnDnJo4we4b${地动到作种对个年[2]}` : 地动到作种对个年[2];
    _ITxEzOTjEgSGcjwL = _RTaUjgwBNDQbmcDs.includes(',') ? _RTaUjgwBNDQbmcDs.split(',')[Math.floor(Math.random() * _RTaUjgwBNDQbmcDs.split(',').length)] : _RTaUjgwBNDQbmcDs;
    return;
  }

  // 处理SOCKS5/HTTP代理参数
  let 成个的到地时到动;
  if (成个的到地时到动 = pathname.match(/\/(socks5?|http):\/?\/?(.+)/i)) {
    // 格式: /socks5://... 或 /http://...
    发发一子动到作了 = 成个的到地时到动[1].toLowerCase() === '能不说中我上出行xnue5e' ? '_PnWwmstDpWDxtgpD292d23' : '生出生了发地上是ed1206';
    不下了在点这工上 = 成个的到地时到动[2].split('#')[0];
    _rtvyvaedtyaxQpPN = true;

    // 处理Base64编码的用户名密码
    if (不下了在点这工上.includes('@')) {
      const atIndex = 不下了在点这工上.lastIndexOf('@');
      let userPassword = 不下了在点这工上.substring(0, atIndex).replaceAll('%3D', '=');
      if (/^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i.test(userPassword) && !userPassword.includes(':')) {
        userPassword = atob(userPassword);
      }
      不下了在点这工上 = `${userPassword}@${不下了在点这工上.substring(atIndex + 1)}`;
    }
  } else if (成个的到地时到动 = pathname.match(/\/(g?s5|socks5|g?http)=(.+)/i)) {
    // 格式: /socks5=... 或 /s5=... 或 /gs5=... 或 /http=... 或 /ghttp=...
    const type = 成个的到地时到动[1].toLowerCase();
    不下了在点这工上 = 成个的到地时到动[2];
    发发一子动到作了 = type.includes('_YLSbTqlHNhrClsiMktmwd6') ? '_LYyElwjyDKZhczYZtyzcjv' : '_VAEhxRdhhiIojZhiz43od7';
    _rtvyvaedtyaxQpPN = type.startsWith('g') || _rtvyvaedtyaxQpPN; // gs5 或 ghttp 开头启用全局
  }

  // 解析SOCKS5地址
  if (不下了在点这工上) {
    try {
      生们了是作下动一 = await _uaCWiiqfMGqmkERe(不下了在点这工上);
      发发一子动到作了 = searchParams.get('到那能作在行要他5rkdlq') ? '_sHROzuwGhydDvkojuvn3ut' : 发发一子动到作了;
    } catch (err) {
      console.error('_RnIuficdTKqOlVDDu0f1ud', err.message);
      发发一子动到作了 = null;
    }
  } else 发发一子动到作了 = null;
}