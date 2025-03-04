module.exports = {
  publicPath: "/",
  css: {
    loaderOptions: {
      css: {
        minimize: false, // Disable CSS minification
      },
      postcss: {
        plugins: [
          require('autoprefixer'), // Add autoprefixer if needed
          // Remove cssnano from the PostCSS plugins
        ],
      },
    },
  },
};
