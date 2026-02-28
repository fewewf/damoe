import fs from "fs";
import path from "path";

const src = "_worker.js";
const destDir = "dist";
const dest = "dist/_worker.js";

if (!fs.existsSync(src)) {
  console.error("❌ _worker.js not found");
  process.exit(1);
}

fs.mkdirSync(destDir, { recursive: true });

fs.copyFileSync(src, dest);

console.log("✅ build complete");
