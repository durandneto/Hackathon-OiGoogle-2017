import React from 'react'

import Col from  './../../atoms/container/column'
import Row from  './../../atoms/container/row'
import IconTitleDescription from  './../../molecules/IconTitleDescription'
import Img from  './../../atoms/img'
import Icon from './../../atoms/icons'
import Slider from './../../molecules/carousel'

const Carousel = (props) => (
	<Row container alignCenter>
		<Col margin padding>
			    <IconTitleDescription
				size={2}
				img = {{
					 type: 'product-tv'
				}}
				alignLeft
				Title2={[
						'Você e sua família'
						, 'têm os melhores'
						, 'canais dentro do'
						, 'Combo'
						]}
				Description2={['Conteúdos pra todos os','gostos e idades.']} />
		</Col>
		<Col>
			<Row>
				<Slider {...props}/>
			</Row>
    	</Col>

	</Row>
);

export default Carousel
