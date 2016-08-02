import React, { Component }from 'react';
import Sound from 'react-sound';
import songs from '../sound';
import TileInFront from '../reducers/lib/tileInFront'

export default class Backgroundtrack extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSong: songs[2],
      position: 0,
      volume: 25,
      playStatus: Sound.status.PLAYING
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
    if(this.props.sound){
      this.setState({playStatus: Sound.status.PLAYING})
    }
    else {
      this.setState({playStatus: Sound.status.STOPPED})
    }
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
          onFinishedPlaying={() => this.setState({playStatus: Sound.status.PLAYING})} />
    </div>
    )
  }
}
