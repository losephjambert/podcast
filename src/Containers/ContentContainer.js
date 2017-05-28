import React, { Component } from 'react';
import styled from 'styled-components';
import Wrap from '../StyleComponents/Wrap';

import NavContainer from './NavContainer';
import EpisodesContainer from './EpisodesContainer';
import AboutContainer from './AboutContainer';
import SubmissionContainer from './SubmissionContainer';
import PlayerContainer from './PlayerContainer';
import BackgroundContainer from './BackgroundContainer';


class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "showAbout":false,
      "showSubmission":true,
      "showEpisodes":false,
      "playingEpisode":{},
    },
    this.playEpisode = this.playEpisode.bind(this)
  }

  playEpisode(selectedEpisode) {
    console.log(selectedEpisode)
    this.setState({
      playingEpisode: selectedEpisode
    })
  }

  render() {
    return (
      <Wrap>
        <NavContainer />
        <EpisodesContainer playEpisode={this.playEpisode}/>
        <AboutContainer />
        <SubmissionContainer />
        <PlayerContainer playingEpisode={this.state.playingEpisode}/>
        <BackgroundContainer />
      </Wrap>
    )
  }
}

export default ContentContainer;
