export const command = () => {
  return (dispatch, getState) => {
    var interval = setInterval(() => {
      var state = getState()
      console.log(state)
      if (state.executed.length === state.commandQueue.length) {
        clearInterval(interval)
      }else {
        dispatch(nextCommand(state.commandQueue[state.executed.length], state))
      }
    }, 1000)
  }
}

export const nextCommand = (command, state) => {
  return {
    type: command,
  state}
}
