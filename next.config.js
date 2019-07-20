const withImages = require('next-images');
const withSass = require('@zeit/next-sass');
const baseConfig = { distDir: 'dist' };
module.exports = withImages(withSass(baseConfig));
