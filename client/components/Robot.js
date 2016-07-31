import React, { Component } from 'react'
import { Motion, spring, StaggeredMotion, TransitionMotion } from 'react-motion'

class Robot extends Component {

  calcCenter () {
    var y = this.props.robot.positionY.toString()
    var x = this.props.robot.positionX.toString()
    var bounds = this.props.tileInfo[y + x].getBoundingClientRect()
    var centerX = (bounds.right + bounds.left) / 2
    var centerY = (bounds.top + bounds.bottom) / 2
    return [centerX, centerY]
  }

  render () {
    var centerPoints = this.calcCenter()
    return (
      <Motion defaultStyle={{x: 0, y: 0, rot: 0}} style={{x: spring(centerPoints[0]), y: spring(centerPoints[1]), rot: spring(this.props.robot.direction)}}>
        {value => <div
          style={{height: 30, width: 30, border: 'solid 1px blue', position: 'absolute', top: value.y - 15, left: value.x - 15, transform: `rotate(${value.rot}deg)`}}
      >HI2</div>}
      </Motion>
    )
  }
}

export default Robot
