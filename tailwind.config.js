/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#3C3C3C",
        'cura': {
          '50': '#f1f1fc',
          '100': '#e7e6f9',
          '200': '#d4d2f3',
          '300': '#bbb6eb',
          '400': '#a699e0',
          '500': '#947fd5',
          '600': '#8a6cc8',
          '700': '#7455ad',
          '800': '#5e478c',
          '900': '#4e3e71',
          '950': '#2e2442',
        },

      },
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

