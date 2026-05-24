export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1b082b',
        bone: '#f7f3ee',
        amber: '#5A228B',
        plum: '#14051f',
        jade: '#4B1E78',
        rust: '#6A2CA0'
      },
      boxShadow: {
        glow: '0 0 44px rgba(90,34,139,0.20)',
        card: '0 24px 70px rgba(15,4,24,0.42)'
      }
    }
  },
  plugins: []
};
