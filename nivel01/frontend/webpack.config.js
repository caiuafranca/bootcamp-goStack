
const path = require('path')
module.exports = {
    entry: path.resolve(__dirname,'src', 'index.js'),
    output: {
        path: path.resolve(__dirname,'public'),
        filename: 'bundle.js'
    },
    
    devServer:{
        contentBase: path.resolve(__dirname,'public'),
        port: 3001,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
}