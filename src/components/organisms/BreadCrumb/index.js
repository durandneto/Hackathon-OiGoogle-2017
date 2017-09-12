import React from 'react'
import styled from 'styled-components'

import Img from  './../../atoms/img'
import Row from  './../../atoms/container/row'
import Description from  './../../atoms/description'
import oiImg from './../../../assets/images/logo-orange.png'

const BreradCrumb = (props) => (
	<Row  alignCenter { ...props } >
		<Row>
			<Img src = { oiImg } />
		</Row>
		<Row margin>
			<Description size = { -1 } isUpperCase margin>banda larga</Description>
			<Description size = { -1 } isUpperCase margin>|</Description>
			<Description size = { -1 } isUpperCase margin>15 mega no combo</Description>
		</Row>
	</Row>
);

export default BreradCrumb
