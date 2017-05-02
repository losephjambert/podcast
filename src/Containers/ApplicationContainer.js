import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import RSSFeedContainer from './RSSFeedContainer';

const rotate = keyframes`
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(359deg);
  }
`;

const AppContainer = styled.div`
  padding-top: 200px;
`;

const TitleContainer = styled.div`
  position: fixed;
    top: 25px;
    left: 20px;
    right: 20px;
    z-index: 20;
`;

const PodcastTitle = styled.h1`
  display: flex;
    justify-content: center;
    align-items: center;

  font-family: Times New Roman;
  font-weight: normal;
  font-size: 10rem;
  text-decoration: underline;
`;

const EarthImage = styled.span`
  background-image: url('./Assets/images/flat-earth.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  display: inline-block;
  width: 200px;
  height: 200px;
  margin: 0 10px;
  transform: rotateY(0deg);
  animation: ${rotate} 5s linear infinite;
`;

class ApplicationContainer extends Component {
  render() {
    return (
      <AppContainer>
        <TitleContainer>
          <PodcastTitle>Trust<EarthImage />Issues</PodcastTitle>
        </TitleContainer>
        <RSSFeedContainer />
        </AppContainer>
    );
  }
}

export default ApplicationContainer;
