import styled from 'styled-components';

const OpacityContainer = styled.div`

  &.nav-region-appear {
    opacity: 0.01;
  }

  &.nav-region-appear.nav-region-appear-active {
    opacity: 1;
    transition: opacity 600ms ease-in;
  }

  &.nav-region-enter {
    opacity: 0.01;
  }

  &.nav-region-enter.nav-region-enter-active {
    opacity: 1;
    transition: opacity 600ms ease-in;
  }

  &.nav-region-leave.nav-region-leave-active {
    opacity: 0;
  }

  &.nav-region-leave.nav-region-leave-active {
    opacity: 0.01;
    transition: opacity 600ms ease-in;
  }
  &.bg-appear {
    opacity: 0.1;
  }

  &.bg-appear.app-section-appear-active {
    opacity: 1;
    transition: opacity 6s ease-in;
  }
  &.pop-up-appear {
    opacity: 0;
  }

  &.pop-up-appear.app-section-appear-active {
    opacity: 1;
    transition: opacity 2s ease-in;
  }
`;

export default OpacityContainer;
