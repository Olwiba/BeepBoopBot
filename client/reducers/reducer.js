// import { immutable, fromJS, toJS} from 'immutable'
import jump from './lib/jump'
import moveForward from './lib/moveForward.js'

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
  executed:[],
  tileInfo: {}
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GO_BUTTON':
      const newGoState = {
        robot: INITIAL_STATE.robot,
        board: [...state.board],
        commandQueue: [...state.commandQueue],
        running: true,
        executed: [],
        tileInfo: {...state.tileInfo}
      }
      return newGoState

    case 'STOP_BUTTON':
      const newStopState = {
        robot: INITIAL_STATE.robot,
        board: [...state.board],
        commandQueue: [...state.commandQueue],
        running: true,
        executed: [...state.executed],
        tileInfo: {...state.tileInfo}
      }
      newStopState.running = false
      newStopState.executed = []
      return newStopState

    case 'MOVE_FORWARD':
      const newFwdState = {
        robot: {...state.robot},
        board: [...state.board],
        commandQueue: [...state.commandQueue],
        running: state.running,
        executed:[...state.executed],
        tileInfo: {...state.tileInfo}
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
        executed:[...state.executed],
        tileInfo: {...state.tileInfo}
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
        executed:[...state.executed],
        tileInfo: {...state.tileInfo}
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
        executed:[...state.executed],
        tileInfo: {...state.tileInfo}
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
        executed: [...state.executed],
        tileInfo: {...state.tileInfo}
      }
      addFwdState.commandQueue.push('MOVE_FORWARD')
      return addFwdState

    case 'ADD_LEFT':
      const addLeftState = {
        robot: {...state.robot},
        board: [...state.board],
        commandQueue: [...state.commandQueue],
        running: state.running,
        executed: [...state.executed],
        tileInfo: {...state.tileInfo}
      }
      addLeftState.commandQueue.push('TURN_LEFT')
      return addLeftState

    case 'ADD_RIGHT':
      const addRightState = {
        robot: {...state.robot},
        board: [...state.board],
        commandQueue: [...state.commandQueue],
        running: state.running,
        executed: [...state.executed],
        tileInfo: {...state.tileInfo}
      }
      addRightState.commandQueue.push('TURN_RIGHT')
      return addRightState

    case 'ADD_JUMP':
      const addJumpState = {
        robot: {...state.robot},
        board: [...state.board],
        commandQueue: [...state.commandQueue],
        running: state.running,
        executed: [...state.executed],
        tileInfo: {...state.tileInfo}
      }
      addJumpState.commandQueue.push('JUMP_UP')
      return addJumpState

    case 'ADD_TILE_INFO':
      console.log('adding tile info', action.tileInfo['00'].getBoundingClientRect())
      const addTileInfoState = {
        robot: {...state.robot},
        board: [...state.board],
        commandQueue: [...state.commandQueue],
        running: state.running,
        executed: [...state.executed],
        tileInfo: {...state.tileInfo}
      }
      addTileInfoState.tileInfo = action.tileInfo
      return addTileInfoState

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
