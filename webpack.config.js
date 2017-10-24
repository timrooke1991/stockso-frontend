const path = require('path')
const webpack = require('webpack');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader', 'babel-loader?presets[]=es2015,presets[]=react'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }

    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
