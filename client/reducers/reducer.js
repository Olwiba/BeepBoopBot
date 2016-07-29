const INITIAL_STATE = 1

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GO_BUTTON':
      return state

    case 'STOP_BUTTON':
      return state

    default:
      return state

  }
}

export default reducer
