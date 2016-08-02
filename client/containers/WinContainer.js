import { connect } from 'react-redux'
import Win from '../components/Win'
import * as actions from '../reducers/action'

function mapStateToProps (state) {
  return state
}
function mapDispatchToProps (dispatch) {
  return {
    LEVEL_WON: () => {
      dispatch(actions.levelWon())
    },
    SELECT_LEVEL: (levelNum) => {
      dispatch(actions.selectLevel(levelNum))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Win)
