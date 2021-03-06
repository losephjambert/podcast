import React, { Component } from 'react'
import styled from 'styled-components'
import Colors from '../StyleComponents/Colors'
import Button from '../StyleComponents/Button'
import ContentHeader from '../StyleComponents/ContentHeader'
import Description from '../Components/Description';

const Title = styled.div`
  margin: 10px 0px;
  font-size: 22px;
  text-align: center;
  font-weight: 500;
`;

const Episodes = styled.ul`
  margin: 0 6px;
  box-shadow:  0 0 0 6px ${Colors.darkPurple};
`;

const Episode = styled.li`
  display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
  padding: 15px 0 10px;
  min-height: 175px;
  box-shadow: 0 0 0 3px ${Colors.lightPurple};
  background-color: ${Colors.darkPurple};
  color: ${Colors.lightPurple};
  @media screen and (min-width: 420px){
    padding: 15px 20px 10px;
  }
`;

const PlayButton = Button.extend`
  padding: 15px;
  margin: auto 0 15px 0;
  min-width: 130px;
  font-weight: 500;
  font-size: 16px;
  background-color: ${props => props.playing ? Colors.darkPurple : Colors.lightPurple};
  color: ${props => props.playing ? Colors.lightPurple : Colors.darkPurple};
  box-shadow: 0 0 0 3px ${props => props.playing ? Colors.lightPurple : Colors.darkPurple};
`;

class EpisodesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  render() {
    const episode = this.props.RSS.map((item, index) =>
      <Episode key={index}>
        <Title key={index+.1}>
          {this.props.RSS.length - index}. {item.title}
        </Title>
        <Description key={index+.2} item={item}/>
        <PlayButton
          episode
          key={index+.3}
          playing={ this.props.currentEpisodeIndex === this.props.RSS.length - index ? true : false }
          onClick={ () => { this.props.playEpisode(item, index) } }>
            { this.props.currentEpisodeIndex === this.props.RSS.length - index ? 'playing' : 'play episode' }
        </PlayButton>
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
