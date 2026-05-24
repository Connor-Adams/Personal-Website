export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#141318',
        bone: '#f6eede',
        amber: '#dca847',
        plum: '#5f2e58',
        jade: '#45b981',
        rust: '#c4663d'
      },
      boxShadow: {
        glow: '0 0 48px rgba(220,168,71,0.22)',
        card: '0 24px 80px rgba(0,0,0,0.32)'
      }
    }
  },
  plugins: []
};
