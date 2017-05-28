import React, { Component } from 'react';
import styled from 'styled-components';
import Wrap from '../StyleComponents/Wrap';
import axios from 'axios';

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
      "showAbout": false,
      "showSubmission": true,
      "showEpisodes": false,
      "playingEpisode": {},
      "content": {
        "about": {
          "body":""
        },
        "submissionDescription": {
          "body":""
        },
        "marquee":{
          "body":""
        },
        "backgroundMiddle": {
          "body":""
        },
        "backgroundLeft": {
          "headline":"",
          "body":""
        },
        "backgroundRight": {
          "headline":"",
          "body":""
        },
      }
    },
    this.playEpisode = this.playEpisode.bind(this)
  }

  componentWillMount(){
    axios
      .get(`https://trust-issues-api.herokuapp.com/content`)
      .catch(error => console.error(error))
      .then(response => this.setState({ content: response.data }))
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
        <EpisodesContainer playEpisode={ this.playEpisode } />
        <AboutContainer body={ this.state.content.about.body } />
        <SubmissionContainer description={ this.state.content.submissionDescription.body } />
        <PlayerContainer playingEpisode={ this.state.playingEpisode } />
        <BackgroundContainer
          marquee={ this.state.content.marquee }
          backgroundLeft={ this.state.content.backgroundLeft }
          backgroundRight= { this.state.content.backgroundRight }
          backgroundMiddle= { this.state.content.backgroundMiddle } />
      </Wrap>
    )
  }
}

export default ContentContainer;
