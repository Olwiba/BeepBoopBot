import React, {Component} from 'react'
import {Motion, spring} from 'react-motion'
import Sound from 'react-sound'
import {ReactMotionLoop} from 'react-motion-loop'
import WinContainer from '../containers/WinContainer'
import AudioContainer from '../containers/AudioContainer'

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
    var size = 80
    var positioning = size / 2
    var precisionStrength = 1
    var stiffnessStrength = 100
    var commandExecuted = this.props.commandQueue[this.props.executeCommandIndex - 1]
    if (commandExecuted === 'JUMP_UP') {
      dampingStrength = 2
      size = size + 20
    } else if (commandExecuted === 'TURN_RIGHT' || commandExecuted === 'TURN_LEFT') {
      size = size + 5
    } else if (this.props.levelWon === true) {
      stiffnessStrength = 4
      dampingStrength = 100
      precisionStrength = 10
    }
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
            height: size,
            width: size,
            position: 'absolute',
            top: value.y - 50,
            left: value.x - positioning,
            transform: `rotate(${value.rot}deg)`
          }}>
            <ReactMotionLoop styleFrom={{
              width: spring(size, {
                stiffness: stiffnessStrength,
                damping: dampingStrength,
                precision: precisionStrength
              })
            }} styleTo={{
              width: spring(size + 2, {
                stiffness: stiffnessStrength,
                damping: dampingStrength,
                precision: precisionStrength
              })
            }}>
              {style => <img src="/resources/images/b3-robot.svg" className="b3-robot" style={style}/>}
            </ReactMotionLoop>
            <ReactMotionLoop styleFrom={{
              width: spring(size - 4, {
                stiffness: stiffnessStrength,
                damping: dampingStrength,
                precision: precisionStrength
              })
            }} styleTo={{
              width: spring(size, {
                stiffness: stiffnessStrength,
                damping: dampingStrength,
                precision: precisionStrength
              })
            }}>
              {style => <img src="/resources/images/shadow.svg" className="shadow" style={style}/>}
            </ReactMotionLoop>
          </div>}
        </Motion>
        <WinContainer/>
        <AudioContainer />
      </div>
      :
      <AudioContainer />
    )
  }
}

export default Robot
