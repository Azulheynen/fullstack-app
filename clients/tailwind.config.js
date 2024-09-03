/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#c9f0ffff",
        secondary: "#eafffdff",
        bright: "#efeff0ff",
        pale: "#d5cad6ff",
        dark: "#6b5e62ff",
      },
    },
    plugins: [],
  },
};
