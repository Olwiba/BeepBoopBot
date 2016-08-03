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
    const cookies = cookie.load('sound')
    if (cookies === undefined) {
      cookie.save('sound', 'ON')
      this.setState({playStatus: Sound.status.PLAYING})
    }
    else if(cookies === 'ON'){
      this.setState({playStatus: Sound.status.PLAYING})
    }
    else {
      this.setState({playStatus: Sound.status.STOPPED})
    }
  }

  componentDidUpdate(){
    const cookies = cookie.load('sound')
    const isAlreadySet = this.state.playStatus === Sound.status.PLAYING
    if(cookies === 'ON'){
      if (isAlreadySet) return
      this.setState({playStatus: Sound.status.PLAYING})
    }
    else {
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
          onFinishedPlaying={() => this.setState({playStatus: Sound.status.PLAYING})} />
    </div>
    )
  }
}
