/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#60a6e7',
        secondary: '#60a5e6',
        board: '#1d1f2e',
        bg: '#030416',
      }
    },
  },
  plugins: [],
}