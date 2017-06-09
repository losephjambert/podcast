import styled, { keyframes } from 'styled-components'

const Rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export default Rotate360;
