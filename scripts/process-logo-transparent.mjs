import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pngBufferToTransparentPng } from "./png-remove-white.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = path.join(root, "Bilder", "Loga-basedtech.png.png");
const outPublic = path.join(root, "public", "Loga-basedtech.png");
const outBilder = path.join(root, "Bilder", "Loga-basedtech.png");

const buf = await readFile(src);
const outBuf = await pngBufferToTransparentPng(buf);
await writeFile(outPublic, outBuf);
await writeFile(outBilder, outBuf);
console.log(
  "Wrote transparent logo to public/Loga-basedtech.png and Bilder/Loga-basedtech.png",
);
