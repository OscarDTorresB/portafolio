module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'fadeIn': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        'appearFromLeftWithBounce': {
          '0%': {
            opacity: 0,
            transform: 'translateX(-100%)',
          },
          '80%': {
            transform: 'translateX(4%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        }
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out',
        'fade-in-from-left': 'appearFromLeftWithBounce 1s ease-in-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
