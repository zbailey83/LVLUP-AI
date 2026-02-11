module.exports = {
  content: [
    "./index.html",
    "./*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#151313',
          orange: '#FF5734',
          purple: '#BE94F5',
          yellow: '#FCCC42',
          blue: '#B8E3F5',
          offwhite: '#F7F7F5',
        },
      },
      fontFamily: {
        kodchassan: ['Kodchasan', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px',
      },
      borderRadius: {
        'card': '28px',
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px #151313',
        'neo-sm': '2px 2px 0px 0px #151313',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
}