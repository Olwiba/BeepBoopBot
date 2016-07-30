import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'

class Board extends Component {
  constructor(props){
    super(props)
    this.state = {
      temp: 10
    }
  }

  render () {
    console.log(this.props)
    return (
      <div id='board'>
        <p>
          THIS IS THE BOARD
        </p>
        <Motion style={{x: spring(this.state.temp)}}>
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
        <button onClick={() => {this.setState({temp: this.state.temp+20})}}>GGG</button>
      </div>
    )
  }

}

export default Board
