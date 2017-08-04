import React from 'react'
import BoardContainer from '../containers/BoardContainer'
import ButtonsContainer from '../containers/ButtonsContainer'

const App = () => {
  return (
    <div>
      <h1>Game of Life</h1>
      <BoardContainer />
      <ButtonsContainer />
    </div>
  )
}

export default App
