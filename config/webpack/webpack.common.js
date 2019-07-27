/*globals require, module */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const root = require('../root/root');
const WebpackMergeJsonsPlugin = require("webpack-merge-jsons-plugin");
const WebpackCopyPlugin = require('copy-webpack-plugin');

module.exports = function(env) {
    return {
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loaders: [
                        'awesome-typescript-loader'
                    ],
                    exclude: /(node_modules)/
                },
                {
                    test: /\.scss$/,
                    loaders: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: {
                                    mode: 'local',
                                    localIdentName: "[name]__[local]___[hash:base64:5]"
                                }
                            },
                        },
                        {
                            loader: 'sass-loader'
                        },
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: './src/style/theme.scss',
                            },
                        },
                        {
                            loader: 'postcss-loader'
                        }
                    ]
                },
                {
                    test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
                    loader: 'url-loader?limit=100000'
                }
            ]
        },
        entry: {
            app: ['./src/main.tsx']
        },
        resolve: {
            extensions: ['.ts', ".tsx", ".js"],
                alias: {
                theme: root('src/style/theme')
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/main.html'
            }),
            new WebpackMergeJsonsPlugin({
                src: 'src/i18n/en/*.json',
                dest: 'i18n/en.json'
            }),
            new WebpackMergeJsonsPlugin({
                src: 'src/i18n/it/*.json',
                dest: 'i18n/it.json'
            }),
            new WebpackCopyPlugin([
                { from: 'src/resources', to: 'resources' }
            ]),
        ]
    }
};
