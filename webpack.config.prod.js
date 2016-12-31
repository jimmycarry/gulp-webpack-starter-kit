var webpack = require('webpack');
var glob = require('glob');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
console.log(__dirname+'/dist/js');
var config = {
    entry: {
        vendor: ['react', 'react-dom','material-ui','redux','redux-immutable','react-router','react-router-redux','redux-saga','reselect'],
        app:'./src/com/index.js'

    },
    output: {
        path: __dirname + '/prod/',
        filename:'js/[name].js',
        publicPath:'/dist/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.css','.less'], // resolve 指定可以被 import 的文件后缀
        alias: [] //指定包路径，这样能够减少webpack搜索硬盘文件的时间
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
            loader: ExtractTextPlugin.extract("style", "css!postcss"),
            exclude: /node_modules/,
        },{
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style", 'css?modules&localIdentName=[name]__[local]-[hash:base64:5]!less!postcss', {
                //publicPath: '../'
            }),
            include: path.join(__dirname, 'src'),
            exclude: /node_modules/
        },{
            test: /\.(jpe?g|png|gif)/,
            // loader: [
            //     'url?limit=4000&name=images/[name][hash:8].[ext]',
            //     'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}'
            // ]
            loader:  'url?limit=4000&name=images/[name][hash:8].[ext]',
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.bundle.js'),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('style/style.css'),

    ],
    postcss: [autoprefixer({browsers:['last 3 versions']})],
};
// var files = glob.sync('./src/com/**/index.js');
// var newEntries = files.reduce(function(memo, file) {
//     var name = /.*\/(.*?)\/index\.js/.exec(file)[1];
//     memo[name] = entry(name);
//     return memo;
// }, {});
// config.entry = Object.assign({}, config.entry, newEntries);
// /**
//  * [entry description]
//  * @param  {[type]} name [description]
//  * @return {[type]}      [description]
//  */
// function entry(name) {
//     return './src/' + name + '/index.js';
// }

module.exports=config