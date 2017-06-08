import React, { Component } from 'react';
import Wrap from '../StyleComponents/Wrap';
import ContentContainer from './ContentContainer';

class ApplicationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Wrap>
        <ContentContainer />
      </Wrap>
    );
  }
}

export default ApplicationContainer;
