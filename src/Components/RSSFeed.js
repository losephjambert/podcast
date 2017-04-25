import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player'

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
  <Title key={index}>
    {item.title}
  </Title>
  <URL key={index + .2}>
    <audio controls className="player" preload="false">
      <source src={item.enclosures[0].url} />
    </audio>
  </URL>
  <Description key={index + .1}>
    {item.description}
  </Description>
  </span>
);
 return (
      <List>
        {episode}
      </List>
      );
}

export default RSSFeed;
