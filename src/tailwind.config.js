const { theme } = require('@sanity/demo/tailwind');
const colors = require('tailwindcss/colors');

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
      ...theme.colors,
      gray: colors.slate,
      indigo: colors.indigo,
      bg: 'var(--bg-color)',
      text: 'var(--text-color)',
      highlight: 'var(--highlight-color)',
      power: 'var(--power-color)',
    },
    screens: {
      xs: '834px',
      sm: '1194px',
      md: '1440px',
      lg: '1920px',
      xl: '2560px',
      xxl: '3840px',
    },
    fontFamily: {
      mono: 'var(--font-mono)',
      sans: 'var(--font-sans)',
      serif: 'var(--font-serif)',
    },
    extend: {
    },
  },
  plugins: [require('flowbite/plugin')],
};
