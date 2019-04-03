import Login from './../../components/login/login.js'
/**
 * title  链接名称
 * path 路由地址
 * exact  路由渲染完全匹配
 * component  路由组件
 * routes 子路由
 */
const routes = [
  {
    title: '登录',
    path: '/account/login',
    component: Login,
  }
]

export default routes
