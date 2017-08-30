import React from 'react';
import { storiesOf, configure, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { specs, describe, it } from 'storybook-addon-specifications'

import {mount} from "enzyme";
import expect from "expect";

const store = storiesOf({}, module)
const req = require.context('./../src/components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

// addDecorator(story => (
//   <Provider store={store}>
//     <BrowserRouter>
//       <ThemeProvider theme={theme}>{story()}</ThemeProvider>
//     </BrowserRouter>
//   </Provider>
// ))

configure(loadStories, module)





// import RouterLink from '../src/components/atoms/routerlink'
// import ButtonAction from '../src/components/atoms/ButtonAction'
// import TitleDescription from '../src/components/molecules/TitleDescription'

// import Title from '../src/components/atoms/Title'

// const stories = storiesOf('Button', module);

// stories.add('Hello World', withInfo('Hahahaha')(() => {
//     const story =
//         <button onClick={action('Hello World')}>
//           Hello World
//         </button>;
//     specs(() => describe('Hello World', function () {
//         it('Should have the Hello World label', function () {
//             let output = mount(story);
//             expect(output.text()).toContain('Hello World');
//         });
//     }));
//     return story;
// })); 
// //storiesOf('Title Description', module)
// //.add('Without Theme', () => (
// //  <TitleDescription Title2={'Durand'} Description2={'Neto'} />
// //));

// storiesOf('Title', module)
// .add('Normal Case', () => (
//   <Title text={'Hackathon'} />
// )) 
// .add('Upper Case', () => (
//   <Title text={'Hackathon'} isUpperCase />
// ))
// .add('Lower Case', () => (
//   <Title text={'Hackathon'} isLowerCase />
// ))
// .add('Font scale x1', () => (
//   <Title text={'Hackathon'} />
// ))
// .add('Font scale x2', () => (
//   <Title text={'Hackathon'} size={'x2'}/>
// ))
// .add('Font scale x3', () => (
//   <Title text={'Hackathon'} size={'x3'} />
// )); 