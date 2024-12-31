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
        adulteGreen: "rgb(58, 84, 51, 0.5)",
        enfantPurple: "rgb(208, 108, 228, 0.2)",
        femmeGreen: "rgb(152,180,140, 0.5)",
      },
      fontFamily: {
        "dancing-script": ['"Dancing Script"', "serif"],
        "playwrite-co-guides": ['"Playwrite CO Guides"', "serif"],
      },
    },
  },
  plugins: [],
};
