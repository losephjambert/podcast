import React, { Component } from 'react'
import axios from 'axios'
import { CSSTransitionGroup } from 'react-transition-group'
import marked from 'marked'
import Draggable from 'react-draggable'
import styled from 'styled-components'
import Colors from '../StyleComponents/Colors'

import OpacityContainer from '../StyleComponents/OpacityContainer'

import NavContainer from './NavContainer'
import EpisodesContainer from './EpisodesContainer'
import AboutContainer from './AboutContainer'
import SubmissionContainer from './SubmissionContainer'
import PlayerContainer from './PlayerContainer'
import BackgroundContainer from './BackgroundContainer'
import HeaderContainer from './HeaderContainer'
import FooterContainer from './FooterContainer'

const UIWindowContainer = styled.div`
  position: relative;
  max-width: 420px;
  @media screen and (min-width: 420px){
    margin: 5vh auto 0;
    right: 170px;
    position: fixed;
    overflow: hidden;
  }
`;

const UIWindow = styled.div`
  position: relative;
  padding: 65px 15px 15px;
  box-shadow: 0 0 0 5px ${Colors.darkPurple};
  background-color: ${Colors.mediumPurple};
  @media screen and (min-width:375px){
    padding: 60px 20px 0;
  }
  @media screen and (min-width: 420px){
    height: 80vh;
    max-height: 800px;
    overflow-y: scroll;
    box-shadow: none;
    border: 5px solid ${Colors.darkPurple};
  }
  &::-webkit-scrollbar {
    width: 6px;
    background-color: ${Colors.lightPurple};
  }

  &::-webkit-scrollbar-thumb {
    background: ${Colors.darkPurple};
  }
`;

class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
    this.playEpisode = this.playEpisode.bind(this);
    this.showRegion = this.showRegion.bind(this);
    this.setBackgroundStyle = this.setBackgroundStyle.bind(this);
    this.theDate = this.theDate.bind(this);
    this.parseMarkdown = this.parseMarkdown.bind(this)

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
      },
      "width": window.innerWidth,
      "height": "",
      "canDrag": false
    };
  }
  parseMarkdown(rss){
    rss.data.items.map((item, index) =>
      item.description = marked(item.description))
    this.setState({RSS: rss.data.items})
  }

  componentWillMount(){
    window.addEventListener('resize', this.handleWindowSizeChange);
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

  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth });
  };


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

  theDate(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();

    switch (mm){
      case 1:
        mm = 'January'
        break;
      case 2:
        mm = 'February'
        break;
      case 3:
        mm = 'March'
        break;
      case 4:
        mm = 'April'
        break;
      case 5:
        mm = 'May'
        break;
      case 6:
        mm = 'June'
        break;
      case 7:
        mm = 'July'
        break;
      case 8:
        mm = 'August'
        break;
      case 9:
        mm = 'September'
        break;
      case 10:
        mm = 'October'
        break;
      case 11:
        mm = 'November'
        break;
      case 12:
        mm = 'December'
        break;
    }

    if(dd<10) { dd='0'+dd }

    if(mm<10) { mm='0'+mm }

    return `${mm}—${dd}—${yyyy}`
  }

  render() {
    const isMobile = this.state.width <= 420;
    const EPISODES = <EpisodesContainer RSS={ this.state.RSS } playEpisode={ this.playEpisode } currentEpisodeIndex={ this.state.playingEpisode.number ? this.state.playingEpisode.number : null} />
    const SUBMIT = <SubmissionContainer description={ this.state.content.submissionDescription.body } />
    const ABOUT = <AboutContainer body={ this.state.content.about.body } />
    return (
      <div>
        { isMobile ?
        <UIWindowContainer>
        <UIWindow>
        <HeaderContainer/>
        <NavContainer
          setBackgroundStyle={ this.setBackgroundStyle }
          showRegion={ this.showRegion }
          navItems={ this.state.navItems }
          selectedRegion={ this.state.selectedRegion }/>
          {this.state.selectedRegion === "episodes" ?
              EPISODES
          : null}
          {this.state.selectedRegion === "submit" ?
              SUBMIT
          : null}
          {this.state.selectedRegion === "about" ?
              ABOUT
          : null}
        <FooterContainer theDate={this.theDate} />
        </UIWindow>
        { this.state.playingEpisode.title ?
          <PlayerContainer playingEpisode={ this.state.playingEpisode } />
        : null}
        </UIWindowContainer>
        :
        <CSSTransitionGroup
          transitionName="bg"
          transitionAppear={true}
          transitionAppearTimeout={800}
          transitionEnter={false}
          transitionLeave={false}>
          <OpacityContainer key={"content"}>
            <CSSTransitionGroup
              transitionName="pop-up"
              transitionAppear={true}
              transitionAppearTimeout={1800}
              transitionEnter={false}
              transitionLeave={false}>
            <OpacityContainer key={"pop-up"}>
              <Draggable handle={".handle"}>
                <UIWindowContainer>
                <UIWindow>
                <HeaderContainer/>
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
                <FooterContainer theDate={this.theDate} />
                </UIWindow>
                { this.state.playingEpisode.title ?
                  <PlayerContainer playingEpisode={ this.state.playingEpisode } />
                : null}
                </UIWindowContainer>
              </Draggable>
            </OpacityContainer>
            </CSSTransitionGroup>
            <BackgroundContainer
              theDate={this.theDate}
              playingEpisode={ this.state.playingEpisode }
              marquee={ this.state.content.marquee }
              backgroundLeft={ this.state.content.backgroundLeft }
              backgroundRight={ this.state.content.backgroundRight }
              backgroundMiddle={ this.state.content.backgroundMiddle } />
          </OpacityContainer>
        </CSSTransitionGroup>
        }
      </div>
    )
  }
}

export default ContentContainer;
