import { connect } from 'react-redux'
import Board from '../components/Board'

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {
    ADD_TILE_INFO: (tileInfo) => {
      dispatch({
        type: 'ADD_TILE_INFO',
        tileInfo: tileInfo
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
