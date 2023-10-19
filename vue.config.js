const { defineConfig } = require('@vue/cli-service');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'docs', // 打包的目录
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
