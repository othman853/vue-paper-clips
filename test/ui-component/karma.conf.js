const webpackConfig = require('../../webpack.config.js')

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'phantomjs-shim'],
    files: [
      '../../node_modules/es6-promise/dist/es6-promise.auto.js',
      'index.js'
    ],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap'],
    },
    webpack: webpackConfig
  })
}
