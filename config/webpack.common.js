const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const localPath = require('./config/path');
console.log('exclude :', path.resolve(__dirname, '..'));

const config = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      /* {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
        },
      }, */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[hash:base64:6]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              // 如果没有options这个选项将会报错 No PostCSS Config found
              plugins: loader => [
                require('postcss-import')({ root: loader.resourcePath }),
                require('autoprefixer')(), // CSS浏览器兼容
                require('cssnano')(), // 压缩css
              ],
            },
          },
        ],
        exclude: [path.resolve(__dirname, '..', 'node_modules')],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              // 如果没有options这个选项将会报错 No PostCSS Config found
              plugins: loader => [
                require('postcss-import')({ root: loader.resourcePath }),
                require('autoprefixer')(), // CSS浏览器兼容
                require('cssnano')(), // 压缩css
              ],
            },
          },
        ],
        include: [path.resolve(__dirname, '..', 'node_modules')],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
      inject: true,
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    // new ExtractTextPlugin('styles.css'),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src/'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@components': path.resolve(__dirname, '../src/components/'),
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@model': path.resolve(__dirname, '../src/model'),
      '@service': path.resolve(__dirname, '../src/services'),
      '@utils': path.resolve(__dirname, '../utils'),
      '@images': path.resolve(__dirname, '../src/images'),
    },
  },
};

module.exports = config;
