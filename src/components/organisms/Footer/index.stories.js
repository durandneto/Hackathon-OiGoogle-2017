import React from 'react'
import { storiesOf } from '@storybook/react'

import Footer from '.'

storiesOf('Organisms/Footer', module)
.add('Row Case', () => (
	<Footer
		sumary = {[{
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
		}]}

		regulatory = {[{
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
		}]}
	/>
));