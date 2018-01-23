import H1 from './H1';

const H3 = H1.withComponent('h3').extend`
  ${props => `font-size: ${props.theme.fontSizes[5]};`}
`;

export default H3;
