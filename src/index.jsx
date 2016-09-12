// import react core and DOM manipulation
import React, { Component } from 'react';
import { render } from 'react-dom';

// import routing modules
import {Router, Route, browserHistory} from 'react-router';

// use ES6 classes for creation of react components
// it's often done with React.createClass({}), but this is best practice.
class Home extends Component {
    render(){
        return (<h1>Home</h1>);
    }
}

class Newsreader extends Component {
  render () {
    return (
      <h1>Newsreader</h1>
    );
  }
}

render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/news" component={Newsreader}/>
  </Router>,
  document.getElementById('container')
);
