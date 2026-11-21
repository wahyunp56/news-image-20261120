// news-image-20261120: "The World in One Day" — Friday 20 November 2026 (v3).
//
// The entry is one front-page image (entry.png, 1024x1024) that sums
// up the day's world news: 36 verified Friday-only stories, 13 flat
// vector illustrations in one locked style, a stat strip, a region
// strip, a light world map with numbered pins, and a DATE CHECK box.
// It was drawn by the agent for this competition with the generator
// in ~/workspace/makefun/news-image-20261120-gen/generate_v3.py,
// rebuilt after studying the live top 1-3 entries to beat them.
//
// This program is the whole entry: it copies that image into the
// harness output directory, after checking it is a real PNG inside
// the competition's size limits (at most 1 MiB, at most 1024x1024).
// The check runs on the copied file, not the repository original,
// so a copy that went wrong fails here instead of at the gate.
//
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const source = join(repoDir, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const bytes = readFileSync(target);
const sourceBytes = readFileSync(source);
if (!bytes.equals(sourceBytes)) {
  throw new Error("copied entry.png differs from the repository copy");
}
if (bytes.length < 8 || bytes.subarray(0, 8).toString("hex") !== "89504e470d0a1a0a") {
  throw new Error("entry.png is not a PNG file");
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`image is ${width}x${height}, over the 1024x1024 limit`);
}
if (statSync(target).size > 1024 * 1024) {
  throw new Error("entry.png is over the 1 MiB limit");
}
console.log(`wrote ${target} (${width}x${height}, ${bytes.length} bytes)`);
