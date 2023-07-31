const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'monitorjs.min.js',
        clean: true // 在输出构建文件之前清空 output 指定的目录，5.20.0 +
    },
    target: ['web', 'es5'],
    optimization: {
        minimize: true, // 可省略，默认最优配置：生产环境，压缩 true。开发环境，不压缩 false
        minimizer: [
            // js 压缩
            new TerserPlugin({
                parallel: true, // 可省略，默认开启并行
                //删除注释
                extractComments: true,
                terserOptions: {
                    toplevel: true, // 最高级别，删除无用代码
                    ie8: true,
                    safari10: true,
                    compress: {
                        // 生产环境去除console
                        drop_console: true,
                        drop_debugger: true,
                        unused: true
                    }
                }
            })
        ]
    }
};
