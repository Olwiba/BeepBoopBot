import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'

class Board extends Component {

  render () {
    console.log(this.props)
    return (
      <div id='board'>
        <p>
          THIS IS THE BOARD
        </p>
        <Motion defaultStyle={{x: 0}} style={{x: spring(200)}}>
          {value => {
            let style = {
              width: 100,
              height: 100,
              position: 'absolute',
              top: 200,
              left: value.x,
              border: '1px solid red'
            }
            return (<div style={style}>{value.x}</div>)
          }}
        </Motion>
      </div>
    )
  }

}

export default Board
