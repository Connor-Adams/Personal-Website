export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#141018',
        bone: '#f7f3ee',
        amber: '#5A228B',
        plum: '#381356',
        jade: '#4B1E78',
        rust: '#6A2CA0'
      },
      boxShadow: {
        glow: '0 0 44px rgba(90,34,139,0.22)',
        card: '0 24px 70px rgba(27,10,42,0.30)'
      }
    }
  },
  plugins: []
};
