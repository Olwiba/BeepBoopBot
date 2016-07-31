import React, { Component } from 'react'
import RobotContainer from '../containers/RobotContainer'

class Board extends Component {

  constructor (props) {
    super(props)
    this.state = this.props
  }

  componentDidMount () {
    this.props.ADD_TILE_INFO(this.refs)
  }

  render () {
    return (
      <div id='board'>
        <div className='board-container'>
          {
            this.state.board.map((row, rowIndex) => {
              return row.map((col, colIndex) => {
                return (
                  <div key={parseInt(rowIndex.toString() + colIndex.toString())} className='tile' ref={rowIndex.toString() + colIndex.toString()}>{col}</div>
                )
              })
            })
          }
        </div>
        <RobotContainer />
      </div>
    )
  }
}

export default Board
