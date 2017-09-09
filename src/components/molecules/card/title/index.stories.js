import React from 'react'
import { storiesOf } from '@storybook/react'

import CardTitle from '.'

storiesOf('Molecules/Card/Title', module)
.add('Simgle Case', () => (
	<CardTitle
	  	title={'OI TOTAL RESIDENCIAL'}
	  	subTitle={'INTERMEDIÁRIO'}
	 />))

;