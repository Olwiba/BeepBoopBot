import React, { Component } from 'react'
import Nav from './Nav'
import CommandPane from './CommandPane'
import CommandPaneContainer from '../containers/CommandPaneContainer'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      // state goes here
    }
  }

  render () {
    return (
      <div className='app'>
        <Nav />
        <CommandPaneContainer />
      </div>
     )
  }
}

export default App
