import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import Headroom from 'react-headroom';

import Title from '../StyleComponents/Title';
import Modal from '../StyleComponents/Modal';

import EpisodesContainer from './EpisodesContainer';
import AboutContainer from './AboutContainer';
import SubmissionContainer from './SubmissionContainer';

const Container = styled.div`
  font-family: "nimbus-roman", helvetica;
  font-weight: regular;
  padding: 15px;
`;
const TaglineContainer = styled.div`
  margin: 100px 0 150px;
`;
const Tagline = styled.h2`
  display: inline;
  color: white;
  font-size: 6vmax;
  box-shadow:
    inset 0 0 0 500px blue,
    10px 0 0 0 blue,
    -10px 0 0 0 blue
  ;
  padding: 10px 0;
  line-height: 1.6;
`;
const Tagline2 = styled.h2`
  color: blue;
  font-size: 6vmax;
`;
const TitleContainer = styled.div`
  position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;
  text-indent: 15px;

  .headroom{
    transition: .5s;
    &::after{
      content: '';
      position: absolute;
        left: 15px;
        right: 15px;
      display: inline-block;
      height: 1px;
      background-color: blue;
    }
    &:hover{
      transform: translate3d(0,0,0);
    }
  }
  .headroom--unfixed{}
  .headroom--pinned{transform: translate3d(0,0,0);}
  .headroom--unpinned{transform: translate3d(0,-70%,0);}
  .headroom--scrolled{}
`;
const rotate = keyframes`
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(360deg);
  }
`;
const EarthImage = styled.span`
  background-image: url('./Assets/images/flat-earth.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  display: inline-block;
  width: 10vmax;
  height: 50px;
  margin: 0 10px;
  transform: rotateY(0deg);
  animation: ${rotate} 10s linear infinite;

  &:hover{animation-play-state: paused;}

  @media (min-width: 768px){
    height: 100px;
  }
`;

const NavLink = styled.li `
  display:inline;
`;

const NavList = styled.ul `
  display:flex;
  align-items:baseline;
`;

const Nav2 = styled.h2 `
`;

class ApplicationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubmit: false,
      showAbout: false
    };
  }

  render() {
    return (
      <Container>
        <TitleContainer>
          <Headroom disableInlineStyles>
            <NavList>
              <NavLink>
                <Title color='blue'>Trust Issues</Title>
              </NavLink>
              <NavLink onClick={() => this.setState({ showAbout: false, showSubmit: !this.state.showSubmit})}>
                <Nav2>Submit</Nav2>
              </NavLink>
              <NavLink onClick={() => this.setState({ showSubmit: false, showAbout: !this.state.showAbout})}>
                <Nav2>About</Nav2>
              </NavLink>
            </NavList>
          </Headroom>
        </TitleContainer>
        <TaglineContainer>
          <Tagline2>a podcast about facts gone wrong.</Tagline2>
        </TaglineContainer>
        <EpisodesContainer />
        { this.state.showAbout ?
          <Modal>
            <AboutContainer />
          </Modal>
          : null
        }
        { this.state.showSubmit ?
          <Modal>
            <SubmissionContainer />
          </Modal>
          : null
        }
      </Container>
    );
  }
}

export default ApplicationContainer;
