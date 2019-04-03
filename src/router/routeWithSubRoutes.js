import React from 'react';
import { Route } from 'react-router-dom'

//把 <Route> 组件重新包装
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} exact={route.exact ? true : false} render={props => (
    <route.component {...props} routes={route.routes ? route.routes : null} />
  )} />
)

export default RouteWithSubRoutes
