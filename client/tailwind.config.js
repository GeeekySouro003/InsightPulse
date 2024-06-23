// tailwind.config.js

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '5': '3.25rem',
      },
      colors: {
        'text': '#1A2130',
        'background': '#BBE9FF',
        'primary': '#0e18f7',
        'secondary': '#260fd4',
        'tertiary': '#70c0b3',
        'accent': '#102C57',
        'stroke': '#26242C'
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      animation: {
        grid: "grid 15s linear infinite",
        ripple: "ripple 3400ms ease infinite", // Added from the second config
      },
      keyframes: {
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
      },
    },
  },
  plugins: [],
};
