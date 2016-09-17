// import react core and DOM manipulation
import React, { Component } from 'react';
import { render } from 'react-dom';

// import routing modules
import {Router, Route, browserHistory} from 'react-router';

// import react components
import Main from './common/main.component.jsx';
import Home from './common/home.component.jsx';
import News from './common/news.component.jsx';
import About from './common/about.component.jsx';

render(
  <Router history={browserHistory}>
    <Route component={Main}>
      <Route path="/" component={Home}/>
      <Route path="/news" component={News}/>
      <Route path="/About" component={About}/>
      <Route path="/contact"/>
    </Route>
  </Router>,
  document.getElementById('container')
);
