import React, { Component } from 'react'

class Nav extends Component {

  constructor (props) {
    super(props)
    this.state = {
      // state goes here
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
        <div className="levels-container">
          <select className='levels' onChange={this.selectLevel}>
            <option className='level-option'>
              Select Level
            </option>
            <option className='level-option'>
              Level 1
            </option>
            <option className='level-option'>
              Level 2
            </option>
            <option className='level-option'>
              Level 3
            </option>
            <option className='level-option'>
              Level 4
            </option>
            <option className='level-option'>
              Level 5
            </option>
            <option className='level-option'>
              Level 6
            </option>
            <option className='level-option'>
              Level 7
            </option>
            <option className='level-option'>
              Level 8
            </option>
            <option className='level-option'>
              Level 9
            </option>
            <option className='level-option'>
              Level 10
            </option>
          </select>
        </div>
      </div>
    )
  }
}

export default Nav
