import React, { Component } from 'react';
import axios from 'axios';

import RSSFeed from '../Components/RSSFeed';

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
        <RSSFeed {...this.state}/>
      </div>
    );
  }
}

export default RSSFeedContainer;
