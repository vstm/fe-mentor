const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      borderRadius: {
        qr: '20px',
      },
      fontFamily: {
        qr: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'qr-body': '15px',
        'qr-heading': '22px',
      },
      colors: {
        'qr': {
          'blue': '#2c7dfa',
          'blue-shade': '#3685ff',
          'dark-navy': '#1f314f',
          'grey': '#7d889e',
          'light-grey': '#d5e1ef',
          'white': '#ffffff',
        }
      }
    },
  },
  plugins: [],
}

