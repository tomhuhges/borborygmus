import styled from 'react-emotion';
import { defaultProps } from 'recompose';
import {
  space,
  width,
  fontSize,
  color,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  hover
} from 'styled-system';
import {
  fontFamily,
  textDecoration,
  maxWidth,
  cursor
} from '../../themes/styled-system-extensions';

let P = defaultProps({
  fontFamily: 'sans',
  fontSize: 3,
  maxWidth: '800px'
})(styled('p')`
  ${space};
  ${width};
  ${fontSize};
  ${color};
  ${textAlign};
  ${lineHeight};
  ${fontWeight};
  ${letterSpacing};
  ${hover};
  ${fontFamily};
  ${textDecoration};
  ${maxWidth};
  ${cursor};
`)

export default P;
