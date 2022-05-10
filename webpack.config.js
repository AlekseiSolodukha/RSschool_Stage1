const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
    //clean: true,
    clean: {
      keep: /\.git/,
    },
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Virtual Keyboard",
      filename: "index.html",
      template: "./src/index.html",
  })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  devServer: {
    static: './dist',
    port: 3000,
  },
};