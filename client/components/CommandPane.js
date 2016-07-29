import React, { Component } from 'react'
import CommandQueue from './CommandQueue'
import GoButton from './GoButton'

class CommandPane extends Component {

  render () {
    return (
      <div className='command-pane'>
        <CommandQueue />
        <GoButton />
        <p>
          Click commands here to add them to the queue
        </p>
      </div>
    )
  }
}

export default CommandPane
