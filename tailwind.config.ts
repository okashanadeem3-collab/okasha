import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#FBF8F2",
          900: "#FBF8F2",
          800: "#FFFFFF",
          700: "#F0E9D8",
          600: "#E3D7B8",
        },
        mist: {
          100: "#1C1912",
          300: "#4A4436",
          500: "#847A66",
          700: "#C4B99E",
        },
        signal: {
          DEFAULT: "#8A6D22",
          light: "#A9862E",
          dark: "#5C4816",
        },
        ember: {
          DEFAULT: "#C79A2E",
          light: "#E8C878",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(251,248,242,1)), linear-gradient(90deg, rgba(28,25,18,0.05) 1px, transparent 1px), linear-gradient(rgba(28,25,18,0.05) 1px, transparent 1px)",
        "mesh-1":
          "radial-gradient(60% 50% at 20% 20%, rgba(138,109,34,0.14) 0%, transparent 60%), radial-gradient(50% 50% at 80% 30%, rgba(199,154,46,0.16) 0%, transparent 60%), radial-gradient(60% 60% at 50% 90%, rgba(138,109,34,0.10) 0%, transparent 60%)",
      },
      backgroundSize: {
        grid: "100% 100%, 64px 64px, 64px 64px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(28,25,18,0.05), 0 20px 60px -20px rgba(138,109,34,0.4)",
        card: "0 1px 0 rgba(255,255,255,0.9) inset, 0 20px 40px -24px rgba(28,25,18,0.16)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-slower": "float 12s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        "spin-slow": "spin 14s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
