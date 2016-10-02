import React, {Component} from 'react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// use ES6 classes for creation of react components
// it's often done with React.createClass({}), but this is best practice.
class NavElement extends Component{
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  };

  onMouseEnterHandler() {
    console.log('enter!');
    this.setState({
      active: true
    })
  };

  onMouseLeaveHandler() {
    console.log('leave!');
    this.setState({
      active: false
    })
  };

  setClasses() {
    return (
      'nav-animation-span ' +
      (this.state.active? 'active': '')
    );
  };

  render() {
    return (
      <li
      onMouseEnter={this.onMouseEnterHandler}
      onMouseLeave={this.onMouseLeaveHandler}>
        <Link to={this.props.to}>{this.props.name}</Link>
        <span className={this.setClasses()}></span>
      </li>
    );
  };
};

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
                <NavElement to="/" name="Home"/>
                <NavElement to="/news" name="News"/>
                <NavElement to="/portfolio" name="Portfolio"/>
                <NavElement to="/about" name="About"/>
              </ul>
            </div>
          </div>
        </nav>
        {
          // Reqrite to new component using transitionend events for transition
          // so I dont have to use position:absolute
        }
        <ReactCSSTransitionGroup
          component="div"
          style={{position: 'relative'}}
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {React.cloneElement(this.props.children, {
            key: location.pathname
          })}
        </ReactCSSTransitionGroup>
        <footer className="footer">
          <div className="container">
            <p className="text-muted">Place sticky footer content here.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Main;
