import React from 'react'
import { storiesOf } from '@storybook/react'

import HomePage from '.'

const FooterLink = {
	sumary : [
		{
			text: 'Sumary'
			, href: 'http://oi.com.br'
		},{
			text: 'Sumary'
			, href: 'http://oi.com.br'
		},{
			text: 'Sumary'
			, href: 'http://oi.com.br'
		},{
			text: 'Sumary'
			, href: 'http://oi.com.br'
		},{
			text: 'Sumary'
			, href: 'http://oi.com.br'
		},{
			text: 'Sumary'
			, href: 'http://oi.com.br'
		}
	]
	, regulatory : [
		{
			text: 'Regulatory'
			, href: 'http://oi.com.br'
		},{
			text: 'Regulatory'
			, href: 'http://oi.com.br'
		},{
			text: 'Regulatory'
			, href: 'http://oi.com.br'
		},{
			text: 'Regulatory'
			, href: 'http://oi.com.br'
		}
	]
}

storiesOf('Pages/Home', module)
.add('Home Page', () => (
	<HomePage FooterLink = { FooterLink }/> 
));