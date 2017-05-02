import React from 'react';
import styled from 'styled-components';

const Description = styled.p`
  margin:50px 0px;
  padding:5px;
`;

function DynamicContentBlock(props) {
  if (props.error) {
    return (
      <Description>{props.error}</Description>
    );
  } else {
    return (
      <Description>{props.about.body}</Description>
      );
  }
}

export default DynamicContentBlock;
