import React from 'react'
import styled from 'styled-components'

import BreadCrumb from  './../BreadCrumb'
import Row from  './../../atoms/container/row'
import Col from  './../../atoms/container/column'
import Price from  './../../molecules/card/price'
import Description from  './../../atoms/description'
import * as Title from  './../../atoms/title'

import oiImg from './../../../assets/images/logo-orange.png'
import bgHero from './../../../assets/images/bg-hero.png'

const links = [{
	href: '#'	
	, text: 'banda larga'
},{
	href: '#'	
	, text: '15 mega no combo'
}]
 

const Sessao1 = (props) => (
	<Col fillHalf background = { bgHero } transparent >
		<Row  transparent alignCenter margin> 
			<BreadCrumb   links = { links }/>
		</Row>
		<Row transparent grow margin> 
			<Col transparent alignCenter    >
				<Title.H1  isUpperCase>Você pode fazer muito com 15 Mega</Title.H1>
			</Col>
			 
		</Row>
		<Row  transparent  margin   >  
			<Col alignEnd>
				<Price
					preffix = { 'por apenas:' }
					monetary = { 'R$' }
				  	value={'199'}
				  	cents={'90'}
				  	suffix={'Mês'}
				  	separator={','}
				 />
			</Col>
			<Col  alignEnd margin>
				<Description size = { -1 } >Valor no Oi Total Intermediário: R$ 199,90/mês</Description>
			</Col>
		</Row>
	</Col>
);

export default Sessao1
