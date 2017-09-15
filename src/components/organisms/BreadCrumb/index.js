import React from 'react'
import styled from 'styled-components'

import Img from  './../../atoms/img'
import Row from  './../../atoms/container/row'
import oiImg from './../../../assets/images/logo-orange.svg'
import Description from  './../../atoms/description'

const MenuTopo = styled.div`
	@media (max-width: 767px) {
		margin-top: 15px;
		> div {
			flex-direction: column;

			div:last-child {
				flex-direction: column;
			}
		}

	};
	@media (min-width: 768px) { margin-top: 25px; };
	@media (min-width: 992px) { margin-top: 45px; };
	@media (min-width: 1920px) { margin-top: 45px; };
`;

const Feature = styled.div`
	margin: 1em;
	@media (max-width: 767px) {
		margin: 15px 0 0 0;
		p:nth-child(2) {
			display: none;
		}
	};
`;

const BreradCrumb = (props) => (
	<MenuTopo { ...props }>
		<Row>
			<Row>
				<Img src = { oiImg } />
			</Row>
			<Feature>
				<Row>
					<Description color='#fff' size={-1} isUpperCase margin>banda larga</Description>
					<Description color='#fff' size={-1} isUpperCase margin fontWeight='Bold'>|</Description>
					<Description color='#fff' size={-1} isUpperCase margin fontWeight='Bold'>15 mega no combo</Description>
				</Row>
			</Feature>
		</Row>
	</MenuTopo>
);

export default BreradCrumb
