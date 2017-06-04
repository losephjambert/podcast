import React, { Component } from 'react';
import Marquee from '../Components/Marquee';
import BackgroundHeadline from '../Components/BackgroundHeadline';
import BackgroundArticle from '../Components/BackgroundArticle';
import NewsPaperHeader from '../Components/NewsPaperHeader';
import styled from 'styled-components'
import Colors from '../StyleComponents/Colors'

const BackgroundWrapper = styled.div`
  display: flex;
    flex-flow: column nowrap;
  color: ${Colors.darkPurple};
  min-width: 900px;
`;

const BackgroundArticleWrapper = styled.div`
  padding: 25px;
  box-shadow: 0 0 0 3px ${Colors.darkPurple};
  overflow: scroll;
  min-width: 350px;
  max-width: 550px;
  height: 500px;

  &:-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: ${Colors.darkPurple};
  }

  &:-webkit-scrollbar-thumb {
    background: ${Colors.darkPurple};
    color: ${Colors.darkPurple};
  }
`;

const NewsPaperWrapper = styled.div`
  display: flex;
    justify-content: space-between;
  padding: 25px;
`;

class BackgroundContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <BackgroundWrapper>
        <Marquee headline={this.props.marquee.body} />
        <NewsPaperWrapper>
          <BackgroundArticleWrapper>
            <BackgroundHeadline headline={this.props.backgroundLeft.headline} />
            <BackgroundArticle body={this.props.backgroundLeft.body} />
          </BackgroundArticleWrapper>
          <NewsPaperHeader headline={this.props.backgroundMiddle.body} />
          <BackgroundArticleWrapper>
            <BackgroundHeadline headline={this.props.backgroundRight.headline} />
            <BackgroundArticle body={this.props.backgroundRight.body} />
          </BackgroundArticleWrapper>
        </NewsPaperWrapper>
      </BackgroundWrapper>
    );
  }
}

export default BackgroundContainer;
