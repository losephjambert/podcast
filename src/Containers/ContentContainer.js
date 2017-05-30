import React, { Component } from 'react';
import axios from 'axios';

import Wrap from '../StyleComponents/Wrap';

import NavContainer from './NavContainer';
import EpisodesContainer from './EpisodesContainer';
import AboutContainer from './AboutContainer';
import SubmissionContainer from './SubmissionContainer';
import PlayerContainer from './PlayerContainer';
import BackgroundContainer from './BackgroundContainer';

class ContentContainer extends Component {
  constructor(props) {
    super(props)
    this.playEpisode = this.playEpisode.bind(this)
    this.showRegion = this.showRegion.bind(this)

    this.state = {
      RSS: [],
      error: null,
      "navItems" : [
        "episodes",
        "submit",
        "about"
      ],
      "selectedRegion": "episodes",
      showing: false,
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
      .then(response => this.setState({ content: response.data }))
    axios
      .get(`https://trust-issues-api.herokuapp.com/rss`)
      .catch(error => console.error(error))
      .then(response => this.setState({RSS: response.data.items}))
  }

  playEpisode(selectedEpisode) {
    console.log(`playing episode: ${selectedEpisode}`)
    this.setState({
      playingEpisode: selectedEpisode
    })
  }

  showRegion(selectedRegion,index) { 
    this.setState({
      selectedRegion: this.state.navItems[index]
    });
  }

  componentDidUpdate(){
    console.log("componentDidUpdate: ContentContainer: selectedRegion:",this.state.selectedRegion)
  }

  render() {
    return (
      <Wrap>
        <NavContainer
          showRegion={ this.showRegion }
          navItems={ this.state.navItems }
          selectedRegion={ this.state.selectedRegion } />
          {
            this.state.selectedRegion === "episodes" ? 
              <EpisodesContainer
                playEpisode={ this.playEpisode }
                RSS={ this.state.RSS } />
            :
              null
          }
        {
          this.state.selectedRegion === "submit" ? 
            <SubmissionContainer
              description={ this.state.content.submissionDescription.body } />
          :
            null
        }
        {
          this.state.selectedRegion === "about" ? 
            <AboutContainer 
              body={ this.state.content.about.body } />
          :
            null
        }
        <PlayerContainer
          playingEpisode={ this.state.playingEpisode } />

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
