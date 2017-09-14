const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ss = require('./src/ss_routes');

module.exports = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: 'babel-loader',
                include: __dirname + '/src',
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
              },
            {
                test: /\.(jpg|png|svg)/,
                use: 'file-loader?name=/assets/img-[hash:6].[ext]',
                include: __dirname + '/src'
            },
            {
              test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'file-loader?name=/assets/font-[hash:6].[ext]',
              include: __dirname + '/src'
            },
            {
                test: /\.(ico|otf|pdf)/,
                use: 'file-loader?name=[name].[ext]',
                include: __dirname + '/src/'
            }
        ],
    },
    watch: true,
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new StaticSiteGeneratorPlugin({entry: 'main', crawl: true}),
    ],
    externals: {
        'jsdom': 'window',
        'cheerio': 'window',
    }
};
