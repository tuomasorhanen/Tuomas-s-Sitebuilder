const { theme } = require('@sanity/demo/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './sanity/**/*.{ts,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    ...theme,
    darkMode: 'class',
    colors: {
      bg: {
        light: 'var(--bg-color-light)',
        dark: 'var(--bg-color-dark)', 
      },
      text: {
        light: 'var(--text-color-light)', 
        dark: 'var(--text-color-dark)', 
      },
      accent: {
        DEFAULT: 'var(--accent-color)',
      },
    },
    fontFamily: {
      orbitron: ['Orbitron', 'sans-serif'],
      sora: ['Sora', 'sans-serif'],
    },    
    screens: {
      sm: '700px', //tablet
      md: '1100px', //small desktop or laptop
      lg: '1920px', // bigger desktop
    },
    extend: {
    },
  },
  plugins: [require('flowbite/plugin')],
};
