import styled from 'styled-components';
import { ph, pv, bg, typeface, setDefault } from '../../utils';

const Pre = styled.pre`
  ${setDefault(typeface, 'mono')};
  ${setDefault(bg, 'grey', 'pale')}
  ${setDefault(pv, 1)}
  ${setDefault(ph, 2)}
  ${props => `
    border-radius: ${props.theme.radius[1]};
    font-size: ${props.theme.fontSizes[2]};
    ${props.block ? 'display: table;' :
    'display: inline-block;'
    }
  `}
`;

export default Pre;
