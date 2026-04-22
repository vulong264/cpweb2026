import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A0F1E",
          900: "#070B17",
          800: "#0A0F1E",
          700: "#111832",
          600: "#1A2242",
        },
        indigo: {
          DEFAULT: "#4F46E5",
          muted: "#6366F1",
          deep: "#3730A3",
        },
        slate: {
          warm: "#94A3B8",
          mist: "#CBD5E1",
          ink: "#475569",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)",
        "radial-indigo":
          "radial-gradient(circle at 50% 0%, rgba(79,70,229,0.25) 0%, transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(79,70,229,0.35), 0 20px 60px -20px rgba(79,70,229,0.45)",
      },
      letterSpacing: {
        tightest: "-0.035em",
      },
    },
  },
  plugins: [],
};

export default config;
