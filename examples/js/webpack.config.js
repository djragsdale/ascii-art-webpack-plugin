const { AsciiArtWebpackPlugin } = require('../../lib')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './entrypoint.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
      },
    ],
  },
  plugins: [
    new AsciiArtWebpackPlugin({
      text: 'My Class',
      borderAroundText: true,
    })
  ],
}
