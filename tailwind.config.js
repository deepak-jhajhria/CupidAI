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
      },
    },
    colors: {
      'dark-gray': '#646464',
      'mid-white': '#E4E4E7',
      'off-white': '#A1A1AA',
      'off-black': '#0E0D0D',
      'dark-black': '#1F1F1F',

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