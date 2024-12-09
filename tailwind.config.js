/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      boxShadow: {
        all: "0 0 20px rgba(0, 0, 0, 0.1)",
        inner_all: "inset 0 0 20px rgba(0, 0, 0, 0.07)"
      }
    },
  },
  plugins: [],
}

