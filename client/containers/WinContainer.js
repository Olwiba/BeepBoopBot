import { connect } from 'react-redux'
import Win from '../components/Win'
import * as actions from '../reducers/action'

function mapStateToProps (state) {
  return state
}
function mapDispatchToProps (dispatch) {
  return {
    toggleLevelWon: () => {
      dispatch(actions.levelWon())
    },
    setLevel: (levelNum) => {
      dispatch(actions.setLevel(levelNum))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Win)
