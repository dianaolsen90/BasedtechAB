import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pngBufferToTransparentPng } from "./png-remove-white.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = path.join(root, "Bilder", "avatar.png");
const outPublic = path.join(root, "public", "Bilder", "avatar.png");
const outBilder = path.join(root, "Bilder", "avatar.png");

const buf = await readFile(src);
const outBuf = await pngBufferToTransparentPng(buf);
await writeFile(outPublic, outBuf);
await writeFile(outBilder, outBuf);
console.log("Wrote transparent avatar to public/Bilder/avatar.png and Bilder/avatar.png");
