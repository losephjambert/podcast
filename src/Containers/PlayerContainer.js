import React, { Component } from 'react';
import styled from 'styled-components';
import Colors from '../StyleComponents/Colors'
import { CSSTransitionGroup } from 'react-transition-group'

import Player from '../Components/Player';

const PlayerHeader = styled.header`
  padding:10px;
`;

const PlayerTitle = styled.button`
  font-size: 16px;
  font-weight: 600;
  transform: translateY(3px);
  color: ${Colors.darkPurple};
  outline: none;
  border: none;
  padding: 0;
  background-color: transparent;
  &:hover{cursor: pointer;}
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
  &.player-appear {
    transform: translateY(calc(100% - 43px));
  }
  &.player-appear.player-appear-active, &.visible {
    transform: translateY(0%);
    transition: transform 500ms;
  }
  @media screen and (min-width: 420px){
    position: absolute;
  }
`;

class PlayerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: null
    };
    this.togglePlayer = this.togglePlayer.bind(this)
  }

  togglePlayer() {
    this.setState({expanded: `${!this.state.expanded || this.state.expanded == "visible" ? "hidden" : "visible"}`})
  }

  render() {
    return (
      <CSSTransitionGroup
            transitionName="player"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
      <PlayerWrapper key={"player"} className={this.state.expanded}>
        <PlayerHeader onClick={this.togglePlayer}>
          <PlayerTitle>{ this.state.expanded == "hidden" ? "+" : "-"} TRUST PLAYER</PlayerTitle>
        </PlayerHeader>
        <div style={{width: "100%"}}>
          <Player src={this.props.playingEpisode}/>
        </div>
      </PlayerWrapper>
      </CSSTransitionGroup>
    );
  }
}

export default PlayerContainer;
