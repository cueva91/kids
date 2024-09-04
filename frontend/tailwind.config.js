/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: ['"Comic Sans MS"', 'cursive'], // Define la clase "font-comic"
      },
    },
  },
  plugins: [],
}

