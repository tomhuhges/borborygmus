import styled from 'styled-components';
import { color, bg, typeface, setDefault } from '../../utils';

const A = styled.a `
  ${typeface}
  ${setDefault(color, 'blue')}
  ${setDefault(bg, 'blue', 'pale')}
  ${props => `
    font-size: ${props.theme.fontSizes[3]};
    line-height: ${props.theme.lineHeights.copy};
    text-decoration: none;
  `}
  &:hover {
    border-bottom: 2px solid;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid;
  }
`

export default A;
