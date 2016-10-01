import React, {Component} from 'react';
import * as ReactDOM from 'react-dom';

var test = 0;
class Home extends Component {
  render(){
    return (
      <div id="content_page">
        <h1>Home</h1>
      </div>
    );
  }
  componentWillMount(){
    test = 1;
    console.log('Home component will mount')
  };
  componentDidMount(){
    test = 2;
    console.log('Home component did mount')
  };
}

export default Home;
