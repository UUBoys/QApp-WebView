/* eslint-disable */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        graphik: ["Graphik", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#FFAD32",
          "50": "#fff5e6", // světlejší než #FFAD32
          "100": "#ffe1b8", // světlejší než #FFAD32
          "200": "#ffcd80", // světlejší než #FFAD32
          "300": "#ffb94f", // světlejší než #FFAD32
          "400": "#ffa41d", // světlejší než #FFAD32
          "500": "#FFAD32", // naše hlavní barva
          "600": "#e4982c", // tmavší než #FFAD32
          "700": "#c88227", // tmavší než #FFAD32
          "800": "#ac6c21", // tmavší než #FFAD32
          "900": "#904f1a", // tmavší než #FFAD32
          "950": "#72391a", // tmavší než #FFAD32
        },
        secondary: {
          DEFAULT: "#A05700",
          "50": "#fdf2e6", // světlejší než #A05700
          "100": "#fbdcc0", // světlejší než #A05700
          "200": "#f6bd7f", // světlejší než #A05700
          "300": "#f19e3f", // světlejší než #A05700
          "400": "#e8821a", // světlejší než #A05700
          "500": "#A05700", // naše hlavní barva
          "600": "#8f4d00", // tmavší než #A05700
          "700": "#7e4400", // tmavší než #A05700
          "800": "#6d3a00", // tmavší než #A05700
          "900": "#572d00", // tmavší než #A05700
          "950": "#431f00", // tmavší než #A05700
        },
        tertiary: {
          "50": "#fefde8",
          "100": "#fffcc2",
          "200": "#fff588",
          "300": "#ffe843",
          "400": "#ffd610",
          "500": "#efbc03",
          "600": "#cc9000",
          "700": "#a46804",
          "800": "#87510c",
          "900": "#734210",
          "950": "#432205",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("flowbite/plugin"),
    require("@tailwindcss/line-clamp"),
  ],
};
