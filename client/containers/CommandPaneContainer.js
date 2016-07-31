import { connect } from 'react-redux'
import CommandPane from '../components/CommandPane'
import * as actions from '../reducers/action.js'

console.log(actions)

function mapStateToProps (state) {
  return {
    commandQueue: state.commandQueue,
    running: state.running,
    executeCommandIndex: state.executeCommandIndex
  }
}

function mapDispatchToProps (dispatch) {
  return {
    QUEUE_ACTION: (payload) => dispatch(actions.queueAction(payload)), 
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommandPane)
