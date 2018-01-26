import Span from './Span';
import { mr, ph, pv, color, typeface, setDefault } from '../../utils';

const ULi = Span.withComponent('li').extend`
  ${setDefault(typeface, 'display')}
  font-size: ${props => props.theme.fontSizes[5]};
  &:before {
    content: "⟶";
    ${setDefault(mr, 3)}
    ${setDefault(pv, 1)}
    ${setDefault(ph, 3)}
    ${setDefault(typeface, 'mono')}
    ${setDefault(color, 'blue')}
    font-size: ${props => props.theme.fontSizes[1]};
    display: inline-block;
    text-align: center;
    vertical-align: middle;
  }
`;

export default ULi;
