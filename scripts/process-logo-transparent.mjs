import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pngBufferToTransparentLogo } from "./png-remove-white.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = path.join(root, "Bilder", "Basedtechlogo.png");
const outPublic = path.join(root, "public", "loggan", "basedtechlogo.png");

const buf = await readFile(src);
const outBuf = await pngBufferToTransparentLogo(buf);
await writeFile(outPublic, outBuf);
console.log("Wrote transparent logo to public/loggan/basedtechlogo.png");
