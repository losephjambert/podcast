import React from 'react';
import styled from 'styled-components';
import Player from './Player';

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
const URL = styled.li`
  padding: 5px 0;
  font-size: 18px;
`;


function RSSFeed(props) {
  const episode = props.RSS.map((item, index) =>
    <span>
    <Title key={index} onClick={() => { props.playEpisode(item)}} >
      {item.title}
    </Title>

    <Description key={index + .1}>
      {item.description}
    </Description>
    </span>
  );
  return (
      <div>
      { props.selectedEpisode.enclosures ?
        <URL>
          <Player
            src={props.selectedEpisode.enclosures[0].url} />
        </URL>
        : null
      }
      <List>
        {episode}
      </List>
      </div>
      );
}

export default RSSFeed;
