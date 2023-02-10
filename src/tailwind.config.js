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
    },

    screens: {
      /** iPad PRO 11" (portrait / 834 x 1194) */
      xs: '834px',
      /** iPad PRO 11" (landscape / 1194 x 834) */
      sm: '1194px',
      /** Surface PRO 14" (landscape / 1440 x 960) */
      md: '1440px',
      /** FullHD (17"-24" / 1920 x 1080) */
      lg: '1920px',
      /** 27" (2,5K) -> 32" (4K / 2560 x 1440)  */
      xl: '2560px',
      /** 27" (4K) -> 32" (6K / 3840 x 2160)  */
      xxl: '3840px',
    },
    fontFamily: {
      mono: 'var(--font-mono)',
      sans: 'var(--font-sans)',
      serif: 'var(--font-serif)',
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
