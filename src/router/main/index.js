
import HomePage from './../../page/homePage'
import User from './../../page/user'
/**
 * title  链接名称
 * path 路由地址
 * exact  路由渲染完全匹配
 * component  路由组件
 * routes 子路由
 */
const routes = [
  {
    title: '首页',
    path: '/homePage',
    component: HomePage,
    permission: 'test',
  },
  {
    title: '分析页',
    path: '/user',
    component: User,
    permission: 'test',
  }
]

export default routes
