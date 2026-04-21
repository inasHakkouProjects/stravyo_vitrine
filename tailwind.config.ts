import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          DEFAULT: "#1a3a6e",
          light: "#234a8c",
          deep: "#0f2747",
        },
        midnight: {
          DEFAULT: "#060b14",
          soft: "#0c1424",
          card: "#0f1a2e",
        },
        ice: {
          DEFAULT: "#eef2f8",
          muted: "#e2e8f2",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium:
          "0 4px 6px -1px rgb(15 39 71 / 0.06), 0 24px 48px -12px rgb(15 39 71 / 0.12)",
        "premium-lg":
          "0 8px 16px -4px rgb(15 39 71 / 0.08), 0 32px 64px -16px rgb(15 39 71 / 0.18)",
        "premium-xl":
          "0 12px 24px -6px rgb(15 39 71 / 0.1), 0 40px 80px -24px rgb(15 39 71 / 0.22)",
        glow:
          "0 0 0 1px rgb(26 58 110 / 0.07), 0 0 48px -12px rgb(26 58 110 / 0.28)",
        "glow-soft":
          "0 0 60px -20px rgb(26 58 110 / 0.2), 0 0 1px rgb(26 58 110 / 0.12)",
        glass: "0 8px 32px rgb(6 11 20 / 0.35)",
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(ellipse 80% 60% at 70% 20%, rgb(35 74 140 / 0.35), transparent), radial-gradient(ellipse 50% 50% at 10% 80%, rgb(26 58 110 / 0.2), transparent)",
        "grid-faint":
          "linear-gradient(to right, rgb(255 255 255 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.04) 1px, transparent 1px)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out 2s infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "drift-slow": "drift 18s ease-in-out infinite",
        "drift-slow-reverse": "driftReverse 22s ease-in-out infinite",
        "pulse-soft": "pulseSoft 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(1deg)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(2%, -1.5%) scale(1.03)" },
        },
        driftReverse: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-2%, 1.5%) scale(1.025)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
