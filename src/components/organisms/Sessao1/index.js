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

const Headline = styled.div`
	letter-spacing: -4px;
	line-height: .95;
	@media (max-width: 767px) {
		margin-top: 15px;
		font-size: 20px;
		letter-spacing: -2px;
		width: 298px;
	};
	@media (min-width: 768px) {
		margin-top: 20px;
		font-size: 29px;
		letter-spacing: -3.5px;
		line-height: .95;
		width: 68%;
	};
	@media (min-width: 992px) {
		margin-top: 25px;
		font-size: 30px;
		width: 55%;
	};
	@media (min-width: 1920px) {
		margin-top: 30px;
		font-size: 33px;
		width: 620px;
	};
`;

const Sessao1 = (props) => (
	<ContainerColumn fill75 background = { bgHero } transparent >
		<ContainerRow container> 
			<BreadCrumb links = { links }/>
		</ContainerRow>
		<ContainerRow container>
			<Headline>
				<Title.H1 fontNormal='true' color='#fff' colorChild='#f0c000' isUpperCase>Você pode fazer muito com <span>15 Mega</span></Title.H1>
			</Headline>
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
