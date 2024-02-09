/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5733',   // Red
        accent: '#6FCF97',    // Green
        background: '#FFD700', // Yellow
        text: '#000000',      // Black
      },
      fontFamily:{
        sans:["Nuinto", "sans-serif"],
      },
    },
  },
  plugins: [],
}

