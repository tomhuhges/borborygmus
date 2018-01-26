import P from './P';
import {ml, ph, color, borderColor, setDefault} from '../../utils';

const Blockquote = P.withComponent('Blockquote').extend`
  ${setDefault(color, 'grey', 'mid')}
  ${setDefault(borderColor, 'blue')}
  ${setDefault(ml, 4)};
  ${setDefault(ph, 4)};
  border-width: ${props => props.theme.borderWidths[4]};
  border-left-style: solid;
`;

export default Blockquote;
