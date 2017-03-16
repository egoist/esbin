const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

process.env.BABEL_ENV = 'development'

module.exports = function ({
  paths
} = {}) {
  return {
    devtool: 'eval-source-map',
    entry: {
      client: [
        path.join(__dirname, 'dev-client.es6'),
        path.join(paths.binDir, 'index.js'),
        path.join(paths.binDir, 'style.css')
      ]
    },
    resolve: {
      extensions: ['.js', '.css', '.json'],
      modules: [
        path.join(paths.binDir, 'node_modules'),
        path.join(paths.appDir, 'node_modules')
      ]
    },
    resolveLoader: {
      modules: [
        path.join(paths.appDir, 'node_modules')
      ]
    },
    module: {
      rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/]
      }, {
        test: /\.es6$/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }]
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(paths.binDir, 'index.html')
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.LoaderOptionsPlugin({
        options: {
          babel: {
            presets: [
              require.resolve('babel-preset-react-app')
            ]
          }
        }
      })
    ]
  }
}
