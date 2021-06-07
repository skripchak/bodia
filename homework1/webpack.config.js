const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: ['./scss/main.scss'],
  output: {
    path: path.resolve(__dirname, 'assets'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/main.css',
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'css-loader?-url',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
};
