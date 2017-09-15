import React from 'react'
import styled from 'styled-components'

import Sessao3 from './../../organisms/Sessao3'
import Sessao1 from './../../organisms/Sessao1'
import Sessao2 from './../../organisms/Sessao2'
import Sessao4 from './../../organisms/Sessao4'
import Footer from './../../organisms/Footer'

import Carousel from './../../organisms/Carousel'
import img1 from './../../../assets/images/tvch01.png'
import img2 from './../../../assets/images/tvch02.png'

import Row from  './../../atoms/container/row'
import Col from  './../../atoms/container/column'

const settings = {
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
	slidesToShow: 1,
	lazyLoad: true,
	dots: false,
	arrows: false,
	responsive: [ { breakpoint: 500, settings: { slidesToShow: 1, } }, { breakpoint: 800, settings: { slidesToShow: 3 } }, { breakpoint: 1024, settings: 'unslick' } ]
};

const HomePage = (props) => (
	<Col>
		<Sessao1 full/>
		<Sessao2/>
		<Sessao3 margin padding alignCenter/>
		<Sessao4 alignCenter/>
    <Carousel {...settings } images={[
      {'src': img1},
      {'src': img2}
    ]}/>
		<Footer { ...props.FooterLink } />
	</Col>
);

export default HomePage
