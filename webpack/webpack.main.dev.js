const mainBaseConfig = require('./webpack.main.base.js');
const webpackMerge = require('webpack-merge');

const mainConfig = {
  mode: 'development',
};

module.exports = webpackMerge.merge(mainBaseConfig, mainConfig);
