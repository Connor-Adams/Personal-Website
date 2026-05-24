export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0c1117',
        bone: '#f3efe6',
        amber: '#c9a15b',
        plum: '#2b1f2d',
        jade: '#7aa68c',
        rust: '#a76552'
      },
      boxShadow: {
        glow: '0 0 44px rgba(201,161,91,0.16)',
        card: '0 24px 80px rgba(0,0,0,0.30)'
      }
    }
  },
  plugins: []
};
