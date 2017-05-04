import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Title from '../StyleComponents/Title';

import DynamicContentBlock from '../Components/DynamicContentBlock';

class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: [],
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
      <div>
        <Title>About</Title>
        <DynamicContentBlock {...this.state}/>
      </div>
    );
  }
}

export default AboutContainer;
