import fs from "fs";
import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import generate from "@babel/generator";

const INPUT = "src/worker.js";
const TEMP = "dist/worker.renamed.js";

const code = fs.readFileSync(INPUT, "utf8");

const ast = parse(code, {
  sourceType: "module",
  plugins: ["topLevelAwait"]
});

const RESERVED = new Set([
  "fetch",
  "connect",
  "Response",
  "Request",
  "WebSocketPair",
  "ReadableStream",
  "WritableStream",
  "TransformStream",
  "console"
]);

const renameMap = new Map();

function randomName() {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let name = "_";
  for (let i = 0; i < 16; i++) {
    name += chars[Math.floor(Math.random() * chars.length)];
  }
  return name;
}

traverse(ast, {
  Scope(path) {
    for (const name of Object.keys(path.scope.bindings)) {
      if (RESERVED.has(name)) continue;

      if (!renameMap.has(name)) {
        renameMap.set(name, randomName());
      }

      path.scope.rename(name, renameMap.get(name));
    }
  }
});

if (!fs.existsSync("dist")) fs.mkdirSync("dist");

fs.writeFileSync(TEMP, generate(ast).code);

console.log("✅ rename done");
