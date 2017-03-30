const webpack = require('webpack');
const path = require('path');

const publicPath = path.resolve(__dirname, 'public');

module.exports = {
    entry: './src/App.js',
    output: {
        filename: './public/bundle.js',
        sourceMapFilename: './public/bundle.map'
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};