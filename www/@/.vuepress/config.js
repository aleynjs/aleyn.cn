/**
 * 基本配置
 */
module.exports = {
  base: process.env.NODE_ENV === 'production' ? './' : '/', // 部署站点的基础路径
  title: 'Aleyn.CN',
  description: 'The official documentation site for Aleyn.js',
  head: [
    ['link', { rel: 'icon', href: '/public/favicon.ico' }]
  ],
  host: '127.0.0.1',
  port: '1217',
  dest: 'www/@/.vuepress/dist',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/guide/' },
      {
        text: '笔记',
        items: [
          { text: '工具', link: '/note/devtools/gh-pages' },
          { text: '前端', link: '/note/fe/' },
          { text: '后端', link: '/note/be/' }
        ]
      }
    ],
    sidebar: 'auto',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    repo: 'aleynjs/aleyn.cn'
  },
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
    config.resolve.alias['@alias'] = process.cwd() + '/www/@/'
  },
  chainWebpack: (config, isServer) => {
    // config 是 ChainableConfig 的一个实例
  },
  plugins: []
}
