/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-brown": "#402511",
        "golden-brown": "#A06621",
        "orange-peel": "#FFA630",
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
