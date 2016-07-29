import React, { Component } from 'react'
import CommandQueue from './CommandQueue'
import RunButtons from './RunButtons'

class CommandPane extends Component {

  render () {
    console.log('props', this.props)
    console.log('state', this.state)
    return (
      <section className='command-pane'>
        <CommandQueue />
        <RunButtons />
        <div>
          Click commands here to add them to the queue
        </div>
        <button onClick={() => { this.props.ADD_FORWARD() }}>FWD</button>
        <button>LEFT</button>
        <button>RIGHT</button>
        <button>JUMP</button>
      </section>
    )
  }
}

export default CommandPane
