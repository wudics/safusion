const path = require('path');

module.exports = {
    // 模式配置
    // mode: 'development', // 开发模式
    mode: 'production', // 生产模式

    // 入口文件
    entry: './src/index.js',

    // 输出配置
    output: {
        filename: 'safusion.bundle.js', // 输出文件名
        path: path.resolve(__dirname, 'dist') // 输出路径
    },

    // 模块配置
    module: {
        rules: [] // 不需要处理任何文件
    },

    // 插件配置
    plugins: []
};