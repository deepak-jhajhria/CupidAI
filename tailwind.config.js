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
        'gray-white-200': '#EAECF0',
        'gray-white-100': '#CAC6DD',
        'gray-white-700': '#646464',
        'gray-dark-200': '#57606A',
        'gray-light-300': '#99A2AF',
        'blue': '#7F04E2',
        'orange-red': '#F800B9',
        'dark-black': '#1B1530',
        'bodymain': '#040403',
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

      },
      screens: {
        'slg': '870px',
      },
    },
  },
  plugins: [],
}

