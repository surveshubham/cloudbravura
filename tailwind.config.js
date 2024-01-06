/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ph': '400px',
      },
      colors:{
        "primary" : "#00B1FF",
        "secondary": "#1954BC"
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}