import React from 'react'
import { storiesOf } from '@storybook/react'

import CardLine from '.'
import oiImg from './../../../../assets/images/icon-tv-combosec.png'

storiesOf('Molecules/Card/Line', module)
.add('Single Case', () => (
	<CardLine 
	  	src ={ oiImg }
		description={'161 canais, 51 em HD'}
	 />))
.add('Multiple Case', () => (
	<div>
		<CardLine 
		  	src ={ oiImg }
			description={'161 canais, 51 em HD'}
		 />
		 <CardLine 
		  	src ={ oiImg }
			description={'161 canais, 51 em HD'}
		 />
		 <CardLine 
		  	src ={ oiImg }
			description={'161 canais, 51 em HD'}
		 />
	</div>))

;