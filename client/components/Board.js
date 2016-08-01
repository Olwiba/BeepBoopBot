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
    var counter = 0
    var levelTheme = this.props.currentLevel < 5 ? 'basement' : 'cargo'
    console.log('the level ', levelTheme)
    return (
      <div id='board'>
        <div className='board-container'>
          {
            this.props.board.map((row, rowIndex) => {
              return row.map((col, colIndex) => {
                let oddEven = counter % 2 == 1 ? 'odd' : 'even'
                counter++
                return (
                col == 3 ?
                <div key={parseInt(rowIndex.toString() + colIndex.toString())} className={'tile clear'} ref={rowIndex.toString() + colIndex.toString()}></div> :
                col == 2 ? 
                <div key={parseInt(rowIndex.toString() + colIndex.toString())} className={'tile ' + levelTheme + ' ' + oddEven} ref={rowIndex.toString() + colIndex.toString()}> <img src='/resources/images/box-tile.svg' className='box-tile' /> </div>  :
                 col == 1 ?
                   <div key={parseInt(rowIndex.toString() + colIndex.toString())} className={'tile ' + levelTheme + ' ' + oddEven} ref={rowIndex.toString() + colIndex.toString()}> <div className='elevator-bottom'> <img src='/resources/images/elevator-top.svg' className='elevator-tile' /> </div> </div> :
                  <div key={parseInt(rowIndex.toString() + colIndex.toString())} className={'tile ' + levelTheme + ' ' + oddEven} ref={rowIndex.toString() + colIndex.toString()}></div>
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
