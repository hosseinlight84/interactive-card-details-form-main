/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    
    borderRadius: {DEFAULT: '5px'},
    borderWidth: {'2': '1.5px',},

    extend: {
      height: {
        '48.5': '48.5rem',
      },
      spacing: {
        '22': '88px',
        '44.5': '163px',
        '43': '160px',
        '21': '89px',
        '66': '260px',
        '76': '308px',
        '81': '345px',
        '98': '410px',
        '110': '455px',
        '100': '420px',
        '140': '474px',
        '150': '536px',
        '180': '540px',
        '190': '620px',
        '200': '900px',
        '202': '950px',
        
      },
      screens: {
        'tablet': '375px',}
},
  },
  plugins: [],
}
