import styled from 'styled-components';

const OpacityContainer = styled.div`

  &.is-showing-appear {
    opacity: 0.01;
  }

  &.is-showing-appear.is-showing-appear-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  &.is-showing-enter {
    opacity: 0.01;
  }

  &.is-showing-enter.is-showing-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  &.is-showing-leave.is-showing-leave-active {
    opacity: 0;
  }

  &.is-showing-leave.is-showing-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;

export default OpacityContainer;
