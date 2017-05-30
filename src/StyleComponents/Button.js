import styled from 'styled-components';


const Button = styled.button`
  color: blue;
  outline: 0;
  border: 0;
  box-shadow: 0 0 0 3px purple;
  height: inherit;
  width: inherit;
  background-color: ${props => props.selected ?
    'purple' : 'white'};
  color: ${props => props.selected ?
    'white' : 'purple'};
`;


export default Button;
