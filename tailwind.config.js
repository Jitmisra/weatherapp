/** @type {import('tailwindcss').Config} */
module.exports = {
  // Paths to all your component files
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"], // Combined into a single array
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};