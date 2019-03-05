// const greeter = require('./greeter.js');
// document.querySelector("#root").appendChild(greeter());


import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import 'antd/dist/antd.min.css';
import './index.css';

import App from './page/index.js'
import Home from './page/home.js'
import User from './page/user.js'

import Container from './components/mainLayout/mainLayout.js'

ReactDOM.render((
  <div>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Container>
          <Route path="/home" component={Home} />
          <Route path="/user" component={User} />
        </Container>
      </Switch>
    </HashRouter>
  </div>
  
), document.getElementById('root'))