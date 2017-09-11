import React from 'react'
import Coverflow from 'react-coverflow'
import {StyleRoot} from 'radium';

import Col from  './../../atoms/container/column'
import Row from  './../../atoms/container/row'

const Carousel = (props) => (
	<Row alignCenter>
		<Col size2 >
			<p>asd</p>
		</Col>
		<Col size2><StyleRoot>
		<Coverflow
	    	displayQuantityOfSide={2}
		    enableHeading={true}
		    media={{
		      '@media (max-width: 900px)': {
		        width: '200%',
		        height: '200%'
		      },
		      '@media (min-width: 900px)': {
		        width: '200%',
		        height: '200%'
		      }
		    }}>
		    <img src='https://cdn-images-1.medium.com/max/1600/1*pGTogQwx3_agW04xAz6UBg.png'  data-action="http://andyyou.github.io/react-coverflow/" />
		    <img src='https://cdn-images-1.medium.com/max/1600/1*pGTogQwx3_agW04xAz6UBg.png'  data-action="http://andyyou.github.io/react-coverflow/"/>
		    <img src='https://cdn-images-1.medium.com/max/1600/1*pGTogQwx3_agW04xAz6UBg.png'  data-action="http://andyyou.github.io/react-coverflow/"/>
		    <img src='https://cdn-images-1.medium.com/max/1600/1*pGTogQwx3_agW04xAz6UBg.png'  data-action="http://andyyou.github.io/react-coverflow/"/>
		    <img src='https://cdn-images-1.medium.com/max/1600/1*pGTogQwx3_agW04xAz6UBg.png'  data-action="http://andyyou.github.io/react-coverflow/"/>
		    <img src='https://cdn-images-1.medium.com/max/1600/1*pGTogQwx3_agW04xAz6UBg.png'  data-action="http://andyyou.github.io/react-coverflow/"/>
	    	<img src='https://cdn-images-1.medium.com/max/1600/1*pGTogQwx3_agW04xAz6UBg.png'  data-action="http://andyyou.github.io/react-coverflow/"/>
	  	</Coverflow>
  	</StyleRoot></Col>
	</Row>
);

export default Carousel
