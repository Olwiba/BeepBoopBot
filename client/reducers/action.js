export const command = () => {
  return (dispatch, getState) => {
    var interval = setInterval(() => {
      var state = getState()
      if (state.running ===false || state.executed.length === state.commandQueue.length) {
        // dispatch(nextCommand("STOP_BUTTON")) command at game over
        clearInterval(interval)
      }else {
        dispatch(nextCommand(state.commandQueue[state.executed.length]))
      }
    }, 1000)
  }
}

export const nextCommand = (command) => {
  return {
    type: command
  }
}
