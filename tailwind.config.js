/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#1E3A5F',
          850: '#132845',
          900: '#0B192C',
          950: '#060E1A',
        },
        gold: {
          100: '#FDF8EC',
          200: '#F9ECC7',
          300: '#F2DC9E',
          400: '#E5C471',
          500: '#C5A059',
          600: '#AA8237',
          700: '#866324',
          800: '#654817',
          900: '#48330D',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
