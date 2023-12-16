module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: '@import "@/sass/_variables.sass"'
            }
        }
    },
    transpileDependencies: ['vuetify'],
    outputDir: 'dist/public',
    devServer: {
        port: '8081',
        proxy: {
            '/api': {
                target: 'http://localhost:8080'
            }
        }
    }
}