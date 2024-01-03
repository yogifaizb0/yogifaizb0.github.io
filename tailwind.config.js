/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#5F6F52",
        secondary: "#A9B388",
        dark: "#082032",
        dark2: "#2C394B",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
