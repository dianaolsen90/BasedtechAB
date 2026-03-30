import sharp from "sharp";

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
