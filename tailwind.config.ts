import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#6366f1",
          foreground: "#ffffff",
        },
        charcoal: {
          DEFAULT: "#1a1a1a",
          light: "#2a2a2a",
          lighter: "#3a3a3a",
        },
        purple: {
          DEFAULT: "#8254FF",
          light: "#A78BFA",
          dark: "#6D28D9",
          darker: "#5B21B6",
          glow: "#C4B5FD",
        },
        blue: {
          DEFAULT: "#3b82f6",
          light: "#60A5FA",
          dark: "#2563EB",
          electric: "#84FFD9",
          sky: "#0EA5E9",
        },
        pink: {
          DEFAULT: "#FF6F91",
          light: "#FFB3D1",
          dark: "#EC4899",
          glow: "#FCE7F3",
        },
        yellow: {
          DEFAULT: "#FBBF24",
          light: "#FCD34D",
          dark: "#F59E0B",
          glow: "#FFE3A2",
        },
        mint: {
          DEFAULT: "#6EE7B7",
          light: "#A5F3FC",
          dark: "#34D399",
        },
        orange: {
          DEFAULT: "#FB923C",
          light: "#FED7AA",
          dark: "#F97316",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        playful: ["var(--font-quicksand)", "system-ui", "sans-serif"],
      },
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        "gradient-y": {
          "0%, 100%": { "background-position": "50% 0%" },
          "50%": { "background-position": "50% 100%" },
        },
        "gradient-xy": {
          "0%, 100%": { "background-position": "0% 50%, 50% 50%" },
          "50%": { "background-position": "100% 50%, 50% 100%" },
        },
        shimmer: {
          "0%": { "background-position": "-1000px 0" },
          "100%": { "background-position": "1000px 0" },
        },
      },
      backgroundSize: {
        "size-200": "200% 200%",
        "size-300": "300% 300%",
      },
      boxShadow: {
        "glow-purple": "0 0 20px rgba(130, 84, 255, 0.4)",
        "glow-blue": "0 0 20px rgba(59, 130, 246, 0.4)",
        "glow-pink": "0 0 20px rgba(255, 111, 145, 0.4)",
        "glow-soft": "0 4px 20px rgba(0, 0, 0, 0.08)",
        "inner-glow": "inset 0 0 20px rgba(130, 84, 255, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;

