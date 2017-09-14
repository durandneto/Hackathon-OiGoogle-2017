import React from 'react'
import styled from 'styled-components'

import ContainerColumn from  './../../atoms/container/column' 
import Row from  './../../atoms/container/row'
import Sessao1 from './../../organisms/Sessao1'
import Sessao2 from './../../organisms/Sessao2'
import Sessao3 from './../../organisms/Sessao3'
import Carousel from './../../organisms/carousel'
import Sessao4 from './../../organisms/Sessao4'
import Footer from './../../organisms/Footer'

const HomePage = (props) => (
	<ContainerColumn>
		<Sessao1/>
		<Sessao2/>
		<Sessao3/>
		<Carousel/>
		<Sessao4 alignCenter/>
		<Footer { ...props.FooterLink } />
	</ContainerColumn>
);

export default HomePage
