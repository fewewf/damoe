import { build } from "esbuild";

try {
  await build({
    entryPoints: ["dist/_worker.js"],
    bundle: false,
    write: false
  });

  console.log("✅ syntax valid");
} catch (e) {
  console.error("❌ syntax broken");
  process.exit(1);
}
