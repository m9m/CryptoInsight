/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./**/*.{html,js,ejs}","./views/*.ejs"],
  theme: {
    fontFamily: {
        custom: ['"Open Sans"', defaultTheme.fontFamily.sans],
    },
    extends: {
    },
  },
  plugins: [],
}
