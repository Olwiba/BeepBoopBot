import React from 'react';
import Sound from 'react-sound';
import songs from '../sound';
import TileInFront from '../reducers/lib/tileInFront'

export default class Example extends React.Component {
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
    if(!this.props.hasFinished && this.props.running) {
      if(this.props.commandQueue[this.props.executeCommandIndex] === 'JUMP_UP' && TileInFront(this.props.robot, this.props.board)===2){
        this.setState({
          playStatus : Sound.status.PLAYING
        })
      }
    }
  }

  renderCurrentSong() {
    return <p>
      Current song {this.state.currentSong.title}. Song is {this.getStatusText()}
    </p>;
  }

  handleSongSelected(song) {
    this.setState({currentSong: song, position: 0});
  }

  render() {
    const { volume } = this.state;
    return( 
    <div>
        <Sound
          url={this.state.currentSong.url}
          playStatus={this.state.playStatus}
          playFromPosition={this.state.position}
          volume={volume}
          onLoading={({bytesLoaded, bytesTotal}) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
          onPlaying={({position}) => console.log(position)}
          onFinishedPlaying={() => this.setState({playStatus: Sound.status.STOPPED})} />
    </div>
    )
  }
}