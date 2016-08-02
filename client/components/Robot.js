import React, {Component} from 'react'
import {Motion, spring} from 'react-motion'
import WinContainer from '../containers/WinContainer'

class Robot extends Component {
  calcCenter() {
    var y = this.props.robot.positionY.toString()
    var x = this.props.robot.positionX.toString()
    var bounds = this.props.tileInfo[y + x].getBoundingClientRect()
    var centerX = (bounds.right + bounds.left) / 2
    var centerY = (bounds.top + bounds.bottom) / 2
    return [centerX, centerY]
  }

  render() {
    var centerPoints = this.calcCenter()
    return (
      this.props.robot.isAlive ?
      <div>
        <Motion defaultStyle={{
          x: centerPoints[0],
          y: centerPoints[1],
          rot: 0
        }} style={{
          x: spring(centerPoints[0]),
          y: spring(centerPoints[1]),
          rot: spring(this.props.robot.direction)
        }}>
          {value => <div style={{
            height: 100,
            width: 100,
            position: 'absolute',
            top: value.y - 50,
            left: value.x - 50,
            transform: `rotate(${value.rot}deg)`     
          }}>
            <div className="b3-robot"></div>
            <div className="shadow"></div>
          </div>}
        </Motion>
        <WinContainer/>
      </div>
      :
      null
    )
  }
}

export default Robot
