import { connect } from 'react-redux'
import Board from '../components/Board'
import * as actions from '../reducers/action'

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {
    addTileInfo: (tileInfo) => {
      dispatch(actions.addTileInfo(tileInfo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
