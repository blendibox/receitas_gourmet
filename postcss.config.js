const purgecssOption = {
  // Specify the paths to all of the template files in your project
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
};


module.exports = {
  plugins: {
    tailwindcss: {purge: false},
    autoprefixer: {},
    ['@fullhuman/postcss-purgecss', purgecssOption]
  },
}
