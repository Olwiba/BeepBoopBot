export const command = () => {
  return (dispatch, getState) => {
    var interval = setInterval(() => {
      var state = getState()
      if (state.running === false || state.executeCommandIndex === state.commandQueue.length) {
        // dispatch(nextCommand("STOP_BUTTON")) command at game over
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