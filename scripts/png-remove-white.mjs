import sharp from "sharp";

/** @param {number} r @param {number} g @param {number} b @param {number} prevA */
export function backgroundAlpha(r, g, b, prevA) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const avg = (r + g + b) / 3;
  const spread = max - min;
  let a = 255;
  if (avg >= 252 && spread < 6) {
    a = 0;
  } else if (avg >= 238 && spread < 14) {
    const t = Math.min(1, (avg - 228) / 24);
    a = Math.round(255 * (1 - t));
  }
  return Math.round((prevA * a) / 255);
}

/** Light / near-white studio backgrounds (avatars). */
export async function pngBufferToTransparentPng(inputBuffer) {
  const { data, info } = await sharp(inputBuffer).ensureAlpha().raw().toBuffer({
    resolveWithObject: true,
  });
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const pa = data[i + 3];
    data[i + 3] = backgroundAlpha(r, g, b, pa);
  }
  return sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

function chromaAt(data, i) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  return Math.max(r, g, b) - Math.min(r, g, b);
}

/**
 * Removes flat / gray / dark backgrounds typical of logo PNGs (not white-only).
 * — Flood from edges through low-chroma pixels (achromatic background).
 * — Second pass: remaining low-chroma “holes” with mid luminance (gray areas inside letters).
 */
export async function pngBufferToTransparentLogo(inputBuffer) {
  const { data, info } = await sharp(inputBuffer).ensureAlpha().raw().toBuffer({
    resolveWithObject: true,
  });
  const w = info.width;
  const h = info.height;
  const CH = 8;
  const marked = new Uint8Array(w * h);
  const q = [];
  function push(x, y) {
    const k = y * w + x;
    if (marked[k]) return;
    const i = k * 4;
    if (chromaAt(data, i) > CH) return;
    marked[k] = 1;
    q.push(k);
  }
  for (let x = 0; x < w; x++) {
    push(x, 0);
    push(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    push(0, y);
    push(w - 1, y);
  }
  let qi = 0;
  while (qi < q.length) {
    const k = q[qi++];
    const x = k % w;
    const y = (k / w) | 0;
    const neighbors = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ];
    for (const [nx, ny] of neighbors) {
      if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
      const nk = ny * w + nx;
      if (marked[nk]) continue;
      const i = nk * 4;
      if (chromaAt(data, i) > CH) continue;
      marked[nk] = 1;
      q.push(nk);
    }
  }
  for (let k = 0; k < w * h; k++) {
    if (marked[k]) continue;
    const i = k * 4;
    if (chromaAt(data, i) > CH) continue;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const avg = (r + g + b) / 3;
    if (avg >= 30 && avg <= 198) marked[k] = 2;
  }
  for (let k = 0; k < w * h; k++) {
    if (marked[k] === 1 || marked[k] === 2) {
      const i = k * 4;
      data[i + 3] = 0;
    }
  }
  return sharp(data, {
    raw: {
      width: w,
      height: h,
      channels: 4,
    },
  })
    .png({ compressionLevel: 9 })
    .toBuffer();
}
