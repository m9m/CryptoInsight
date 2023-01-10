/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./**/*.{html,js,ejs}","./views/*.ejs"],
  theme: {
    extend: {},
    colors: {
      blue: colors.blue,
      purple: colors.purple
    }
  },
  plugins: [],
}
