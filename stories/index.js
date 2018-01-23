import React from 'react';
import { ThemeProvider } from 'styled-components';
import faker from 'faker';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import theme from '../src/themes/theme';

import { A, P, H1, H2, H3, H4, H5, H6, Pre, Button } from '../src';

storiesOf('Text', module)
  .addDecorator(story => (
    <ThemeProvider theme={theme}>
      {story()}
    </ThemeProvider>
  ))
  .add('P', () => <P>{faker.lorem.paragraphs()}</P>)

  .add('A', () =>
    <div>
      <A href="#">{faker.lorem.words()}</A>
      <P>Red theme <Pre>{"<A red></A>"}</Pre></P>
      <A href="#" red>{faker.lorem.words()}</A>
      <P>Green theme <Pre>{"<A green></A>"}</Pre></P>
      <A href="#" green>{faker.lorem.words()}</A>
      <P>Yellow theme <Pre>{"<A yellow></A>"}</Pre></P>
      <A href="#" yellow>{faker.lorem.words()}</A>
    </div>
  )

  .add('H1', () =>
    <div>
      <H1>{faker.lorem.words()}</H1>
      <Pre block>{"<A blue></A>"}</Pre>
      <H1 blue>{faker.lorem.words()}</H1>
      <Pre block>{"<A red></A>"}</Pre>
      <H1 red>{faker.lorem.words()}</H1>
      <Pre block>{"<A green></A>"}</Pre>
      <H1 green>{faker.lorem.words()}</H1>
      <Pre block>{"<A yellow></A>"}</Pre>
      <H1 yellow>{faker.lorem.words()}</H1>
      <Pre block>{"<A display></A>"}</Pre>
      <H1 display>{faker.lorem.words()}</H1>
    </div>)

  .add('H2', () =>
    <div>
      <H2>{faker.lorem.words()}</H2>
      <Pre block>{"<A blue></A>"}</Pre>
      <H2 blue>{faker.lorem.words()}</H2>
      <Pre block>{"<A red></A>"}</Pre>
      <H2 red>{faker.lorem.words()}</H2>
      <Pre block>{"<A green></A>"}</Pre>
      <H2 green>{faker.lorem.words()}</H2>
      <Pre block>{"<A yellow></A>"}</Pre>
      <H2 yellow>{faker.lorem.words()}</H2>
      <Pre block>{"<A display></A>"}</Pre>
      <H2 display>{faker.lorem.words()}</H2>
    </div>)

  .add('H3', () =>
    <div>
      <H3>{faker.lorem.words()}</H3>
      <Pre block>{"<A blue></A>"}</Pre>
      <H3 blue>{faker.lorem.words()}</H3>
      <Pre block>{"<A red></A>"}</Pre>
      <H3 red>{faker.lorem.words()}</H3>
      <Pre block>{"<A green></A>"}</Pre>
      <H3 green>{faker.lorem.words()}</H3>
      <Pre block>{"<A yellow></A>"}</Pre>
      <H3 yellow>{faker.lorem.words()}</H3>
      <Pre block>{"<A display></A>"}</Pre>
      <H3 display>{faker.lorem.words()}</H3>
    </div>)

  .add('H4', () =>
    <div>
      <H4>{faker.lorem.words()}</H4>
      <Pre block>{"<A blue></A>"}</Pre>
      <H4 blue>{faker.lorem.words()}</H4>
      <Pre block>{"<A red></A>"}</Pre>
      <H4 red>{faker.lorem.words()}</H4>
      <Pre block>{"<A green></A>"}</Pre>
      <H4 green>{faker.lorem.words()}</H4>
      <Pre block>{"<A yellow></A>"}</Pre>
      <H4 yellow>{faker.lorem.words()}</H4>
      <Pre block>{"<A display></A>"}</Pre>
      <H4 display>{faker.lorem.words()}</H4>
    </div>)

  .add('H5', () =>
    <div>
      <H5>{faker.lorem.words()}</H5>
      <Pre block>{"<A blue></A>"}</Pre>
      <H5 blue>{faker.lorem.words()}</H5>
      <Pre block>{"<A red></A>"}</Pre>
      <H5 red>{faker.lorem.words()}</H5>
      <Pre block>{"<A green></A>"}</Pre>
      <H5 green>{faker.lorem.words()}</H5>
      <Pre block>{"<A yellow></A>"}</Pre>
      <H5 yellow>{faker.lorem.words()}</H5>
      <Pre block>{"<A display></A>"}</Pre>
      <H5 display>{faker.lorem.words()}</H5>
    </div>)

  .add('H6', () =>
    <div>
      <H6>{faker.lorem.words()}</H6>
      <Pre block>{"<A blue></A>"}</Pre>
      <H6 blue>{faker.lorem.words()}</H6>
      <Pre block>{"<A red></A>"}</Pre>
      <H6 red>{faker.lorem.words()}</H6>
      <Pre block>{"<A green></A>"}</Pre>
      <H6 green>{faker.lorem.words()}</H6>
      <Pre block>{"<A yellow></A>"}</Pre>
      <H6 yellow>{faker.lorem.words()}</H6>
      <Pre block>{"<A display></A>"}</Pre>
      <H6 display>{faker.lorem.words()}</H6>
    </div>)

  .add('Pre', () =>
    <div>
      <Pre>{faker.database.collation()}</Pre>
      <P>displayed inline, can become a block with <Pre>block</Pre> prop</P>
    </div>
  )

  .add('Button', () =>
    <div>
      <Button onClick={action('button-click')}>{faker.lorem.word()}</Button>
      <Pre block>{"<Button red></Button>"}</Pre>
      <Button red onClick={action('button-click')}>{faker.lorem.word()}</Button>
      <Pre block>{"<Button green></Button>"}</Pre>
      <Button green onClick={action('button-click')}>{faker.lorem.word()}</Button>
      <Pre block>{"<Button yellow></Button>"}</Pre>
      <Button yellow onClick={action('button-click')}>{faker.lorem.word()}</Button>
      <Pre block>{"<Button disabled></Button>"}</Pre>
      <Button disabled onClick={action('button-click')}>{faker.lorem.word()}</Button>
      <Pre block>{"<Button ghost></Button>"}</Pre>
      <Button ghost onClick={action('button-click')}>{faker.lorem.word()}</Button>
      <Pre block>{"<Button pill></Button>"}</Pre>
      <Button pill onClick={action('button-click')}>{faker.lorem.word()}</Button>
      <Pre block>{"<Button arrow></Button>"}</Pre>
      <Button arrow onClick={action('button-click')}>{faker.lorem.word()}</Button>
      <Pre block>{"<Button fatbastard></Button>"}</Pre>
      <Button fatbastard onClick={action('button-click')}>{faker.lorem.word()}</Button>
    </div>

  )
