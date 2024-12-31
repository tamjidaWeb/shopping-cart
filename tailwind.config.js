// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    extend: {
      strokeDasharray: {
        '472': '472',
      },
      strokeDashoffset: {
        '100': '100',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities, theme }) {
      // Add stroke-dasharray utilities
      const strokeDasharray = theme('strokeDasharray');
      const strokeDashoffset = theme('strokeDashoffset');
      
      addUtilities({
        '.stroke-dasharray-472': { 'stroke-dasharray': strokeDasharray['472'] },
        '.stroke-dashoffset-100': { 'stroke-dashoffset': strokeDashoffset['100'] },
      }, ['responsive', 'hover']);
    }),
  ],
};
