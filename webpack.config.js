
/* global __dirname, require, module */

const webpack = require('webpack')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const path = require('path')
const env = require('yargs').argv.env // use --env with webpack 2

let libraryName = 'Library'

let plugins = [], outputFile

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }))
  outputFile = libraryName + '.min.js'
} else {
  outputFile = libraryName + '.js'
}

const config = {
  entry: path.join(__dirname, '/src/index'),
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/lib'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        include: path.resolve(__dirname, 'node_modules/pixi.js'),
        loader: 'transform-loader',
        enforce: 'post'
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  plugins: plugins
}

/*
,
  postLoaders: [
    {
      include: path.resolve(__dirname, 'node_modules/pixi.js'),
      loader: 'transform?brfs'
    }
  ]
*/

module.exports = config
