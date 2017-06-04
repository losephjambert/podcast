import React from 'react';
import styled from 'styled-components';
import marked from 'marked';

const AboutDescription = styled.div`
  margin:50px 0px;
  padding:5px;

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
