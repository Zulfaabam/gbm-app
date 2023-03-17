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
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
        heading: ["Shrikhand", "cursive"],
      },
    },
  },
};
