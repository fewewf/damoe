import fs from "fs";
import parser from "@babel/parser";
import traverseModule from "@babel/traverse";
import generate from "@babel/generator";
import * as t from "@babel/types";

const traverse = traverseModule.default;

const code = fs.readFileSync("./dist/_worker.js", "utf8");

const ast = parser.parse(code, {
  sourceType: "module",
  plugins: ["topLevelAwait"]
});

let id = 0;
const map = new Map();

function newName() {
  return "_" + (id++).toString(36);
}

traverse(ast, {
  Identifier(path) {
    if (!path.isBindingIdentifier()) return;

    const name = path.node.name;

    if (name.length < 4) return;
    if (name.startsWith("_")) return;

    if (!map.has(name)) {
      map.set(name, newName());
    }

    path.scope.rename(name, map.get(name));
  }
});

const output = generate.default(ast, {}).code;

fs.writeFileSync("./dist/_worker.js", output);
console.log("✅ rename done");
