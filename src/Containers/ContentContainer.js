import React, { Component } from 'react'
import axios from 'axios';
import { CSSTransitionGroup } from 'react-transition-group'

import OpacityContainer from '../StyleComponents/OpacityContainer'

import NavContainer from './NavContainer'
import EpisodesContainer from './EpisodesContainer'
import AboutContainer from './AboutContainer'
import SubmissionContainer from './SubmissionContainer'
import PlayerContainer from './PlayerContainer'
import BackgroundContainer from './BackgroundContainer'

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
      "RSS":[],
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
      .get(`https://trust-issues-api.herokuapp.com/rss`)
      .catch(error => console.error(error))
      .then(response => this.setState({RSS: response.data.items}))
    axios
      .get(`https://trust-issues-api.herokuapp.com/content`)
      .catch(error => console.error(error))
      .then(response => this.setState({ content: response.data} ))
  }

  componentDidUpdate(){
    console.log("componentDidUpdate",this.state.selectedRegion)
  }

  playEpisode(selectedEpisode, index) {
    selectedEpisode.number = (this.state.RSS.length - index)
    this.setState({
      playingEpisode: selectedEpisode
    })
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextState.playingEpisode.title) {
      this.state.content.marquee = {
        "body": nextState.playingEpisode.title
      }
      this.state.content.backgroundLeft = {
        "headline": `Episode ${nextState.playingEpisode.number}`,
        "body": nextState.playingEpisode.description
      }
      this.state.content.backgroundRight = {
        headline: `Episode ${nextState.playingEpisode.number}`,
        body: nextState.playingEpisode.description
      }
    }
  }

  showRegion(selectedRegion,index) {
    this.setState({
      selectedRegion: this.state.navItems[index]
    })
  }

  render() {
    const EPISODES = <EpisodesContainer RSS={ this.state.RSS } playEpisode={ this.playEpisode } currentEpisodeIndex={ this.state.playingEpisode.number ? this.state.playingEpisode.number : null} />
    const SUBMIT = <SubmissionContainer description={ this.state.content.submissionDescription.body } />
    const ABOUT = <AboutContainer body={ this.state.content.about.body } />
    return (
      <div>
        <NavContainer
          showRegion={ this.showRegion }
          navItems={ this.state.navItems }
          selectedRegion={ this.state.selectedRegion }/>
        <CSSTransitionGroup
          transitionName="is-showing"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
            {this.state.selectedRegion === "episodes" ?
              <OpacityContainer>
                {EPISODES}
              </OpacityContainer>
            : null}
            {this.state.selectedRegion === "submit" ?
              <OpacityContainer>
                {SUBMIT}
              </OpacityContainer> 
            : null}
            {this.state.selectedRegion === "about" ?
              <OpacityContainer>
                {ABOUT}
              </OpacityContainer>
            : null}
        </CSSTransitionGroup>
        <PlayerContainer playingEpisode={ this.state.playingEpisode } />

        <BackgroundContainer
          playingEpisode={ this.state.playingEpisode }
          marquee={ this.state.content.marquee }
          backgroundLeft={ this.state.content.backgroundLeft }
          backgroundRight={ this.state.content.backgroundRight }
          backgroundMiddle={ this.state.content.backgroundMiddle } />
      </div>
    )
  }
}

export default ContentContainer;
