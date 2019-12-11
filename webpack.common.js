const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    mode: "development",
    context: __dirname,
    entry: ["./app/root/Home.bs.js"],
    output: {
      path: path.resolve('public/build/'),
      filename: '[name].[hash].bundle.js',
      publicPath: '/'
    },
    resolve: {
      extensions: [".js", ".css"]
    },

    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: [
            { loader: 'style-loader'},
            {loader: 'css-loader'},
            { loader: 'sass-loader'},
          ]
        },
        {
          test: /\.(png|jp(e*)g|svg)$/,
          use: [
            { 
              loader: 'url-loader',
              options: {
                limit: 8000,
              }
            }
          ]	
        },
        {
          test: /favicon\.ico$/,
          loader: 'url-loader',
          query: { 
            limit: 1,
            name: '[name].[ext]',
          },
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "index.html",
      }),
      new CleanWebpackPlugin(['public/build/*'],{root: __dirname, verbose: true}),
      new Dotenv(),
      new CompressionPlugin(),
    ],
};
