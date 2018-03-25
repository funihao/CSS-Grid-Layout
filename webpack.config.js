const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/app.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     use: 'css-loader'
      //   })
      // },
      {
        test: /\.(jpg|gif|png|woff|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
            }
          }
        ]
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            {
              loader: 'stylus-loader',
              options: {
                options: {
                  modules: true,
                  // minimize: true
                },
                use: [
                  require('nib'),
                  require('rupture')
                ],
                import: [
                  '~nib/lib/nib/index.styl',
                  '~rupture/rupture/index.styl'
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/style.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      favicon: 'src/img/favicon.png',
      title: 'Solved Pug loader with original pug-loader',
      template: 'src/index.pug'
    })
  ],

  devServer: {
    // hot: true
    // contentBase: "http://192.168.1.91"
  }
}
