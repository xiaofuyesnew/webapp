const path = require('path')

module.exports = {
    entry: {
        Index: ['./src/script/index.js']
    },
    output: {
        path: path.resolve(__dirname, './www/js'),
        publicPath: '/',
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.js']
    }
}