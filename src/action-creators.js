import {
  TOGGLE_CELL,
  CLEAR,
  RANDOMIZE,
  PLAY,
  PAUSE,
  STEP_FORWARD
} from './constants'

export const toggleCell = (xCoord, yCoord) => ({
  type: TOGGLE_CELL,
  xCoord,
  yCoord
})


export const clear = () => ({
  type: CLEAR,
})

export const randomize = () => ({
  type: RANDOMIZE,
})

export const play = (requestID) => ({
  type: PLAY,
  requestID
})

export const pause = () => ({
  type: PAUSE,
})

export const stepForward = (board) => ({
  type: STEP_FORWARD,
  board
})
