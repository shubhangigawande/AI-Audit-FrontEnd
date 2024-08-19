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
        'custom-black': '5px 5px 5px 1px black',  // Custom shadow definition
      },
      colors: {
        customGreen: '#5CEB73',
        customblue: '#17153B',
        myDashboard: '#143153',
        SearchClick: '#143153',

      },
    },
  },


  
  plugins: [],
}
