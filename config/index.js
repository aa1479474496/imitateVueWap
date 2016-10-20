// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: true,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        env: require('./dev.env'),
        port: 7070,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/erpServer': {
                target: 'localhost:8080/',
                changeOrigin: true,
                pathRewrite: {
                    '^/erpServer': ''
                }
            },
            '/data/saas_img/mall': {
                target: 'http://images.tputiandi.com/data/saas_img/mall/',
                changeOrigin: true,
                pathRewrite: {
                    '^/data/saas_img/mall': ''
                }
            }

        },
        cssSourceMap: false
    }
}