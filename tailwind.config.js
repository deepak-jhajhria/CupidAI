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
      xxl: '22px',
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
        'xl': '14px',
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
      screens: {
        'slg': '870px',
      },
      lineHeight: {
        '11': '48.41px',
        '12': '56px',
        '13': '72px',
      },
      padding: {
        '8.5': '34px',
        '4.5': '18px'
      },
      boxShadow: {
        'gradientRed': '0 0 20px 1px #F800B9',
      },
      colors: {
        'white': '#FFF',
        'black-primary': '#040403',
        'gray': '#646464',
        'gray-white': '#E4E2EE',
        'gray-white2': '#E4E4E7',
        'gray-white3': '#A1A1AA',
        'gray-white-200': '#EAECF0',
        'gray-white-100': '#CAC6DD',
        'gray-white-700': '#646464',
        'gray-dark-200': '#57606A',
        'gray-light-300': '#99A2AF',
        'blue': '#7F04E2',
        'orange-red': '#F800B9',
        'dark-black': '#1B1530',
        'bodymain': '#040403',
        'dark-gray': '#646464',
      },
      animation:
      {
        'moveX': 'translateX 17s linear infinite',
      },
      keyframes: {
        translateX: {
          '0%': { transform: 'translateX(80%)' },
          '100%': { transform: 'translateX(-80%)' },
        },
        translateX2: {
          '0%': { transform: 'translateX(183px)' },
          '100%': { transform: ' translateX(calc(-340px))' },
        }
      },
    },
    colors: {
      'dark-gray': '#646464',
    },
    backgroundImage: {
      "bg-gradient": "linear-gradient(235.8deg, #7F04E3 -12.6%, #FF006B 106.18%)",
      "bg_gradient": "linear-gradient(180deg, rgba(14, 14, 14, 0) 0%, #040403 100%)"
    },
    backgroundSize: {
      "BgSize": "100% 100%"
    },
  },
  plugins: [],
}

