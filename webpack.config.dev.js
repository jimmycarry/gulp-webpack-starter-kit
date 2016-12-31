var webpack = require('webpack');
var glob = require('glob');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var config = {
    entry: {
        vendor: ['react', 'react-dom','material-ui','redux','redux-immutable','react-router','react-router-redux','redux-saga','reselect'],
        app: ["webpack-hot-middleware/client?quiet=true", './src/com/index.js']

    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.css', '.less'], // resolve 指定可以被 import 的文件后缀
        alias: []
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0', 'react'],
                env: {
                    // only enable it when process.env.NODE_ENV is 'development' or undefined
                    development: {
                        plugins: [["react-transform", {
                            transforms: [{
                                transform: "react-transform-hmr",
                                // if you use React Native, pass "react-native" instead:
                                imports: ["react"],
                                // this is important for Webpack HMR:
                                locals: ["module"]
                            }]
                            // note: you can put more transforms into array
                            // this is just one of them!
                        }]]
                    }
                }
            }
        }, {
            test: /\.css/,
            loader: 'style!css!postcss',
            exclude: /node_modules/,
        }, {
            test: /\.less$/,
            loader: `style!css?modules&localIdentName=[name]__[local]-[hash:base64:5]!less`,
            exclude: /node_modules/
        },{
            test: /\.(jpe?g|png|gif)/,
            // loader: [
            //     'url?limit=4000&name=images/[name][hash:8].[ext]',
            //     'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}'
            // ]
            loader:  'url?limit=4000&name=images/[name][hash:8].[ext]',
        },]
    },
    debug: true,
    devtool: "eval",
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("development")
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('style.css'),

    ],
    postcss: [autoprefixer({browsers:['last 8 versions']})]
};

module.exports = config;