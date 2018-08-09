const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      title: 'React Webpack Setup',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0'
        }
      ],
      bodyHtmlSnippet: '<div id="app"></div>'
    })
  ],
  module: {
    rules: [
      {
        // babel Loader
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: { loader: 'babel-loader' }
      },
      {
        // file loader for images
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        // file loader for fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  optimization: {
    namedChunks: true,
    splitChunks: {
      chunks: 'all'
    }
  }
};
