import React from 'react'
import Slider from 'react-slick'

import Col from  './../../atoms/container/column'
import Row from  './../../atoms/container/row'
import IconTitleDescription from  './../../molecules/IconTitleDescription'
import Img from  './../../atoms/img'


import oiImg3 from './../../../assets/images/icon-fixo-section.png'

const Carousel = (props) => (
	<Row alignCenter>
		<Col size2 margin padding>
			    <IconTitleDescription
				size={2}
				img = {{
					 src: oiImg3
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
		<Col size2>
			<Row>
				<Slider {...props}>
					{
						props.images.map( (item, index ) => {
							return <div key = { index } >{ <Img src = { item.src } /> }</div>
						})
					}
				</Slider>
			</Row>
    </Col>

	</Row>
);

export default Carousel
