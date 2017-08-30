import React from 'react'
import { storiesOf } from '@storybook/react'
import Title from '.'

storiesOf('Title', module)
.add('Normal Case', () => (
  <div>
        <Title> Hackathon is Normal size 1</Title>
        <br />
        <Title size={2}> Hackathon is Normal size 2</Title>
        <br />
        <Title size={3}> Hackathon is Normal size 3</Title>
    </div>
)) 
.add('Upper Case', () => (
    <div>
        <Title isUpperCase  > Hackathon is UpperCase size 1</Title>
        <br />
        <Title isUpperCase  size={2}> Hackathon is UpperCase size 2</Title>
        <br />
        <Title isUpperCase  size={3}> Hackathon is UpperCase size 3</Title>
    </div>
))
.add('Lower Case', () => (
    <div>
        <Title isLowerCase  > Hackathon is LowerCase size 1</Title>
        <br />
        <Title isLowerCase  size={2}> Hackathon is LowerCase size 2</Title>
        <br />
        <Title isLowerCase  size={3}> Hackathon is LowerCase size 3</Title>
    </div>
))
.add('Font scale Size 1', () => (
  <Title> Hackathon Size 1 </Title>
))
.add('Font scale Size 2', () => (
  <Title size={2} > Hackathon Size 2</Title>
))
.add('Font scale Size 3', () => (
  <Title size={3}  > Hackathon Size 3</Title>
)); 