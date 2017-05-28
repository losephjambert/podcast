import React, { Component } from 'react';

class BackgroundHeadline extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <h3>{this.props.headline}</h3>
    );
  }
}

export default BackgroundHeadline;
