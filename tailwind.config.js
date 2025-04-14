/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff8411',
          hover: '#ff8411',
        },
        secondary: {
          DEFAULT: '#ccc',
          hover: '#9c9a9a',
        },
        dark: {
          100: '#292929',
          200: '#1b1b1b',
          300: '#222222',
          hover: '#353535',
          DEFAULT: '#1b1b1b',
        },
        light: '#fff',
      },
      fontFamily: {
        main: ['"Roboto Condensed"', 'sans-serif'],
      },
      container: {
        padding: {
          DEFAULT: '1rem',
        },
        center: true,
      },
    },
  },
  plugins: [],
};
