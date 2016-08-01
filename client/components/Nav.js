import React, { Component } from 'react'
import cookie from 'react-cookie'
import SkyLight from 'react-skylight'
import levels from '../levels'

class Nav extends Component {

  handleKeyPress (e) {
    if (e.which === 27) {
      this.refs.storyBox.hide()
      this.refs.howToPlayBox.hide()
    }
  }

  componentDidMount () {
    var cookies = cookie.load('knownUser')
    // Check if cookie exists. If not, show modal and set cookie.
    if (!cookies) {
      cookie.save('knownUser', 'User has been here before')
      this.refs.storyBox.show()
    }
    // Listen for escape keypress to close modal
    document.addEventListener('keyup', this.handleKeyPress.bind(this))
  }

  componentWillUnmount () {
    document.removeEventListener('keyup', this.handleKeyPress.bind(this))
  }

  render () {
    return (
      <div className='navigation'>
        <div className='invisible-container'>
          <div className='logo-container'>
            <img src='/resources/images/b3-logo.svg' alt='Logo' className='logo' />
          </div>
        </div>
        <div className='levels-container'>
          <select
            className='levels'
            onChange={(e) => { this.props.SELECT_LEVEL(e.target.value) }}
            value={this.props.currentLevel.toString()}>
            {Object.keys(levels).map(
              num => {
                return (
                  <option
                    key={num}
                    className='level-option'
                    value={num}
                  >
                    Level {num}
                  </option>
                )
              })
            }
          </select>
          <div className='about' onClick={() => this.refs.storyBox.show()}>i</div>
          <SkyLight hideOnOverlayClicked={true} ref='storyBox' title='Here is the back story'  >
            <p>B3 is a little robot that is stuck on a space freighter that is hurtling towards earth...</p>
            <button onClick={() => { this.refs.storyBox.hide(); this.refs.howToPlayBox.show() }} >How to play</button>
          </SkyLight>
          <SkyLight hideOnOverlayClicked={true} ref='howToPlayBox' title='Here are the instructions'  >
            <p>Queue commands with the buttons below! Get B3 to the exit!</p>
            <button onClick={() => { this.refs.howToPlayBox.hide() }}>OK</button>
          </SkyLight>
        </div>
      </div>
    )
  }
}

export default Nav

// STYLE FROM VAI.
// close on esc     YES FOR FIRST MODAL
// how to play button

// onClick={() => { this.refs.storyBox.hide() }}
