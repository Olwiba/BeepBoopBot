import React, { Component } from 'react'
import cookie from 'react-cookie'
import SkyLight from 'react-skylight'

class Nav extends Component {

  componentDidMount () {
    var cookies = cookie.load('knownUser')
    if (!cookies) {
      cookie.save('knownUser', 'User has been here before')
      this.refs.aboutBox.show()
    }
  }

  render () {
    const style = {
      backgroundColor: '#00897B',
      color: '#ffffff',
      width: '70%',
      height: '600px',
      marginTop: '-300px',
      marginLeft: '-35%'
    }

    return (
      <div className='navigation'>
        <div className='invisible-container'>
          <div className='logo-container'>
            <img src='/resources/images/b3-logo.svg' alt='Logo' className='logo' />
          </div>
        </div>
        <div className='levels-container'>
          <select className='levels' onChange={(e) => { this.props.SELECT_LEVEL(e.target.value) }}>
            <option className='level-option'>
              Select Level
            </option>
            <option className='level-option' value='1'>
              Level 1
            </option>
            <option className='level-option' value='2'>
              Level 2
            </option>
            <option className='level-option' value='3'>
              Level 3
            </option>
            <option className='level-option' value='4'>
              Level 4
            </option>
            <option className='level-option' value='5'>
              Level 5
            </option>
            <option className='level-option' value='6'>
              Level 6
            </option>
            <option className='level-option' value='7'>
              Level 7
            </option>
            <option className='level-option' value='8'>
              Level 8
            </option>
            <option className='level-option' value='9'>
              Level 9
            </option>
            <option className='level-option' value='10'>
              Level 10
            </option>
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
