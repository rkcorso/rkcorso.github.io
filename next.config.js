
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  cssModules: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{reponame}' : ''
});