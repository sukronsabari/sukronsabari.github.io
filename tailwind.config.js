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
        primary: "#14b8a6",
        secondary: "#475569",
        dark: "#1e293b"
      },
      screens: {
        'xl': '1170px',
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
}
