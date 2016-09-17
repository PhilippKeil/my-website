import React, {Component} from 'react';

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
              <a className="navbar-brand" href="/">Philipp Keil</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a href="/">Home</a><span className="hover"></span></li>
                <li><a href="/news">News</a><span className="hover"></span></li>
                <li><a href="/About">Portfolio</a><span className="hover"></span></li>
                <li><a href="/Contact">Contact</a><span className="hover"></span></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          {/* children components are spawned here! */}
          {this.props.children}
        </div>
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
