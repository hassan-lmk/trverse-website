import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, "..", "public", "assets");

const SKIP = new Set(["automate-fare-collection.webp"]);

const files = await readdir(assetsDir);
const pngs = files.filter((f) => f.endsWith(".png"));

if (pngs.length === 0) {
  console.log("No PNG files to convert in public/assets.");
  process.exit(0);
}

for (const png of pngs) {
  const base = png.replace(/\.png$/i, "");
  const outName = `${base}.webp`;
  if (SKIP.has(outName)) continue;

  const input = path.join(assetsDir, png);
  const output = path.join(assetsDir, outName);

  await sharp(input).webp({ quality: 85 }).toFile(output);
  const { size } = await stat(output);
  console.log(`${png} -> ${outName} (${(size / 1024).toFixed(1)} KB)`);
}

console.log("Done.");
