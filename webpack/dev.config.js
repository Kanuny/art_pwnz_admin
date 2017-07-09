var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: './bin/static',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    modulesDirectories: [
      'src',
      'node_modules',
    ],
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: './src/*',
      },
    ],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: require('./babel.dev'),
    }]
  },
  eslint: {
    configFile: path.join(__dirname, './eslint.js'),
    useEslintrc: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'index.html',
      inject: true
    })
  ]
};
