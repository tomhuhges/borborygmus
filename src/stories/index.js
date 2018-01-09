import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import theme1 from '../themes/theme1';
import theme2 from '../themes/theme2';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Container from '../test/test';
// import Container2 from '../test/test2';

storiesOf('Container', module)
  .add('hotpink', () => <Container theme={theme1}>This is a test</Container>)
  .add('rebeccapurple', () => <Container theme={theme2}>This is a test</Container>)
