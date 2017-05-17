import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import commonmark from 'commonmark';

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
      about: null,
      error: null
    } ;
    this.parseMarkdown = this.parseMarkdown.bind(this);
  }

  parseMarkdown(md){
    var reader = new commonmark.Parser();
    var writer = new commonmark.HtmlRenderer();
    var parsed = reader.parse(md);
    var result = writer.render(parsed);
    return result;
  }

  componentWillMount() {
    // let res;

    axios
      .get(`https://trust-issues-api.herokuapp.com/about`)
      .catch(error => console.error(error))
      .then((response) => this.setState({about: this.parseMarkdown(response.data.body)}) )
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
