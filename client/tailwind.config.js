/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        amayaBlue: "#40b0e0",
        amayaYellow: "#fedf01",
        amayaTeal: "#7de7e2",
        amayaBeige: "#cba67d",
        amayaPeach: "#ffe4cd",
      },
    },
  },
  plugins: [],
};