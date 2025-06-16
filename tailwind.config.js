/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2CAC76',
          50: '#e6f7f0',
          100: '#c0eedb',
          200: '#8ee3c1',
          300: '#5cd8a7',
          400: '#2CAC76',
          500: '#2CAC76',
          600: '#249c62',
          700: '#1c7c4e',
          800: '#145c3a',
          900: '#0c3c26',
        },
        secondary: {
          DEFAULT: '#662E26',
          50: '#ede6e5',
          100: '#d2bdbb',
          200: '#b48e8a',
          300: '#965e59',
          400: '#79302a',
          500: '#662E26',
          600: '#52241e',
          700: '#3e1a16',
          800: '#2a100e',
          900: '#160604',
        },
        background: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 