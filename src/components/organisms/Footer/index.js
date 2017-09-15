import React, { Component } from 'react'
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

class Footer extends Component {
	constructor(props){
        super(props);
        this.state = {
        	openedLinks: true
        }

        this._toggleShowLinks = this._toggleShowLinks.bind(this)
	}

	_toggleShowLinks() {
		this.setState({
        	openedLinks: !this.state.openedLinks
        })
	}

	render () {
		return (
			<Col margin container>
				<Row spaced alignCenter container>
					<Img src = { oiImg } />
					<Link  onClick = { this._toggleShowLinks }>Veja o regulamento</Link>
					<Link>Oi.com.br</Link>
				</Row>
				{
					this.state.openedLinks &&
						<Row spaceAround margin padding container>
							<Col padding margin >
								<Title.H6>Regulamentos das ofertas</Title.H6>
								{
									this.props.regulatory.map( ( link, index ) => {
										return <Link margin key = { index } href = { link.href } >{ link.text }</Link>
									})
								}
							</Col>
							<Col padding margin >
								<Title.H6>Sumários das ofertas</Title.H6>
								{
									this.props.sumary.map( ( link, index ) => {
										return <Link margin key = { index } href = { link.href } >{ link.text }</Link>
									})
								}
							</Col>
							
						</Row>
				}
			</Col>
		)
	}
}

export default Footer
