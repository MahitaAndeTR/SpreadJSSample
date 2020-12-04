const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        container: ['./src/container.main.ts'],
        app: ['./src/polyfills.ts', './src/app.main.ts']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].min.js'
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
}