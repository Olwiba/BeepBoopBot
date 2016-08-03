import { connect } from 'react-redux'
import Backgroundtrack from '../components/Backgroundtrack'
import * as actions from '../reducers/action'

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(Backgroundtrack)
