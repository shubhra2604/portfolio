/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 40px rgba(99, 102, 241, 0.35)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.14) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
