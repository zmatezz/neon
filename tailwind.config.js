/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },

      backgroundImage: {
        hero: "url('https://res.cloudinary.com/dgeeyohmv/image/upload/v1693963744/fs6fghc2bzwoltyxetnb.jpg')",
        slider:
          "url('https://res.cloudinary.com/dgeeyohmv/image/upload/v1693963847/fuvme37nrpeqcsnbsnnc.jpg')",
      },

      button: {
        outline: "",
        solid: "none",
      },

      colors: {
        "brand-blue": "#0073CE",
        "brand-light-blue": "#00A5F0",
        "brand-green-light": "#00D7D7",
        "brand-yellow": "#FFC800",
        "brand-grey-1": "#F1F0F5",
        "brand-grey-2": "#C6C5CE",
        "brand-grey-3": "#7A7786",
        "brand-grey-4": "#5F5C6B",
        "brand-grey-5": "#4E4B59",
        "brand-grey-6": "#33303E",
      },
    },
  },
  plugins: [],
};
