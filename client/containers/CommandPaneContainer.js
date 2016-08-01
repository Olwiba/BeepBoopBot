import { connect } from 'react-redux'
import CommandPane from '../components/CommandPane'
import * as actions from '../reducers/action'

function mapStateToProps (state) {
  return {
    commandQueue: state.commandQueue,
    running: state.running,
    executeCommandIndex: state.executeCommandIndex,
    hasFinished: state.hasFinished
  }
}

function mapDispatchToProps (dispatch) {
  return {
    QUEUE_ACTION: (payload) => {
      dispatch({
        type: 'QUEUE_ACTION',
        payload: payload
      })
    },
    GO_BUTTON: () => {
      dispatch({
        type: 'GO_BUTTON'
      })
      dispatch(actions.command())
    },
    STOP_BUTTON: () => {
      dispatch({
        type: 'STOP_BUTTON'
      })
    },
    CLEAR_BUTTON: () => {
      dispatch({
        type: 'CLEAR_BUTTON'
      })
    },
    HAS_FINISHED: () => {
      dispatch({
        type: 'HAS_FINISHED'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommandPane)
