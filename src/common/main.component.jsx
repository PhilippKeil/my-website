import React, {Component} from 'react';

// use ES6 classes for creation of react components
// it's often done with React.createClass({}), but this is best practice.
class Main extends Component {
    render(){
        return (
          <div>
            <h1>NAVBAR</h1>
            <div className="container">
              {this.props.children}
            </div>
          </div>
        );
    }
}

export default Main;
