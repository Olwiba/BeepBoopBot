import React, { Component } from 'react'
import { Motion, spring, StaggeredMotion, TransitionMotion } from 'react-motion' 

class Robot extends Component {

  render () {
    return (
      <div
        style={{height: 30, width: 30, border: 'solid 1px blue', position: 'absolute', top: 100, left: 100}}
      >HI2</div>
    )
  }
}

export default Robot
