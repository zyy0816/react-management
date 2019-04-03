
const menus = [
  {
    path: '/homePage',
    title: '首页',
    icon: 'pie-chart',
    children: [
      {
        title: '工作台',
        path: '/index',
      },
      {
        title: '分析页',
        path: '/user',
      },
      {
        title: '监控页',
        path: '/home',
      }
    ]
  },
  {
    path: '/baseSetting',
    title: '表单页',
    icon: 'form',
    children: [
      {
        title: '基础表单',
        path: './../page/home.js',
      },
      {
        title: '分步表单',
        path: './../page/home.js',
      }
    ]
  },
  {
    path: '/serveManage',
    title: '列表页',
    icon: 'table',
    children: [
      {
        title: '标准表格',
        path: './../page/home.js',
      },
      {
        title: '查询表格',
        path: './../page/home.js',
      }
    ]
  },
  {
    path: '/systemSettings',
    title: '详情页',
    icon: 'profile',
    children: [
      {
        title: '简单详情页',
        path: './../page/home.js',
      },
      {
        title: '复杂详情页',
        path: './../page/home.js',
      }
    ]
  },
  {
    path: '/systemSetting',
    title: '异常页',
    icon: 'warning',
    children: [
      {
        title: '403',
        path: './../page/home.js',
      },
      {
        title: '404',
        path: './../page/home.js',
      },
      {
        title: '500',
        path: './../page/home.js',
      }
    ]
  },
]

export default menus
