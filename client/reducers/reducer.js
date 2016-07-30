// import { immutable, fromJS, toJS} from 'immutable'
import jump from './lib/jump'
import moveForward from './lib/moveForward.js'
import commandRunner from './lib/commandRunner'

const INITIAL_STATE = {
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
  ],
  commandQueue: [], // commands are the same as the action types. e.g. 'MOVE_FORWARD'
  running: false,
  executed:[]
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GO_BUTTON':
      const newGoState = {
        robot: {...state.robot},
        board: [...state.board],
        commandQueue: [...state.commandQueue],
        running: true,
        executed: action.command
      }

      return newGoState

    case 'STOP_BUTTON':
      window.clearInterval(state.runner)
      const newStopState = {
        robot: {...state.robot},
        board: [...state.board],
        commandQueue: [...state.commandQueue],
        running: false,
        runner: null
      }
      return newStopState

    case 'MOVE_FORWARD':
      const newFwdState = {
        robot: {...state.robot},
        board: [...state.board],
        commandQueue: [...state.commandQueue],
        running: state.running,
        executed:[...state.executed]
      }
      moveForward(newFwdState.robot, newFwdState.board)
      newFwdState.executed.push('MOVE_FORWARD')
      return newFwdState

    case 'TURN_LEFT':
      const newLeftState = {
        robot: {...state.robot},
        board: [...state.board],
        commandQueue: [...state.commandQueue],
        running: state.running,
        executed:[...state.executed]
      }
      // If direction is 0, set it to 270, otherwise subtract 90
      newLeftState.robot.direction = newLeftState.robot.direction ? newLeftState.robot.direction - 90 : 270
      newLeftState.executed.push('TURN_LEFT')
      return newLeftState

    case 'TURN_RIGHT':
      const newRightState = {
        robot: {...state.robot},
        board: [...state.board],
        commandQueue: [...state.commandQueue],
        running: state.running,
        executed:[...state.executed]
      }
      // If direction is 270, set it to 0, otherwise add 90
      newRightState.robot.direction = newRightState.robot.direction === 270 ? 0 : newRightState.robot.direction + 90
      newRightState.executed.push('TURN_RIGHT')
      return newRightState

    case 'JUMP_UP':
      const jumpState = {
        robot: {...state.robot},
        board: [...state.board],
        commandQueue: [...state.commandQueue],
        running: state.running,
        executed:[...state.executed]
      }
      jump(jumpState.robot, jumpState.board)
      jumpState.executed.push('JUMP_UP')
      return jumpState

    case 'ADD_FORWARD':
      const addFwdState = {
        robot: {...state.robot},
        board: [...state.board],
        commandQueue: [...state.commandQueue],
        running: state.running,
        executed: [...state.executed]
      }
      addFwdState.commandQueue.push('MOVE_FORWARD')
      return addFwdState

    case 'ADD_LEFT':
      const addLeftState = {
        robot: {...state.robot},
        board: [...state.board],
        commandQueue: [...state.commandQueue],
        running: state.running,
        executed: [...state.executed]
      }
      addLeftState.commandQueue.push('TURN_LEFT')
      return addLeftState

    case 'ADD_RIGHT':
      const addRightState = {
        robot: {...state.robot},
        board: [...state.board],
        commandQueue: [...state.commandQueue],
        running: state.running,
        executed: [...state.executed]
      }
      addRightState.commandQueue.push('TURN_RIGHT')
      return addRightState

    case 'ADD_JUMP':
      const addJumpState = {
        robot: {...state.robot},
        board: [...state.board],
        commandQueue: [...state.commandQueue],
        running: state.running,
        executed: [...state.executed]
      }
      addJumpState.commandQueue.push('JUMP_UP')
      return addJumpState

    default:
      return state

  }
}

function myState (currentState){
  return {
    robot: {...state.robot},
    board: [...state.board],
    commandQueue: [...state.commandQueue],
    running: state.running,
    executed: [...state.executed]
  }
}
export default reducer
