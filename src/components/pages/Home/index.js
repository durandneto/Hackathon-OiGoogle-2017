import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Sessao3 from './../../organisms/Sessao3'
import Sessao1 from './../../organisms/Sessao1'
import Sessao2 from './../../organisms/Sessao2'
import Sessao4 from './../../organisms/Sessao4'
import Sessao5 from './../../organisms/Sessao5'
import Footer from './../../organisms/Footer'

import img1 from './../../../assets/images/tvch01.png'
import img2 from './../../../assets/images/tvch02.png'

import Row from  './../../atoms/container/row'
import Col from  './../../atoms/container/column'

import { ThemePink } from './../../../config/Theme'
import * as FormAgenteTeLiga from './../../organisms/FormAgenteTeLiga'

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
		<Sessao5 margin padding alignCenter/>
		<Footer { ...props.FooterLink } />
		<ThemeProvider theme={ ThemePink }>
			 <FormAgenteTeLiga.Row 
			 padding
			 spaced
			Text={ ['Tem interesse?', 'Fale com um especialista'] }  
			TextTitle={ 'Nome' }  
			TextDescription={ 'Telefone' }
			/>
		 </ThemeProvider>
	</Col>
);

export default HomePage
