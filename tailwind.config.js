/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7f9e0',
          100: '#eef3c2',
          200: '#e5ed94',
          300: '#dbe666',
          400: '#d2e038',
          500: '#c9d62e', // Main brand color from logo
          600: '#a1ab25',
          700: '#78801c',
          800: '#505512',
          900: '#282a09',
        },
        secondary: {
          50: '#e6f6ff',
          100: '#cceeff',
          200: '#99ddff',
          300: '#66ccff',
          400: '#33bbff',
          500: '#00aaff',
          600: '#0088cc',
          700: '#006699',
          800: '#004466',
          900: '#002233',
        },
        dark: {
          50: '#e6e8e8',
          100: '#ccd0d2',
          200: '#99a1a5',
          300: '#667278',
          400: '#33444b',
          500: '#00151f',
          600: '#001119',
          700: '#000d13',
          800: '#00080c',
          900: '#000406',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};