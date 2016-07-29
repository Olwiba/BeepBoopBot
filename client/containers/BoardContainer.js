import { connect } from 'react-redux'
import Board from '../components/Board'

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(Board)
