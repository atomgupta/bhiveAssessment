const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'logo-primary-1': "#000000",
        "logo-primary-2": "#FFBB00",
        "primary-button-main": "#FFC4FB",
        "primary-button-stroke": "#27AE60",
        "secondary-button-main": "#F9F9F9",
        "secondary-button-stroke": "#CEC6C6",
        "text-main": "#263238",
        "text-secondary": "#65624C",
        grey: {
          1: "#333333",
          2: "#4F4F4F",
          3: "#828282",
          4: "#B7B6BB",
          5: "#E0E0E0",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        h1: ["58px", { lineHeight: "63.8px", }],
        h2: ["36px", { lineHeight: "39.6px", }],
        h3: ["24px", { lineHeight: "26.4px", }],
        h4: ["20px", { lineHeight: "22px", }],
        h5: ["18px", { lineHeight: "19.8px", }],
        h6: ["16px", { lineHeight: "17.6px", }],
        body: ["16px", { lineHeight: "17.6px", }],
        small: ["14px", { lineHeight: "15.4px", }],
      },
    },
  },
  plugins: [],
};
