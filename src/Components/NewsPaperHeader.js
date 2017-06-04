import React, { Component } from 'react';
import styled from 'styled-components'
import Colors from '../StyleComponents/Colors'

const NewsPaperHeadline = styled.h1`
  text-align: center;
  line-height: 1.3em;
  align-self: center;
  border-top: solid ${Colors.darkPurple} 3px;
  border-bottom: solid ${Colors.darkPurple} 3px;
  padding: 15px 0;
  margin:50px;
  max-width: 500px;
  min-width: 300px;
`;


class NewsPaperHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NewsPaperHeadline>{this.props.headline}</NewsPaperHeadline>
    );
  }
}

export default NewsPaperHeader;
