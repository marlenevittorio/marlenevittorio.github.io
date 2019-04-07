/*globals require, module */
const root = require('../root/root'),
    webpackMerge = require('webpack-merge'),
    commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig('LOCAL'), {
    mode: "development",
    output: {
        path: root('build'),
        filename: '[name].[hash].bundle.js',
        sourceMapFilename: '[name].map'
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                pathRewrite: {'^/api' : ''}
            }
        },
        stats: {
            colors: true,
            hash: false,
            version: false,
            timings: false,
            assets: true,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: false,
            errors: true,
            errorDetails: true,
            warnings: true,
            publicPath: false
        },
        port: 3000,
        host: 'localhost',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        contentBase: root('build')
    },
    devtool: 'eval-source-map'
});
