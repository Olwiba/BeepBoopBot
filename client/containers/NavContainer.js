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
    setLevel: (levelNum) => {
      dispatch(actions.setLevel(levelNum))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
