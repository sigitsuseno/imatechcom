/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "/src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        Anton: "Anton, sans-serif",
        Tilium: "Titillium Web, sans-serif",
      },
    },
  },
  plugins: [],
};
