import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../StyleComponents/Button';

const Title = styled.li`
  padding: 10px 0;
  font-size: 28px;
`;
const Description = styled.li`
  padding: 5px 0;
  font-size: 18px;
`;

const Episodes = styled.section`
`;

class EpisodesContainer extends Component {
  render() {
    const episode = this.props.RSS.map((item, index) =>
      <ul key={index + 0.1}>
        <Title key={index}>
          {item.title}
        </Title>
        <Description key={index + 0.2}>
          {item.description}
        </Description>
        <Button key={index + 0.3} onClick={() => { this.props.playEpisode(item) } }>
          Play Episode
        </Button>
      </ul>
    );
    return (
      <Episodes>
        {episode}
      </Episodes>
    );
  }
}

export default EpisodesContainer;
