/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
      japanRed: "#E60026",
      japanGray: "#f5f5f5",
    },
    fontFamily: {
      japan: ["Noto Serif JP", "serif"], // Google Fonts
    },
    },
  },
  plugins: [],
}

