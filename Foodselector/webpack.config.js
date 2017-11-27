var path = require('path');

module.exports = {

entry: path.join(__dirname,'./index.jsx'),
output: {
     path: 'C:\\workspaces\\react\\foodselector\\dev',
     filename: 'JSBundle.js'
},
module: {
    loaders: [
        {
            test: /.jsx?$/,
           
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: [
                    require.resolve('babel-preset-es2015'),
                    require.resolve('babel-preset-react')
                        ]
                    },
            
            },
            {
                test: /\.css$/,
                loaders: ["style","css"]

            }
            ]}
    



};

