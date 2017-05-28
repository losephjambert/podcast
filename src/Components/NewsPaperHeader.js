import React, { Component } from 'react';

class NewsPaperHeader extends Component {
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

export default NewsPaperHeader;
