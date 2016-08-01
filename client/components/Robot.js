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
      <div>
        <Motion defaultStyle={{
          x: 0,
          y: 0,
          rot: 0
        }} style={{
          x: spring(centerPoints[0]),
          y: spring(centerPoints[1]),
          rot: spring(this.props.robot.direction)
        }}>
          {value => <div style={{
            height: 60,
            width: 60,
            position: 'absolute',
            top: value.y - 30,
            left: value.x - 30,
            transform: `rotate(${value.rot}deg)`
          }}>
            <div className="b3-robot"></div>
            <div className="shadow"></div>
          </div>}
        </Motion>
        <WinContainer {...this.props}/>
      </div>
    )
  }
}

export default Robot
