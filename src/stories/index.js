import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import faker from 'faker';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import theme from '../themes/theme';

import P from '../components/Typography/P';

storiesOf('Text', module)
  .addDecorator(story => (
    <ThemeProvider theme={theme}>
      {story()}
    </ThemeProvider>
  ))
  .add('P', () => <P>{faker.lorem.paragraphs()}</P>)
