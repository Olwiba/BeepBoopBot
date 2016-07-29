import React, { Component } from 'react'
import CommandQueue from './CommandQueue'
import GoButton from './GoButton'

class CommandPane extends Component {

  render () {
    return (
      <section className='command-pane'>
        <CommandQueue />
        <GoButton />
        <div>
          Click commands here to add them to the queue
        </div>
      </section>
    )
  }
}

export default CommandPane
