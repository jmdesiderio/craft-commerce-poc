// const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const __PRODUCTION__ = process.env.NODE_ENV === 'production';
const DIST_DIR = path.resolve('public_html/assets');
const SRC_DIR = path.resolve('src');

// instantiate css extraction
const extractCSS = new ExtractTextPlugin('/style.min.css');

const config = {
  entry: SRC_DIR + '/index.js',
  output: {
    path: DIST_DIR,
    filename: 'app.min.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: SRC_DIR,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.scss$/,
        include: SRC_DIR,
        loader: extractCSS.extract(['css?sourceMap', 'postcss', 'sass?sourceMap'])
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    extractCSS
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ]
};

if (__PRODUCTION__) {}

module.exports = config;
