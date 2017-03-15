const path = require('path')
const webpack = require('webpack')
const express = require('express')

module.exports = function (compiler) {
  const app = express()

  const devMiddleWare = require('webpack-dev-middleware')(compiler, {
    publicPath: compiler.options.output.publicPath,
    path: `http://localhost:5428/__webpack_hmr`,
    stats: 'minimal'
  })

  const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => null
  })

  // force page reload when html-webpack-plugin template changes
  compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
      hotMiddleware.publish({ action: 'reload' })
      cb()
    })
  })

  app.use(devMiddleWare)
  app.use(hotMiddleware)

  const file = path.join(compiler.options.output.path, 'index.html')

  app.get('/', (req, res) => {
    devMiddleWare.waitUntilValid(() => {
      const html = mfs.readFileSync(file)
      res.end(html)
    })
  })

  return app
}
