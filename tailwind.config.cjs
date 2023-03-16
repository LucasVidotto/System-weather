/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      spacing: {
        '480': '480px',
      }
    },
  },
  plugins: [],
}