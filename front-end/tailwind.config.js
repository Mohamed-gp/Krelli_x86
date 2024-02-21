/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        primaryColor: "#8D5CF6",
        bgheroColor: "#F6F7FB",
        secondaryColor: "#EA4C89",
      },
    },
  },
  plugins: [],
};
