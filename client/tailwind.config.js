/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      colors: {
        primary: "#1E4F91",
        sidebar: "#214D84",
        background: "#F3F5F9",
        card: "#FFFFFF",
        border: "#D9DEE7",
        textdark: "#1F2937",
        textgray: "#6B7280",
      },

    },
  },

  plugins: [],
};