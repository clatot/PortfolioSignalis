/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    extend: {
      keyframes: {
        moveMargin: {
          "0%": { marginTop: "-300px" },
          "100%": { marginTop: "300px" },
        },
        blink: {
          "0%": { opacity: "0" },

          "3%": { opacity: "0" },
          "4%": { opacity: "1" },
          "5%": { opacity: "0" },

          "9%": { opacity: "0" },
          "10%": { opacity: "1" },
          "11%": { opacity: "0" },

          "12%": { opacity: "0" },
          "13%": { opacity: "1" },
          "14%": { opacity: "0" },

          "35%": { opacity: "0" },
          "36%": { opacity: "1" },
          "37%": { opacity: "0" },

          "49%": { opacity: "0" },
          "50%": { opacity: "1" },

          "100%": { opacity: "1" },
        },
      },
      animation: {
        moveMargin: "moveMargin 5s linear forwards",
        clignotement: "blink 3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
