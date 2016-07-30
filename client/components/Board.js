import React, { Component } from 'react'
import { Motion, spring, StaggeredMotion, TransitionMotion } from 'react-motion'

class Board extends Component {

  constructor(props) {
      super(props)

      const levelOne = [
                      [0,0,0,2,1],
                      [0,2,0,2,0],
                      [0,0,0,2,1],
                      [0,2,0,2,0],
                      [0,0,0,2,1]
                    ]

      this.state = { levelOne };
  }



  render () {
    console.log(this.props)
    return (
      <div id='board'>
        <div className="board-container">
          { this.state.levelOne.map((row) => {
            return row.map((id, index) => (
              <Motion defaultStyle={{size: 1, }} style={{size: spring(18, {stiffness: 180, damping: 12})}}>
                {value => <div key={index} className="tile" style={{
                  height: value.size + '%',
                  width: value.size + '%'
                }}>{id}</div>}
              </Motion>
            ))
          })}
        </div>
      </div>
    )
  }

}

export default Board
