const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
// const TerserPlugin = require('terser-webpack-plugin');s
const BasicPlugin = require('../plugin/BasicPlugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

const config = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: [resolve('src')],
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
        },
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      { test: /\.(ts|tsx)?$/, loader: 'ts-loader' },
      // TODO处理css的写法过于冗余
      // 参考：https://juejin.im/post/5b195fcde51d4506b62cb0d3#comment
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
              plugins: (loader) => [
                require('postcss-import')({ root: loader.resourcePath }),
                require('autoprefixer')(), // CSS浏览器兼容
                require('cssnano')(), // 压缩css
              ],
            },
          },
        ],
        include: [resolve('src')],
        // CSS Modules需要单独处理 node_modules, 否则npm包引用中的样式文件将无法找到对应的类名
        exclude: [path.resolve(__dirname, '..', 'node_modules')],
      },
      // TODO
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
              plugins: (loader) => [
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
    new ParallelUglifyPlugin({
      cacheDir: '.cache/',
      uglifyES: {
        output: {
          beautify: false,
          comments: false,
        },
        warnings: false,
      },
    }),
    new BasicPlugin({ title: '自定义插件' }),
  ],
  resolve: {
    extensions: ['.js', '.json'],
    modules: [resolve('src'), resolve('node_modules')],
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
