const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js'
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
        use: [
          { loader: 'file-loader' }
        ]
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.scss|\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              esModule: false,
            }
          },
          'vue-style-loader', 
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     esModule: false
          //   },
          // }, 
          'css-loader', 
          'sass-loader'
        ]
      },
      {
        test: /\.m?js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new VueLoaderPlugin(),
    // new MiniCssExtractPlugin()
  ]
}