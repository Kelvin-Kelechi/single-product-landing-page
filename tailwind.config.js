/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    darkMode: 'class',
    extend: {
      fontFamily: {
        kufam: ["Kufam", "sans-serif"],
      },
      colors: {
        primary: '#663399',
      },
    },
  },
  plugins: [],
};
