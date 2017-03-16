const webpack = require('webpack')
const getConfig = require('./webpack/webpack.config')
const createServer = require('./webpack/server')

module.exports = function (options) {
  const config = getConfig(options)
  const compiler = webpack(config)
  const server = createServer(compiler, options)
  server.listen(options.port)
  console.log(`> Listening at http://localhost:${options.port}`)
}
