'use strict'
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'news' // page title

module.exports = {
    outputDir: 'docs',
    publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
    devServer: {
		open: true,
		host: process.env.VUE_APP_APP_HOST,
		port: process.env.VUE_APP_APP_PORT,
		https: false,
		hotOnly: false,
		proxy: {
			//配置跨域
			"/api": {
				target: process.env.VUE_APP_SERVER_API,
				changOrigin: true,
				ws: true,
				pathRewrite: {
					"^/api": ""
				}
			}
		}
	},
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: ['H:\\github\\news\\src\\plugins\\vant\\vant.less']
        }
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 37.5,
                        propList: ['*'],
                        // 该项仅在使用 Circle 组件时需要
                        // 原因参见 https://github.com/youzan/vant/issues/1948
                        selectorBlackList: ['van-circle__layer']
                    })
                ]
            },
            less: {
                modifyVars: {
                    red: '#277de2',
                    blue: '#3eaf7c',
                    orange: '#f08d49',
                    'text-color': '#111'
                }
            }
        }
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: name,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    }
};
