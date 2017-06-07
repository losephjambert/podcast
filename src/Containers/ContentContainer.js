import React, { Component } from 'react'
import axios from 'axios'
import { CSSTransitionGroup } from 'react-transition-group'
import marked from 'marked'
import styled from 'styled-components';
import Colors from '../StyleComponents/Colors'

import OpacityContainer from '../StyleComponents/OpacityContainer'

import NavContainer from './NavContainer'
import EpisodesContainer from './EpisodesContainer'
import AboutContainer from './AboutContainer'
import SubmissionContainer from './SubmissionContainer'
import PlayerContainer from './PlayerContainer'
import BackgroundContainer from './BackgroundContainer'

const ContentWrapper = styled.div`
  background-color: ;
  width:100%;
  height: 100%;
`;

class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.playEpisode = this.playEpisode.bind(this);
    this.showRegion = this.showRegion.bind(this);
    this.setBackgroundStyle = this.setBackgroundStyle.bind(this);

    this.state = {
      "navItems" : [
        {
          title: "episodes",
          active: "url(../../Assets/images/episodes-active.svg)",
          inactive: "url(../../Assets/images/episodes-inactive.svg)"
        },
        {
          title: "about",
          active: "url(../../Assets/images/about-active.svg)",
          inactive: "url(../../Assets/images/about-inactive.svg)"
        },
        {
          title: "submit",
          active: "url(../../Assets/images/mail-active.svg)",
          inactive: "url(../../Assets/images/mail-inactive.svg)"
        },
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
    this.parseMarkdown = this.parseMarkdown.bind(this)
  }
  parseMarkdown(rss){
    rss.data.items.map((item, index) =>
      item.description = marked(item.description))
    this.setState({RSS: rss.data.items})
  }

  componentWillMount(){
    axios
      .get(`https://trust-issues-api.herokuapp.com/rss`)
      .catch(error => console.error(error))
      .then(response => this.parseMarkdown(response))
    axios
      .get(`https://trust-issues-api.herokuapp.com/content`)
      .catch(error => console.error(error))
      .then(response => this.setState({ content: response.data} ))
  }

  playEpisode(selectedEpisode, index) {
    selectedEpisode.number = (this.state.RSS.length - index)
    this.setState({
      playingEpisode: selectedEpisode
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.playingEpisode.title !== prevState.playingEpisode.title) {
      const content = { ...this.state.content };
      content.marquee.body = this.state.playingEpisode.title;
      content.backgroundLeft = {
        "headline": `Episode ${this.state.playingEpisode.number}`,
        "body": this.state.playingEpisode.description
      }
      content.backgroundRight = {
        headline: `Episode ${this.state.playingEpisode.number}`,
        body: this.state.playingEpisode.description
      }
      this.setState({content});
    }
  }

  showRegion(selectedRegion,index) {
    this.setState({
      selectedRegion: this.state.navItems[index].title
    })
  }

  setBackgroundStyle(background){
    let backgroundImageStyle={
      backgroundImage: background.toString(),
    }
    return backgroundImageStyle;
  }

  render() {
    const EPISODES = <EpisodesContainer RSS={ this.state.RSS } playEpisode={ this.playEpisode } currentEpisodeIndex={ this.state.playingEpisode.number ? this.state.playingEpisode.number : null} />
    const SUBMIT = <SubmissionContainer description={ this.state.content.submissionDescription.body } />
    const ABOUT = <AboutContainer body={ this.state.content.about.body } />
    return (
      <div>
        { true ?
        <div>
        <NavContainer
          setBackgroundStyle={ this.setBackgroundStyle }
          showRegion={ this.showRegion }
          navItems={ this.state.navItems }
          selectedRegion={ this.state.selectedRegion }/>
        <CSSTransitionGroup
          transitionName="is-showing"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={100}>
            {this.state.selectedRegion === "episodes" ?
              <OpacityContainer key={"episodes"}>
                {EPISODES}
              </OpacityContainer>
            : null}
        </CSSTransitionGroup>
        <CSSTransitionGroup
          transitionName="is-showing"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={100}>
            {this.state.selectedRegion === "submit" ?
              <OpacityContainer key={"submit"}>
                {SUBMIT}
              </OpacityContainer>
            : null}
        </CSSTransitionGroup>
        <CSSTransitionGroup
          transitionName="is-showing"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={100}>
            {this.state.selectedRegion === "about" ?
              <OpacityContainer key={"about"}>
                {ABOUT}
              </OpacityContainer>
            : null}
        </CSSTransitionGroup>
        { this.state.playingEpisode.title ?
          <PlayerContainer playingEpisode={ this.state.playingEpisode } />
        : null}
        </div>
        : null}
        <BackgroundContainer
          marquee={ this.state.content.marquee }
          backgroundLeft={ this.state.content.backgroundLeft }
          backgroundRight={ this.state.content.backgroundRight }
          backgroundMiddle={ this.state.content.backgroundMiddle } />
      </div>
    )
  }
}

export default ContentContainer;
