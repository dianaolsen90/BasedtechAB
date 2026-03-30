import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "polar-night": "#0A1628",
        "deep-ocean": "#0D1E35",
        frost: "#0F2030",
        glacier: "#1A3A5C",
        "aurora-teal": "#2DE0A5",
        "ice-blue": "#7DD4F0",
        "arctic-mist": "#A8E8F5",
        "snow-white": "#E8F4FB",
        "ice-text": "rgba(180, 215, 235, 0.7)",
        "ice-muted": "rgba(180, 215, 235, 0.4)",
        "ice-card": "rgba(180, 215, 235, 0.55)",
        "ice-footer": "rgba(180, 215, 235, 0.35)",
        "nav-frost": "rgba(220, 240, 255, 0.75)",
        "based-footer": "#060F1C",
        "based-page": "#0A1628",
        "based-heading": "#E8F4FB",
        "based-body": "rgba(180, 215, 235, 0.7)",
        "based-muted": "rgba(180, 215, 235, 0.4)",
        "based-card": "rgba(180, 215, 235, 0.55)",
        "based-cyan": "#2DE0A5",
        "based-cyan-bright": "#3FE8B8",
        "based-ice": "#7DD4F0",
        "based-white": "#0D1E35",
        "based-mist": "#0F2030",
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
        "card-tjanst": "0 4px 24px rgba(0, 20, 40, 0.35)",
        "card-team": "0 4px 28px rgba(0, 20, 40, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
