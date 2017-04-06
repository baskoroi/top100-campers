const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const publicPath = path.resolve(__dirname, 'public');

module.exports = {
    entry: {
        app: './src/App.js',
        
    },
    output: {
        filename: './public/[name].js',
        sourceMapFilename: './public/[name].map'
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("./public/[name].css")
    ]
};
