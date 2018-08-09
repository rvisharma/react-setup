const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: '[name].[hash].js'
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        // css loader with style loader
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        // scss loader with style loader
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
});
