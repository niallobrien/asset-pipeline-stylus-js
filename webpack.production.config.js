var Webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'assets', 'scripts');
var mainPath = [
  path.resolve(nodeModulesPath, 'stylus-mixins', 'index.styl'),
  path.resolve(__dirname, 'assets', 'styles', 'index.styl'),
  path.resolve(__dirname, 'assets', 'scripts', 'main.js')
]; 
var config = {
  devtool: 'eval',
  entry: mainPath,
  output: {
    path: buildPath,
    pathinfo: false,
    filename: '[name].js',
    publicPath: '/assets/scripts/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: [nodeModulesPath] },
      { test: /\.styl$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize!postcss-loader!stylus-loader') },      
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader') }
    ]
  },
  postcss: function () {
    return [ autoprefixer({ browsers: ['last 4 versions'] }) ];
  },
  plugins: [
    new ExtractTextPlugin("../styles/[name].css")
  ]
};

module.exports = config;