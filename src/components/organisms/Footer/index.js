import React from 'react'
import styled from 'styled-components'

import TitleImage from  './../../molecules/TitleImg'
import TitleDescription from  './../../molecules/TitleDescription'
import Line from  './../../atoms/line'

import Row from  './../../atoms/container/row'
import Img from  './../../atoms/img'
import Link from  './../../atoms/link'
import * as Title from  './../../atoms/title'
import Col from  './../../atoms/container/column'

import oiImg from './../../../assets/images/logo-orange.png'

 

const Sessao2 = (props) => (
	<Col margin>
		<Row spaced alignCenter>
			<Img src = { oiImg } />
			<Link>Veja o regulamento</Link>
			<Link>Oi.com.br</Link>
		</Row>
		<Row spaceAround margin padding>
			<Col padding margin >
				<Title.H6>Regulamentos das ofertas</Title.H6>
				{
					props.regulatory.map( ( link, index ) => {
						return <Link margin key = { index } href = { link.href } >{ link.text }</Link>
					})
				}
			</Col>
			<Col padding margin >
				<Title.H6>Sumários das ofertas</Title.H6>
				{
					props.sumary.map( ( link, index ) => {
						return <Link margin key = { index } href = { link.href } >{ link.text }</Link>
					})
				}
			</Col>
		</Row>
	</Col>
);

export default Sessao2
