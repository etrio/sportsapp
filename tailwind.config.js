/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  // tailwind.config.js
  theme: {
    extend: {
      colors: {
        background: '#121212',
        card: '#1C1C1E',
        input: '#2A2A2A',
        primaryText: '#E0E0E0',
        secondaryText: '#AAAAAA',
        accent: '#FF6A00',
        darkAccent: '#ad3e00',
        violetAccent: '#9F00FF',
        lime: '#C6FF00',
        cyan: '#00FFFF',
        warning: '#FFC107',
      }
    }
  },
  plugins: [],
}

