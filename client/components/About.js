import React, { Component } from 'react'
import SkyLight from 'react-skylight';

class About extends Component {

// DON'T FORGET TO COMMENT ME BACK IN
  // componentDidMount() {
  //   this.refs.aboutBox.show()
  // }

  render () {
    const style = {
      backgroundColor: '#00897B',
      color: '#ffffff',
      width: '70%',
      height: '600px',
      marginTop: '-300px',
      marginLeft: '-35%',
    };

    return (
      <div>
        <button onClick={() => this.refs.aboutBox.show()}>Open Modal</button>
        <SkyLight dialogStyles={style} hideOnOverlayClicked ref="aboutBox" >
          I"'"m a custom modal!
        </SkyLight>
      </div>
    )
  }
}

export default About