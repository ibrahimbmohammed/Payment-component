/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#1364FA",
        textPurple: "#2D3753",
        bgPurple: "#1F2B52",
      },
    },
  },
  plugins: [],
};
