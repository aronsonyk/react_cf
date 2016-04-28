import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

const app = document.getElementById('app')

import Store from './routes/Store.jsx'
import Home from './routes/Home.jsx'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Home}/>
    <Route path='store' component={Store}/>
  </Router>, 
app)