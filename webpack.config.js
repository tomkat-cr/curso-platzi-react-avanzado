// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [
    // new HtmlWebpackPlugin()
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  devServer: {
    client: {
      overlay: false
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
