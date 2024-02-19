/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
 
        fontFamily: {
          sans: ['inter', 'sans-serif'],
        },
    extend: {    
fontSize:{

text: 'clamp(1.25rem, 5vw, 20rem); ',
soustitre: 'clamp(3rem, 5vw, 20rem); ',

},
transitionProperty: {
        'width': 'width',
      },
boxShadow: {
  customBoxShadow: '10px 10px 0 0 black'
},
height: {
  screenheight: '100svh'
},
  },
  plugins: []
}
}
