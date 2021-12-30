const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({ template: resolve(__dirname, 'index.html') }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new BundleAnalyzerPlugin(),
    ],
    module: {
        rules: [
            { test: /\\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            { test: /\\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, // 4
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|mp3)$/i,
                // include: SRC,
                loader: 'file-loader',
            },
        ]
    },
};