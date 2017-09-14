import React from 'react'
import styled from 'styled-components'

import Sessao3 from './../../organisms/Sessao3'
import Sessao1 from './../../organisms/Sessao1'
import Sessao2 from './../../organisms/Sessao2'
import Sessao4 from './../../organisms/Sessao4'
import Carousel from './../../organisms/carousel'
import Footer from './../../organisms/Footer'

import Row from  './../../atoms/container/row'
import Col from  './../../atoms/container/column' 

const HomePage = (props) => (
	<Col>
		<Sessao1 full padding/>
		<Sessao2/>
		<Sessao3  margin alignCenter/>
		<Carousel />
		<Sessao4 alignCenter />
		<Footer { ...props.FooterLink } />
	</Col>
);

export default HomePage
