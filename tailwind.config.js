/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        marvaPink: {
          50: '#fff3f6',
          100: '#ffe6ee',
          500: '#ff4d9e',
          600: '#e0438f',
        },
      },
    },
  },
  plugins: [],
}
