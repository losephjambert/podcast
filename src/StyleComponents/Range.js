import styled from 'styled-components'
import Colors from './Colors'

const Range = styled.input`
  verticalAlign: 'middle';
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
    }
    &:focus {
      outline: none;
    }
    &::-ms-track {
      width: 100%;
      cursor: pointer;
      background: transparent;
      border-color: transparent;
      color: transparent;
    }
    &::-webkit-slider-thumb {
      border-radius: 20px;
      height: 20px;
      width: 20px;
      border: 3px solid ${Colors.darkPurple};
      background: ${Colors.lightPurple};
      cursor: pointer;
      margin-top: -8px;
    }
    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 3px;
      cursor: pointer;
      background: ${Colors.darkPurple};
    }
`;

export default Range;
