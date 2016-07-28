import React, { Component } from 'react'
import Nav from './Nav'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      // state goes here
    }
  }

  render () {
    return (
      <div>
        <Nav />
      </div>
    )
  }
}

export default App
