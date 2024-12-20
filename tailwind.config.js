/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#ff511a', // Your custom color
      },
    },
  },
  plugins: [],
}

