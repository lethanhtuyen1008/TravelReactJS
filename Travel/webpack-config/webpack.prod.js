const merge = require("webpack-merge");
const common = require("../webpack.common.js");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require("dotenv-webpack");


const paths = require("./paths");

const config = {
  output: {
    path: paths.appBuild,
    chunkFilename: "static/js/[name].[hash].chunk.js", 
    filename: "static/js/[name].[hash].bundle.js", // format name của bundle
    publicPath: "/" 
  },
  devtool: "cheap-module-eval-source-map",
  mode: "production",
  optimization: {
        minimizer: [
      new UglifyJsPlugin({
        exclude: /node_modules/,
        uglifyOptions: {
          warnings: false,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: true,
          keep_fnames: true
        }
      })
    ]
  },
  plugins: [
  
    new HtmlWebpackPlugin({
      inject: true,
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }, 
      template: "public/index.html",
      filename: "index.html"
    }),
    new Dotenv(),
    new CopyPlugin([
      { 
        from: paths.appPublic, 
        to: paths.appBuild,
        ignore: ['index.html']
      }
    ]),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "static/css/[name].[hash].css",
      chunkFilename: "static/css/[id].[hash].css"
    })
  ]
};

module.exports = merge(common, config);
