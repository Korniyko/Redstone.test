const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {

    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist/frontend'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        fallback: {
            os: false,
            moment: false,
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/frontend/index.html')

        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/frontend/img',
                    to: './img',
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',

                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: process.env.NODE_ENV === 'local',
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]', 
                            outputPath: 'img/', 
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    }
}
