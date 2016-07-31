import React, { Component } from 'react'

class CommandQueue extends Component {

  render () {
    console.log('command queue', this.props)
    const commandImgs = {
      MOVE_FORWARD: '/resources/images/move-forward.svg',
      JUMP_UP: '/resources/images/jump.svg',
      TURN_LEFT: '/resources/images/turn-left.svg',
      TURN_RIGHT: '/resources/images/turn-right.svg'
    }
    const activeStyle = {
      borderRadius: 5,
      backgroundColor: '#1C8DA0'
    }
    return (
      <div className='command-queue'>
        {this.props.commandQueue.map((e, i) => {
          return (
            <div 
              key={i}
              className='commandQueueIcon'
              style={ this.props.executeCommandIndex - 1 === i && this.props.running ? activeStyle : null }
            >
              <img src={commandImgs[e]} />
            </div>
        )
        })
        }
      </div>
    )
  }

}

export default CommandQueue
