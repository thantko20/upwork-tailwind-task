/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './templates/**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
