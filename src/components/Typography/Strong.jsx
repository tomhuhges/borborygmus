import Span from './Span';

const Strong = Span.withComponent('strong').extend`
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export default Strong;
