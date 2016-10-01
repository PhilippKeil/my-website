import React, {Component} from 'react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// use ES6 classes for creation of react components
// it's often done with React.createClass({}), but this is best practice.
class Main extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">Philipp Keil</Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link><span className="hover"></span></li>
                <li><Link to="/news">News</Link><span className="hover"></span></li>
                <li><Link to="/About">Portfolio</Link><span className="hover"></span></li>
                <li><Link to="/Contact">Contact</Link><span className="hover"></span></li>
              </ul>
            </div>
          </div>
        </nav>
        <ReactCSSTransitionGroup
          component="div"
          className="container"
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {React.cloneElement(this.props.children, {
            key: location.pathname
          })}
        </ReactCSSTransitionGroup>
        {/*<div className="container" id="content_container">
          {// children components are spawned here! }
          {this.props.children}
        </div>*/}
      </div>
    );
  }
  componentWillMount() {
    console.log('main will mount');
  }
  componentDidMount() {
    console.log('main did mount');
  }
}

export default Main;
