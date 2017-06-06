import React from 'react'
import ReactHowler from 'react-howler'
import Colors from '../StyleComponents/Colors'
import styled from 'styled-components'
import Button from '../StyleComponents/Button';
import Range from '../StyleComponents/Range';
import FakeInput from '../StyleComponents/FakeInput';
import raf from 'raf' // requestAnimationFrame polyfill
import { mmssTime } from '../helpers.js'

const PlayerElement = styled.div`
  display:flex;
    align-items:center;
  padding:15px;
  width:100%;
`

const PlayerButton = Button.extend`
  width:75px;
  height:75px;
  color: ${(props) => props.playing ? Colors.lightPurple : Colors.darkPurple};
  background-color: ${(props) => props.playing ? Colors.darkPurple : Colors.lightPurple};
`
const ButtonGroup = styled.div`
  display:flex;
    flex-flow:row nowrap;
    justify-content:space-around;
  padding: 15px 0px;
  width:100%;
`

const PlayerControls = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 30px;
  display: flex;
    flex-flow: column wrap;
    align-items: center;
`;

const PlayerLabel = styled.label`
  color: ${Colors.darkPurple};
  padding: 0px 10px;
`;

const trackStyle = {
  width: "500px",
  height: '3px',
  backgroundColor: `${Colors.darkPurple}`,
  position: 'relative',
}

class AutoPlay extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      playing: false,
      loaded: false,
      volume: 1.0,
      duration: 0,
      seek: 0
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleOnLoad = this.handleOnLoad.bind(this)
    this.handleOnEnd = this.handleOnEnd.bind(this)
    this.handleOnPlay = this.handleOnPlay.bind(this)
    this.handleStop = this.handleStop.bind(this)
    this.renderSeekPos = this.renderSeekPos.bind(this)
  }

  componentDidUpdate(prevProps){
    if(this.props.src !== prevProps.src) {
      this.handleToggle()
    }
  }

  componentWillUnmount () {
    this.clearRAF()
  }

  handleToggle () {
    this.setState({
      playing: !this.state.playing
    })
    this.handleOnLoad();
  }

  handleOnLoad () {
    this.setState({
      loaded: true,
      duration: this.player.duration()
    })
  }

  handleOnPlay () {
    this.setState({
      playing: true
    })
    this.renderSeekPos()
  }

  handleOnEnd () {
    this.setState({
      playing: false
    })
    this.clearRAF()
  }

  handleStop () {
    this.player.stop()
    this.setState({
      playing: false // Need to update our local state so we don't immediately invoke autoplay
    })
    this.renderSeekPos()
  }

  renderSeekPos () {
    var progress = this.player.seek();
    this.setState({
      seek: progress
    })
    if (this.state.playing) {
      this._raf = raf(this.renderSeekPos)
    }
  }

  clearRAF () {
    raf.cancel(this._raf)
  }

  render () {
    const thumbProgress = this.state.seek ? this.state.seek : 0;
    const thumbStyle = {
        height: '24px',
        width: '10px',
        backgroundColor: `${Colors.lightPurple}`,
        border: `3px solid ${Colors.darkPurple}`,
        display: 'block',
        position: 'absolute',
        bottom: 'calc(50% - 12px)',
        transform: `translate3d(${thumbProgress}px,0px,0px)`
    }
    return (
      <PlayerControls>
        <PlayerElement>
          <PlayerLabel>Title: </PlayerLabel>
          <FakeInput />
        </PlayerElement>
        <PlayerElement>
          <PlayerLabel>{mmssTime(this.state.seek)}</PlayerLabel>
          {
            this.props.src.enclosure ?
            <ReactHowler
              src={this.props.src.enclosure.url}
              playing={this.state.playing}
              onLoad={this.handleOnLoad}
              onPlay={this.handleOnPlay}
              onEnd={this.handleOnEnd}
              volume={this.state.volume}
              html5={true}
              ref={(ref) => (this.player = ref)}
            />
            : null
          }
          <div style={trackStyle}>
            <div key={thumbProgress} style={thumbStyle}></div>
          </div>
          <PlayerLabel>{ mmssTime(this.state.duration)}</PlayerLabel>
        </PlayerElement>
        <PlayerElement>
            <PlayerLabel>VOLUME:</PlayerLabel>
            <Range
              type='range'
              min='0'
              max='1'
              step='.05'
              value={this.state.volume}
              onChange={e => this.setState({volume: parseFloat(e.target.value)})}
            />
          <PlayerLabel>{this.state.volume.toFixed(2)}</PlayerLabel>
        </PlayerElement>
        <ButtonGroup>
          <PlayerButton playing={this.state.playing} onClick={this.handleToggle}>
            Play
          </PlayerButton>
          <PlayerButton playing={!this.state.playing} onClick={this.handleToggle}>
            Pause
          </PlayerButton>
        </ButtonGroup>
      </PlayerControls>
    )
  }
}

export default AutoPlay;
