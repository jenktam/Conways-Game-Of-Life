// smart container

import { connect } from 'react-redux'

import Board from '../components/Board'
import { toggleCell } from '../action-creators'

const mapStateToProps = state => ({
  board: state.board
})

const mapDispatchToProps = dispatch => ({
  toggleCell: function (xCoord, yCoord) {
    dispatch(toggleCell(xCoord, yCoord));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Board)
