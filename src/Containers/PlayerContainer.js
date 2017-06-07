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
  &.hidden {
    transition: .5s;
    transform: translateY(calc(100% - 43px));
  }
  &.visible {
    transition: .5s;
    transform: translateY(0%);
  }
  @media screen and (min-width: 600px){
    position: absolute;
  }
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
      <PlayerWrapper className={this.state.expanded ? "visible" : "hidden"}>
        <PlayerHeader onClick={this.togglePlayer}>{ this.state.expanded ? "-" : "+"} TRUST PLAYER</PlayerHeader>
        <div style={{width: "100%"}}>
          <Player src={this.props.playingEpisode}/>
        </div>
      </PlayerWrapper>
    );
  }
}

export default PlayerContainer;
