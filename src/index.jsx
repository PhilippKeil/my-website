// import react core and DOM manipulation
import React, { Component } from 'react';
import { render } from 'react-dom';

// import routing modules
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import {browserHistory as history} from 'react-router';

/*
// custom history for using custom basenames
import {createBrowserHistory} from 'history';
const history = useRouterHistory(createBrowserHistory)({
  basename: '/'
})
*/

// import react components
import Main from './common/main.component.jsx';
import Home from './common/home.component.jsx';
import News from './common/news.component.jsx';
import Portfolio from './common/portfolio.component.jsx';
import About from './common/about.component.jsx';

render(
  <Router history={history}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path="/news" component={News}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>,
  document.getElementById('container')
);

/*
<Router history={history}>
  <IndexRoute component={Main}>
    <Route path="/" component={Home}/>
    <Route path="/news" component={News}/>
    <Route path="/About" component={About}/>
    <Route path="/contact"/>
  </Route>
</Router>
*/
