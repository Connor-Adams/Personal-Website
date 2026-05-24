export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#11161d',
        bone: '#f7f1e8',
        amber: '#d1ad6a',
        plum: '#211a26',
        jade: '#a8b4c2',
        rust: '#9b6a5b'
      },
      boxShadow: {
        glow: '0 0 40px rgba(209,173,106,0.16)',
        card: '0 24px 70px rgba(0,0,0,0.22)'
      }
    }
  },
  plugins: []
};
