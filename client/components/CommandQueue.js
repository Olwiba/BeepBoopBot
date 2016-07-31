import React, { Component } from 'react'

class CommandQueue extends Component {

  render () {
    const commands = {
      MOVE_FORWARD: 'FORWARD',
      JUMP_UP: 'JUMP',
      TURN_LEFT: 'LEFT',
      TURN_RIGHT: 'RIGHT'
    }
    return (
      <div className='command-queue'>
        {this.props.commandQueue.map((e, i) => {
           return <div key={i}>{commands[e]}</div>
         })
        }
      </div>
    )
  }

}

export default CommandQueue
