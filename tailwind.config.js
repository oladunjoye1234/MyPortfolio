/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#f97316",
          light: "#fb923c",
          dark: "#c2410c",
        },
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at top, rgba(249,115,22,0.12), transparent 60%)",
      },
    },
  },
  plugins: [],
}