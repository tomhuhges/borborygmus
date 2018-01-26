import P from './P';

const Figcaption = P.withComponent('figcaption').extend`
  line-height: ${props => props.theme.lineHeights.solid};
  font-size: ${props => props.theme.fontSizes[2]};
`;

export default Figcaption;
