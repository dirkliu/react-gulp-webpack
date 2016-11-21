var webpack=require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:{
        'entry0':'./src/entry0.js',
        'entry1':'./src/entry1.js'
    },
    output:{
        path:'./dist',
        filename:'[name].[hash].js',
        chunkFilename:'[name].[hash].js'
    },

    module:{
        loaders:[{
            test: /\.html$/,
            loader: 'raw'
        },{
            test:/\.js$/,
            exclude:/node_modules/,
            loader:'babel-loader'
        },{
            test: /\.scss$/,
            loaders: ["style", "css", "resolve-url","sass"]
        },{
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url!resolve-url!img?progressive=true'
        }]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            }
        }),
        new webpack.optimize.CommonsChunkPlugin("init.js")
    ],

    devServer:{
        contentBase:'./bin',
        port:8000,
        inline:true,
        open:'http://localhost:8000/#/'
    }
}