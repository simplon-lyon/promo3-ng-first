
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/bootstrap.ts',
    output: {
      filename:'./dist/bundle.js'
    },
    resolve: {
      extensions : ['.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
          { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
      },
    devtool: 'inline-source-map',
    
}