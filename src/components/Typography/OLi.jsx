import ULi from './ULi';
import { bg, setDefault } from '../../utils';

const OLi = ULi.extend`
  counter-increment: item;
  &:before {
    content: counter(item);
    ${setDefault(bg, 'blue')}
    color: ${props => props.theme.colors.white.base};
    border-radius: ${props => props.theme.radius[1]};
  }
`;

export default OLi;
