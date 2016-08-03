import React, {Component} from 'react'
import {Motion, spring} from 'react-motion'
import Sound from 'react-sound'
import {ReactMotionLoop} from 'react-motion-loop'
import WinContainer from '../containers/WinContainer'
import AudioContainer from '../containers/AudioContainer'
import classNames from 'classnames'

class Robot extends Component {
  calcCenter() {
    var y = this.props.robot.positionY.toString()
    var x = this.props.robot.positionX.toString()
    var bounds = this.props.tileInfo[y + x].getBoundingClientRect()
    var centerX = (bounds.right + bounds.left) / 2
    var centerY = (bounds.top + bounds.bottom) / 2
    return [centerX, centerY]
  }



  componentDidMount () {
    window.onresize = () => { this.forceUpdate(() => {}) }
  }

  componentWillUnmount () {
    window.onresize = null
  }
  render () {
    var centerPoints = this.calcCenter()
    var size = 80
    var positioning = size / 2
    var dampingStrength = 1
    var stiffnessStrength = 100
    var precisionStrength = 1
    var scale = 100
    var opacity = 1.0
    var commandExecuted = this.props.commandQueue[this.props.executeCommandIndex - 1]
    if (commandExecuted === 'JUMP_UP') {
      if (!this.props.robot.isAlive) {
        precisionStrength = 0.1
        stiffnessStrength = 300
        scale = 0
        opacity = 0.1
      }
      dampingStrength = 2
      size = size + 20
    } else if (commandExecuted === 'TURN_RIGHT' || commandExecuted === 'TURN_LEFT') {
      size = size + 5
    } else if (this.props.levelWon === true) {
      opacity = 0
    } else if (!this.props.robot.isAlive) {
      precisionStrength = 0.1
      stiffnessStrength = 300
      scale = 0
      opacity = 0.1
    }
    return (
      <div>
        <Motion defaultStyle={{
          scale: scale,
          x: centerPoints[0],
          y: centerPoints[1],
          rot: 0
        }} style={{
          opacity: spring(0.5),
          scale: spring(scale, {precision: precisionStrength}),
          x: spring(centerPoints[0]),
          y: spring(centerPoints[1]),
          rot: spring(this.props.robot.direction)
        }}>
          {value => <div style={{
            height: value.scale,
            width: value.scale,
            position: 'absolute',
            top: value.y - 70,
            left: value.x - 55,
            transform: `rotate(${value.rot}deg)`
          }}>
            <ReactMotionLoop styleFrom={{
              opacity: spring(opacity),
              width: spring(size, {
                stiffness: stiffnessStrength,
                damping: dampingStrength,
                precision: precisionStrength
              })
            }} styleTo={{
              opacity: spring(opacity),
              width: spring(size + 2, {
                stiffness: stiffnessStrength,
                damping: dampingStrength,
                precision: precisionStrength
              })
            }}>
              {style => <img src="/resources/images/b3-robot.svg" className={this.props.levelWon ? classNames('b3-animation') : classNames('b3-robot')} style={style}/>}
            </ReactMotionLoop>
            <ReactMotionLoop styleFrom={{
              opacity: spring(opacity),
              width: spring(size, {
                stiffness: stiffnessStrength,
                damping: dampingStrength,
                precision: precisionStrength
              })
            }} styleTo={{
              opacity: spring(opacity),
              width: spring(size - 2, {
                stiffness: stiffnessStrength,
                damping: dampingStrength,
                precision: precisionStrength
              })
            }}>
              {style => <img src="/resources/images/shadow.svg" className={this.props.levelWon ? classNames('shadow-animation') : classNames('shadow')} style={style}/>}
            </ReactMotionLoop>
          </div>}
        </Motion>
        <WinContainer/>
        <AudioContainer/>
      </div>
    )
  }
}

export default Robot
