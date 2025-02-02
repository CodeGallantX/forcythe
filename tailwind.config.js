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
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "scroll-right": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "scroll-left": "scroll-left 20s linear infinite",
        "scroll-right": "scroll-right 20s linear infinite",
      },
    },
},
plugins: [],
}
