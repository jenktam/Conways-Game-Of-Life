import {
  TOGGLE_CELL
} from './constants'

export const toggleCell = (xCoord, yCoord) => ({
  type: TOGGLE_CELL,
  xCoord,
  yCoord
})
