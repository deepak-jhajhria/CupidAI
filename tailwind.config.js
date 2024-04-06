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
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '40px',
      '5xl': '48px',
      '6xl': '50px',
      '7xl': '60px',
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
    letterSpacing: {
      tighter: '-1px', //use
      tightest: '-0.5px', //use
      tight: '-.025em',
      normal: '0',
      wide: '.035em', // use
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },
    extend: {
      lineHeight: {
        '11': '48.41px',
        '12': '3rem', 
        '13': '72px',
      },
      padding:{
        '8.5':'34px'
      },
      boxShadow: {
        'gradientRed': '0 0 20px 1px #F800B9',
      },
      colors: {
        'black-primary': '#040403',
        'gray': '#646464',
        'gray-white': '#E4E2EE',
        'gray-white-100': '#CAC6DD',
        'blue': '#7F04E2',
        'orange-red': '#F800B9',
        'dark-black': '#1B1530',
      },
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

