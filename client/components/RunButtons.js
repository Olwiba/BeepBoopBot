import React, { Component } from 'react'

class RunButtons extends Component {

  render () {
    console.log('run button props', this.props)
    return (
      <div className='run-button-container'>
        <div>
          {this.props.running
            ? <a className='run-button run-animate stop-action' onClick={() => { this.props.STOP_BUTTON() }}><h3>STOP</h3></a>
            : <a className='run-button run-animate go-action' onClick={() => { this.props.GO_BUTTON() }}><h3>GO</h3></a>
          }
        </div>
        <a className='run-button run-animate bin-action' onClick={this.props.running ? null : () => { this.props.CLEAR_BUTTON() }}>
          <img src='/resources/images/rubbish-bin.svg' className='bin-commands' />
        </a>
      </div>
    )
  }
}

export default RunButtons
