import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const List = styled.ul`
  margin: 0;
  padding: 0;
`;
const Title = styled.li`
  padding: 10px 0;
  font-size: 28px;
`;
const Description = styled.li`
  padding: 5px 0;
  font-size: 18px;
`;

const Episodes = styled.div`
`;

class EpisodesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      RSS: [],
      error: null,
    } ;
  }

  componentWillMount() {
    axios
      .get(`https://trust-issues-api.herokuapp.com/rss`)
      .catch(error => console.error(error))
      .then(response => this.setState({RSS: response.data.items}))
  }

  render() {
    const episode = this.state.RSS.map((item, index) =>
      <span key={item.title}>
      <Title key={index} onClick={() => { this.props.playEpisode(item) } }>
        {item.title}
      </Title>

      <Description key={index + .1}>
        {item.description}
      </Description>
      </span>
    );
    return (
      <Episodes >
        <List>
          {episode}
        </List>
      </Episodes>
    );
  }
}

export default EpisodesContainer;
