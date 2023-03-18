/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
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
        "gbm-green": "#2EB086",
        "gbm-green-light": "#87D1B9",
        "gbm-green-dark": "#3E7768",
        "gbm-green-darker": "#418775",
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
        heading: ["Shrikhand", "cursive"],
      },
    },
  },
};
