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
          DEFAULT: "#ffb400",
           '50': '#fffeea',
          '100': '#fff9c5',
          '200': '#fff285',
          '300': '#ffe546',
          '400': '#ffd51b',
          '500': '#ffb400',
          '600': '#e28a00',
          '700': '#bb6002',
          '800': '#984a08',
          '900': '#7c3d0b',
          '950': '#481f00',
        },
        secondary: {
          DEFAULT: "ff#111111",
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#111111',
        },
        tertiary: {
          '50': '#fefde8',
          '100': '#fffcc2',
          '200': '#fff588',
          '300': '#ffe843',
          '400': '#ffd610',
          '500': '#efbc03',
          '600': '#cc9000',
          '700': '#a46804',
          '800': '#87510c',
          '900': '#734210',
          '950': '#432205',
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
