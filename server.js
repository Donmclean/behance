import browserSync from 'browser-sync';
import morgan from 'morgan';
import fallback from 'express-history-api-fallback';
import express from 'express';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';

import webpackConfig from './webpack.config.babel';

const app = express();

app.use(morgan('dev'));

switch(process.env.NODE_ENV) {
    case 'development': {
        const SERVER_PORT = webpackConfig.devServer.port;

        const compiler = webpack(webpackConfig);

        console.log('webpackConfig.devServer: ', webpackConfig.devServer);

        new webpackDevServer(compiler, webpackConfig.devServer).listen(SERVER_PORT, 'localhost', (err) => {
            if (err) { console.error(err); }
            console.log(`Launching server on ${SERVER_PORT}...`);
        });

        break;
    }
    case 'production': {
        const SERVER_PORT = 3000;

        const root = webpackConfig.output.path;

        app.use(express.static(root));

        app.use(fallback('index.html', { root }));

        app.listen(SERVER_PORT, (err) => {
            if (err) { 
                console.error(err); 
            } else {
                console.log(`Launching server on ${SERVER_PORT}...`);

                browserSync.init({
                    proxy: `localhost:${SERVER_PORT}`,
                    port: SERVER_PORT
                });
            }
        });

        break;
    }
    default: {
        console.error("NODE_ENV is missing...");
    }
}