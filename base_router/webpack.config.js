const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        index:'./src/index.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,',/dist')
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:['babel-loader']
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'index.html',
            template:path.join(__dirname,'./template.html')
        })
    ],
    devServer:{
        contentBase:'./dist'
    }
}