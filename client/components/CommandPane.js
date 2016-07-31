import React, { Component } from 'react'
import CommandQueue from './CommandQueue'
import RunButtons from './RunButtons'
import classNames from 'classnames'

class CommandPane extends Component {

  render () {
    return (
      <section className='command-pane'>
        <div className='command-container'>
          <CommandQueue {...this.props} />
        </div>
        <div className='runButtons-container'>
          <RunButtons {...this.props} />
        </div>
        <div className='action-button-container'>
          <a className={classNames(
            'action-button',
            'action-animate',
            {'action-forward': !this.props.running}
            )}
            onClick={this.props.running ? null : this.props.ADD_FORWARD}>
            <img src='/resources/images/move-forward.svg' className='action-icon' />
          </a>
          <a className={classNames(
            'action-button',
            'action-animate',
            {'action-rotate': !this.props.running}
            )}
            onClick={this.props.running ? null : this.props.ADD_LEFT}>
            <img src='/resources/images/turn-left.svg' className='action-icon' />
          </a>
          <a className={classNames(
            'action-button',
            'action-animate',
            {'action-rotate': !this.props.running}
            )}
            onClick={this.props.running ? null : this.props.ADD_RIGHT}>
            <img src='/resources/images/turn-right.svg' className='action-icon' />
          </a>
          <a className={classNames(
            'action-button',
            'action-animate',
            {'action-jump': !this.props.running}
            )}
            onClick={this.props.running ? null : this.props.ADD_JUMP}>
            <img src='/resources/images/jump.svg' className='action-icon' />
          </a>
        </div>
      </section>
    )
  }
}

export default CommandPane
