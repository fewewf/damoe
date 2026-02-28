import fs from "fs";
import JavaScriptObfuscator from "javascript-obfuscator";

const input = fs.readFileSync("./dist/_worker.js", "utf8");

const result = JavaScriptObfuscator.obfuscate(input, {
  compact: true,

  controlFlowFlattening: false,
  deadCodeInjection: false,

  stringArray: true,
  stringArrayEncoding: [],

  splitStrings: false,
  transformObjectKeys: false,

  unicodeEscapeSequence: false,

  identifierNamesGenerator: "hexadecimal",

  target: "browser"
});

fs.writeFileSync("./dist/_worker.js", result.getObfuscatedCode());

console.log("✅ obfuscate done");
