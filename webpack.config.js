const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './app.js', 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
                output: {
                    comments: false,
                }
            },
            extractComments: false,
            cache: true
          })
        ]
    }
}

// webpack app.js -o bundle.js