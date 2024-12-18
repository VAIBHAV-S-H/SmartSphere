/** @type {import('tailwindcss').Config} */
import animate from 'tailwindcss-animate';

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [animate], 
};