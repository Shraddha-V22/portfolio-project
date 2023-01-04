/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#052C3B",
        navyBlue: "#05445E",
        blueGrotto: "#189AB4",
        blueGreen: "#75E6DA",
        babyBlue: "#D4F1F4",
      },
      boxShadow: {
        box: "-4px 4px 0 0 rgba(0, 0, 0, 0.3)",
        "box-inner": "inset -4px 4px 0 0 rgba(0, 0, 0, 0.3)",
        spread:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      },
      gridTemplateColumns: {
        "autoFill-100": "repeat(auto-fill, minmax(100px, auto))",
        "autoFill-250": "repeat(auto-fill, minmax(250px, auto))",
        "autoFill-300": "repeat(auto-fill, minmax(300px, auto))",
      },
      keyframes: {
        "bg-pan": {
          "0%": { "background-position": "0% center" },
          "100%": { "background-position": "-200% center" },
        },
      },
      animation: {
        "bg-pan": "bg-pan 5s linear infinite",
      },
      backgroundSize: {
        "200%": "200%",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
