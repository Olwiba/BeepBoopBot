import React, { Component } from 'react'
import Sound from 'react-sound'
import NavContainer from '../containers/NavContainer'
import CommandPaneContainer from '../containers/CommandPaneContainer'
import BoardContainer from '../containers/BoardContainer'
import BackgroundtrackContainer from '../containers/BackgroundtrackContainer'

class App extends Component {

  render () {
    return (
      <div className='app'>
        <NavContainer />
        <BoardContainer />
        <CommandPaneContainer />
        <BackgroundtrackContainer />
      </div>
    )
  }
}

export default App
