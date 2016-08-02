import React, { Component } from 'react'

class RunButtons extends Component {

  render () {
    var running = this.props.running
    var hasFinished = this.props.hasFinished
    return (
      <div className='run-button-container'>
        <div>
          {(running && hasFinished)
            ? <a className='run-button run-animate retry-action' onClick={this.props.stopButton}><h3>RETRY</h3></a>
            : (running && !hasFinished)
                ? <a className='run-button run-animate stop-action' onClick={this.props.stopButton}><h3>STOP</h3></a>
                : <a className='run-button run-animate go-action' onClick={this.props.goButton}><h3>GO</h3></a>
        }
        </div>
        <a className='run-button run-animate bin-action' onClick={this.props.clearButton}>
          <img src='/resources/images/rubbish-bin.svg' className='bin-icon' />
        </a>
      </div>
    )
  }
}

export default RunButtons
