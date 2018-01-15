import { style, responsiveStyle, pseudoStyle } from 'styled-system'

export const display = responsiveStyle({
  prop: 'display',
  cssProperty: 'display',
});

export const fontFamily = style({
  prop: 'fontFamily',
  key: 'typeface',
  cssProperty: 'fontFamily',
});

export const textDecoration = style({
  prop: 'textDecoration',
  cssProperty: 'textDecoration',
});

export const maxWidth = style({
  prop: 'maxWidth',
  cssProperty: 'maxWidth',
});

export const cursor = style({
  prop: 'cursor',
  cssProperty: 'cursor',
});
