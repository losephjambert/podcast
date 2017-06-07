import React from 'react'
import ReactHowler from 'react-howler'
import Colors from '../StyleComponents/Colors'
import styled from 'styled-components'
import Button from '../StyleComponents/Button';
import Range from '../StyleComponents/Range';
import FakeInput from '../Components/FakeInput';
import raf from 'raf' // requestAnimationFrame polyfill
import { mmssTime } from '../helpers.js'

const PlayerElement = styled.div`
  display:flex;
    align-items:center;
  padding: 15px;
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
  background-color: ${Colors.mediumPurple};
  margin: 0 auto;
  padding: 30px;
  display: flex;
    flex-flow: column wrap;
    align-items: center;
  box-shadow: inset 0 0 0 5px ${Colors.darkPurple};
`;

const PlayerLabel = styled.div`
  color: ${Colors.darkPurple};
  width: ${(props) => props.width};
  min-width:${(props) => props.width};
  text-align: ${(props) => props.align};
  padding-${(props) => props.align === "right" ? "left" : "right"} : 10px;
`;

// The track can't be a styled component because it needs the ref property. I think.
const trackStyle = {
    width: "100%",
    height: "3px",
    backgroundColor: `${Colors.darkPurple}`,
    position: "relative"
}

class AutoPlay extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      playing: true,
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
    this.setState({
      seek: this.player.seek()
    })
    if (this.state.playing) {
      this._raf = raf(this.renderSeekPos)
    }
  }

  clearRAF () {
    raf.cancel(this._raf)
  }

  render () {
    // these have to be here bc thumbProgress is dynamic
    const thumbProgress = this.refs.track ? (this.state.seek / this.state.duration) * this.refs.track.offsetWidth : null;
    const thumbStyle = {
        height: '24px',
        width: '10px',
        backgroundColor: `${Colors.lightPurple}`,
        border: `3px solid ${Colors.darkPurple}`,
        display: 'block',
        position: 'absolute',
        bottom: 'calc(50% - 14px)',
        transform: `translate3d(${thumbProgress}px,0px,0px)`
    }
    return (
      <PlayerControls>
        <PlayerElement>
          <PlayerLabel align="left">TITLE: </PlayerLabel>
          <FakeInput value={this.props.src.title || "We have trust issues"}/>
        </PlayerElement>
        <PlayerElement>
          <PlayerLabel align="left" width="50px">{mmssTime(this.state.seek)}</PlayerLabel>
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
          <div style={trackStyle} ref="track">
            <div key={thumbProgress} style={thumbStyle}></div>
          </div>
          <PlayerLabel align="right">{ mmssTime(this.state.duration)}</PlayerLabel>
        </PlayerElement>
        <PlayerElement>
            <PlayerLabel align="left">VOLUME:</PlayerLabel>
            <Range
              type='range'
              min='0'
              max='1'
              step='.05'
              value={this.state.volume}
              onChange={e => this.setState({volume: parseFloat(e.target.value)})}
            />
        </PlayerElement>
        <ButtonGroup>
          <PlayerButton type="Play" playing={this.state.playing} onClick={!this.state.playing ? this.handleToggle : null}>
            Play
          </PlayerButton>
          <PlayerButton type="Pause" playing={!this.state.playing} onClick={this.state.playing ? this.handleToggle : null}>
            Pause
          </PlayerButton>
        </ButtonGroup>
      </PlayerControls>
    )
  }
}

export default AutoPlay;
