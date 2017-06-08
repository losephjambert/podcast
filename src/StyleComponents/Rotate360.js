import styled, { keyframes } from 'styled-components'

const Rotate360 = keyframes`
  from {
    transform: rotate(0deg);
    background-size: 100px;
  }

  50%{
    background-size: 1500px;
  }

  to {
    transform: rotate(360deg);
    background-size: 100px;
  }
`;

export default Rotate360;
