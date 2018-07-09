import webpack from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';

import { getDefaultStats } from './webpack-utils';

const baseDir = process.cwd();
const srcDir = `${baseDir}/src`;
const tempDir = `${baseDir}/temp`;
const destDir = `${baseDir}/dist`;

const SERVER_PORT = 3000;

const config = {};

process.traceDeprecation = true;

config.context = baseDir;

config.entry = {
    index: [
        './src/js/index.js'
    ],
    vendor: ['react', 'react-dom', 'react-router-dom', 'react-redux','react-router-redux', 
    'ramda', 'prop-types']
};

config.output = {
    filename: 'assets/js/[name].js?v=[hash]',
    path: destDir,
    publicPath: '/',
    chunkFilename: 'assets/js/[name].js?v=[hash]'
};

config.resolve = {
    extensions: ['.js', '.jsx', '.json']
};

config.module = {
    rules: [
        //JAVASCRIPT
        {
            test: /\.jsx$|\.js$/,
            exclude: /(node_modules|vendor|bower_components)/,
            loaders: 'babel-loader'
        },
        //TEMPLATES (PUG)
        {
            test: /\.pug$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['pug-loader']
        },
        //IMAGES
        {
            test: /\.(jpe?g|png|gif|tif|svg|bmp)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
            loader: `file-loader?name=assets/images/[name].[hash].[ext]`
        }
    ]
};

config.plugins = [
    new HtmlWebpackPlugin({
        title: 'Don Mclean',

        template: 'src/template/index.pug',
        inject: 'body',
        hash: true,
        cache: true, //default
        showErrors: true, //default

        scripts: [
            // example
            // {
            //     src: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js',
            //     async: false,
            //     defer: false
            // }
        ],
        stylesheets: [
            // 'https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css'
        ]
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
    }),
    new ProgressBarPlugin({
        format: 'webpack [:bar] :percent (:elapsed secchunksToFileMaponds)'
    })
];

switch (process.env.NODE_ENV) {
    case "production": {
        config.devtool = 'sourcemap';
        config.bail = true;

        config.module.rules = config.module.rules.concat([
            //FONTS
            {
                test: /\.(woff|woff2|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: `file-loader?name=assets/fonts/[name].[hash].[ext]`
            }
        ]);

        config.plugins = config.plugins.concat([
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map?v=[hash]'
            }),
            new webpack.optimize.UglifyJsPlugin({
                parallel: true,
                mangle: true,
                sourceMap: true
            }),
            new webpack.HashedModuleIdsPlugin({
                hashFunction: 'sha256',
                hashDigest: 'hex',
                hashDigestLength: 20
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'assets/js/[name].js?v=[hash]',
                minChunks: 3
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: "manifest",
                minChunks: Infinity
            }),
            new CleanWebpackPlugin([destDir], {root: baseDir, verbose: true, dry: false}),
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            })
        ]);

        break;
    }
    case "development": {
        config.devtool = 'inline-source-map';

        config.bail = false;

        config.devServer = {
            port: SERVER_PORT,
            hot: true,
            contentBase: config.output.path,
            publicPath: config.output.publicPath,
            historyApiFallback: true,
            overlay: true,
            inline: true,
            stats: getDefaultStats(process.env.NODE_ENV),
            headers: { 'Access-Control-Allow-Origin': '*' }
        };

        config.entry.index = [].concat([
            'react-hot-loader/patch',
            `webpack-dev-server/client?http://localhost:${SERVER_PORT}`,
            'webpack/hot/dev-server'
        ], config.entry.index);

        config.module.rules = config.module.rules.concat([
            //FONTS
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?mimetype=application/font-woff"
            },
            {
                test: /\.(eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            //IMAGES
            {
                test: /\.(jpe?g|png|gif|tif|svg|bmp)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
                loader: 'url-loader'
            }
        ]);

        config.plugins = config.plugins.concat([
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpack.LoaderOptionsPlugin({
                debug: true
            }),
            new BrowserSyncPlugin(
                {
                    proxy: `http://localhost:${SERVER_PORT}`,
                    port: SERVER_PORT + 1
                },
                {
                    reload: false
                }
            )
        ]);

        break;
    }
    default: {
        break;
    }
}

module.exports = config;