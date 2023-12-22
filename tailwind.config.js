const { withTV } = require('tailwind-variants/transformer')

/** @type {import('tailwindcss').Config} */
export default withTV({
  darkMode: 'class',
  content: ['./pages/**/*.{vue,css}', './components/**/*.{vue,css}', './assets/**/*.{vue,css}'],
  theme: {
    extend: {
      colors: {
        body: {
          light: '#fff',
          dark: '#000000',
        },

        primary: {
          50: '#f2f7fb',
          100: '#e7f0f8',
          200: '#d3e2f2',
          300: '#b9cfe8',
          400: '#9cb6dd',
          500: '#839dd1',
          600: '#6a7fc1',
          700: '#6374ae',
          800: '#4a5989',
          900: '#414e6e',
          950: '#262c40',
        },
      },
    },
  },
  plugins: [],
})
