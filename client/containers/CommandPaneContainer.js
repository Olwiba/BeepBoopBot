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
    goButton: () => {
      dispatch(actions.createAction(actions.GO_BUTTON))
      dispatch(actions.runCommands())
    },
    stopButton: () => {
      dispatch(actions.createAction(actions.STOP_BUTTON))
    },
    clearButton: () => {
      dispatch(actions.createAction(actions.CLEAR_BUTTON))
    },
    removeAction: (commandIndex) => {
      dispatch(actions.removeAction(commandIndex))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommandPane)
