const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: ['./src/script/index.js']
  },
  output: {
    path: path.resolve(__dirname, './dev/js'),
    publicPath: 'js/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['index'],
      filename: '../index.html',
      inject: true
    })
  ]
}