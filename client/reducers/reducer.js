// import { immutable, fromJS, toJS} from 'immutable'
import jump from './lib/jump'
import moveForward from './lib/moveForward.js'
import levels from '../levels'

const INITIAL_STATE = {
  robot: {
    direction: 0,
    isOnBox: false,
    positionX: 0,
    positionY: 4
  },
  board: levels[1],
  commandQueue: [], // commands are the same as the action types. e.g. 'MOVE_FORWARD'
  running: false,
  executeCommandIndex: 0,
  tileInfo: {},
  currentLevel: 1,
  hasFinished: false // Has the command queue finished running? i.e. executed all commands
}

function cloneState (state) {
  return {
    robot: {...state.robot},
    board: state.board.map(row => row.slice()),
    commandQueue: [...state.commandQueue],
    running: state.running,
    executeCommandIndex: state.executeCommandIndex,
    tileInfo: {...state.tileInfo},
    currentLevel: state.currentLevel,
    hasFinished: state.hasFinished
  }
}

const reducer = (state = INITIAL_STATE, action) => {
  const newState = cloneState(state)

  switch (action.type) {
    case 'CLEAR_BUTTON':
      if (state.running) {
        // stop the robot before clearing
        newState.running = INITIAL_STATE.running
        newState.robot = INITIAL_STATE.robot
      }

      newState.commandQueue = INITIAL_STATE.commandQueue
      newState.executeCommandIndex = INITIAL_STATE.executeCommandIndex
      return newState

    case 'GO_BUTTON':
      newState.running = true
      return newState

    case 'STOP_BUTTON':
      newState.running = false
      newState.robot = INITIAL_STATE.robot
      newState.executeCommandIndex = 0
      return newState

    case 'SELECT_LEVEL':
      const tempTileInfo = state.tileInfo
      const newLevelState = cloneState(INITIAL_STATE)
      newLevelState.board = action.board
      newLevelState.tileInfo = tempTileInfo

      return newLevelState

    case 'MOVE_FORWARD':
      moveForward(newState.robot, newState.board)
      newState.executeCommandIndex++
      return newState

    case 'TURN_LEFT':
      newState.robot.direction = newState.robot.direction - 90
      newState.executeCommandIndex++
      return newState

    case 'TURN_RIGHT':
      newState.robot.direction = newState.robot.direction + 90
      newState.executeCommandIndex++
      return newState

    case 'JUMP_UP':
      jump(newState.robot, newState.board)
      newState.executeCommandIndex++
      return newState

    case 'ADD_TILE_INFO':
      newState.tileInfo = action.tileInfo
      return newState

    case 'QUEUE_ACTION':
      newState.commandQueue.push(action.payload)
      return newState

    // Has the command queue finished running? i.e. executed all commands
    case 'HAS_FINISHED':
    console.log('finished at reducer')
      newState.hasFinished = true
      return newState

    case 'RETRY':
    console.log('retrying at reducer')
      newState.running = false
      newState.robot = INITIAL_STATE.robot
      newState.executeCommandIndex = 0
      newState.hasFinished = false
      return newState

    default:
      return state

  }
}

export default reducer
