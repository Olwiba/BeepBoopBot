import React, { Component } from 'react'
import RobotContainer from '../containers/RobotContainer'

class Board extends Component {

  constructor (props) {
    super(props)
    this.state = { hasMounted: false }
  }

  componentDidMount () {
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
                col == 2 ? 
                <div key={parseInt(rowIndex.toString() + colIndex.toString())} className='tile' ref={rowIndex.toString() + colIndex.toString()}> <img src='/resources/images/box-tile.svg' className='box-tile' /> </div>  :
                 col == 1 ?  <div key={parseInt(rowIndex.toString() + colIndex.toString())} className='tile' ref={rowIndex.toString() + colIndex.toString()}> <div className='elevator-bottom'> <img src='/resources/images/elevator-top.svg' className='elevator-tile' /> </div> </div> :
                  <div key={parseInt(rowIndex.toString() + colIndex.toString())} className='tile' ref={rowIndex.toString() + colIndex.toString()}></div>
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
