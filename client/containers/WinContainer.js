import { connect } from 'react-redux'
import Win from '../components/Win'
import levels from '../levels'

function mapStateToProps (state) {
  return state
}
function mapDispatchToProps (dispatch) {
  return {
    LEVEL_CLEARED: () => {
      dispatch({
        type: 'LEVEL_CLEARED'
      })
    },
    SELECT_LEVEL: (levelNum) => {
      dispatch({
        type: 'SELECT_LEVEL',
        board: levels[levelNum]
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Win)
