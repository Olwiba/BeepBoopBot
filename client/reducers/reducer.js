// import { immutable, fromJS, toJS} from 'immutable'
import jump from './lib/jump';
import moveForward from './lib/moveForward.js'

const INITIAL_STATE = {
  robot: {
    direction: 0,
    isOnBox: false,
    positionX: 0,
    positionY: 0
  },
  board: [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1]
  ]
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GO_BUTTON':
      return state

    case 'STOP_BUTTON':
      return state

    case 'ADD_FORWARD':
      const newFwdState = {
        robot: {...state.robot},
        board: {...state.board}
      }
      moveForward(newFwdState.robot, newFwdState.board)    
      return newFwdState

    case 'ADD_LEFT':
      const newLeftState = {
        robot: {...state.robot},
        board: {...state.board}
      }
      // If direction is 0, set it to 270, otherwise subtract 90
      newLeftState.robot.direction = newLeftState.robot.direction ? newLeftState.robot.direction - 90 : 270
      return newLeftState

    case 'ADD_RIGHT':
      const newRightState = {
        robot: {...state.robot},
        board: {...state.board}
      }
      // If direction is 270, set it to 0, otherwise add 90
      newRightState.robot.direction = newRightState.robot.direction === 270 ? 0 : newRightState.robot.direction + 90
      return newRightState

    case 'JUMP':
      const jumpState = {
        robot: {...state.robot},
        board: {...state.board}
      }
      jump(jumpState.robot, jumpState.board)    
      return jumpState

    default:
      return state

  }
}

export default reducer
