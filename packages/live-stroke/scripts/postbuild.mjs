import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "..", "dist");

const files = ["index.js", "index.cjs"];

for (const file of files) {
  const path = join(dist, file);
  const content = readFileSync(path, "utf-8");
  if (!content.startsWith('"use client"')) {
    writeFileSync(path, '"use client";\n' + content);
  }
}
