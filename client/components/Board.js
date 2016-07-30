import React, { Component } from 'react'
import { Motion, spring, StaggeredMotion, TransitionMotion } from 'react-motion'

class Board extends Component {

  constructor (props) {
    super(props)
    this.state = this.props
  }

  render () {
    return (
      <div id='board'>
        <div className='board-container'>
          {this.state.board.map((row, rowIndex) => {
            return row.map((id, colIndex) => (
              <Motion defaultStyle={{size: 1}} style={{size: spring(18, {stiffness: 180, damping: 12})}}>
                {value => <div key={colIndex} className='tile' style={{
                  height: value.size + '%',
                  width: value.size + '%'
                }}>{id}</div>}
              </Motion>
            ))
          })}
        </div>
        <div style={{}}></div>
      </div>
    )
  }
}

export default Board

// {(rowIndex === this.props.robot.positionY && colIndex === this.props.robot.positionX)
//                     ? <Motion style={{x: spring(100), y: spring(20)}}>
//                         {val => <div style={{height: 30, width: 30, border: '2px solid red', left: val.x}}>AA</div>}
//                     </Motion>
//                     : null}
