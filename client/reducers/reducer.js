const INITIAL_STATE = {
  robot: {
    direction: 0,
    isOnBox: false,
    positionX: 0,
    positionY: 0
  },
  board: [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1]
  ]
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GO_BUTTON':
      return state

    case 'STOP_BUTTON':
      return state

    case 'ADD_FORWARD':
      console.log('Adding fwd')
      return state

    default:
      return state

  }
}

export default reducer
