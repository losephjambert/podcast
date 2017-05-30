import React, { Component } from 'react';
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
    this.playEpisode = this.playEpisode.bind(this);
    this.showRegion = this.showRegion.bind(this);

    this.state = {
      "navItems" : [
        "episodes",
        "submit",
        "about"
      ],
      "selectedRegion": "episodes",
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
    };
  }

  componentWillMount(){
    axios
      .get(`https://trust-issues-api.herokuapp.com/content`)
      .catch(error => console.error(error))
      .then(response => this.setState({ content: response.data} ))
  }

  componentDidUpdate(){
    console.log("componentDidUpdate",this.state.selectedRegion)
  }

  playEpisode(selectedEpisode) {
    this.setState({
      playingEpisode: selectedEpisode
    })
  }

  showRegion(selectedRegion,index) {
    this.setState({
      selectedRegion: this.state.navItems[index]
    })
  }

  render() {
    return (
      <Wrap>
        <NavContainer
          showRegion={ this.showRegion }
          navItems={ this.state.navItems }
          selectedRegion={ this.state.selectedRegion }/>
        <EpisodesContainer playEpisode={ this.playEpisode } />
        <SubmissionContainer description={ this.state.content.submissionDescription.body } />
        <AboutContainer body={ this.state.content.about.body } />
        <PlayerContainer playingEpisode={ this.state.playingEpisode } />

        <BackgroundContainer
          marquee={ this.state.content.marquee }
          backgroundLeft={ this.state.content.backgroundLeft }
          backgroundRight={ this.state.content.backgroundRight }
          backgroundMiddle={ this.state.content.backgroundMiddle } />
      </Wrap>
    )
  }
}

export default ContentContainer;
