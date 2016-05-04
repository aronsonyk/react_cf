import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import Home from './routes/Home'
import Sign from './routes/Sign'

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const APP = document.getElementById('app')

// Render the main component into the dom
ReactDOM.render(
<Router history={ browserHistory }>
  <Route path="/" component={Home}/>
  <Route path='sign' component={Sign}/>
</Router>
, APP);
