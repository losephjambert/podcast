import styled from 'styled-components';


const OpacityContainer = styled.div`
  opacity: 0;
  transition: 3000ms all;
  &.is-showing{
    opacity: 1;
  }
`;


export default OpacityContainer;
