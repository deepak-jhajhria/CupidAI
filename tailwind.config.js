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
    extend: {
      boxShadow: {
        'gradientRed': '0 0 20px 1px #F800B9',
      },
      colors: {
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
      },
      backgroundImage: {
        'whitegradient': "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%)",
        'whiteborder': "linear-gradient(106.78deg, rgba(255, 255, 255, 0.23) 6.02 %, rgba(255, 255, 255, 0.0759) 104.65 %)",
        'textgradient': "linear-gradient(97.84deg, #FF4141 0.52%, #FFA6B0 23.61%, #FFB6E6 50%, #FFD8D8 75%, #BF8DFF 100%)",
        'btngradient': "linear-gradient(235.8deg, #7F04E3 -12.6%, #FF006B 106.18%)",
      }
    },
  },
  plugins: [],
}