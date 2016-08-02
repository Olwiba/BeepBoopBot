export const CLEAR_BUTTON = 'CLEAR_BUTTON'
export const GO_BUTTON = 'GO_BUTTON'
export const STOP_BUTTON = 'STOP_BUTTON'
export const SELECT_LEVEL = 'SELECT_LEVEL'
export const MOVE_FORWARD = 'MOVE_FORWARD'
export const TURN_LEFT = 'TURN_LEFT'
export const TURN_RIGHT = 'TURN_RIGHT'
export const JUMP_UP = 'JUMP_UP'
export const ADD_TILE_INFO = 'ADD_TILE_INFO'
export const QUEUE_ACTION = 'QUEUE_ACTION'
export const HAS_FINISHED = 'HAS_FINISHED'
export const LEVEL_WON = 'LEVEL_WON'
export const REMOVE_ACTION = 'REMOVE_ACTION'

export const runCommands = () => {
  return (dispatch, getState) => {
    var interval = setInterval(() => {
      var state = getState()
      if (!state.running){
        clearInterval(interval)
      } 
      else if (state.robot.isAlive == false) {
        dispatch(nextCommand("HAS_FINISHED"))
        clearInterval(interval)
      }
      else if (state.executeCommandIndex === state.commandQueue.length) {
        if (state.board[state.robot.positionY][state.robot.positionX] === 1) {
          dispatch(nextCommand("LEVEL_WON"))
        }
        dispatch({type: 'HAS_FINISHED'})
        clearInterval(interval)
      } 
      else {
        dispatch(nextCommand(state.commandQueue[state.executeCommandIndex]))
      }
    }, 800)
  }
}

export const nextCommand = (command) => {
  return {
    type: command
  }
}

export const queueAction = (payload) => {
  return {
    type: QUEUE_ACTION,
    payload: payload
  }
}

export const goButton = {
  type: GO_BUTTON
}

export const stopButton = {
  type: STOP_BUTTON
}

export const clearButton = {
  type: CLEAR_BUTTON
}

export const hasFinished = {
  type: HAS_FINISHED
}

export const selectLevel = (levelNum) => {
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

export const levelWon = () => {
  return {
    type: LEVEL_WON
  }
}

export const removeAction = (commandIndex) => {
  return {
    type: REMOVE_ACTION,
    payload: commandIndex
  }
}
