const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    app: './src/app/index.ts',
    background: './src/background/index.ts',
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name]/[name].js',
    publicPath: './'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      root: path.join(__dirname, './src')
    }
  },
  stats: {
    children: false
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: 'url-loader?limit=1000000'
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, './public'),
        to: path.join(__dirname, './dist')
      }
    ]),
    new MiniCssExtractPlugin({
      filename: '[name]/[name].css'
    })
  ]
}
