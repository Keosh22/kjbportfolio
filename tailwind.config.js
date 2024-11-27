/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
      "cambridge": {
        100: "#E9ECEA",
        200: "#DEE3E0",
        300: "#D3D9D6",
        400: "#C8D0CC",
        500: "#BDC7C2",
        600: "#B2BDB8",
        700: "#A7B4AE",
        800: "#9CABA4",
        900: "#91A19A",
        950: "#869890",
      },
      "khaki": {
        100: "#F7F5F3",
        200: "#EFEAE6",
        300: "#E7E0DA",
        400: "#DED5CE",
        500: "#D6CBC2",
        600: "#CEC1B6",
        700: "#C6B7A9",
        800: "#BAA898",
        900: "#AD9885",
        950: "#9D836C"
      },
      "champagne": {
        100: "#FAF6F0",
        200: "#F5EDE0",
        300: "#EEE0CB",
      },
      "columbia": {
        950: "#659ECD",
        900: "#74A8D2",
        800: "#84B2D7",
        700: "#93BBDC",
        600: "#A3C5E1",
        500: "#B2CDE6",
        400: "#C1D7EB",
        300: "#D1E1F0",
        200: "#E0EBF5",
        100: "#F0F5FA",
      }
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      lora: ["Lora", "sans-serif"],
    }
  },
    backgroundImage: {
      "hero": "url(src/images/image-background.jpg)"
    }

  },
  plugins: [],
}
