import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import RSSFeed from '../Components/RSSFeed';

const Foo = styled.h2`
  text-align: center;
  margin-bottom: 25px;
`;

class RSSFeedContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      RSS: [],
      error: null
    } ;
  }

  componentWillMount() {
    axios
      .get(`http://localhost:8080/rss`) //this is dev, we need a global config to handle the switch b/w dev/prod
      .catch(error => console.error(error))
      .then(response => this.setState({RSS: response.data.items}));
  }
  render() {
    return (
      <div>
        <Foo>👇 👇 👇 👇 👇 👇</Foo>
        <RSSFeed {...this.state}/>
      </div>
    );
  }
}

export default RSSFeedContainer;
