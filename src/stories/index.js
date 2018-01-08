import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Container from '../test/test';

storiesOf('Container', module)
  .add('with text', () => <Container>This is a test</Container>)
