import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 430, 768, 1024, 1280, 1920],
    imageSizes: [110, 260, 480, 640],
  },
};

export default nextConfig;
