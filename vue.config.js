// const path = require('path')
// const UglifyJS = require('uglify-es')
module.exports = {
    publicPath: './',
    productionSourceMap: false,
    filenameHashing: false,
    css: {
    // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        loaderOptions: {
            less: {
                javascriptEnabled: true,
                modifyVars: {
                }
            }
        }
    },
    pages: {
    // popup: {
    //   template: 'public/browser-extension.html',
    //   entry: './src/popup/override.background',
    //   title: 'Popup'
    // },
    // content: {
    //   template: 'public/browser-extension.html',
    //   entry: './src/content-scripts/override.background',
    //   title: 'Content'
    // },
    //     override: {
    //         template: 'public/index.html',
    //         entry: './src/override/index.js',
    //         title: '新标签页'
    //     }
    // pages: {
    //   template: 'public/browser-extension.html',
    //   entry: './src/pages/override.background',
    //   title: 'Standalone',
    //   filename: 'index.html'
    // },
    // devtools: {
    //   template: 'public/browser-extension.html',
    //   entry: './src/devtools/override.background',
    //   title: 'Devtools'
    // }
    },
    // devServer: {
    //   host: 'localhost',
    //   port: 3020
    // proxy: { // 设置代理
    //   '/api': {
    //     target: 'http://www.xxxxx.com/',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/api'
    //     }
    //   }
    // },
    // disableHostCheck: true
    // },
    // webpack的相关配置
    configureWebpack: {
    // 方式一：可以通过以下方式配置单独的js
    // entry: {
    //   content: './src/content/content.background',
    //   background: './src/background/background.background',
    //   pages: './src/pages/pages.background'
    // },
    // output: {
    //   filename: 'background/[name].background'
    // }
    },
    // 方式二：利用browserExtension插件配置单独的js
    pluginOptions: {
        browserExtension: {
            componentOptions: {
                background: {
                    entry: 'src/background/index.js'
                },
                contentScripts: {
                    entries: {
                    }
                }
            }
        }
    },
    // webpack的链式调用相关配置
    chainWebpack: (config) => {
        config.optimization.minimize(true)
        // 把原svg的配置清除,不然svg无法加载
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()

        config
            .module
            .rule('images')
            .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, {
                limit: 100000
            }))

    // 方式三：可以通过以下形式之间拷贝带压缩源文件
    // config.plugin('copy')
    //   .use(require('copy-webpack-plugin'),
    //     [
    //       [
    //         {
    //           from: path.resolve('./src', 'content/content.background'),
    //           to: 'background/content.background',
    //           transform: function (content) {
    //             return UglifyJS.minify(content.toString()).code
    //           }
    //         },
    //         {
    //           from: path.resolve('./src', 'background/background.background'),
    //           to: 'background/background.background',
    //           transform: function (content) {
    //             return UglifyJS.minify(content.toString()).code
    //           }
    //         }, {
    //           from: path.resolve('./src', 'pages/pages.background'),
    //           to: 'background/pages.background',
    //           transform: function (content) {
    //             return UglifyJS.minify(content.toString()).code
    //           }
    //         },
    //         {
    //           from: path.join(__dirname, 'public'),
    //           ignore: [
    //             'index.html'
    //           ]
    //         }
    //       ]
    //     ])
    }
}
