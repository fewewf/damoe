import fs from "fs";
import JavaScriptObfuscator from "javascript-obfuscator";

const INPUT = "dist/worker.renamed.js";
const OUTPUT = "dist/worker.build.js";

const code = fs.readFileSync(INPUT, "utf8");

const result = JavaScriptObfuscator.obfuscate(code, {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.7,

  deadCodeInjection: true,
  deadCodeInjectionThreshold: 0.4,

  stringArray: true,
  stringArrayShuffle: true,
  stringArrayThreshold: 1,

  renameGlobals: true,
  identifierNamesGenerator: "mangled",

  selfDefending: false
});

fs.writeFileSync(OUTPUT, result.getObfuscatedCode());

console.log("✅ obfuscation done");
