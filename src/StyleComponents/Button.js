import styled from 'styled-components'
import Colors from './Colors'

const Button = styled.button`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  outline: 0;
  border: 0;
  box-shadow: inset 0 0 0 3px ${Colors.darkPurple};
  height: 100%;
  width: ${props => props.episode ? `inherit` : `100%`};
  background-color: transparent;
  transition: 300ms;
  color: inherit;
`;


export default Button;
