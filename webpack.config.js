const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './public/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, "./static/js")
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  }
}