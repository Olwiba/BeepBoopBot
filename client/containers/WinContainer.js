import { connect } from 'react-redux'
import Win from '../components/Win'
import levels from '../levels'

function mapStateToProps (state) {
  return state
}
function mapDispatchToProps (dispatch) {
  return {
    LEVEL_WON: () => {
      dispatch({
        type: 'LEVEL_WON'
      })
    },
    SELECT_LEVEL: (levelNum) => {
      dispatch({
        type: 'SELECT_LEVEL',
        payload: levelNum
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Win)
