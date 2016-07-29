import { connect } from 'react-redux'
import CommandPane from '../components/CommandPane'

function mapStateToProps (state) {
  console.log('container state', state)
  return state
}

function mapDispatchToProps (dispatch) {
  return {
    ADD_FORWARD: () => {
      dispatch({
        type: 'ADD_FORWARD'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommandPane)
