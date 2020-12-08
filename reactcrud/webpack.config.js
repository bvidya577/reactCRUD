var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
    entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 3000,
    contentBase: "./src",
    historyApiFallback: true,
    hot: true
   },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader',
        query: {
               presets: ['es2015', 'react']
            }
      }
    ]
  }
};

module.exports = config;