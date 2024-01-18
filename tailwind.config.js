
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '400px',  
        'sm': '640px',  
        'md': '768px',  
        'lg': '1024px', 
        'xl': '1280px', 
        'xxl': '1440px', 
      }
    },
  },
  plugins: [],
}
