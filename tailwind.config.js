const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray: colors.gray,
      blue: colors.blue,
      'white': '#ffffff',
      transparent: 'transparent',
      'darkgray': '#1f2937',
      green: colors.green,
      emerald: colors.emerald,
      rose: colors.rose,
    },
    extend: {
    },
  },
  plugins: [],
};
