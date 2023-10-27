/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vt: ["VT323", "sans-serif"],
      },
    },
  },
  plugins: [],
};
