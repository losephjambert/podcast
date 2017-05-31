import styled from 'styled-components';

const OpacityContainer = styled.div`
  opacity: 1;
  transition: 600ms;
  &.is-showing-enter,
  &.is-showing-appear{
    opacity: 0;
  }
  &.is-showing-enter-active,
  &.is-showing-appear-active{
    opacity: 0;
  }
`;

export default OpacityContainer;
