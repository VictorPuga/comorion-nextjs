const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const baseConfig = { distDir: 'dist' };
module.exports = withImages(withCSS(baseConfig));
