/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
     colors: {
       
          noir: '#0B0A0A',
          blanc: '#FFFBFB',
        },
        fontFamily: {
          sans: ['inter', 'sans-serif'],
        },
    extend: {    
fontSize:{
titre: 'clamp(4rem, 10vw, 20rem); ',
text: 'clamp(1.25rem, 5vw, 20rem); ',
soustitre: 'clamp(3rem, 5vw, 20rem); ',

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
