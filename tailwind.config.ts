import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f7f4ec",
        paper: "#fffdf8",
        ink: "#211f1a",
        muted: "#6f6a5d",
        line: "#e7e0d2",
        clay: {
          DEFAULT: "#c96442",
          soft: "#d98a6a",
          dark: "#a64e30",
          tint: "#f5e7e0",
        },
        sage: { DEFAULT: "#4f7d5a", tint: "#e6f0e8" },
        amber: { DEFAULT: "#9a6b1e", tint: "#f8eed6" },
        ocean: { DEFAULT: "#3a6b8a", tint: "#e3eef4" },
      },
      fontFamily: {
        sans: ["var(--font-heebo)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(33,31,26,0.04), 0 8px 24px -12px rgba(33,31,26,0.12)",
        card: "0 1px 0 rgba(33,31,26,0.03), 0 10px 30px -18px rgba(33,31,26,0.25)",
        glow: "0 0 0 1px rgba(201,100,66,0.18), 0 12px 32px -16px rgba(201,100,66,0.35)",
      },
      borderRadius: {
        xl: "0.9rem",
        "2xl": "1.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.4s ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
