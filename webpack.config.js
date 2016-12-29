var webpack = require('webpack');
var glob = require('glob');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
console.log(__dirname+'/dist/js');
var config = {
    entry: {
        vendor: ['react', 'react-dom'],
        app:['./src/com/index.js']

    },
    output: {
        path: __dirname + '/dist/js/',
        filename:'[name].js',
        publicPath:'/dist/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
        },{
            test: /\.css/,
            //loader: ExtractTextPlugin.extract("style", "css"),
            loader: ExtractTextPlugin.extract("style", "css"),
            exclude: /node_modules/,
        },{
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style", 'css?modules&localIdentName=[name]__[local]-[hash:base64:5]!less', {
                //publicPath: '../'
            }),
            include: path.join(__dirname, 'src'),
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new ExtractTextPlugin('style.css')
    ]
};
module.exports=config;