import styled from 'styled-components';
import { color, typeface, weight, setDefault } from '../../utils';

const H1 = styled.h1`
  ${typeface}
  ${color}
  ${props =>
    props.display ? setDefault(weight, 'normal') :
    setDefault(weight, 'bold')
  }
  ${props => `
    font-size: ${props.theme.fontSizes[7]};
  `}
`;

export default H1;
