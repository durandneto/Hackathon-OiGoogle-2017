import React from 'react'
import styled from 'styled-components'

import ContainerColumn from  './../../atoms/container/column'
import ContainerRow from  './../../atoms/container/row'
import BreadCrumb from  './../BreadCrumb'
import Price from  './../../molecules/card/price'
import Description from  './../../atoms/description'
import * as Title from  './../../atoms/title'

import oiImg from './../../../assets/images/logo-orange.svg'
import bgHero from './../../../assets/images/bg-hero.jpg'
import bgHeroTablet from './../../../assets/images/bg-hero@2x.jpg'
import bgHeroDesktop from './../../../assets/images/bg-hero@3x.jpg'

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
		width: 56%;
	};
	@media (min-width: 1920px) {
		margin-top: 30px;
		font-size: 33px;
		width: 620px;
	};
`;

const ContainerPrice = styled.div`

	margin-top: 16px;

	border-top: 1px solid #3b3634;
    border-color: rgba(255, 255, 255, .15);

	.preffixText {
		font-size: 12px;
	}
	.monetaryText {
		font-size: 57px
	}
	.valueText {
		font-size: 138px;
	}
	.centsText {
		font-size: 57px;
	}
	.suffixText {
		font-size: 32px;
	}

	@media (max-width: 767px) {
		.monetaryText {
			font-size: 40px
		}
		.valueText {
			font-size: 98px;
		}
		.centsText {
			font-size: 38px;
		}
		.suffixText {
			font-size: 23px;
		}
	};
`;

const Sessao1 = (props) => (
<<<<<<< Updated upstream
	<ContainerColumn fill75 backgroundMedia = {{
		mobile: bgHero
		, tablet: bgHeroTablet
		, desktop: bgHeroDesktop

	}} transparent >
		<ContainerRow container>
=======
	<ContainerColumn fill75 background = { bgHero } transparent >
		<ContainerRow container>
>>>>>>> Stashed changes
			<BreadCrumb links = { links }/>
		</ContainerRow>
		<ContainerRow container>
			<Headline>
				<Title.H1 fontNormal='true' color='#fff' colorChild='#f0c000' isUpperCase>Você pode fazer muito com <span>15 Mega</span></Title.H1>
			</Headline>
		</ContainerRow>
		<ContainerRow container>
			<ContainerPrice>
				<Price
					preffix = { 'por apenas:' }
					monetary = { 'R$' }
				  	value = { '49' }
				  	cents = { '90' }
				  	suffix = { 'Mês' }
				  	separator = { ',' }
					colorText = { 'rgba(255, 255, 255, .5)' }
					colorValue = { '#f0c000' }
					weightValue = { 'Medium' }
					classpreffix = { 'preffixText' }
					classmonetary = { 'monetaryText' }
					classvalue = { 'valueText' }
					classcents = { 'centsText' }
					classsuffix = { 'suffixText' }
				 />
			</ContainerPrice>
			{/* <ContainerColumn>
				<Description size = { -1 } >Valor no Oi Total Intermediário: R$ 199,90/mês</Description>
			</ContainerColumn> */}
		</ContainerRow>
	</ContainerColumn>
);

export default Sessao1
