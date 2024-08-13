/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-gray': '10px 11px 3px 0px #d3cece',  // Custom shadow definition
        'custom-black': '7px 7px 5px 1px black',  // Custom shadow definition
      },
    },
  },


  
  plugins: [],
}
