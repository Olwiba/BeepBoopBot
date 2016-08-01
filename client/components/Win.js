import React, {Component} from 'react'
import {Motion, spring} from 'react-motion'
import SkyLight from 'react-skylight';

class Win extends Component {

  componentDidUpdate() {
    this.props.levelClear ? this.refs.winBox.show() : this.refs.winBox.hide()
  }
  _executeBeforeModalClose(){
    this.props.LEVEL_CLEARED()
    const level = this.props.currentLevel
    const newLevel = level + 1
    console.log(this.props)
    this.props.SELECT_LEVEL(newLevel)
  }

  render() {
    const style = {
      backgroundColor: '#00897B',
      color: '#ffffff',
      width: '70%',
      height: '600px',
      marginTop: '-300px',
      marginLeft: '-35%',
    };
    const divStyle ={
      width: '100%',
      height:'100%'
    }
    return (
      <SkyLight dialogStyles={style} beforeClose={this._executeBeforeModalClose.bind(this)} hideOnOverlayClicked={true} ref="winBox" >
        <div style={divStyle}onClick={this._executeBeforeModalClose.bind(this)}>Click me to close</div>
      </SkyLight>

    )
  }
}

export default Win
