const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js',
  },
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.[chunkhash].js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        loader: [
          'babel-loader',
          'eslint-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html',
  })],
};
