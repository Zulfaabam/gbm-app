/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
  theme: {
    extend: {
      colors: {
        dark: "#313552",
        cream: "#EEE6CE",
        maroon: "#B8405E",
        matcha: "#2E5C50",
        "gbm-green-lighter": "#87D1B9",
        "gbm-green-light": "#52AA93",
        "gbm-green": "#2EB086",
        "gbm-green-dark": "#3E7768",
        "gbm-green-darker": "#418775",
        "gbm-purple": "#464C78",
        "paragraph-gray": "#4E5764",
        "paragraph-dark": "#001A41",
        "paragraph-black": "#2F2F2F",
      },
      gradientColorStopPositions: {
        10: "10%",
        20: "20%",
        30: "30%",
        40: "40%",
        50: "50%",
        60: "60%",
        70: "70%",
        80: "80%",
        90: "90%",
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
        heading: ["Shrikhand", "cursive"],
      },
      maxWidth: {
        "8xl": "86.5rem", //1384px
      },
    },
  },
};
