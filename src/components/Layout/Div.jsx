import styled from 'styled-components';

const Div = styled.div`
  ${props => props.wrapper
    ? `
      max-width: 1200px;
      margin: 0 auto;
    `
    : ''
  }
`;

export default Div;
