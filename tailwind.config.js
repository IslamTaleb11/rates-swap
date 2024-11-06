/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  darkMode: 'selector',

  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins'],
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
      colors:{
        darkmodebg: "#0E162A"
      }
    },
  },
  plugins: [

  ],
}

