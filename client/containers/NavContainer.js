import { connect } from 'react-redux'
import Nav from '../components/Nav'
import * as actions from '../reducers/action'

function mapStateToProps (state) {
  return {
    currentLevel: state.currentLevel
  }
}

function mapDispatchToProps (dispatch) {
  return {
    SELECT_LEVEL: (levelNum) => {
      dispatch(actions.selectLevel(levelNum))
    },
    TOGGLE_SOUND: () => {
      dispatch(actions.toggleSound())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
