/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        main: "#f59e0b",
        background: "#172554",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
