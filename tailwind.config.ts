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
          DEFAULT: "#0F1A2C",
          light: "#1A243D",
          softer: "#2B3A5A",
        },
        moon: {
          silver: "#87CEEB",
          light: "#D0EEFF",
          white: "#E0F7FF",
        },
        violet: {
          dark: "#1E4D4C",
          DEFAULT: "#448A89",
          light: "#5BA3A2",
        },
        amber: {
          dark: "#0EA5E9",
          DEFAULT: "#7DD3FC",
          light: "#BAE6FD",
        },
        moss: {
          dark: "#1E4D4C",
          DEFAULT: "#2D6B6A",
          light: "#448A89",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-night": "linear-gradient(135deg, #0F1A2C 0%, #1A243D 50%, #2B3A5A 100%)",
        "gradient-moon": "linear-gradient(180deg, #0F1A2C 0%, #1A243D 40%, #2B3A5A 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
