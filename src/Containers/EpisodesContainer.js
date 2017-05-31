import React, { Component } from 'react';
import styled from 'styled-components';

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
      error: null,
    };
  }

  render() {
    const episode = this.props.RSS.map((item, index) =>
      <span key={item.title}>
      <Title key={index} onClick={() => { this.props.playEpisode(item, index) } }>
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
