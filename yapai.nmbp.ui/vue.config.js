/* jshint esversion:6*/

module.exports = {
  baseUrl: './',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    host: '127.0.0.1',
    port: 9099,
    before: app => {},
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8081',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
};
