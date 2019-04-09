const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const localPath = require('./config/path');

const config = {
  entry:  {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
    ]
  },
  plugins: [
    
    new HtmlWebpackPlugin({
      title: '管理输出',
      inject: true,
      template: './public/index.html',
    }),
    new ExtractTextPlugin("styles.css"),

  ]
};

module.exports = config;
