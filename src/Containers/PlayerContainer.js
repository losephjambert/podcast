import React, { Component } from 'react';
import styled from 'styled-components';
import Colors from '../StyleComponents/Colors'

import Player from '../Components/Player';

const PlayerHeader = styled.header`
  color: ${Colors.darkPurple};
  padding:10px;
`;

const PlayerWrapper = styled.div`
  position:fixed;
    bottom:0;
    left:0;
  width:100%;
  display:flex;
    flex-flow:column wrap;
    align-items:center;
    justify-content:center;
  min-height: 40px;
  background-color: ${Colors.lightPurple};
  box-shadow: inset 0 0 0 5px ${Colors.darkPurple};
  @media screen and (min-width: 600px){
    position: absolute;
  }
`;

const HideOrShowPlayer = styled.div`
  height: ${(props) => props.expanded ? "100%" : "0px"};
  width: 100%;
  background-color: ${Colors.mediumPurple};
`;

class PlayerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: true
    };
    this.togglePlayer = this.togglePlayer.bind(this)
  }

  togglePlayer() {
    this.setState({expanded: !this.state.expanded})
  }

  render() {
    return (
      <PlayerWrapper>
        <PlayerHeader onClick={this.togglePlayer}>{ this.state.expanded ? "-" : "+"} TRUST PLAYER</PlayerHeader>
        <HideOrShowPlayer expanded={this.state.expanded}>
          <Player src={this.props.playingEpisode}/>
        </HideOrShowPlayer>
      </PlayerWrapper>
    );
  }
}

export default PlayerContainer;
