const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const { HotModuleReplacementPlugin } = webpack;

module.exports = merge(common, {
  entry: {
    bundle: [
      'webpack-hot-middleware/client?reload=true',
      path.resolve(__dirname, '../src/frontend'),
    ],
  },
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [new HotModuleReplacementPlugin()],
});
