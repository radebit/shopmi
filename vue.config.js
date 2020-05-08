module.exports = {
    devServer: {
        host: 'localhost',
        port: 7006,
        proxy: {
            '/api': {
                target: 'http://localhost:7005',
                changeOrigin: true,
                pathRewrite:{
                    '/api':""
                }
            }
        }
    }
}