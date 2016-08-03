import React, { Component} from 'react';
import Sound from 'react-sound';
import songs from '../sound';
import TileInFront from '../reducers/lib/tileInFront'

export default class Audio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSong: songs[0],
      position: 0,
      volume: 100,
      playStatus: Sound.status.STOPPED
    };
  }
  getStatusText() {
    switch(this.state.playStatus) {
      case Sound.status.PLAYING:
        return 'playing';
      case Sound.status.PAUSED:
        return 'paused';
      case Sound.status.STOPPED:
        return 'stopped';
      default:
        return '(unknown)';
    }
  }
  componentDidUpdate() {
    const isAlreadySet = this.state.playStatus === Sound.status.PLAYING
    if (isAlreadySet) return
    if(!this.props.hasFinished && this.props.running) {
      if(this.props.commandQueue[this.props.executeCommandIndex] === 'JUMP_UP' && TileInFront(this.props.robot, this.props.board)===2){
        this.setState({
          playStatus : Sound.status.PLAYING
        })
      }
    }
    else if (!this.props.robot.isAlive){
      this.setState({
        currentSong: songs[1],
        playStatus : Sound.status.PLAYING
      })
    }
  }

  render() {
    return( 
    <div>
        <Sound
          url={this.state.currentSong.url}
          playStatus={this.state.playStatus}
          playFromPosition={this.state.position}
          volume={this.statevolume}
          onFinishedPlaying={() => this.setState({playStatus: Sound.status.STOPPED})} />
    </div>
    )
  }
}
