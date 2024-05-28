/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-ln':'#0250C9',
        'black-ln':'#1c1c1f',
        'white-ln': '#fefefe',
        
      }
    },
  },
  plugins: [],
}

