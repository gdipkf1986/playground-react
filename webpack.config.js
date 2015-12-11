/*global require*/
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './js/index'
  ],
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
    new ExtractTextPlugin('app.output.css', {
      allChunks: true
    })
  ],
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader?module!cssnext-loader')},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('css-loader?module!sass?sourceMap')}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./css")]
  }
};
