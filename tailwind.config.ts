import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "based-footer": "#082220",
        "based-page": "#F4F7F5",
        "based-white": "#FFFFFF",
        "based-mist": "#EFF4F2",
        "based-heading": "#1A3D35",
        "based-body": "#3D5450",
        "based-muted": "#7A9E99",
        "based-cyan": "#2DE0A5",
        "based-cyan-bright": "#4AE8B5",
        "based-ice": "#7DD4F0",
        "based-hero-start": "#EFF9F5",
      },
      fontFamily: {
        h: ["var(--font-h)", "sans-serif"],
        b: ["var(--font-b)", "sans-serif"],
      },
      screens: {
        nav: "700px",
      },
      maxWidth: {
        container: "1160px",
        contact: "680px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        badgePulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.35", transform: "scale(0.9)" },
        },
        spinRing: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "badge-pulse": "badgePulse 2.2s ease-in-out infinite",
        "spin-20": "spinRing 20s linear infinite",
        "spin-28-rev": "spinRing 28s linear infinite reverse",
        "spin-22": "spinRing 22s linear infinite",
        "spin-30-rev": "spinRing 30s linear infinite reverse",
      },
      boxShadow: {
        "card-tjanst": "0 2px 12px rgba(26, 61, 53, 0.06)",
        "card-team": "0 2px 16px rgba(26, 61, 53, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
