/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
    colors:{
      "dark-blue-900": "#111827",
      "dark-blue-700": "#202736",
      "white": "#fff",
      "purple": "#7b74ec",
      "gray-200": "#e5e7eb",
      "gray-400": "#94a3b8",
      "gray-500": "#64748b",
      "gray-700": "#334155",
      "gray-800": "#1e293b",
      "gray-900": "#0f172a",
      "green-800": "#166534",
      "indigo-600": "#4f46e5",
      "indigo-900": "#312e81",
      "black": "#000"
    },
   

  },
  plugins: [],
}
