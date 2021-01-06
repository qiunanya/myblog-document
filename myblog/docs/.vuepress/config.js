module.exports = {
    title: '幸运的糖果前端技术文档',  // 设置网站标题
    description : 'THML5、CSS3.0、JAVASCRIPT、Vue2',
    base : '/myblog/v1/',
    themeConfig : {
        port: 8081,
        head:[
            ['link',{
                rel: 'icon',
                href: '/logo.png'
            }]
        ],
        nav : [
            { text: '指南', link: '/guide/' },
            { text: '接口字段定义', link: '/api' },
            { text: '附录：错误码', link: '/error' },
            { text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/language/chinese'},
                    { text: 'English', link: '/language/english'}
                ]
            }
        ],
        sidebarDepth : 2,
        sidebar: [
            {
                title: 'Guide',
                collapsable: false,
                children: ['/guide/']
            } 
        ],
        // sidebar: {
        //     '/' : [
        //         "/", //指的是根目录的md文件 也就是 README.md 里面的内容
        //         "/guide/README.md",  // 根目录创建 guide.md文件
        //         "api",// 根目录创建 api.md文件
        //         "error" // 根目录创建 error.md文件
        //     ]
        // },
    }
}