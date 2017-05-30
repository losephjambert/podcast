import React, { Component } from 'react';
import styled from 'styled-components';

import Title from '../StyleComponents/Title';

import DynamicContentBlock from '../Components/DynamicContentBlock';

const AboutModal = styled.div `
  background:white;
  width:50vw;
  height:50vh;
`;

class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  render() {
    return (
      <AboutModal>
        <Title>About</Title>
        <DynamicContentBlock body={ this.props.body }/>
      </AboutModal>
    );
  }
}

export default AboutContainer;
