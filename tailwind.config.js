/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: '12px',
      sm: '14px',
      '2sm': '15px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '22px',
      '3xl': '30px',
      '4xl': '40px',
      '5xl': '48px',
      '6xl': '50px',
    },
    container: {
      padding: {
        DEFAULT: '14px',
        'xl': '12px',
      },
      center: true,
    },
    fontFamily: {
      inter: ['inter', 'sans-serif'],
    },
    extend: {
      animation:
      {
        'moveX': 'translateX 5s linear infinite',
        'moveX2': 'translateX2 8s linear infinite'
      },
      keyframes: {
        translateX: {
          '0%': { transform: 'translateX(183px)' },
          '100%': { transform: ' translateX(calc(-180px))' },
        },
        translateX2: {
          '0%': { transform: 'translateX(183px)' },
          '100%': { transform: ' translateX(calc(-340px))' },
        }
      }
    },
  },
  plugins: [],
}

