/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0F3057",
        lightBeige: "#F9F5EB",
        newBlue: "#00587A",
        newTeal: "#008891",
        newGrey: "#E7E7DE",
      },
      fontFamily: {
        aboreto: ["Aboreto"],
        karla: ["Karla"],
        newCycle: ["News Cycle"],
      },
      boxShadow: {
        box: "-4px 4px 0 0 rgba(0, 0, 0, 0.3)",
        "box-inner": "inset -4px 4px 0 0 rgba(0, 0, 0, 0.3)",
        spread: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
      gridTemplateColumns: {
        "autoFill-50": "repeat(auto-fill, minmax(50px, auto))",
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
      backgroundImage: {
        main: "url('../Images/black-n-white.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
