import { connect } from 'react-redux'
import Model from '../model/Model'

function mapStateToProps (state) {
  console.log(state)
  return state
}

export default connect(mapStateToProps)(Model)
