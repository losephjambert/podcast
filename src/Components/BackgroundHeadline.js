import React, { Component } from 'react';
import styled from 'styled-components';

const ArticleHeadline = styled.h2`
  text-align: center;
  text-decoration: underline;
  padding: 0 0 15px 0;
  line-height:1.3em;
`;

class BackgroundHeadline extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ArticleHeadline>{this.props.headline}</ArticleHeadline>
    );
  }
}

export default BackgroundHeadline;
