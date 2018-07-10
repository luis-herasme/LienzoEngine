
const path = require('path')

const serverConfig = {
  target: 'node',
  context: __dirname,
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle_server.js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}

const clientConfig = {
  context: __dirname,
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd',
    library: 'DibujoJs'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}

module.exports = [ serverConfig, clientConfig ]
