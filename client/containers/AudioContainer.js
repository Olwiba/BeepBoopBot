import { connect } from 'react-redux'
import Audio from '../components/Audio'
import * as actions from '../reducers/action'

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(Audio)
