import React, { Component } from 'react'
import SkyLight from 'react-skylight'
import levels from '../levels'

class Nav extends Component {

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
          <div className="about" onClick={() => this.refs.aboutBox.show()}>i</div>
          <SkyLight dialogStyles={style} hideOnOverlayClicked ref="aboutBox" >
            I"'"m a custom modal!
          </SkyLight>
        </div>
      </div>
    )
  }
}

export default Nav
