const config = {
    projectName: 'home',
    title: '方运江个人官网',
    favicon: 'img/favicon.ico',
    logo: 'img/logo.png',
    colors: {
        primaryColor: '#FF8C00',
        secondaryColor: '#F0E68C',
        activeColor: '#FF4040',
        tintColor: '#005068'
    },
    highlight: {
        theme: 'solarized-dark'
    },
    documentPath: 'docs', //默认为docs
    styles: [],
    scripts: [],
    footer: 'lib/Footer.js', //设置footer
    sideNavCollapsible: true, // 侧边栏是否可以折叠
    homePage: {
        name: '个人资料',
        path: 'index.md',
        container: {
            dom: 'div', // default: div
            props: { className: 'resumeContainer' },
        }
    },
    menus: [
        {
            name: '首页',
            mainPage: '/home',
        },
    ]
};

module.exports = config;
