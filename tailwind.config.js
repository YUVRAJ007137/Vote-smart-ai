/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#FFF8F0',
          100: '#FFE9D5',
          200: '#FFCB99',
          300: '#FFB366',
          400: '#FFA64D',
          500: '#FF9933',
          600: '#E68A2E',
          700: '#CC7A29',
          800: '#996633',
          900: '#8B5A00',
        },
        indianGreen: {
          50: '#F0F9F6',
          100: '#D4F1E4',
          200: '#A8E3C8',
          300: '#7DD5AD',
          400: '#52C791',
          500: '#138808',
          600: '#117A07',
          700: '#0E6B06',
          800: '#0C5C05',
          900: '#0A5C1C',
        },
        indianBlue: {
          50: '#F0F4FF',
          100: '#D4E4FF',
          200: '#A8C8FF',
          300: '#7DACFF',
          400: '#5290FF',
          500: '#003478',
          600: '#002D6B',
          700: '#00265E',
          800: '#001F52',
          900: '#001F47',
        },
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'slide-in': 'slideIn 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-in': 'bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'confetti': 'confetti 2s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        confetti: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(-100px) rotate(360deg)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
