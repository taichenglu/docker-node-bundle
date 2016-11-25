const webpack = require('webpack');

module.exports = {
  entry: {
    app: './bin/www.js',
  },
  target: 'node',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js']
  },

  context: __dirname,

  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: false,
    __dirname: false,
    setImmediate: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0']
        },
        exclude: /node_modules/
      }, {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
