import React from 'react'
import styled from 'styled-components'

import Sessao3 from './../../organisms/Sessao3'
import Sessao2 from './../../organisms/Sessao2'
import Sessao4 from './../../organisms/Sessao4'
import Footer from './../../organisms/Footer'

import Row from  './../../atoms/container/row'
import Col from  './../../atoms/container/column' 

 

const HomePage = (props) => (
	<Col>
		<Sessao2 spacedAround/>
		<Sessao3 spacedAround margin/>
		<Sessao4 spacedAround/>
		<Footer { ...props.FooterLink } />
	</Col>
);

export default HomePage
