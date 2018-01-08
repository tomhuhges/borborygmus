import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

const Test = styled('h1')`
  color: hotpink;
`

class Container extends Component {

  render() {
    return (
      <Test>
        { this.props.children }
      </Test>
    );
  }

}

export default Container;
