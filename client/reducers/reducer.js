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
    [0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1]
  ],
  commandQueue: [], // commands are the same as the action types. e.g. 'MOVE_FORWARD'
  running: false,
  executeCommandIndex: 0,
  tileInfo: {}
}

function cloneState (state) {
  return {
    robot: {...state.robot},
    board: state.board.map(row => row.slice()),
    commandQueue: [...state.commandQueue],
    running: state.running,
    executeCommandIndex: state.executeCommandIndex,
    tileInfo: {...state.tileInfo}
  }
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GO_BUTTON':
      const newGoState = cloneState(state)
      newGoState.running = true
      return newGoState

    case 'STOP_BUTTON':
      const newStopState = cloneState(state)
      newStopState.running = false
      newStopState.executeCommandIndex = 0
      return newStopState

    case 'MOVE_FORWARD':
      const newFwdState = cloneState(state)
      moveForward(newFwdState.robot, newFwdState.board)
      newFwdState.executeCommandIndex++
      return newFwdState

    case 'TURN_LEFT':
      const newLeftState = cloneState(state)
      // If direction is 0, set it to 270, otherwise subtract 90
      newLeftState.robot.direction = newLeftState.robot.direction ? newLeftState.robot.direction - 90 : 270
      newLeftState.executeCommandIndex++
      return newLeftState

    case 'TURN_RIGHT':
      const newRightState = cloneState(state)
      // If direction is 270, set it to 0, otherwise add 90
      newRightState.robot.direction = newRightState.robot.direction === 270 ? 0 : newRightState.robot.direction + 90
      newRightState.executeCommandIndex++
      return newRightState

    case 'JUMP_UP':
      const jumpState = cloneState(state)
      jump(jumpState.robot, jumpState.board)
      jumpState.executeCommandIndex++
      return jumpState

    case 'ADD_FORWARD':
      const addFwdState = cloneState(state)
      addFwdState.commandQueue.push('MOVE_FORWARD')
      return addFwdState

    case 'ADD_LEFT':
      const addLeftState = cloneState(state)
      addLeftState.commandQueue.push('TURN_LEFT')
      return addLeftState

    case 'ADD_RIGHT':
      const addRightState = cloneState(state)
      addRightState.commandQueue.push('TURN_RIGHT')
      return addRightState

    case 'ADD_JUMP':
      const addJumpState = cloneState(state)
      addJumpState.commandQueue.push('JUMP_UP')
      return addJumpState

    case 'ADD_TILE_INFO':
      const addTileInfoState = cloneState(state)
      addTileInfoState.tileInfo = action.tileInfo
      return addTileInfoState

    default:
      return state

  }
}

export default reducer
