
import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import 'antd/dist/antd.min.css';
import './../index.css';

import App from './../page/index.js'
import Home from './../page/home.js'
import User from './../page/user.js'

import Container from './../components/mainLayout/mainLayout.js'
import Login from './../components/login/login.js'
import Show from './../actionReduxPage/page/show.js'

class Router extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={Login} />
          <Container>
            <Route path="/home" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/show" component={Show} />
          </Container>
        </Switch>
      </HashRouter>
    )
  }
}

export default Router