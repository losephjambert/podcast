import React, { Component } from 'react';

import Title from '../StyleComponents/Title';

import DynamicContentBlock from '../Components/DynamicContentBlock';

class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  render() {
    return (
      <div>
        <Title>About</Title>
        <DynamicContentBlock body={ this.props.body }/>
      </div>
    );
  }
}

export default AboutContainer;
