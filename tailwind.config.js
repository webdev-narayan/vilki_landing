/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#202D61",
        secondary:"#00AEEF",
      }
    },
  },
  plugins: [],
};
