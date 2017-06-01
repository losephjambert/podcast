import styled from 'styled-components'
import Colors from './Colors'

const Button = styled.button`
  display: inline-block;
  outline: 0;
  border: 0;
  box-shadow: 0 0 0 3px ${Colors.darkPurple};
  height: inherit;
  width: inherit;
  background-color: ${props => props.selected ? Colors.darkPurple : Colors.lightPurple};
  color: ${props => props.selected ? Colors.lightPurple : Colors.darkPurple};
  transition: 300ms;
`;


export default Button;
