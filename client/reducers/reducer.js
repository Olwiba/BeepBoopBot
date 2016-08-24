import cookie from 'react-cookie'
import jump from './lib/jump'
import moveForward from './lib/moveForward.js'
import levels from '../levels'
import * as a from './action'

const speaker = cookie.load('sound')

const INITIAL_STATE = {
  robot: {
    direction: 0,
    isOnBox: false,
    positionX: 0,
    positionY: 4,
    isAlive: true
  },
  board: levels[1].board,
  moveLimit: levels[1].moveLimit,
  commandQueue: [], // commands are the same as the action types. e.g. MOVE_FORWARD
  running: false,
  executeCommandIndex: 0,
  tileInfo: {},
  currentLevel: 1,
  levelWon: false,
  hasFinished: false, // Has the command queue finished running? i.e. executed all commands
  sound: speaker === 'ON'
}

export function cloneState (state) {
  return {
    robot: {...state.robot},
    board: state.board.map(row => row.slice()),
    moveLimit: state.moveLimit,
    commandQueue: [...state.commandQueue],
    running: state.running,
    executeCommandIndex: state.executeCommandIndex,
    tileInfo: {...state.tileInfo},
    currentLevel: state.currentLevel,
    levelWon: state.levelWon,
    hasFinished: state.hasFinished,
    sound: state.sound
  }
}

function resetGameState (state) {
  const newState = cloneState(state)

  newState.robot = INITIAL_STATE.robot
  newState.running = false
  newState.hasFinished = false
  newState.levelWon = false
  newState.executeCommandIndex = 0

  return newState
}

const reducer = (state = INITIAL_STATE, action) => {
  const newState = cloneState(state)
  switch (action.type) {
    case a.CLEAR_BUTTON:
      const newClearedState = resetGameState(state)
      newClearedState.commandQueue = []
      return newClearedState

    case a.GO_BUTTON:
      newState.running = true
      newState.hasFinished = false
      return newState

    case a.STOP_BUTTON:
      const newStopState = resetGameState(state)
      return newStopState

    case a.SELECT_LEVEL:
      const newLevelState = resetGameState(state)
      newLevelState.board = levels[action.payload].board
      newLevelState.moveLimit = levels[action.payload].moveLimit
      newLevelState.tileInfo = state.tileInfo
      newLevelState.currentLevel = parseInt(action.payload)
      newLevelState.commandQueue = []
      newLevelState.executeCommandIndex = 0
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
      newState.tileInfo = action.payload
      return newState

    case a.QUEUE_ACTION:
      newState.commandQueue.push(action.payload)
      return newState

    case a.REMOVE_ACTION:
      newState.commandQueue.splice(action.payload, 1)
      return newState

    case a.LEVEL_WON:
      newState.levelWon = !(newState.levelWon)
      return newState

    // Has the command queue finished running? i.e. executed all commands
    case a.HAS_FINISHED:
      newState.hasFinished = true
      return newState

    case a.TOGGLE_SOUND:
      newState.sound = !(newState.sound)
      var cookies = cookie.load('sound')
      if (cookies === 'ON'){
        cookie.save('sound', 'OFF')       
      }
      else{
        cookie.save('sound', 'ON') 
      }
      return newState

    default:
      return state

  }
}

export default reducer