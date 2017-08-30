import React from 'react'
import { storiesOf } from '@storybook/react'
import Title from '.'

storiesOf('Title', module)
.add('Normal Case', () => (
  <Title> Hackathon Normal</Title>
)) 
.add('Upper Case', () => (
  <Title isUpperCase > Hackathon is UpperCase</Title>
))
.add('Lower Case', () => (
  <Title isLowerCase  size={2}> Hackathon is LowerCase </Title>
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