import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import boardReducer from './reducers/board-reducer'

const reducers = combineReducers({
  board: boardReducer
//   //generations counter reducer
})


export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunkMiddleware,
    createLogger({ collapsed: true})
  )
)
