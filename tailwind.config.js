export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#080b10',
        bone: '#f4efe4',
        amber: '#b9975b',
        plum: '#151019',
        jade: '#8d98a7',
        rust: '#7c4f43'
      },
      boxShadow: {
        glow: '0 0 36px rgba(185,151,91,0.12)',
        card: '0 28px 90px rgba(0,0,0,0.34)'
      }
    }
  },
  plugins: []
};
