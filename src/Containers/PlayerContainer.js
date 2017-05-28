import React, { Component } from 'react';

import Player from '../Components/Player';

class PlayerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Player src={this.props.playingEpisode}/>
    );
  }
}

export default PlayerContainer;
