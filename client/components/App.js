import React, { Component } from 'react'
import Nav from './Nav'
import Board from './Board'
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
        <Board />
        <CommandPaneContainer />
      </div>
    )
  }
}

export default App
