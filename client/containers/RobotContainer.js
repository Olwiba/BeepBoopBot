import { connect } from 'react-redux'
import Robot from '../components/Robot'

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(Robot)
