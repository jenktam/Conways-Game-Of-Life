import {
  TOGGLE_CELL,
  CLEAR,
  RANDOMIZE,
  PLAY,
  PAUSE,
  STEP_FORWARD
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

    case CLEAR:
      newState.grid = makeGrid('clear', gridHeight, gridWidth)
      break;

    case RANDOMIZE:
      newState.grid = makeGrid('random', gridHeight, gridWidth)
      break;

    case PLAY:
      newState.isPlaying = true;
      newState.requestID = action.requestID;
      break;

    case PAUSE:
      newState.isPlaying = false;
      newState.requestID = null;
      break;

    case STEP_FORWARD:
      newState.grid = makeGrid('next', gridHeight, gridWidth, state.grid)
      break;

    default:
      return state;
  }

  return newState;
}
