import { connect } from 'react-redux'
import Nav from '../components/Nav'
import * as actions from '../reducers/action'

function mapStateToProps (state) {
  return {
    currentLevel: state.currentLevel,
    sound: state.sound
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setLevel: (levelNum) => {
      dispatch(actions.setLevel(levelNum))
    },
    toggleSound: () => {
      dispatch(actions.createAction(actions.TOGGLE_SOUND))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
