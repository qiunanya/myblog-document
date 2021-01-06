module.exports = {
    title: '幸运的糖果前端技术前端文档',  // 设置网站标题
    description : 'Adroi',
    base : '/myblog/v1',
    themeConfig : {
        nav : [
            { text: '指南', link: '/guide/' },
            { text: '接口字段定义', link: '/api' },
            { text: '附录：错误码', link: '/error' }
        ],
        sidebar: {
            '/' : [
                "/", //指的是根目录的md文件 也就是 README.md 里面的内容
                "/guide/README.md",  // 根目录创建 guide.md文件
                "api",// 根目录创建 api.md文件
                "error" // 根目录创建 error.md文件
            ]
        },
        sidebarDepth : 2
    }
}