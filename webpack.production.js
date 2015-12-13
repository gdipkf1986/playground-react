var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

var vendors = Object.keys(require('./package.json').dependencies);

module.exports = {
  entry: {
    app: './js/index.js',
    vendors: vendors
  },
  output: {
    path: __dirname + '/static/',
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    devFlagPlugin,
    new ExtractTextPlugin('app.output.css', {
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin(/* chunkname => */'vendors', /* filename => */'vendors.js')
  ],
  module: {
    noParse: vendors,

    loaders: [
      {test: /\.js$/, loaders: ['babel'], exclude: /node_modules/},
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
