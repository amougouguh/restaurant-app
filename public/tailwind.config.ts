import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fdf5ef",
          100: "#f8e7dc",
          200: "#f1ceb4",
          300: "#e8ad7c",
          400: "#d88d56",
          500: "#c96f35",
          600: "#b76e3c",
          700: "#8d4d2d",
          800: "#6f3d28",
          900: "#5b3324",
        },
        ink: {
          50: "#f8fafc",
          100: "#f1f5f9",
          900: "#111827",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at top, rgba(183,110,60,0.18), transparent 35%)",
      },
    },
  },
  plugins: [],
};

export default config;
