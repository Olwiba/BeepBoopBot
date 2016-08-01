import jump from './lib/jump'
import moveForward from './lib/moveForward.js'
import levels from '../levels'
import * as a from './action'

const INITIAL_STATE = {
  robot: {
    direction: 0,
    isOnBox: false,
    positionX: 0,
    positionY: 4,
    isAlive: true
  },
  board: levels[1],
  commandQueue: [], // commands are the same as the action types. e.g. MOVE_FORWARD
  running: false,
  executeCommandIndex: 0,
  tileInfo: {},
  currentLevel: 1,
  levelWon: false,
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
    levelWon: state.levelWon,
    hasFinished: state.hasFinished
  }
}

const reducer = (state = INITIAL_STATE, action) => {
  const newState = cloneState(state)
  switch (action.type) {
    case a.CLEAR_BUTTON:
      if (state.running) {
        // stop the robot before clearing
        newState.running = INITIAL_STATE.running
        newState.robot = INITIAL_STATE.robot
      }

      newState.commandQueue = INITIAL_STATE.commandQueue
      newState.executeCommandIndex = INITIAL_STATE.executeCommandIndex
      return newState

    case a.GO_BUTTON:
      newState.running = true
      newState.hasFinished = false
      return newState

    case a.STOP_BUTTON:
      newState.running = false
      newState.robot = INITIAL_STATE.robot
      newState.executeCommandIndex = 0
      newState.hasFinished = false
      return newState

    case a.SELECT_LEVEL:
      const newLevelState = cloneState(INITIAL_STATE)
      newLevelState.board = levels[action.payload]
      newLevelState.tileInfo = state.tileInfo
      newLevelState.currentLevel = action.payload

      return newLevelState

    case a.MOVE_FORWARD:
      moveForward(newState.robot, newState.board)
      newState.executeCommandIndex++
      return newState

    case a.TURN_LEFT:
      newState.robot.direction = newState.robot.direction - 90
      newState.executeCommandIndex++
      return newState

    case a.TURN_RIGHT:
      newState.robot.direction = newState.robot.direction + 90
      newState.executeCommandIndex++
      return newState

    case a.JUMP_UP:
      jump(newState.robot, newState.board)
      newState.executeCommandIndex++
      return newState

    case a.ADD_TILE_INFO:
      newState.tileInfo = action.tileInfo
      return newState

    case a.QUEUE_ACTION:
      newState.commandQueue.push(action.payload)
      return newState

    case 'LEVEL_WON':
      newState.levelWon = !(newState.levelWon)
      return newState

    // Has the command queue finished running? i.e. executed all commands
    case a.HAS_FINISHED:
      newState.hasFinished = true
      return newState

    default:
      return state

  }
}

export default reducer
