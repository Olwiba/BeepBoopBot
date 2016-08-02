import { connect } from 'react-redux'
import CommandPane from '../components/CommandPane'
import * as actions from '../reducers/action.js'

function mapStateToProps (state) {
  return {
    commandQueue: state.commandQueue,
    running: state.running,
    executeCommandIndex: state.executeCommandIndex,
    hasFinished: state.hasFinished,
    moveLimit: state.moveLimit
  }
}

function mapDispatchToProps (dispatch) {
  return {
    queueAction: (payload) => {
      dispatch(actions.queueAction(payload))
    },
    GO_BUTTON: () => {
      dispatch(actions.goButton)
      dispatch(actions.runCommands())
    },
    STOP_BUTTON: () => {
      dispatch(actions.stopButton)
    },
    CLEAR_BUTTON: () => {
      dispatch(actions.clearButton)
    },
    HAS_FINISHED: () => {
      dispatch(actions.hasFinished)
    },
    REMOVE_ACTION: (commandIndex) => {
      dispatch(actions.removeAction(commandIndex))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommandPane)
