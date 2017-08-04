import { connect } from 'react-redux'
import React, { Component } from 'react'

import Buttons from '../components/Buttons'
import { clear, randomize, play, pause, stepForward } from '../action-creators'

class ButtonsContainer extends Component {
  constructor(){
    super()

    this.play = this.play.bind(this)
  }

  componentDidMount(){
    this.play();
  }

  clear(){
    //if board isPlaying, pause board
    if(this.props.board.isPlaying) this.props.pause();
    // then clear entire board
    this.props.clear()
  }

  randomize(){
    if(this.props.board.isPlaying) this.pause()
    this.props.randomize()
  }

  play() {
    const requestID = requestAnimationFrame(this.play);
    this.props.play(requestID);
    this.props.stepForward();
  }

  pause(){
    cancelAnimationFrame(this.props.board.requestID)
    this.props.pause();
  }


  render(){
    return (
      <div className="buttons">
        <Buttons
          name={`Play`}
          icon={`glyphicon glyphicon-play`}
          isPlaying={this.props.board.isPlaying}
          handleClick={ () => this.props.board.isPlaying ? null : this.play() }
        />

        <Buttons
          name={`Pause`}
          icon={`glyphicon glyphicon-stop`}
          handleClick={ () => this.pause() }
        />

        <Buttons
          name={`Step Forward`}
          icon={`glyphicon glyphicon-step-forward`}
          handleClick={ () => this.props.stepForward() } //update current state of board
        />


        <Buttons
          name={`Clear`}
          icon={`glyphicon glyphicon-remove`}
          handleClick={() => this.clear()}
        />

        <Buttons
          name={`Randomize`}
          icon={`glyphicon glyphicon-random`}
          handleClick={() => this.randomize()}
        />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  board: state.board
})

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(clear()),
  randomize: () => dispatch(randomize()),
  play: (requestID) => dispatch(play(requestID)),
  pause: () => dispatch(pause()),
  stepForward: (board) => dispatch(stepForward(board))
})

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsContainer)
