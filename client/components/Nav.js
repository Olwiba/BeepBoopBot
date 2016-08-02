import React, { Component } from 'react'
import cookie from 'react-cookie'
import SkyLight from 'react-skylight'
import levels from '../levels'

class Nav extends Component {

  handleKeyPress (e) {
    if (e.which === 27) {
      this.refs.storyBox.hide()
      this.refs.howToPlayBox.hide()
      this.refs.levelSelect.hide()
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
    var aboutDialog = {
      backgroundColor: '#00897B',
      color: '#ffffff',
      borderRadius: '2%',
      padding: '0 30px 0 30px',
      overflowY: 'auto'
    }
    var levelsModalStyle = {
      backgroundColor: '#00897B',
      color: '#ffffff',
      width: '30%',
      borderRadius: '2%',
      padding: '0 30px 0 30px',
      overflowY: 'auto'
    }
    return (
      <div className='navigation'>
        <div className='invisible-container'>
          <div className='logo-container'>
            <img src='/resources/images/b3-logo.svg' alt='Logo' className='logo' />
          </div>
        </div>
        <div className='levels-container'>
          <div className='levels' onClick={() => this.refs.levelSelect.show()} >{'Level ' + this.props.currentLevel}</div>
          <SkyLight hideOnOverlayClicked={true} ref='levelSelect' dialogStyles={levelsModalStyle} >
            <div className='about-backstory'>
              <p style={{fontSize: 20}} >Select a level to play</p>
              {
                Object.keys(levels).map((levelNum, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => { this.props.SELECT_LEVEL(levelNum); this.refs.levelSelect.hide() }}
                    >
                      <p>{'Level ' + levelNum}</p>
                    </div>
                  )
                })
              }
            </div>
          </SkyLight>
          <div className='about' onClick={() => this.refs.storyBox.show()}>i</div>
          <SkyLight hideOnOverlayClicked={true} ref='storyBox' dialogStyles={aboutDialog} >
            <div className='about-backstory'>
              <img src='/resources/images/intro-b3.svg' className='intro-b3' />
              <p>*Beep* *Boop* B3 Just powered up...</p>
              <p>B3 is a retired helper bot. It has just woken up on board an abandoned freight space ship that is on a collision course with Earth!</p>
              <p>Help B3 make its way through the ship to get to the control room so that it can divert its course and save the human race!</p>
              <p>B3 is a robot and you need to give it a set of commands to execute to get it to the elevator.</p>
              <p>Check out the list of commands that B3 can preform and start playing!</p>
              <br />
              <div className='modal-button-container'>
                <a className='modal-button modal-animate how-to-action' onClick={() => { this.refs.howToPlayBox.show(); this.refs.storyBox.hide() }}>
            How to Play
                </a>
              </div>
            </div>
          </SkyLight>
          <SkyLight hideOnOverlayClicked={true} ref='howToPlayBox' dialogStyles={aboutDialog} >
            <div className='about-backstory'>
              <h3 className='modal-heading'>Instructions</h3>
              <p>Get B3 <img src='/resources/images/b3-robot.svg' className='how-to-small' /> to the elevator <img src='/resources/images/elevator-top.svg' className='how-to-small' /> to make it to the next level. </p>
              <p>B3 only has a limited amount of battery for each level, so use moves wisely! </p>
              <p>You have to jump <img src='/resources/images/jump.svg' className='how-to-small' /> from box <img src='/resources/images/box-tile.svg' className='how-to-small' /> to box <img src='/resources/images/box-tile.svg' className='how-to-small' /> and avoid holes in the ground. </p>
              <div className='controls-container'>
                <h3>Controls</h3>
                <p>Use <img src='/resources/images/go-button.svg' className='control-small' /> to move B3 forward.</p>
                <p>Use <img src='/resources/images/rotate-left-button.svg' className='control-small' /> <img src='/resources/images/rotate-right-button.svg' className='control-small' /> to rotate B3 left & right.</p>
                <p>Use <img src='/resources/images/jump-button.svg' className='how-to-small' /> to jump B3 on to a box.</p>
              </div>
              <br />
              <div className='modal-button-container'>
                <a className='modal-button modal-animate how-to-action' onClick={() => { this.refs.howToPlayBox.hide() }}>
            Got it!
                </a>
              </div>
            </div>
          </SkyLight>
        </div>
        <button onClick={this.props.TOGGLE_SOUND}> Sound </button>
      </div>
    )
  }
}

export default Nav

