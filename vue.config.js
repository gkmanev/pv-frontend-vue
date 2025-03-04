module.exports = {
  publicPath: "/",
  css: {
    loaderOptions: {
      css: {
        // You can leave this blank or just omit the `minimize` option
      },
      postcss: {
        plugins: [
          require('autoprefixer'),
        ],
      },
    },
  },
  configureWebpack: {
    optimization: {
      minimize: false,  // Disable CSS and JS minification
    },
  },
};
