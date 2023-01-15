/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./*.ejs",
    "./views/*.ejs",
    "./views/includes/*.ejs",
  ],
  theme: {
    screens: {
      sm: { min: "640px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        // lato: ["Lato", "sans-serif"],
        latoBlack: ["LatoBlack"],
        latoBlackItalic: ["LatoBlackItalic"],
        latoBold: ["LatoBold"],
        latoBoldItalic: ["LatoBoldItalic"],
        latoItalic: ["LatoItalic"],
        latoLight: ["LatoLight"],
        latoLightItalic: ["LatoLightItalic"],
        latoRegular: ["LatoRegular"],
        latoThin: ["LatoThin"],
        latoThinItalic: ["LatoThinItalic"],
        // fontFamily: {
        // },
      },
    },
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("postcss-preset-env")({ stage: 1 }),
  ],
};
