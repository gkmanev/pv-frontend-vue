module.exports = {
  publicPath: "/",
  css: {
    loaderOptions: {
      css: {
        minimize: false,  // Disable CSS minification
      },
      postcss: {
        plugins: [
          require('autoprefixer'),
          // Disable CSSNano if present
          require('cssnano')({ preset: 'default' }).disable(),
        ],
      },
    },
  },
};
