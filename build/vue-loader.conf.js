var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: false,
    extract: isProduction
  }),
  postcss: [
    require('autoprefixer')({
      browsers: ['last 2 versions']
    })
  ],
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
