// const greeter = require('./greeter.js');
// document.querySelector("#root").appendChild(greeter());


import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'

import App from './page/index.js'
import Home from './page/home.js'
import User from './page/user.js'

ReactDOM.render((
  <div>
    <HashRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path="/home" component={Home} />
        <Route path="/user" component={User} />
      </Switch>
    </HashRouter>
  </div>
  
), document.getElementById('root'))