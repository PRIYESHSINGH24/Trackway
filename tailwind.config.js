/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0f0e0d',
          lighter: '#181714',
          light: '#1f1d1a',
        },
        accent: {
          blue: '#38bdf8',
          green: '#a3e635',
          yellow: '#facc15',
          purple: '#818cf8',
        }
      },
    },
  },
  plugins: [],
} 