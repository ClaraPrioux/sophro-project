/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purpleBackground: "rgb(226,179,246)",
        green: "#3a5433",
        lightGreen: "#94b68a",
        transparentWhite: "rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
