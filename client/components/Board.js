import React, { Component } from 'react'
import { Motion, spring, StaggeredMotion, TransitionMotion } from 'react-motion'
import RobotContainer from '../containers/RobotContainer'

class Board extends Component {

  constructor (props) {
    super(props)
    this.state = this.props
  }

  handleClick () {
    console.log('click')
    console.log(this.refs['01'].getBoundingClientRect())
  }

  componentDidMount () {
    console.log('mount', this.refs)
    this.props.ADD_TILE_INFO(this.refs)
  }

  render () {
    console.log('board props', this.props)
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

// {(rowIndex === this.props.robot.positionY && colIndex === this.props.robot.positionX)
//                     ? <Motion style={{x: spring(100), y: spring(20)}}>
//                         {val => <div style={{height: 30, width: 30, border: '2px solid red', left: val.x}}>AA</div>}
//                     </Motion>
//                     : null}

          // {this.state.board.map((row, rowIndex) => {
          //   return row.map((id, colIndex) => (
          //     <Motion defaultStyle={{size: 1}} style={{size: spring(18, {stiffness: 180, damping: 12})}}>
          //       {value => <div key={colIndex} ref={function (temp) {
          //         if (temp !== null) {
          //           data.push(temp.getBoundingClientRect())
          //           console.log('temp', temp.getBoundingClientRect())
          //           console.log('temp', rowIndex, colIndex)
          //         }
          //       }} className='tile' onClick={this.handleClick.bind(this)} style={{
          //         height: value.size + '%',
          //         width: value.size + '%'
          //       }}>{id}</div>}
          //     </Motion>
          //   ))
          // })}
