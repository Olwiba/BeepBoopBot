// import { immutable, fromJS, toJS} from 'immutable'

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
      // const newState = state.get('robot').toJS()
      // newState.positionX += 1
      const newState = {
        robot: {...state.robot},
        board: {...state.board}
      }
      newState.robot.positionX = 4
      return newState
      // // Just move posnX +1 for now
      // const newState = Object.assign({}, state, {robot.positionX: 1})
      // // newState.robot.positionX = 1

      // console.log(state.set('robot', newState).toJS())
      // return state.set('robot', newState)
    default:
      return state

  }
}

export default reducer
