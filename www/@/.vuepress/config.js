/**
 * 基本配置
 */
module.exports = {
  base: './', // 部署站点的基础路径
  title: 'Aleyn He\'s Personal Website',
  description: 'The official documentation site for Aleyn.js',
  host: '127.0.0.1',
  port: '1217',
  markdown: {
    lineNumbers: false, // 配置
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      // md.use(require('markdown-it-xxx'))
    }
  },
  configureWebpack: (config, isServer) => {
    // config.resolve.alias['@alias'] = 'www/@'
  },
  chainWebpack: (config, isServer) => {
    // config 是 ChainableConfig 的一个实例
  },
  plugins: []
}
