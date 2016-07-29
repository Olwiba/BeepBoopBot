import React, { Component } from 'react'
import CommandQueue from './CommandQueue'
import RunButtons from './RunButtons'

class CommandPane extends Component {

  render () {
    return (
      <section className='command-pane'>
        <CommandQueue />
        <RunButtons />
        <div>
          Click commands here to add them to the queue
        </div>
      </section>
    )
  }
}

export default CommandPane
