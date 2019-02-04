const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'production',
    output: {
        // publicPath: '/public/yz/videos/web/'
        publicPath: '/public/yz/managers/'
    }
    // devtool: 'source-map',
})