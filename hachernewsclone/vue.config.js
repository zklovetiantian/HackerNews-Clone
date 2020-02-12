const path = require("path");
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack: config=>{
        config.resolve.alias
            .set('style', resolve('src/assets/style'))
            .set('images', resolve('src/assets/images'))
            .set('router', resolve('src/router'))
            .set('pages', resolve('src/pages'))
    }
}