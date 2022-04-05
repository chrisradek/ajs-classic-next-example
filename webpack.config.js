const webpack = require("webpack");

module.exports = {
  entry: './src/index.js',
  mode: 'none',
  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ]
}