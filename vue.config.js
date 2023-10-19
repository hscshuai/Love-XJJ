const { defineConfig } = require('@vue/cli-service');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'docs', // 打包的目录
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
        args[0].title = '专属晶晶小宝贝的'
        return args
    })
  },
  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: 'public/config/CNAME', to: '' },
        ],
      }),
    ],
  }
})
