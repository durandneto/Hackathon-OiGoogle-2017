import React from 'react'
import styled from 'styled-components'

import ContainerColumn from  './../../atoms/container/column'
import ContainerRow from  './../../atoms/container/row'
import TitleImage from  './../../molecules/TitleImg'
import Card from  './../../molecules/card/card'
import IconTitleDescription from  './../../molecules/IconTitleDescription'
import Line from  './../../atoms/line'

import oiImg from './../../../assets/images/icon-tv-combosec.png'
import oiImg2 from './../../../assets/images/icon-fixo-combosec.png'
import oiImg3 from './../../../assets/images/icon-bl-combosec.png'


const CardTitle = {
	title: 'OI TOTAL RESIDENCIAL'
	, subTitle: 'INTERMEDIÁRIO'
}

const CardTitle2 = {
	title: 'OI TOTAL COMPLETO'
	, subTitle: 'INTERMEDIÁRIO'
}

const CardTitle3 = {
	title: 'OI TOTAL CONECTADO'
	, subTitle: 'INTERMEDIÁRIO'
}

const CardPrice = {
	value: '199'
	, cents: '90'
	, suffix: 'Mês'
	, separator: ','
}

const CardPrice2 = {
	value: '279'
	, cents: '90'
	, suffix: 'Mês'
	, separator: ','
}

const CardPrice3 = {
	value: '199'
	, cents: '90'
	, suffix: 'Mês'
	, separator: ','
}

const CardLine = [
	{
		icon: 'product-tv',
		description: '161 canais, 51 em HD'
	},
	{
		icon: 'product-fixo',
		description: 'Ilimitado pra fixo de todo o Brasil'
	},
	{
		icon: 'product-bandalarga',
		description: '15 mega'
}]

const CardLine2 = [
	{
		icon: 'product-tv',
		description: '161 canais, 51 em HD'
	},
	{
		icon: 'product-pos',
		description: '5 GB de internet'
	},
	{
		icon: 'product-bandalarga',
		description: '15 mega'
	},
	{
		icon: 'product-fixo',
		description: 'Ilimitado pra fixo de todo o Brasil'
	}
]

const CardLine3 = [
	{
		icon: 'product-tv',
		description: '5 GB de internet'
	},
	{
		icon: 'product-bandalarga',
		description: '15 mega'
	},
	{
		icon: 'product-fixo',
		description: 'Ilimitado pra fixo de todo o Brasil'
	}
]


const Sessao5 = (props) => (
	<ContainerColumn {...props} container >
		<ContainerRow container>
			<ContainerColumn sizeFull margin>
				<IconTitleDescription
					size={2}
					img = {{
						type: 'product-bandalarga'
					}}
					alignCenter
					Title2={['Assine um dos nossos Combos']}
					Description2={'Escolha a opção que mais se adequa ao seu perfil e aproveite.'} />
			</ContainerColumn>
		</ContainerRow>
		<ContainerRow marginBottom container spaced>
			<Card
			  	CardTitle = { CardTitle }
			  	CardPrice = { CardPrice }
			  	CardLine = { CardLine }
			 />
			<Card
				highlight
			  	CardTitle = { CardTitle2 }
			  	CardPrice = { CardPrice2 }
			  	CardLine = { CardLine2 }
			 />
			<Card
			  	CardTitle = { CardTitle3 }
			  	CardPrice = { CardPrice3 }
			  	CardLine = { CardLine3 }
			 />
		</ContainerRow>
		<Line noMargin />
	</ContainerColumn>
);

export default Sessao5
