
import React from 'react'
import { HashRouter, Switch, Redirect } from 'react-router-dom'
// import { ConnectedRouter } from 'react-redux';
import 'antd/dist/antd.min.css';
import './../index.css';

import routes from './setRoute';
import RouteWithSubRoutes from './routeWithSubRoutes';




// import App from './../page/index.js'
// import Home from './../page/home.js'
// import User from './../page/user.js'

// import Container from './../components/mainLayout/mainLayout.js'
// import Login from './../components/login/login.js'

// import Show from './../actionReduxPage/page/show.js'

// import HomePage from './../page/homePage'

class Router extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          {
            routes && routes.map((route, index) => (<RouteWithSubRoutes {...route} key={index} />))
          }
          <Redirect to="/" />
        </Switch>
      </HashRouter>
      // <HashRouter>
      //   <Switch>
      //     <Route exact path="/" component={App} />
      //     <Route exact path="/login" component={Login} />
      //     <Container>
      //       <Route path="/home" component={Home} />
      //       <Route path="/user" component={User} />
      //       <Route path="/show" component={Show} />
      //       <Route path="/homePage" component={HomePage} />
      //     </Container>
      //   </Switch>
      // </HashRouter>
    )
  }
}

export default Router