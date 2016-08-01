import React, {Component} from 'react'
import SkyLight from 'react-skylight'

class Win extends Component {

  handleKeyPress (e) {
    if (e.which === 27) {
      this.refs.winBox.hide()
    }
  }

  componentDidMount () {
    document.addEventListener('keyup', this.handleKeyPress.bind(this))
  }

  componentWillUnmount () {
    document.removeEventListener('keyup', this.handleKeyPress.bind(this))
  }

  componentDidUpdate () {
    this.props.levelWon ? this.refs.winBox.show() : this.refs.winBox.hide()
  }

  _executeBeforeModalClose () {
    this.props.LEVEL_WON()
    const newLevel = parseInt(this.props.currentLevel) + 1
    this.props.SELECT_LEVEL(newLevel)
  }

  render () {
    return (
      <SkyLight beforeClose={this._executeBeforeModalClose.bind(this)} hideOnOverlayClicked={true} ref='winBox' >
        <p>You win!!</p>
        <button onClick={() => { this.refs.winBox.hide() }}>OK</button>
      </SkyLight>
    )
  }
}

export default Win
