import React, { Component } from 'react'
import RobotContainer from '../containers/RobotContainer'

class Board extends Component {

  constructor (props) {
    super(props)
    this.state = { hasMounted: false }
  }

  componentDidMount () {
    console.log('board mounted')
    this.props.ADD_TILE_INFO(this.refs)
    this.setState({ hasMounted: true })
  }

  render () {
    return (
      <div id='board'>
        <div className='board-container'>
          {
            this.props.board.map((row, rowIndex) => {
              return row.map((col, colIndex) => {
                return (
                  <div key={parseInt(rowIndex.toString() + colIndex.toString())} className='tile' ref={rowIndex.toString() + colIndex.toString()}>{col}</div>
                )
              })
            })
          }
        </div>
        {this.state.hasMounted ? <RobotContainer /> : null}
      </div>
    )
  }
}

export default Board
