import React, { Component, PropTypes } from 'react';
import Nav from './Nav';

class App extends Component {
  static propTypes = {
    //propTypes go here
  };

  constructor(props) {
    super(props);
    this.state = {
      //state goes here
    };
  }

  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}

export default App;
