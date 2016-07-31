import React, { Component } from 'react'
import NavContainer from '../containers/NavContainer'
import CommandPaneContainer from '../containers/CommandPaneContainer'
import BoardContainer from '../containers/BoardContainer'

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
        <NavContainer />
        <BoardContainer />
        <CommandPaneContainer />
      </div>
    )
  }
}

export default App
