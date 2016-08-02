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

  render() {
    var centerPoints = this.calcCenter()
    var dampingStrength = 1
    var width = 60
    var posX = 0
    if (this.props.commandQueue[this.props.executeCommandIndex - 1] === 'JUMP_UP') {
      dampingStrength = 2
      width = width + 10
      posX = posX + 50
    }
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
            height: width,
            width: width,
            position: 'absolute',
            top: value.y - 30,
            left: value.x - 30,
            transform: `rotate(${value.rot}deg)`,
            overflow: 'visible'
          }}>
            <ReactMotionLoop styleFrom={{
              width: spring(width, {
                stiffness: 100,
                damping: dampingStrength,
                precision: 1
              }),
              bottom: spring(posX)
            }} styleTo={{
              width: spring(width + 2, {
                stiffness: 100,
                damping: dampingStrength,
                precision: 1
              }),
              bottom: spring(posX)
            }}>
              {style => <img src="/resources/images/b3-robot.svg" className="b3-robot" style={style}/>}
            </ReactMotionLoop>
            <ReactMotionLoop styleFrom={{
              width: spring(width - 2, {
                stiffness: 100,
                damping: dampingStrength,
                precision: 1
              }),
              bottom: spring(posX)
            }} styleTo={{
              width: spring(width, {
                stiffness: 100,
                damping: dampingStrength,
                precision: 1
              }),
              bottom: spring(posX)
            }}>
              {style => <img src="/resources/images/shadow.svg" className="shadow" style={style}/>}
            </ReactMotionLoop>
          </div>}
        </Motion>
        <WinContainer {...this.props}/>
      </div>
    )
  }
}

export default Robot
