import { connect } from 'react-redux'
import Nav from '../components/Nav'

function mapStateToProps (state) {
  return {
    currentLevel: state.currentLevel
  }
}

function mapDispatchToProps (dispatch) {
  return {
    SELECT_LEVEL: (levelNumber) => {
      console.log('did a select level dispatch')
      console.log('got new levelnum', levelNumber)
      dispatch({
        type: 'SELECT_LEVEL',
        board: []
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
