/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
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
        sans: ["Quicksand", "sans-serif"],
        heading: ["Shrikhand", "cursive"],
      },
    },
  },
};
