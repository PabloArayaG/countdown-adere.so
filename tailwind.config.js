/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#eff1ff',
          100: '#e1e6ff',
          200: '#c9d1ff',
          300: '#a5b0ff',
          400: '#7a84ff',
          500: '#5a5cff',
          600: '#4337f5',
          700: '#3625d8',
          800: '#2d20ae',
          900: '#291f89',
          950: '#1a1250',
        }
      }
    },
  },
  plugins: [],
} 