import React from 'react'
import Coverflow from 'react-coverflow'
import {StyleRoot} from 'radium';

import Col from  './../../atoms/container/column'
import Row from  './../../atoms/container/row'
import IconTitleDescription from  './../../molecules/IconTitleDescription'

const  bgHero = 'http://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import oiImg3 from './../../../assets/images/icon-fixo-section.png'

const Carousel1 = (props) => (
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
		<Carousel>
        <div>
            <img src= { bgHero } />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src= { bgHero } />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src= { bgHero } />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>

    </Col>
	</Row>
);

export default Carousel1