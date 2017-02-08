const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const config = {
  postcss: [
    require('postcss-salad')({
      features: {
        bem: {
          shortcuts: { component: 'c', modifier: 'm', descendent: 'd' },
          separators: { modifier: '--', descendent: '__' }
        }
      }
    })
  ]
}

module.exports = {
  entry: {
    app: './src/app/index.ts',
    options: './src/options/index.ts'
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
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [{ loader: 'css-loader' }, 'postcss-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new ExtractTextPlugin('[name]/[name].css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        postcss: config.postcss
      }
    })
  ]
}
