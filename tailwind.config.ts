// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans], // Use Inter as default sans
        serif: ['var(--font-playfair)', ...fontFamily.serif], // Use Playfair as default serif
      },
      // ... other theme extensions
    },
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio'), // <--- REMOVE OR COMMENT OUT THIS LINE
  ],
};