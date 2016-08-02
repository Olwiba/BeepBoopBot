import React, { Component } from 'react'
import RobotContainer from '../containers/RobotContainer'
import classNames from 'classnames'

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
    var levelTheme = this.props.currentLevel < 5 ? 'basement' : 'cargo'
    return (
      <div id='board'>
        <div className='board-container'>
          {
            this.props.board.map((row, rowIndex) => {
              return row.map((col, colIndex) => {
                const oddEven = (rowIndex + colIndex) % 2 === 1 ? 'odd' : 'even'
                return (
                  col === 3 ?
                    <div key={rowIndex + colIndex} className={classNames('tile', 'clear')} ref={rowIndex.toString() + colIndex.toString()}></div>
                    : col === 2 ?
                      <div key={rowIndex + colIndex} className={classNames('tile', levelTheme, oddEven)} ref={rowIndex.toString() + colIndex.toString()}> <img src='/resources/images/box-tile.svg' className='box-tile' /> </div>
                      : col === 1 ?
                        <div key={rowIndex + colIndex} className={classNames('tile', levelTheme, oddEven)} ref={rowIndex.toString() + colIndex.toString()}> <div className='elevator-bottom'> <img src='/resources/images/elevator-top.svg' className='elevator-tile' /> </div> </div>
                        : <div key={rowIndex + colIndex} className={classNames('tile', levelTheme, oddEven)} ref={rowIndex.toString() + colIndex.toString()}></div>
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
