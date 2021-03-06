var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve('src'),
  entry: { 
    index: './index.ts', 
  },
  output: {
    path: path.resolve('build/'),
    filename: '[name].js',
    publicPath: '/public/assets/js/'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel!ts-loader'
      },
       {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.handlebars$/,
        exclude: /node_modules/,
        loader: 'raw'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.hbs']
  },
  node: {
   fs: "empty"
  },
  externals: {
    "jquery": "jQuery"
  },
  plugins: [
    new webpack.ProvidePlugin({        //this plugin allow us to provide global varibale
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.BannerPlugin('*********************\ngenerated by webpack\n***********************\n')
  ]
};

