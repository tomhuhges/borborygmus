import H1 from './H1';

const H6 = H1.withComponent('h6').extend`
  ${props => `font-size: ${props.theme.fontSizes[2]};`}
`;

export default H6;
