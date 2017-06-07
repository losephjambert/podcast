import styled from 'styled-components'
import Colors from './Colors'
import Fonts from './Fonts'

const Wrap = styled.div`
  font-family: ${Fonts.poppins};
  overflow: hidden;
  *::-moz-selection {
    color: ${Colors.lightPurple};
    background: ${Colors.darkPurple};
  }

  *::selection {
    color: ${Colors.lightPurple};
    background: ${Colors.darkPurple};
  }
`;

export default Wrap;
