/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#be123c',
        dark: '#0f172a',
      },
      screens: {
        'xl': '1200px',
      },
    },
  },
  plugins: [],
}
