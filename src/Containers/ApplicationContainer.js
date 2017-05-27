import React, { Component } from 'react';
import styled from 'styled-components';
import Wrap from '../StyleComponents/Wrap';

import HeaderContainer from './HeaderContainer';
import EpisodesContainer from './EpisodesContainer';
import AboutContainer from './AboutContainer';
import SubmissionContainer from './SubmissionContainer';
import FooterContainer from './FooterContainer';
import BackgroundContainer from './BackgroundContainer';

class ApplicationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubmit: false,
      showAbout: false
    };
  }

  render() {
    return (
      <Wrap>
        <HeaderContainer /> 
        <EpisodesContainer />
        <AboutContainer /> 
        <SubmissionContainer />
        <FooterContainer />
        <BackgroundContainer />
      </Wrap>
    );
  }
}

export default ApplicationContainer;
