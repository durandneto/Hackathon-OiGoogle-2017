import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { specs, describe, it } from 'storybook-addon-specifications'

import {mount} from "enzyme";
import expect from "expect";


import RouterLink from '../src/components/atoms/routerlink'
import ButtonAction from '../src/components/atoms/ButtonAction'
import TitleDescription from '../src/components/molecules/TitleDescription'

import Title from '../src/components/atoms/Title'

const stories = storiesOf('Button', module);

stories.add('Hello World', withInfo('Hahahaha')(() => {
    const story =
        <button onClick={action('Hello World')}>
          Hello World
        </button>;
    specs(() => describe('Hello World', function () {
        it('Should have the Hello World label', function () {
            let output = mount(story);
            expect(output.text()).toContain('Hello World');
        });
    }));
    return story;
}));

storiesOf('Button Action', module)
.add('Router Link sample', () => (
  <ButtonAction>Home</ButtonAction>
));

//storiesOf('Title Description', module)
//.add('Without Theme', () => (
//  <TitleDescription Title2={'Durand'} Description2={'Neto'} />
//));

storiesOf('Title', module)
.add('Normal Case', () => (
  <Title text={'Hackathon'} />
));

storiesOf('Title', module)
.add('Upper Case', () => (
  <Title text={'Hackathon'} isUpperCase />
));

storiesOf('Title', module)
.add('Lower Case', () => (
  <Title text={'Hackathon'} isLowerCase />
));

storiesOf('Title', module)
.add('Font scale x1', () => (
  <Title text={'Hackathon'} />
));

storiesOf('Title', module)
.add('Font scale x2', () => (
  <Title text={'Hackathon'} size={'x2'}/>
));

storiesOf('Title', module)
.add('Font scale x3', () => (
  <Title text={'Hackathon'} size={'x3'} />
));

/**
storiesOf('Button', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ))
  .add('with Durand', () => (
    <button onClick={action('clicked')}>Durand</button>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ));

storiesOf('Pages', module)
  .add('Page Home', () => (
    <PageHome />
  ))
  .add('Page Contact', () => (
    <PageContact />
  ))
  .add('Page Tech secondary', () => (
    <Provider store={store}><PageTech secondary>Durand</PageTech></Provider>
  ));

*/

storiesOf('RouterLink', module)
.add('Router Link sample', () => (
  <RouterLink to="/">Home</RouterLink>
));
