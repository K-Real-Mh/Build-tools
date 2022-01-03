const {resolve} = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: resolve(__dirname, 'index.html') }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    module: {
        rules: [
            { test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            { test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(mp3|mp4)$/i,
                loader: "file-loader"
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: "asset",
                use: [
                    {
                        loader: ImageMinimizerPlugin.loader,
                        options: {
                            minimizer: {
                                implementation: ImageMinimizerPlugin.squooshMinify,
                                options: {
                                    encodeOptions: {
                                        mozjpeg: {
                                            quality: 75,
                                        },
                                    },
                                },
                            },
                        },

                    }
                ]
            },
        ]
    }
};