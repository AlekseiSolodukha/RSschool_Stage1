const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    filename: '[hash].js',
    path: path.resolve(__dirname, 'dist'),
    //clean: true,
    clean: {
      keep: /\.git/,
    },
  },
  mode: "development",
  plugins: [new HtmlWebpackPlugin({
    title: "Virtual Keyboard",
    filename: "[hash].html",
    template: "src/index.html",
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader",],
      },
    ],
  },
  devServer: {
    static: './dist',
    port: 3000,
  },
};