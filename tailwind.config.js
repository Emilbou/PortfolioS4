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
titre: 'clamp(4rem, 10vw, 20rem); '

},
    
    }
  },
  plugins: []
}

