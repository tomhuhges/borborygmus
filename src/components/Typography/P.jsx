import styled from 'styled-components';
import { color, typeface } from '../../utils';

const P = styled.p`
  ${typeface}
  ${color}
  ${props => `
    font-size: ${props.theme.fontSizes[3]};
    max-width: 800px;
    line-height: ${props.theme.lineHeights.copy};
  `}
`;

export default P;
