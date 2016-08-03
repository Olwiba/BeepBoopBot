import React, { Component }from 'react';
import Sound from 'react-sound';
import cookie from 'react-cookie'
import songs from '../sound';
import TileInFront from '../reducers/lib/tileInFront'

export default class Backgroundtrack extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSong: songs[2],
      position: 0,
      volume: 10,
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

  componentDidMount () {
    var cookies = cookie.load('sound')
    // Check if cookie exists. If not, show modal and set cookie.
    if (!cookies) {
      cookie.save('sound', 'ON')
      this.setState({playStatus: Sound.status.PLAYING})
    }
  }
  componentDidUpdate(){
    const soundState = cookie.select('sound')
    const isAlreadySet = soundState === Sound.status.PLAYING
    if(soundState === 'ON'){
      if (isAlreadySet) return
      this.setState({playStatus: Sound.status.PLAYING})
    }
    else if (soundState === 'OFF') {
      if (!isAlreadySet) return
      this.setState({playStatus: Sound.status.STOPPED})
    }
  }

  render() {
    return( 
    <div>
        <Sound
          url={this.state.currentSong.url}
          playStatus={this.state.playStatus}
          playFromPosition={this.state.position}
          volume={this.state.volume}
          onLoading={({bytesLoaded, bytesTotal}) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
          onPlaying={({position}) => console.log(position)}
          onFinishedPlaying={() => this.setState({playStatus: Sound.status.PLAYING})} />
    </div>
    )
  }
}
