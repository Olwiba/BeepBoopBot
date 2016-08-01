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

export const runCommands = () => {
  return (dispatch, getState) => {
    var interval = setInterval(() => {
      var state = getState()
      if (state.running === false || state.executeCommandIndex === state.commandQueue.length) {
        // dispatch(nextCommand("STOP_BUTTON")) command at game over
        dispatch({type: 'HAS_FINISHED'})
        clearInterval(interval)
      } else {
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
