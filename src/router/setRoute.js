
// 你也可以在第一层路由加载主布局容器，然后在子路由加载菜单和内容路由

import MainLayout from '../components/mainLayout/mainLayout'
import AccountLayout from '../components/login/login'
import mainRoutes from './main'
import accountRoutes from './account'

/**
 * title  链接名称
 * path 路由地址
 * exact  路由渲染完全匹配
 * component  路由组件
 * routes 子路由
 */
const routes = [
  {
    title: '用户布局',
    path: '/account',
    component: AccountLayout,
    routes: accountRoutes
  },
  {
    title: '基本布局',
    path: '/',
    component: MainLayout,
    routes: mainRoutes
  },

]

export default routes
