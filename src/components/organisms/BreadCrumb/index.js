import React from 'react'
import styled from 'styled-components'

import Img from  './../../atoms/img'
import Row from  './../../atoms/container/row'
import oiImg from './../../../assets/images/logo-orange.png'
import Description from  './../../atoms/description'

const MenuTopo = styled.div`
	@media (max-width: 767px) { margin-top: 15px; };
	@media (min-width: 768px) { margin-top: 25px; };
	@media (min-width: 992px) { margin-top: 45px; };
	@media (min-width: 1920px) { margin-top: 45px; };
`;

const BreradCrumb = (props) => (
	<MenuTopo>
		<Row { ...props } >
			<Row>
				<Img src = { oiImg } />
			</Row>
			<Row margin>
				<Description color='#fff' size={-1} isUpperCase margin>banda larga</Description>
				<Description color='#fff' size={-1} isUpperCase margin fontWeight='Bold'>|</Description>
				<Description color='#fff' size={-1} isUpperCase margin fontWeight='Bold'>15 mega no combo</Description>
			</Row>
		</Row>
	</MenuTopo>
);

export default BreradCrumb
