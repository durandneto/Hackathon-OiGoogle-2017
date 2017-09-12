import React from 'react'
import { storiesOf } from '@storybook/react'

import { ThemeProvider } from 'styled-components'
import { ThemePink } from '../../../config/Theme'

import BreadCrumb from '.'
const links = [{
	href: '#'	
	, text: 'banda larga'
},{
	href: '#'	
	, text: '15 mega no combo'
}]

storiesOf('Organisms/BreadCrumb', module)
.add('Normal Case', () => (
	<BreadCrumb margin links = { links }/>
));