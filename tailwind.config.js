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
        hero: "url('/src/assets/img/bg-hero.svg')",
        point: "url('/src/assets/img/points.svg')",
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
        "f-gradient-blue": "#35cbe266",
        "t-gradient-blue": "#35cae200",
      },

      content: {
        point: 'url("/src/assets/img/points.svg")',
      },
      animation: {
        floating: "floating 6s ease-in-out infinite",
        floatingslow: "floating 8s ease-in-out infinite",
      },
      keyframes: {
        floating: {
          "0%": { transform: "translateY(0)" },
          "66%": { transform: "translateY(-15px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
