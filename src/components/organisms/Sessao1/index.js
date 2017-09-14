import React from 'react'
import styled from 'styled-components'

import ContainerColumn from  './../../atoms/container/column'
import ContainerRow from  './../../atoms/container/row'
import BreadCrumb from  './../BreadCrumb'
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
	<ContainerColumn fillHalf background = { bgHero } transparent >
		<ContainerRow container> 
			<BreadCrumb   links = { links }/>
		</ContainerRow>
		<ContainerRow container> 
			<ContainerColumn transparent alignCenter    >
				<Title.H1  isUpperCase>Você pode fazer muito com 15 Mega</Title.H1>
			</ContainerColumn>
		</ContainerRow>
		<ContainerRow container>  
			<ContainerColumn alignEnd>
				<Price
					preffix = { 'por apenas:' }
					monetary = { 'R$' }
				  	value={'199'}
				  	cents={'90'}
				  	suffix={'Mês'}
				  	separator={','}
				 />
			</ContainerColumn>
			<ContainerColumn container>
				<Description size = { -1 } >Valor no Oi Total Intermediário: R$ 199,90/mês</Description>
			</ContainerColumn>
		</ContainerRow>
	</ContainerColumn>
);

export default Sessao1
