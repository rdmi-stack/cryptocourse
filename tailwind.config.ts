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
        sans: ['var(--font-inter)', ...fontFamily.sans],
        serif: ['var(--font-playfair)', ...fontFamily.serif],
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.5s linear infinite',
        marquee: 'marquee 25s linear infinite',
      },
      boxShadow: {
        redGlow: '0 4px 20px rgba(255, 0, 0, 0.4)',
        yellowGlow: '0 0 20px rgba(255, 215, 0, 0.4)',
      },
    },
  },
  plugins: [
    // Add Tailwind plugins if required:
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
