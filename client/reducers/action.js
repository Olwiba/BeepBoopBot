export const command = () => {
  return (dispatch, getState) => {
    var interval = setInterval(() => {
      var state = getState()
      if (state.running === false) {
        clearInterval(interval)
        return 
      }
     if(state.executeCommandIndex === state.commandQueue.length) {
        // dispatch(nextCommand("STOP_BUTTON")) command at game over
        if (state.board[state.robot.positionY][state.robot.positionX] === 1){
          dispatch(nextCommand("LEVEL_WON"))
        }
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