import React, { Component } from 'react'
import { Motion, spring, StaggeredMotion, TransitionMotion } from 'react-motion'

class Board extends Component {

  constructor (props) {
    super(props)
    this.state = {
      robot: {
        direction: 0,
        isOnBox: false,
        positionX: 0,
        positionY: 4
      },
      board: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0],
        [0, 0, 0, 0, 1]
      ]
    }
  }

  render () {
    console.log(this.props)
    return (
      <div id='board'>
        <div className='board-container'>
          {this.state.board.map((row) => {
            return row.map((id, index) => (
              <Motion defaultStyle={{size: 1}} style={{size: spring(18, {stiffness: 180, damping: 12})}}>
                {value => <div key={index} className='tile' style={{
                  height: value.size + '%',
                  width: value.size + '%'
                }}>{id}</div>}
              </Motion>
            ))
          })}
          <div id='robot' style={{height: 50, width: 50, border: '2px solid red'}}>Hi</div>
        </div>
      </div>
    )
  }
}

export default Board
