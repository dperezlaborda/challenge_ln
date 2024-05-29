/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '360px',
        'md': '768px',
        'lg': '1366px',
        'xl': '1920px',
      },
      spacing: {
        'lg-logo': '306px',
        'lg-header-px': '53px',
        'xl-header-px': '330px',
        '53px': '53px',
        '138px': '138px',
        '224px':'224px',
        '450px': '450px',
      },
      colors: {
        'blue-ln':'#0250C9',
        'black-ln':'#1c1c1f',
        'white-ln': '#fefefe',
        'red-ln': '#c40f4d',
        'green-ln': '#15afaf',
        'yellow-ln': '#ffff24',
        'gray-ln': '#f2f2f2',
        'red-intense-ln': '#c61c1e',
        'text-color': '#333333',
        'button-text': '#272727',
        'button-border': '#E4E4E4',
        'black-opacity-0': 'rgba(0, 0, 0, 0)',
        'black-opacity-80': 'rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [],
}

