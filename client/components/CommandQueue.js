import React, { Component } from 'react'
import * as a from '../reducers/action'
import classNames from 'classnames'

class CommandQueue extends Component {

  render () {
    console.log('queue props', this.props)
    let commandImgs = {}
    commandImgs[a.MOVE_FORWARD] = '/resources/images/move-forward.svg'
    commandImgs[a.JUMP_UP] = '/resources/images/jump.svg'
    commandImgs[a.TURN_LEFT] = '/resources/images/turn-left.svg'
    commandImgs[a.TURN_RIGHT] = '/resources/images/turn-right.svg'

    return (
      <div className='command-queue'>
        {this.props.commandQueue.map((e, i) => {
          return (
            <div
              key={i}
              onClick={!this.props.running ? () => { this.props.REMOVE_ACTION(i) } : null}
              className={
                classNames('commandQueueIcon', {
                  'commandQueueIcon-active': this.props.executeCommandIndex - 1 === i && this.props.running && !this.props.hasFinished,
                  'commandQueueIcon-removable': !this.props.running
                })
              }
            >
              <img src={commandImgs[e]} />
            </div>
        )
        })
        }
        <div className='move-limit' style={{color: 'red'}}>{this.props.moveLimit - this.props.executeCommandIndex}</div>
      </div>
    )
  }

}

export default CommandQueue
