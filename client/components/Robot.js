import React, {Component} from 'react'
import {Motion, spring} from 'react-motion'
import {ReactMotionLoop} from 'react-motion-loop'
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

  isJumping() {
    if (this.props.robot.jump == true) {

    } else {

    }
  }

  render() {
    var centerPoints = this.calcCenter()
    return (
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
          {value => <div className="robot-container" style={{
            height: 60,
            width: 60,
            position: 'absolute',
            top: value.y - 60,
            left: value.x - 40,
            transform: `rotate(${value.rot}deg)`
          }}>
          <ReactMotionLoop
            styleFrom={{width: spring(62, {stiffness: 100, damping: 1, precision: 1})}}
            styleTo={{width: spring(60, {stiffness: 100, damping: 1, precision: 1})}}>
            {style => <div className="b3-robot" style={style} />}
          </ReactMotionLoop>
          <ReactMotionLoop
            styleFrom={{width: spring(58, {stiffness: 100, damping: 1, precision: 1})}}
            styleTo={{width: spring(60, {stiffness: 100, damping: 1, precision: 1})}}>
            {style => <div className="shadow" style={style} />}
          </ReactMotionLoop>
          </div>}
        </Motion>
        <WinContainer {...this.props}/>
      </div>
    )
  }
}

export default Robot
