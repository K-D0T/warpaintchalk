import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        warpaint: {
          red: "#a32638",
          crimson: "#7c1d2b",
          ember: "#e2462f",
          ink: "#0a0a0a",
          smoke: "#161214",
          bone: "#f5f1ec",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        label: ["var(--font-label)", "sans-serif"],
      },
      keyframes: {
        emberPulse: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.08)" },
        },
        slowSpin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "ember-pulse": "emberPulse 7s ease-in-out infinite",
        "slow-spin": "slowSpin 60s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
