var path = require('path')

module.exports = {
  entry: {
      index: './src/script/index.js'
  },
  output: {
    path: path.resolve(__dirname, '/dev/js'),
    publicPath: 'js/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
}