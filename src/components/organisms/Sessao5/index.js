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


const Sessao5 = (props) => (
	<ContainerColumn {...props} >
		<ContainerRow container>
			<ContainerColumn sizeFull margin>
				<IconTitleDescription
					size={2}
					img = {{
						type: 'product-bandalarga'
					}}
					alignCenter
					Title2={['Tem muito mais com','a Banda Larga da Oi']}
					Description2={'Ao assinar a nossa internet, você também leva:'} />
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
			  	CardTitle = { CardTitle }
			  	CardPrice = { CardPrice }
			  	CardLine = { CardLine }
			 />
			<Card
			  	CardTitle = { CardTitle }
			  	CardPrice = { CardPrice }
			  	CardLine = { CardLine }
			 />
		</ContainerRow>
		<Line noMargin />
	</ContainerColumn>
);

export default Sessao5
