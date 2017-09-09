import React from 'react'
import { storiesOf } from '@storybook/react'

import Price from '.'

storiesOf('Molecules/Card/Price', module)
.add('Single Case', () => (
	<Price
	  	value={'199'}
	  	cents={'90'}
	  	suffix={'Mês'}
	  	separator={','}
	 />))
.add('Monetary Case', () => (
	<Price
		monetary = { 'R$' }
	  	value={'199'}
	  	cents={'90'}
	  	suffix={'Mês'}
	  	separator={','}
	 />))
.add('Monetary and preffix Case', () => (
	<Price
		preffix = { 'por apenas:' }
		monetary = { 'R$' }
	  	value={'199'}
	  	cents={'90'}
	  	suffix={'Mês'}
	  	separator={','}
	 />))

;