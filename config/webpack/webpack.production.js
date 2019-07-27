/*globals require, module */
const root = require('../root/root'),
    webpackMerge = require('webpack-merge'),
    commonConfig = require('./webpack.common.js');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = webpackMerge(commonConfig('LOCAL'), {
    mode: "production",
    performance: {
        hints: false
    },
    output: {
        path: root('dist'),
        filename: '[name].[contenthash].bundle.js',
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
});
