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
        light: 'var(--bg-color-light)', // Light background color
        dark: 'var(--bg-color-dark)', // Dark background color
      },
      text: {
        light: 'var(--text-color-light)', // Light text color
        dark: 'var(--text-color-dark)', // Dark text color
      },
      accent: {
        DEFAULT: 'var(--accent-color)', // Accent color
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
      height: {
        'h-bot': '650px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
