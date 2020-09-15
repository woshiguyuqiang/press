module.exports = {
    title: 'Adroi媒体API 接口文档',  // 设置网站标题
    description : 'Adroi',
    base: '/press/',
    themeConfig : {
      nav : [
          { text: '接口定义', link: '/apiword' },
          { text: '接口字段定义', link: '/api' },
          { text: '附录：错误码', link: '/error' }
      ],
      sidebar: [
          ['/', '简介'],
          ['/apiword', '根目录创建 apiword.md文件'],
          ['/api', '根目录创建 api.md文件'],
          ['/error', '根目录创建 error.md文件']
      ],
      sidebarDepth : 2
    }
}