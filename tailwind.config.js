module.exports = {
  content: [
    "./index.html",
    "./*.{js,jsx}",
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
      }
    },
  },
  plugins: [],
}