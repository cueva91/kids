/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'comic-neue': ['"Comic Neue"', 'cursive'],  // Agrega la fuente Comic Neue
      },
      fontWeight: {
        'light': 300,
        'regular': 400,
        'bold': 700,
      },
    },
  },
  plugins: [],
}

