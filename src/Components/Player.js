import React from 'react'
import ReactHowler from 'react-howler'
import Colors from '../StyleComponents/Colors'
import styled from 'styled-components'
import Button from '../StyleComponents/Button';
import Range from '../StyleComponents/Range';
import raf from 'raf' // requestAnimationFrame polyfill

const PlayerElement = styled.div`
  display:flex;
    align-items:center;
  width:50%;
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
  width:50%;
  padding:20px;
`

const PlayerControls = styled.div`
  background-color: ${Colors.mediumPurple};
  width: 100%;
  display: flex;
    flex-flow: column wrap;
    align-items: center;
  box-shadow: inset 0 0 0 5px ${Colors.darkPurple};
`;

const PlayerLabel = styled.label`
  color: ${Colors.darkPurple};
`;

const trackStyle = {
  width: '100%',
  height: '3px',
  backgroundColor: `${Colors.darkPurple}`,
  position: 'relative',
  margin: '50px 0px'
}

class AutoPlay extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      playing: false,
      loaded: false,
      volume: 1.0,
      duration: 0
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
    var progress = (this.player.seek() / this.state.duration) * 250;
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
        <PlayerControls className='full-control'>
          <PlayerElement>
            <PlayerLabel>{thumbProgress.toFixed()}</PlayerLabel>
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
          <PlayerLabel>{this.state.duration.toFixed() || null}</PlayerLabel>
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
