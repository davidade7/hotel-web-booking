
module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  darkMode: false, 
  content: [],
  theme: {
    extend: {
      colors: {
        'perso': {
          100: '#121212',
          200: '#909090',
          300: '#FF6A28',
          400: '#11928F',
          500: '#F6F3E9',
          600: '#FC6A8D'
      },
    },   
    },
    fontFamily: {
      'Kollektif': ['KolleKtif'],
      'Kollektif-bold': ['Kollektif-bold'],
      'Creattion': ['Creattion']
    }
  },
  plugins: [],
}
