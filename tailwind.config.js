/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

export default {
  content: [
    "./src/index.html",
    "./src/pages/**/*.{tsx,js}",
    "./src/components/**/*.{tsx,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#495e57",
          2: "#f4ce14",
        },
        secondary: {
          1: "#ee9972",
          2: "#fbdabb",
        },
        highlight: {
          1: "#edefee",
          2: "#333333",
        },
      },
      fontFamily: {
        sans: ["Karla", ...defaultTheme.fontFamily.sans],
        serif: ["Markazi Text", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
