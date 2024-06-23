// @type {import('tailwindcss').Config} 

import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding:{
      '5':'3.25rem',
      },
      colors: {
        'text': '#1A2130',
        'background': '#BBE9FF',
        'primary': '#0e18f7',
        'secondary': '#260fd4',
        'tertiary': '#70c0b3',
        'accent': '#102C57',
        'stroke' : '#26242C'
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      animation: {
        grid: "grid 20s linear infinite",
      },
      keyframes: {
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}
