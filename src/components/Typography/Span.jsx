import styled from 'styled-components';
import { color, typeface } from '../../utils';

const Span = styled.span`
  ${typeface}
  ${color}
  ${props => `
    font-size: ${props.theme.fontSizes[3]};
    line-height: ${props.theme.lineHeights.copy};
  `}
`;

export default Span;
