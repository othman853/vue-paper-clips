const {join} = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const CODE_PATH = join(__dirname, 'src')

module.exports = {
  entry: join(CODE_PATH, 'index.js'),
  output: {
    path: join(__dirname, 'build'),
    filename: 'dist.js'
  },
  module: {
    rules: [
      {test: /\.vue$/, loader: 'vue-loader'},
      {test: /\.js/, loader: 'babel-loader'}
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: join(CODE_PATH, 'index.html')}
    ])
  ]
}


