import React, { Component } from 'react'
import cookie from 'react-cookie'
import SkyLight from 'react-skylight'
import levels from '../levels'

class Nav extends Component {

  componentDidMount () {
    var cookies = cookie.load('knownUser')
    // Check if cookie exists. If not, show modal and set cookie.
    if (!cookies) {
      cookie.save('knownUser', 'User has been here before')
      this.refs.aboutBox.show()
    }
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
          <div className='about' onClick={() => this.refs.aboutBox.show()}>i</div>
          <SkyLight hideOnOverlayClicked ref='aboutBox' title='Hi, welcome to B3'>
            Do a bunch of stuff to get B3 to the exit.
          </SkyLight>
        </div>
      </div>
    )
  }
}

export default Nav
