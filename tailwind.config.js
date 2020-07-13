module.exports = {
  purge: [],
  theme: {
    extend: {},
    maxWidth: {
          '2/100':'2%',
          '5/100':'5%',  
          '10/100': '10%',
          '15/100': '15%',
          '1/4': '25%',
          '1/2': '50%',
          '3/4': '75%',
          '10/5':'200%'
          }
  },
  variants: {
    gridTemplateColumns: ['responsive'],
    gridTemplateColumns: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
