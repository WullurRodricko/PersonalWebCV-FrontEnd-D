/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Ganti dengan nama font Anda
        custom: ['CustomFont', 'sans-serif'],   // Jika menggunakan font lokal
      },
    },
  },
  plugins: [],
};
