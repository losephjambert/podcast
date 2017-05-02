import React, { Component } from 'react';
import styled from 'styled-components';

import RSSFeedContainer from './RSSFeedContainer';
import AboutContainer from './AboutContainer';
import SubmissionContainer from './SubmissionContainer';

const PodcastTitle = styled.h1`
  display: flex;
    justify-content: center;
    align-items: center;
  margin: 50px 0;
  transform: skew(-6deg);
`;

class ApplicationContainer extends Component {
  render() {
    return (
      <div>
        <PodcastTitle>Trust</PodcastTitle>
        <PodcastTitle>Issues</PodcastTitle>
        <RSSFeedContainer />
        <PodcastTitle>About</PodcastTitle>
        <AboutContainer />
        <PodcastTitle>Submit an Idea</PodcastTitle>
        <SubmissionContainer />
      </div>
    );
  }
}

export default ApplicationContainer;
