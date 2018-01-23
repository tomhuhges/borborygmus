import H1 from './H1';

const H5 = H1.withComponent('h5').extend`
  ${props => `font-size: ${props.theme.fontSizes[3]};`}
`;

export default H5;
