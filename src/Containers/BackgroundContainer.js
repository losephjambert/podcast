import React, { Component } from 'react';

class BackgroundContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubmit: false,
      showAbout: false
    };
  }

  render() {
    return (
      <p>BackgroundContainer</p>
    );
  }
}

export default BackgroundContainer;
