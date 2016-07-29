import React, { Component } from 'react'
import Nav from './Nav'
import CommandPane from './CommandPane'

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
        <CommandPane />
      </div>
    )
  }
}

export default App
