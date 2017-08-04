import {
  TOGGLE_CELL
} from '../constants'

import makeGrid from '../utils';

const gridHeight = 30
const gridWidth = 45

//INITIAL BOARD STATE
const initialState = {
  grid: makeGrid('random', gridHeight, gridWidth),
  requestID: null,
  isPlaying: false
}

//BOARD REDUCER
export default (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {

    case TOGGLE_CELL:
      const cell = newState.grid[action.yCoord][action.xCoord];

      if(cell.status) cell.status = 0;
      else if(!cell.status) cell.status = 1;
      break;

    default:
      return state;
  }

  return newState;
}
