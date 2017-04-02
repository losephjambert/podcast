import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;

const Title = styled.h1`
  font-size: 10vmin;
  text-align: center;
  color: palevioletred;
  margin:0;
  padding:0;
`;

class HomePage extends Component {

	componentDidMount() {
		console.log(`homepage mounted`);
	}

  render() {
    return (
      <Container>
        <Title>HOLY FUCKING SHIT 9000</Title>
      </Container>
    );
  }
}

export default HomePage;
