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
      .get(`https://trust-issues-api.herokuapp.com/rss`)
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
