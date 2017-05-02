import React, { Component } from 'react';
import ApplicationContainer from './Containers/ApplicationContainer';
import styled from 'styled-components';

let highlightColor = `rgba(0,0,255,1)`;
let textColor = `rgba(255,255,255,1)`;

const Wrap = styled.div`
::selection {
  background:${highlightColor};
  color:${textColor};
}
`;
class App extends Component {

  render() {
    return (
      <Wrap error>
        <ApplicationContainer />
      </Wrap>
    );
  }
}

export default App;
