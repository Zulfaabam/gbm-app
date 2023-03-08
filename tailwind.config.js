/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#313552",
        cream: "#EEE6CE",
        maroon: "#B8405E",
        "gbm-green": "#2EB086",
      },
      fontFamily: {
        heading: ["Shrikhand", "cursive"],
        primary: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
