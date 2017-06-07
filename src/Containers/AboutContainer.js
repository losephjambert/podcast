import React, { Component } from 'react'
import styled from 'styled-components'

import Colors from '../StyleComponents/Colors'
import ContentHeader from '../StyleComponents/ContentHeader'
import Title from '../StyleComponents/Title'

const About = styled.div`
  margin: 0 6px;
  box-shadow:  0 0 0 6px ${Colors.darkPurple};
  @media screen and (min-width: 600px){
    max-width: 400px;
    margin: 0 auto;
  }
`;


import DynamicContentBlock from '../Components/DynamicContentBlock';

class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  render() {
    return (
      <div>
        <ContentHeader>About</ContentHeader>
        <About>
          <DynamicContentBlock body={ this.props.body }/>
        </About>
      </div>
    );
  }
}

export default AboutContainer;
