import React, { Component } from 'react';

class Marquee extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <p>{this.props.headline}</p>
    );
  }
}

export default Marquee;
