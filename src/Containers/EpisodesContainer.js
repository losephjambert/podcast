import React, { Component } from 'react';
import axios from 'axios';

import Episode from '../Components/Episode';

class EpisodesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      RSS: [],
      selectedEpisode: {},
      isPlaying: false,
      isPaused: true,
      error: null,
      playEpisode: this.playEpisode.bind(this)
    } ;
  }

  playEpisode(episode) {
    this.setState({selectedEpisode: episode})
  }

  componentWillMount() {
    axios
      .get(`https://trust-issues-api.herokuapp.com/rss`)
      .catch(error => console.error(error))
      .then(response => this.setState({RSS: response.data.items, selectedEpisode: response.data.items[0]}));
  }

  componentDidUpdate() {
    console.log(this.state.selectedEpisode)
  }

  render() {
    return (
      <div>
        <Episode {...this.state}/>
      </div>
    );
  }
}

export default EpisodesContainer;
