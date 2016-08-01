import React, { Component } from 'react'
import * as a from '../reducers/action'

class CommandQueue extends Component {

  render () {
    let commandImgs = {}
    commandImgs[a.MOVE_FORWARD] = '/resources/images/move-forward.svg'
    commandImgs[a.JUMP_UP] = '/resources/images/jump.svg'
    commandImgs[a.TURN_LEFT] = '/resources/images/turn-left.svg'
    commandImgs[a.TURN_RIGHT] = '/resources/images/turn-right.svg'
    
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
              style={this.props.executeCommandIndex - 1 === i && this.props.running && !this.props.hasFinished ? activeStyle : null}
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
