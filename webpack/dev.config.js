var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: './bin',
    filename: 'app.bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: './src/*',
      }
    ],
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: require('./babel.dev')
    }]
  },
  eslint: {
    configFile: path.join(__dirname, './eslint.js'),
    useEslintrc: false
  },
};
