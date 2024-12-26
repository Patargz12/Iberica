import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f69b99",
          100: "#f48784",
          200: "#f27370",
          300: "#f05f5b",
          400: "#ee4b47",
          500: "#ED3833",
          600: "#d5322d",
          700: "#bd2c28",
          800: "#a52723",
          900: "#8d211e",
        },
        accent: {
          hover: '#F37A76',
          pressed: '#1A1A1A',
          focused: '#ED3833',
        },
        semantic: {
          info: '#BED62F',
          success: '#BED62F',
          warning: '#28ABE1',
          error: '#ED2227',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'], // Default sans-serif font
      },
      fontSize: {
        'heading': ['64px', { lineHeight: '150%', letterSpacing: '0%' }],
        'h1': ['48px', { lineHeight: '150%', letterSpacing: '0%' }],
        'h2': ['32px', { lineHeight: '150%', letterSpacing: '0%' }],
        'h3': ['24px', { lineHeight: '150%', letterSpacing: '0%' }],
        'subtitle': ['16px', { lineHeight: '100%', letterSpacing: '0%' }],
        'body-lg': ['14px', { lineHeight: '100%', letterSpacing: '0%' }],
        'body-md': ['16px', { lineHeight: '100%', letterSpacing: '0%' }],
        'body-sm': ['14px', { lineHeight: '100%', letterSpacing: '0%' }],
        'extra-sm': ['12px', { lineHeight: '100%', letterSpacing: '0%' }],
      },
    },
  },
  plugins: [],
};
