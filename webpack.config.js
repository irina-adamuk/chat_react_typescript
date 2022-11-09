const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, './src/index.jsx'),
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.css?$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        use: ['babel-loader'],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    extensions: ['.jsx', '.js'],
  },
};
