import H1 from './H1';

const H4 = H1.withComponent('h4').extend`
  ${props => `font-size: ${props.theme.fontSizes[4]};`}
`;

export default H4;
