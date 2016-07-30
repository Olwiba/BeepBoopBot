import React, { Component } from 'react'

class RunButtons extends Component {

  render () {
    return (
      <div>
        <button onClick={() => { this.props.GO_BUTTON() }}>
          GO
        </button>
        <button onClick={() => { this.props.STOP_BUTTON() }}>
          STOP
        </button>
      </div>
    )
  }
}

export default RunButtons
