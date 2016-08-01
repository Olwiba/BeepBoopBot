import { connect } from 'react-redux'
import Nav from '../components/Nav'
import levels from '../levels'

function mapStateToProps (state) {
  return {
    currentLevel: state.currentLevel
  }
}

function mapDispatchToProps (dispatch) {
  return {
    SELECT_LEVEL: (levelNum) => {
      dispatch({
        type: 'SELECT_LEVEL',
        board: levels[levelNum]
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
