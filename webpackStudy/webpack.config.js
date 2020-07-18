const path = require('path');
const webpack = require('webpack');
const htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
    //入口文件地址
    entry: path.join(__dirname, './src/main.js'),
    //输出文件地址
    output: {
        //输出文件路径
        path: path.join(__dirname, './dist'),
        //输出文件名字
        filename: 'bundle.js',
    },
    devServer: {
        open: true,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlwebpackplugin({
            template: path.join(__dirname, './index.html'),
            filename: 'index.html',
        }),
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(jpg)|(png)|(gif)|(bmp)|(jpeg)$/, use: 'url-loader?limit=31341' },
        ],
    }
}