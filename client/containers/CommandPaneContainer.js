import { connect } from 'react-redux'
import CommandPane from '../components/CommandPane'
import * as actions from '../reducers/action'

function mapStateToProps (state) {
  return {
    commandQueue: state.commandQueue
  }
}

function mapDispatchToProps (dispatch) {
  return {
    ADD_FORWARD: () => {
      dispatch({
        type: 'ADD_FORWARD'
      })
    },
    ADD_LEFT: () => {
      dispatch({
        type: 'ADD_LEFT'
      })
    },
    ADD_RIGHT: () => {
      dispatch({
        type: 'ADD_RIGHT'
      })
    },
    ADD_JUMP: () => {
      dispatch({
        type: 'ADD_JUMP'
      })
    },
    GO_BUTTON: () => {
      dispatch(actions.command())
    },
    STOP_BUTTON: () => {
      dispatch({
        type: 'STOP_BUTTON'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommandPane)
