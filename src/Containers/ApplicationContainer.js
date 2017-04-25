import React, { Component } from 'react';
import styled from 'styled-components';

import RSSFeedContainer from './RSSFeedContainer';

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
        <PodcastTitle>Trust Issues</PodcastTitle>
        <RSSFeedContainer />
      </div>
    );
  }
}

export default ApplicationContainer;
