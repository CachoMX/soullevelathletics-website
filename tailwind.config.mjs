/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0A0A0A',
          gold: '#D4A843',
          'gold-light': '#E8C76A',
          'gold-dark': '#B8922F',
          orange: '#FF6B2B',
          'orange-dark': '#E55A1B',
          surface: '#1A1A1A',
          'surface-light': '#2A2A2A',
          'off-white': '#F5F5F0',
          gray: '#A0A0A0',
          charcoal: '#1A1A2E',
        },
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        subheading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.15', fontWeight: '700' }],
        'h2': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.2', fontWeight: '600' }],
        'h3': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.3', fontWeight: '600' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
