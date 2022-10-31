const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve('./loader.js'),
            options: {
              startTag: '//$start',
              endTag: '//$end',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      SOMETHING: JSON.stringify('this is you'),
      // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
