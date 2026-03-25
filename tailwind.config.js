/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1F3A",
        gold: "#C9A84C",
        "gold-light": "#E8D5A3",
        "gold-rule": "#C9A84C",
        cream: "#F5F7FA",
        slate: "#4A5568",
        mist: "#E2E8F0",
        success: "#276749",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        outfit: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 4px rgba(11,31,58,0.08)",
        "card-hover": "0 4px 20px rgba(11,31,58,0.14), -3px 0 0 0 #C9A84C",
        nav: "0 1px 0 #E2E8F0, 0 2px 8px rgba(11,31,58,0.06)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        goldPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.5s ease forwards",
        goldPulse: "goldPulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
