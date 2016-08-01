import {Component} from 'react'
import SkyLight from 'react-skylight'

class Win extends Component {

  componentDidUpdate () {
    this.props.levelWon ? this.refs.winBox.show() : this.refs.winBox.hide()
  }
  _executeBeforeModalClose () {
    this.props.LEVEL_WON()
    const newLevel = parseInt(this.props.currentLevel) + 1
    this.props.SELECT_LEVEL(newLevel)
  }

  render () {
    const style = {
      backgroundColor: '#00897B',
      color: '#ffffff',
      width: '70%',
      height: '600px',
      marginTop: '-300px',
      marginLeft: '-35%'
    }
    const divStyle = {
      width: '100%',
      height: '100%'
    }
    return (
      <SkyLight dialogStyles={style} beforeClose={this._executeBeforeModalClose.bind(this)} hideOnOverlayClicked={true} ref="winBox" >
        <div style={divStyle}onClick={()=>{this.refs.winBox.hide()}}> Click Me to Close </div>
      </SkyLight>
    )
  }
}

export default Win
