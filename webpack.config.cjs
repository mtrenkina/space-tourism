const path = require('path');

module.exports = {
  entry: './source/js/script.js',
  devtool: 'source-map',
  watch: true,
  output: {
    filename: 'script.bundle.js',
    path: path.resolve(__dirname, 'build/js'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/, // для всех javascript-файлов
        exclude: /node_modules/, // за исключением папки с загружаемыми пакетами
        use: {
          loader: 'babel-loader', // используем транспайлер Babel
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },

};
