import React from 'react'
import { storiesOf } from '@storybook/react'

import Card from '.'
import oiImg from './../../../../assets/images/icon-tv-combosec.png'
import oiImg2 from './../../../../assets/images/icon-fixo-combosec.png'
import oiImg3 from './../../../../assets/images/icon-bl-combosec.png'

import Row from  './../../../atoms/container/row'

const CardTitle = {
	title: 'OI TOTAL RESIDENCIAL'
	, subTitle: 'INTERMEDIÁRIO'
}

const CardPrice = {
	value: '199'
	, cents: '90'
	, suffix: 'Mês'
	, separator: ','
}
const CardLine = [{
	src: oiImg 
	, description: '161 canais, 51 em HD'
},{
	src: oiImg2
	, description: 'Ilimitado pra fixo de todo o Brasil'
},{
	src: oiImg3 
	, description: '15 mega'
}]


storiesOf('Molecules/Card/Card', module)
.add('Single Case', () => (
	<Card
	  	CardTitle = { CardTitle }
	  	CardPrice = { CardPrice }
	  	CardLine = { CardLine }
	 />))
.add('Multiple Case', () => (
<Row>
	<Card
	  	CardTitle = { CardTitle }
	  	CardPrice = { CardPrice }
	  	CardLine = { CardLine }
	 />
	<Card
		highlight
	  	CardTitle = { CardTitle }
	  	CardPrice = { CardPrice }
	  	CardLine = { CardLine }
	 />
	<Card
	  	CardTitle = { CardTitle }
	  	CardPrice = { CardPrice }
	  	CardLine = { CardLine }
	 />
</Row>
	 ))
;