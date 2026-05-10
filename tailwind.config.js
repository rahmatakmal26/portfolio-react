/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d0d0d",
        surface: "#1a1a1a",
        primary: "#eab308", // Vegas Gold
        secondary: "#d4d4d4",
        border: "#262626",
      }
    },
  },
  plugins: [],
}
