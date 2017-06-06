import styled from 'styled-components'
import Colors from './Colors'
import Fonts from './Fonts'

const Wrap = styled.div`
  padding: 65px 15px 15px;
  box-shadow: inset 0 0 0 5px ${Colors.darkPurple};
  background-color: ${Colors.mediumPurple};
  font-family: ${Fonts.poppins};
  overflow: hidden;
  @media screen and (min-width:375px){
    padding: 65px 20px 15px;
  }
`;

export default Wrap;
