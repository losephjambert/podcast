import React, { Component } from 'react';
import styled, { extend } from 'styled-components';
import Colors from '../StyleComponents/Colors'
import Button from '../StyleComponents/Button'
import ContentHeader from '../StyleComponents/ContentHeader'

const Title = styled.div`
  font-size: 28px;
  text-align: center;
  font-weight: 500;
`;
const Description = styled.div`
  font-size: 12px;
  text-align: center;
  font-weight: 300;
`;

const Episodes = styled.ul`
  box-shadow:  0 0 0 6px ${Colors.darkPurple};
`;

const Episode = styled.li`
  display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  padding: 10px;
  box-shadow: 0 0 0 3px ${Colors.lightPurple};
  background-color: ${Colors.darkPurple};
  color: ${Colors.lightPurple};
`;

const PlayButton = Button.extend`
  padding: 15px;
  margin: 10px 0;
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
      <Episode key={index}>
        <Title key={index+.1}>
          {this.props.RSS.length - index}. {item.title.substring(0,15)}
        </Title>
        <Description key={index+.2}>
          {item.description}
        </Description>
        <PlayButton key={index+.3} onClick={() => { this.props.playEpisode(item, index) } }>Play Episode</PlayButton>
      </Episode>
    );
    return (
      <div>
        <ContentHeader>Episodes</ContentHeader>
        <Episodes>
          {episode}
        </Episodes>
      </div>
    );
  }
}

export default EpisodesContainer;
