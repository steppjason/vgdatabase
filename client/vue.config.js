const path = require('path')
require('dotenv/config')

module.exports = {
    outputDir: path.resolve(__dirname, process.env.VUE_OUTPUT_DIR),
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:' + process.env.PORT
            }
        }
    }
}