import { connect } from 'react-redux'

import Buttons from '../components/Buttons'
import { } from '../action-creators'

const mapStateToProps = state => ({
  clearButton: state.clearButton,
  randomizeButton: state.randomizeButton,
  playButton: state.playButton,
  stepButton: state.stepButton
})

// const mapDispatchToProps = dispatch => ({

// })

export default connect(mapStateToProps)(Buttons)
