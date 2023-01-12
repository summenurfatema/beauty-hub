/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brown": "rgb(243, 189, 100)"
      }
    },
  },
  plugins: [require("daisyui")],
}
