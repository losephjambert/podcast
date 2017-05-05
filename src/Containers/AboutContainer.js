import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Title from '../StyleComponents/Title';

import DynamicContentBlock from '../Components/DynamicContentBlock';

const AboutModal = styled.div `
  background:white;
  width:75vw;
  height:50vw;
`;

class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: {},
      error: null
    } ;
  }

  componentWillMount() {
    // let res;
    axios
      .get(`https://trust-issues-api.herokuapp.com/about`)
      .catch(error => console.error(error))
      .then(response => this.setState({about: response.data}));
  }

  render() {
    return (
      <AboutModal>
        <Title>About</Title>
        <DynamicContentBlock {...this.state}/>
      </AboutModal>
    );
  }
}

export default AboutContainer;
