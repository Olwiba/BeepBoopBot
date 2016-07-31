import { connect } from 'react-redux'
import CommandPane from '../components/CommandPane'
import actions from '../reducers/action.js'

console.log(actions)

function mapStateToProps (state) {
  return {
    commandQueue: state.commandQueue,
    running: state.running
  }
}

function mapDispatchToProps (dispatch) {
  return {
    QUEUE_ACTION: () => dispatch(queueAction), 
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
