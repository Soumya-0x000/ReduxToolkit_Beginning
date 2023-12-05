/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: '350px',
        lsm: '550px',
        largesm: '700px',
      },
    },
  },
  plugins: [],
}

