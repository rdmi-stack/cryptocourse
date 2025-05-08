const { fontFamily } = require('tailwindcss/defaultTheme');

const bpsColors = {
  darkBlue: '#0A2351',
  orange: '#DD6B20',
  lightBlueText: '#E0F2FE',
  darkBlueText: '#082f49',
  orangeHover: '#C25A1A',
  darkBlueHover: '#071A3D',
  vibrantOrange: '#F97316',
  vibrantOrangeHover: '#EA580C',
};

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bps-darkBlue': bpsColors.darkBlue,
        'bps-orange': bpsColors.orange,
        'bps-lightBlueText': bpsColors.lightBlueText,
        'bps-darkBlueText': bpsColors.darkBlueText,
        'bps-orangeHover': bpsColors.orangeHover,
        'bps-darkBlueHover': bpsColors.darkBlueHover,
        'bps-vibrantOrange': bpsColors.vibrantOrange,
        'bps-vibrantOrangeHover': bpsColors.vibrantOrangeHover,
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        serif: ['var(--font-playfair)', ...fontFamily.serif],
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
};
