import React, { Component } from 'react';
import Marquee from '../Components/Marquee';
import BackgroundHeadline from '../Components/BackgroundHeadline';
import BackgroundArticle from '../Components/BackgroundArticle';
import NewsPaperHeader from '../Components/NewsPaperHeader';
import styled from 'styled-components'
import Colors from '../StyleComponents/Colors'
import marked from 'marked';

const BackgroundWrapper = styled.div`
  position: fixed;
    ${props => props.sides.map((side) => `${side}:${props.fixed};`)}
    z-index: -10;
  color: ${Colors.darkPurple};
  background-color: white;
  display: none;
  @media screen and (min-width: 420px){
    display: block;
  }
`;

const BackGroundElements = styled.div`
  display: flex;
    flex-flow: column nowrap;
  min-width: 1024px;
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
`;

const BackgroundArticleWrapper = styled.div`
  padding: 25px;
  box-shadow: 0 0 0 3px ${Colors.darkPurple};
  overflow-y: scroll;
  flex: 0 1 33.3333333%;
  max-width: 500px;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: ${Colors.lightPurple};
  }

  &::-webkit-scrollbar-thumb {
    background: ${Colors.darkPurple};
  }
`;

const NewsPaperWrapper = styled.div`
  display: flex;
    justify-content: space-between;
  padding: 0 10px 10px;
`;

const BackgroundTitleWrapper = styled.div`
  padding: 50px 0;
`;

const BackgroundTitle = styled.h1`
  display: flex;
    justify-content: center;
    align-items: center;
  text-transform: uppercase;
  font-size: 5.4vmax;
  font-weight: 500;
  text-decoration: underline;
  &::before,
  &::after{
    content: '';
    background-image: url(../../Assets/images/logo-icon.svg);
      background-size: 90px;
      background-position: center;
      background-repeat: no-repeat;
    width: 100px;
    height: 100px;
  }
  &::before{
    margin: 0 auto 0 50px;
  }
  &::after{
    margin: 0 50px 0 auto;
  }
`;

const DateComponent = styled.div`
  padding: 15px 0 12px;
  box-shadow:
    0 3px 0 0 ${Colors.darkPurple},
    0 -3px 0 0 ${Colors.darkPurple};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const MarqueeHeadline = styled.div`
  padding: 15px 0 12px;
  text-transform: uppercase;
  font-size: 6vmax;
  font-weight: 300;
`;



class BackgroundContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <BackgroundWrapper sides={["top","right","bottom","left"]} fixed="0">
        <BackGroundElements>
          <BackgroundTitleWrapper>
          <BackgroundTitle>We Have Trust Issues</BackgroundTitle>
          </BackgroundTitleWrapper>
          <DateComponent className="marquee3k" data-speed="0.05">
            <Marquee headline={ this.props.theDate() }/>
          </DateComponent>
          <MarqueeHeadline className="marquee3k" data-speed="0.15" data-pausable="true">
            <Marquee headline={this.props.marquee.body} />
          </MarqueeHeadline>
          <NewsPaperWrapper>
            <BackgroundArticleWrapper>
              <BackgroundHeadline headline={this.props.backgroundLeft.headline} />
              <BackgroundArticle body={marked(this.props.backgroundLeft.body)} />
            </BackgroundArticleWrapper>
            <NewsPaperHeader headline={this.props.backgroundMiddle.body} />
            <BackgroundArticleWrapper>
              <BackgroundHeadline headline={this.props.backgroundRight.headline} />
              <BackgroundArticle body={marked(this.props.backgroundRight.body)} />
            </BackgroundArticleWrapper>
          </NewsPaperWrapper>
        </BackGroundElements>
      </BackgroundWrapper>
    );
  }
}

export default BackgroundContainer;
