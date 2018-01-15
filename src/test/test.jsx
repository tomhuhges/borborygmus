import React, { Component } from 'react';
import webfont from 'webfontloader';
import styled, { css } from 'react-emotion';

const Test = styled('h1')`
  color: ${props => props.theme.color};
  font-family: 'Joti One', arial, sans-serif;
`

const rawJSX = '<Test theme={ this.props.theme }>{ this.props.children }</Test>';

class Container extends Component {
  componentDidMount() {
    console.log(document.documentElement.classList)
    if (!document.documentElement.classList.contains('wf-jotione-n4-active')) {
      import('webfontloader')
      .then(WebFont =>
        webfont.load({
          google: {
            families: ['Joti One']
          }
        })
      );
    }
  }
  render() {
    return (
      <Test theme={ this.props.theme }>
        { this.props.children }
      </Test>
    );
  }

}

export default Container;
