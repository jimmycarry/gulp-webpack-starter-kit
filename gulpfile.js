'use strict';
var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');
var devWebpackConfig = require('./webpack.config.dev');
var prodWebpackConfg = require('./webpack.config.prod');
var gutil = require('gulp-util');
var connect = require('gulp-connect');
var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var routes = require("./routes");
var app = new express();
var PORT = 5050;
var del = require('del');

var src = {
    html: 'src/html/*.html',
    assets: 'src/assets/**/*',
    vendor: 'src/vendor/**/*'
}
var dist = {
    root: 'prod/',
    html: 'prod/',
    style: 'prod/style',
    vendor: 'prod/js',
    assets: 'dist/assets'
};
//清理dist目录
gulp.task('clean', clean);
function clean(done) {
    console.log('clean dist');
    del.sync(dist.root);
    done()
}
//copy库文件
gulp.task('copyVendor', copyVendor)
function copyVendor() {
    console.log('copyVendor...');
    return gulp.src(src.vendor)
        .pipe(gulp.dest(dist.vendor));
}
//copy assets
gulp.task('copyAssets', copyAssets);
function copyAssets() {
    console.log('copyAssets');
    return gulp.src(src.assets)
        .pipe(gulp.dest(dist.assets))
}

/**
 * [html description]
 * @return {[type]} [description]
 */
gulp.task("html",html);
function html(){
    return gulp.src(src.html)
        .pipe(gulp.dest(dist.html))
}



/**
 * [connectServer description]
 * @return {[type]} [description]
 */
function connectServer(){
    connect.server({
        root: dist.root,
        port: 5050,
        livereload: true
    });
}
gulp.task("connectServer",connectServer);

/**
 * [watch description]
 * @return {[type]} [description]
 */
gulp.task("watch",watch);
function watch() {
    gulp.watch(src.html, html);
    gulp.watch("src/**/*.js", webpackDevelopment);
    gulp.watch(src.assets,copyAssets);
    gulp.watch(src.vendor,copyVendor);
    gulp.watch("dist/**/*").on('change', function(file) {
        gulp.src('dist/').pipe(connect.reload());
    });
}



var devConfig, devCompiler;
devConfig = Object.create(devWebpackConfig);
// devConfig.plugins = devConfig.plugins.concat(
//     new webpack.DefinePlugin({
//         "process.env": {
//             "NODE_ENV": JSON.stringify("development")
//         }
//     })
// );
devCompiler = webpack(devConfig);

gulp.task("webpackDevelopment", webpackDevelopment);
function webpackDevelopment() {
    devCompiler.run(function (err, stats) {
        if (err) {
            throw new gutil.PluginError("webpack:build-dev", err);
            return;
        }
        gutil.log("[webpack:build-dev]", stats.toString({
            colors: true
        }));

    });
}

/**
 * webpack develop server
 */
//devConfig.plugins = devConfig.plugins || [];
//devConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
gulp.task("webpackDevelopmentServer", webpackDevelopmentServer);
function webpackDevelopmentServer(done) {
    new WebpackDevServer(devCompiler, {
        contentBase: dist.root,
        lazy: false,
        hot: true
    }).listen(5050, 'localhost', function (err) {
        if (err) throw new gutil.PluginError('webpack-dev-server', err)
        gutil.log('[webpack-dev-server]', 'http://localhost:5050/')
        reload();
        done();
    });
}

gulp.task('webpackDevMiddleWare',webpackDevMiddleWare)
function webpackDevMiddleWare(done) {

//config.entry.main.unshift("webpack-dev-server/client?http://localhost:3000/", "webpack/hot/dev-server");
    let compiler = webpack(devWebpackConfig);

    app.use(webpackDevMiddleware(
        compiler,
        {
            noInfo: true,
            publicPath: devWebpackConfig.output.publicPath,
            stats: {
                colors: true
            },
        }
    ));
    app.use(webpackHotMiddleware(compiler));
    app.use(routes);

    app.listen(PORT, function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log('Listening on port %s. Open up http://localhost:%s/ in your browser.', PORT, PORT);
        }
    });
}


/**
 * [webpackProduction description]
 * @param  {Function} done [description]
 * @return {[type]}        [description]
 */
gulp.task("webpackProduction",webpackProduction);

function webpackProduction(done){
    var config = Object.create(prodWebpackConfg);
    webpack(config, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:production]", stats.toString({
            colors: true
        }));
        done();
    });
}


/**
 * [reload description]
 * @return {[type]} [description]
 */
gulp.task("reload", reload);
function reload() {
    connect.reload();
}

/**
 * [default]
 * */
gulp.task('default',['webpackDevMiddleWare']);

gulp.task('build',['clean','copyVendor','copyAssets','html','webpackProduction']);