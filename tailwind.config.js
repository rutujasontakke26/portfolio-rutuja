/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#24242b",
        muted: "#72727d",
        paper: "#fbfaf8",
        lilac: "#b9a7f6",
        peach: "#f5bda9",
        mint: "#b7ddca",
        sky: "#b8d8f6",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 55px rgba(49, 39, 78, 0.08)",
        card: "0 12px 35px rgba(39, 35, 54, 0.06)",
      },
    },
  },
  plugins: [],
};
