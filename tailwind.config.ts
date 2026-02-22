import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: "#0f172a",
          light: "#1e293b",
          softer: "#334155",
        },
        moon: {
          silver: "#cbd5e1",
          light: "#f1f5f9",
          white: "#f8fafc",
        },
        violet: {
          dark: "#4c1d95",
          DEFAULT: "#7c3aed",
          light: "#a78bfa",
        },
        amber: {
          dark: "#d97706",
          DEFAULT: "#f59e0b",
          light: "#fbbf24",
        },
        moss: {
          dark: "#365314",
          DEFAULT: "#65a30d",
          light: "#84cc16",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-night": "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        "gradient-moon": "linear-gradient(180deg, #0f172a 0%, #1e293b 40%, #4c1d95 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
