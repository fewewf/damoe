import fs from "fs";
import { parse } from "@babel/parser";
import traverseModule from "@babel/traverse";
import generatorModule from "@babel/generator";

const traverse = traverseModule.default;
const generate = generatorModule.default;

const INPUT = "src/worker.js";
const TEMP = "dist/worker.renamed.js";

const code = fs.readFileSync(INPUT, "utf8");

const ast = parse(code, {
  sourceType: "module",
  plugins: ["topLevelAwait"]
});

// 保留的全局对象和关键字
const RESERVED = new Set([
  "fetch",
  "connect",
  "Response",
  "Request",
  "WebSocketPair",
  "ReadableStream",
  "WritableStream",
  "TransformStream",
  "console",
  "URL",
  "WebSocket",
  "atob",
  "btoa",
  "setInterval",
  "clearInterval",
  "setTimeout",
  "clearTimeout",
  "Object",
  "Array",
  "Uint8Array",
  "DataView",
  "TextEncoder",
  "TextDecoder",
  "Blob",
  "Math",
  "Number",
  "String",
  "Boolean",
  "RegExp",
  "Error",
  "Promise"
]);

// 敏感词列表 - 需要彻底重命名的词汇
const SENSITIVE_WORDS = new Set([
  "proxy",
  "socks",
  "代理",
  "socks5",
  "socks4",
  "http",
  "https",
  "tunnel",
  "forward",
  "gateway",
  "relay",
  "bypass",
  "vpn",
  "tor",
  "shadow",
  "vless",
  "vmess",
  "trojan",
  "ssr",
  "shadowsocks"
]);

const renameMap = new Map();

// 生成更随机的名称（包含中文字符）
function randomName() {
  // 中文字符范围：0x4e00-0x9fff (常用汉字)
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // 可选的中文字符列表
  const chineseChars = "的一是不了人我有在们他这上地个子中说到时年就行下发成那可对后能出面看点生学工作要动进种";
  
  // 随机决定是否使用中文字符
  const useChinese = Math.random() > 0.7;
  
  let name = useChinese ? "" : "_";
  const length = useChinese ? 8 : 16;
  
  for (let i = 0; i < length; i++) {
    if (useChinese) {
      // 使用中文字符
      name += chineseChars[Math.floor(Math.random() * chineseChars.length)];
    } else {
      // 使用字母
      name += chars[Math.floor(Math.random() * chars.length)];
    }
  }
  
  // 确保变量名以字母或下划线开头
  if (useChinese && !/^[a-zA-Z_\u4e00-\u9fa5]/.test(name)) {
    name = "_" + name;
  }
  
  return name;
}

// 检查字符串是否包含敏感词
function containsSensitiveWord(str) {
  if (!str) return false;
  const lowerStr = str.toLowerCase();
  for (const word of SENSITIVE_WORDS) {
    if (lowerStr.includes(word.toLowerCase())) {
      return true;
    }
  }
  return false;
}

// 存储需要重命名的字符串字面量
const stringReplacements = new Map();

// 第一遍遍历：收集需要重命名的字符串
traverse(ast, {
  StringLiteral(path) {
    const value = path.node.value;
    if (containsSensitiveWord(value)) {
      // 生成新的随机字符串
      const newValue = randomName() + Math.random().toString(36).substring(2, 8);
      stringReplacements.set(value, newValue);
      path.node.value = newValue;
    }
  },
  
  // 处理模板字符串
  TemplateLiteral(path) {
    path.node.quasis.forEach((quasi, i) => {
      if (quasi.value.raw && containsSensitiveWord(quasi.value.raw)) {
        const newValue = randomName() + Math.random().toString(36).substring(2, 8);
        stringReplacements.set(quasi.value.raw, newValue);
        quasi.value.raw = newValue;
        quasi.value.cooked = newValue;
      }
    });
  },
  
  // 处理注释中的敏感词
  CommentLine(path) {
    if (containsSensitiveWord(path.node.value)) {
      path.node.value = " " + randomName() + " ";
    }
  },
  
  CommentBlock(path) {
    if (containsSensitiveWord(path.node.value)) {
      path.node.value = " " + randomName() + " ";
    }
  }
});

// 第二遍遍历：重命名变量和函数
traverse(ast, {
  // 处理所有标识符
  Identifier(path) {
    // 跳过对象属性（除非是变量声明）
    if (path.parent.type === 'MemberExpression' && path.parent.property === path.node) {
      return;
    }
    
    const name = path.node.name;
    
    // 跳过保留字
    if (RESERVED.has(name)) return;
    
    // 检查标识符是否包含敏感词
    if (containsSensitiveWord(name)) {
      if (!renameMap.has(name)) {
        renameMap.set(name, randomName());
      }
      path.node.name = renameMap.get(name);
    }
  },
  
  // 处理变量声明
  VariableDeclarator(path) {
    if (path.node.id && path.node.id.name) {
      const name = path.node.id.name;
      if (!RESERVED.has(name) && containsSensitiveWord(name)) {
        if (!renameMap.has(name)) {
          renameMap.set(name, randomName());
        }
        path.node.id.name = renameMap.get(name);
      }
    }
  },
  
  // 处理函数声明
  FunctionDeclaration(path) {
    if (path.node.id && path.node.id.name) {
      const name = path.node.id.name;
      if (!RESERVED.has(name) && containsSensitiveWord(name)) {
        if (!renameMap.has(name)) {
          renameMap.set(name, randomName());
        }
        path.node.id.name = renameMap.get(name);
      }
    }
  },
  
  // 处理函数参数
  Function(path) {
    path.node.params.forEach(param => {
      if (param.type === 'Identifier' && param.name) {
        const name = param.name;
        if (!RESERVED.has(name) && containsSensitiveWord(name)) {
          if (!renameMap.has(name)) {
            renameMap.set(name, randomName());
          }
          param.name = renameMap.get(name);
        }
      }
    });
  },
  
  // 处理对象属性（作为变量使用）
  ObjectProperty(path) {
    if (path.node.key && path.node.key.type === 'Identifier' && 
        path.node.key.name && !RESERVED.has(path.node.key.name) &&
        containsSensitiveWord(path.node.key.name)) {
      if (!renameMap.has(path.node.key.name)) {
        renameMap.set(path.node.key.name, randomName());
      }
      path.node.key.name = renameMap.get(path.node.key.name);
    }
  },
  
  // 处理导出的变量
  ExportSpecifier(path) {
    if (path.node.exported && path.node.exported.name) {
      const name = path.node.exported.name;
      if (!RESERVED.has(name) && containsSensitiveWord(name)) {
        if (!renameMap.has(name)) {
          renameMap.set(name, randomName());
        }
        path.node.exported.name = renameMap.get(name);
      }
    }
  }
});

// 输出重命名映射（用于调试）
console.log("🔍 重命名映射:");
renameMap.forEach((newName, oldName) => {
  console.log(`  ${oldName} -> ${newName}`);
});

console.log("🔍 字符串替换:");
stringReplacements.forEach((newValue, oldValue) => {
  console.log(`  "${oldValue}" -> "${newValue}"`);
});

// 确保输出目录存在
if (!fs.existsSync("dist")) fs.mkdirSync("dist");

// 生成并写入文件
const output = generate(ast, {
  jsescOption: {
    minimal: true,  // 最小化转义，保留中文字符
    quotes: 'single'
  }
});

fs.writeFileSync(TEMP, output.code);

console.log("✅ 重命名完成！");
