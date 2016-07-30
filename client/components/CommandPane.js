import React, { Component } from 'react'
import CommandQueue from './CommandQueue'
import RunButtons from './RunButtons'

class CommandPane extends Component {

  render () {
    return (
      <section className='command-pane'>
        <CommandQueue commandQueue={this.props.commandQueue} />
        <RunButtons />
        <div>
          Click commands here to add them to the queue
        </div>
        <button onClick={() => { this.props.ADD_FORWARD() }}>
          FWD
        </button>
        <button onClick={() => { this.props.ADD_LEFT() }}>
          LEFT
        </button>
        <button onClick={() => { this.props.ADD_RIGHT() }}>
          RIGHT
        </button>
        <button onClick={() => { this.props.ADD_JUMP() }}>
          JUMP
        </button>
      </section>
    )
  }
}

export default CommandPane
