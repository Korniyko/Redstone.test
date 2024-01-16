/* eslint import/no-extraneous-dependencies: off */

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';

import webpackConfig from '../../../webpack/webpack.dev';
// @ts-ignore

const bundler = webpack(webpackConfig);
const devMiddleware = [
  webpackDevMiddleware(bundler, {
    publicPath: webpackConfig.output.publicPath,
  }),
  webpackHotMiddleware(bundler),
];

export default devMiddleware;