import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#08090D",
          900: "#0B0D13",
          800: "#11141C",
          700: "#171B26",
          600: "#20252F",
        },
        mist: {
          100: "#F4F6FB",
          300: "#C7CDDB",
          500: "#8A93A8",
          700: "#5A6478",
        },
        signal: {
          DEFAULT: "#3E6FF5",
          light: "#6E92FF",
          dark: "#2749B8",
        },
        ember: {
          DEFAULT: "#F5B93E",
          light: "#FFD37A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(8,9,13,1)), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
        "mesh-1":
          "radial-gradient(60% 50% at 20% 20%, rgba(62,111,245,0.35) 0%, transparent 60%), radial-gradient(50% 50% at 80% 30%, rgba(245,185,62,0.18) 0%, transparent 60%), radial-gradient(60% 60% at 50% 90%, rgba(62,111,245,0.2) 0%, transparent 60%)",
      },
      backgroundSize: {
        grid: "100% 100%, 64px 64px, 64px 64px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px -20px rgba(62,111,245,0.35)",
        card: "0 1px 0 rgba(255,255,255,0.06) inset, 0 20px 40px -24px rgba(0,0,0,0.6)",
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
