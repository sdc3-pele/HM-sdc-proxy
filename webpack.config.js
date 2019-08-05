const path = require('path');

module.exports = {
  entry: {
    photos: path.join(__dirname, '../mike-photo-carousel/client/src/index.jsx'),
    // relatedProducts: path.join(__dirname, '../garrett-related-products/client/RelatedProducts.jsx'),
    // itemSummary: path.join(__dirname, '../matt-item-summary/client/src/index.jsx'),
    // reviews: path.join(__dirname, '../Review-component/client/index.jsx')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '/public'),
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](styled-components)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        }
      }
    }
  },
  resolve: {
    alias: {
      "styled-components": path.resolve(__dirname, "node_modules", "styled-components")
    }
  }
};