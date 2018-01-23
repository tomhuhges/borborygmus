import H1 from './H1';

const H2 = H1.withComponent('h2').extend`
  ${props => `font-size: ${props.theme.fontSizes[6]};`}
`;

export default H2;
