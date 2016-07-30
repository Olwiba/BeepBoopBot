import { connect } from 'react-redux'
import CommandPane from '../components/CommandPane'

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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommandPane)
