/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['inter', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  daisyui:{
    themes:['wireframe']
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),
  ],
}