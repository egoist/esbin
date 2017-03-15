const path = require('path')
const appPkg = require('./app/package')

module.exports = options => ({
  entry: 'src/index.js',
  dist: 'app/dist',
  postcss: [
    require('postcss-property-lookup')
  ],
  homepage: './',
  env: {
    APP_MODULES: path.resolve('app/node_modules')
  },
  webpack(config) {
    config.target = 'electron-renderer'

    config.externals = Object.keys(appPkg.dependencies).reduce((curr,name) => {
      curr[name] = `commonjs ${name}`
      return curr
    }, {})

    return config
  }
})
