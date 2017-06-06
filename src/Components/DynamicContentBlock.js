import React from 'react';
import styled from 'styled-components';
import marked from 'marked';

import Colors from '../StyleComponents/Colors'

const AboutDescription = styled.div`
  padding:5px;
  box-shadow: 0 0 0 3px ${Colors.lightPurple};
  background-color: ${Colors.darkPurple};
  color: ${Colors.lightPurple};
  p{
    margin-bottom: 15px;
  }
`;

function DynamicContentBlock(props) {
  if (props.error) {
    return (
      <AboutDescription>{props.error}</AboutDescription>
    );
  } else {
    return (
      <AboutDescription dangerouslySetInnerHTML={{ __html: marked(props.body) }}></AboutDescription>
      );
  }
}

export default DynamicContentBlock;
