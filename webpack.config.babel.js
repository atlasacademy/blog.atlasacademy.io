// const BrotliPlugin = require('brotli-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    /^node_modules$/
                ],
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    // {
                    //     loader: 'postcss-loader', // Run post css actions
                    //     options: {
                    //         plugins: function () { // post css plugins, can be exported to postcss.config.js
                    //             return [
                    //                 require('precss'),
                    //                 require('autoprefixer')
                    //             ];
                    //         }
                    //     }
                    // },
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: 'style.css',
            chunkFilename: '[name].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ]
};
