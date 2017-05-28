import React, { Component } from 'react';

class MessageHeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubmit: false,
      showAbout: false
    };
  }

  render() {
    return (
      <p>MessageHeaderContainer</p>
    );
  }
}

export default MessageHeaderContainer;
