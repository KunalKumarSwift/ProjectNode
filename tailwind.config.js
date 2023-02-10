/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./*.ejs",
    "./views/**/*.ejs",
    // "./views/includes/*.ejs",
    // "./views/admin/*.ejs",
    // "./views/shop/*.ejs",
  ],
  theme: {
    screens: {
      sm: { min: "280px", max: "767px" },
      // => @media (min-width: 280px and max-width: 767px) { ... }

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
        cascadiaRegular: ["CascadiaRegular"],
        cascadiaItalic: ["CascadiaItalic"],
      },
    },
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("postcss-preset-env")({ stage: 1 }),
    require("@tailwindcss/line-clamp"),
  ],
};
