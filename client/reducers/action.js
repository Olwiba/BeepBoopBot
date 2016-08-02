export const CLEAR_BUTTON = 'CLEAR_BUTTON'
export const GO_BUTTON = 'GO_BUTTON'
export const STOP_BUTTON = 'STOP_BUTTON'
export const SELECT_LEVEL = 'SET_LEVEL'
export const MOVE_FORWARD = 'MOVE_FORWARD'
export const TURN_LEFT = 'TURN_LEFT'
export const TURN_RIGHT = 'TURN_RIGHT'
export const JUMP_UP = 'JUMP_UP'
export const ADD_TILE_INFO = 'ADD_TILE_INFO'
export const QUEUE_ACTION = 'QUEUE_ACTION'
export const HAS_FINISHED = 'HAS_FINISHED'
export const LEVEL_WON = 'TOGGLE_LEVEL_WON'
export const REMOVE_ACTION = 'REMOVE_ACTION'
export const TOGGLE_SOUND = 'TOGGLE_SOUND'

export const runCommands = () => {
  return (dispatch, getState) => {
    var interval = setInterval(() => {
      var state = getState()
      if (!state.running) {
        clearInterval(interval)
      }
      else if (state.executeCommandIndex === state.commandQueue.length) {
        if (state.board[state.robot.positionY][state.robot.positionX] === 1) {
          dispatch(createAction(LEVEL_WON))
        }
        dispatch(createAction(HAS_FINISHED))
        clearInterval(interval)
      }
      else if (state.robot.isAlive === false || state.moveLimit === state.executeCommandIndex) {
        dispatch(createAction(HAS_FINISHED))
        clearInterval(interval)
      }
      else {
        dispatch(createAction(state.commandQueue[state.executeCommandIndex]))
      }
    }, 800)
  }
}

export const queueAction = (payload) => {
  return {
    type: QUEUE_ACTION,
    payload: payload
  }
}

export const createAction = (type) => ({
  type
})

export const setLevel = (levelNum) => {
  return {
    type: SELECT_LEVEL,
    payload: levelNum
  }
}

export const addTileInfo = (tileInfo) => {
  return {
    type: ADD_TILE_INFO,
    payload: tileInfo
  }
}

export const removeAction = (commandIndex) => {
  return {
    type: REMOVE_ACTION,
    payload: commandIndex
  }
}
export const toggleSound = () => {
  return {
    type: TOGGLE_SOUND
  }
}
