const {join} = require('path')
const webpack = require('webpack')

module.exports = {
  entry: join(__dirname, 'src', 'components', 'index.js'),
  output: {
    path: join(__dirname, 'build'),
    filename: 'dist.js'
  },
  module: {
    rules: [
      {test: /\.vue$/, loader: 'vue-loader'},
      {test: /\.js/, loader: 'babel-loader'}
    ]
  }
}


