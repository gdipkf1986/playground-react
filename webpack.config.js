/*global require*/
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

var vendors = Object.keys(require('./package.json').dependencies);

console.log(vendors);

const config = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:3000'
      , 'webpack/hot/only-dev-server'
      , './js/index'
    ],
    vendors: vendors
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/static/',
    publicPath: '/static/',
    filename: 'bundle.js',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    devFlagPlugin,
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin(/* chunkname => */'vendors', /* filename => */'vendors.js')
  ],
  module: {
    noParse: vendors,
    loaders: [
      {test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader?module!cssnext-loader')},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('css-loader?module!sass?sourceMap')}
    ]

  },
  resolve: {
    alias: {},
    extensions: ['', '.js', '.json']
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./css")]
  }
};

module.exports = config;
