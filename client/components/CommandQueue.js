import React, { Component } from 'react'

class CommandQueue extends Component {

  render () {
    const commandImgs = {
      MOVE_FORWARD: '/resources/images/move-forward.svg',
      JUMP_UP: '/resources/images/jump.svg',
      TURN_LEFT: '/resources/images/turn-left.svg',
      TURN_RIGHT: '/resources/images/turn-right.svg'
    }
    return (
      <div className='command-queue'>
        {this.props.commandQueue.map((e, i) => {
          return (
            <div key={i} className='commandQueueIcon'>
              <img src={commandImgs[e]} />
            </div>
        )
        })
        }
        <img src="/resources/images/rubbish-bin.png" className="bin-commands" />
      </div>
    )
  }

}

export default CommandQueue
