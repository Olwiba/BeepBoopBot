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

    var winDialog = {
      backgroundColor: '#00897B',
      color: '#ffffff',
      width: '70%',
      height: '40%',
      marginTop: '-10%',
      marginLeft: '-35%',
      borderRadius: '2%',
      padding: '15px'

    };

    return (
      <SkyLight beforeClose={this._executeBeforeModalClose.bind(this)} hideOnOverlayClicked={true} ref='winBox' dialogStyles={winDialog} >
        <div className='win-notice'>
        <img src='/resources/images/intro-b3.svg' className='intro-b3'/>
        <p>Level Cleared!</p>
        <p>Nice work, B3 made it to the elevator..</p>
        <p>Your getting closer to the control room.</p>
        <br/>
        <div className='modal-button-container'>
        <a className='modal-button modal-animate win-action' onClick={() => { this.refs.winBox.hide()}}>
        Next Level
        </a>
        </div>
        </div>
      </SkyLight>
    )
  }
}

export default Win
