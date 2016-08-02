import { connect } from 'react-redux'
import Robot from '../components/Robot'
import * as actions from '../reducers/action.js'

function mapStateToProps (state) {
  return state
}
function mapDispatchToProps (dispatch) {
  return {
    hasFinished: () => {
      dispatch(actions.hasFinished)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Robot)
