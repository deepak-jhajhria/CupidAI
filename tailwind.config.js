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
      '9xl': '22px',
      '3xl': '30px',
      '3xl1': '32px',
      '3xl2': '36px',
      '4xl': '40px',
      '4xl2': '42px',
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
      midtighter: '0.3px',
      tightest: '-0.5px', //use
      extratightest: '-1.2px',
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
        'sm': '81%',
        'xl': '125%',
        '2.5xl': '140%',
        '2xl': '147%',
        '3xl': '156%'
      },
      padding: {
        '8.5': '34px',
        '4.5': '18px',
        '1.5': '6px',
        '2.5': '10px'
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
        'dark-gray': '#646464',
        'mid-white': '#E4E4E7',
        'off-white': '#A1A1AA',
        'off-black': '#0E0D0D',
        'mid-gray': '#212121',
        'blue': '#7F04E2',
        'orange-red': '#F800B9',
        'dark-black': '#1B1530',
        'bodymain': '#040403',
        'light-red': '#FF6363',
        'dark-black-300': '#110E19',
        'gray-white-500': '#FFFFFF1A',
        'gray-white-600': '#FFFFFF0D',
        'gray-black-200': '#858585',
      },
      animation: {
        'moveX': 'translateX 19s linear infinite forwards',
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
      backgroundImage: {
        "bg-gradient": "linear-gradient(235.8deg, #7F04E3 -12.6%, #FF006B 106.18%)",
        "bg_gradient": "linear-gradient(180deg, rgba(14, 14, 14, 0) 0%, #040403 100%)",
        'whitegradient': "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%)",
        'whiteborder': "linear-gradient(106.78deg, rgba(255, 255, 255, 0.23) 6.02 %, rgba(255, 255, 255, 0.0759) 104.65 %)",
        'textgradient': "linear-gradient(97.84deg, #FF4141 0.52%, #FFA6B0 23.61%, #FFB6E6 50%, #FFD8D8 75%, #BF8DFF 100%)",
        'headerTextgradient': "linear-gradient(88.36deg, #7F04E3 45.88%, #FF006B 76.63%)",
        'btngradient': "linear-gradient(235.8deg, #7F04E3 -12.6%, #FF006B 106.18%)",
        'gradientTrailBtn': "linear-gradient(96.17deg, #7F04E3 6%, #FF006B 98.41%)",
      },
      backgroundSize: {
        "BgSize": "100% 100%"
      },
      borderRadius: {
        '2md': '41px',
        '3md': '48px',
      },
    },
    backgroundImage: {
      "bg-gradient": "linear-gradient(235.8deg, #7F04E3 -12.6%, #FF006B 106.18%)",
      "bg_gradient": "linear-gradient(180deg, rgba(14, 14, 14, 0) 0%, #040403 100%)"
    },
    backgroundSize: {
      "BgSize": "100% 100%"
    },
  },
  plugins: []
}

