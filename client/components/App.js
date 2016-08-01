import React, { Component } from 'react'
import NavContainer from '../containers/NavContainer'
import CommandPaneContainer from '../containers/CommandPaneContainer'
import BoardContainer from '../containers/BoardContainer'
import cookie from 'react-cookie'
import SkyLight from 'react-skylight'

class App extends Component {

  componentDidMount () {
    console.log('refs', this.refs)
    var cookies = cookie.load('knownUser')
    if (!cookies) {
      console.log('user doesnt exist, set cookie, show modal')
      cookie.save('knownUser', 'User has been here before')
      this.refs.welcomeModal.show()
    }
  }

  render () {
    return (
      <div className='app'>
        <SkyLight hideOnOverlayClicked ref='welcomeModal' title='Hi, welcome to B3'>
          Do a bunch of stuff to get B3 to the exit.
        </SkyLight>
        <NavContainer />
        <BoardContainer />
        <CommandPaneContainer />
      </div>
    )
  }
}

export default App
