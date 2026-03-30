import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "based-header": "#082220",
        "based-page": "#EEF7F6",
        "based-white": "#FFFFFF",
        "based-section": "#F4FAFA",
        "based-heading": "#0A2724",
        "based-body": "#3D6B66",
        "based-cyan": "#0F9E8E",
        "based-cyan-bright": "#44EDE0",
        "based-hero-start": "#E6F5F3",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "system-ui", "sans-serif"],
        dm: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
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
      },
      boxShadow: {
        "card-tjanst": "0 2px 12px rgba(15,158,142,0.06)",
        "card-team": "0 2px 16px rgba(15,158,142,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
