import React from 'react'
import ReactHowler from 'react-howler'
import raf from 'raf' // requestAnimationFrame polyfill

const trackStyle = {
  width: '250px',
  height: '4px',
  backgroundColor: 'black',
  position: 'relative',
  margin: '50px 0px'
}

class AutoPlay extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      playing: false,
      loaded: false,
      volume: 1.0
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
        height: '20px',
        width: '5px',
        backgroundColor: 'pink',
        display: 'block',
        position: 'absolute',
        bottom: 'calc(50% - 10px)',
        transform: `translate3d(${thumbProgress}px,0px,0px)`
    }
    return (
      <div className='full-control'>
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

        <div className='volume'>
          <label>
            Volume:
            <span className='slider-container'>
              <input
                type='range'
                min='0'
                max='1'
                step='.05'
                value={this.state.volume}
                onChange={e => this.setState({volume: parseFloat(e.target.value)})}
                style={{verticalAlign: 'bottom'}}
              />
            </span>
            {this.state.volume.toFixed(2)}
          </label>
        </div>

        <button onClick={this.handleToggle}>
          {(this.state.playing) ? 'Pause' : 'Play'}
        </button>
        <button onClick={this.handleStop}>
          Stop
        </button>
      </div>
    )
  }
}

export default AutoPlay;
