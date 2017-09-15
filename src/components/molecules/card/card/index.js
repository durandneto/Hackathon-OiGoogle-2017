import React from 'react'
import styled from 'styled-components'

import Col from  './../../../atoms/container/column'
import Button from  './../../../atoms/button'
import Price from './../price'
import Line from './../line'
import CardTitle from './../title'

const Bg = styled.div`
	background: black;
    height: 100%;
    position: relative;
    width: 99%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    overflow: visible;
    z-index: 0;
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transition: -webkit-transform .4s ease, transform .4s ease;
    transition: -webkit-transform .4s ease, -ms-transform .4s ease, transform .4s ease, height 0s ease .4s;
    -webkit-box-shadow: 0px 0px 30px 0px rgba(204, 204, 204, 0.3);
    -moz-box-shadow: 0px 0px 30px 0px rgba(204, 204, 204, 0.3);
    box-shadow: 0px 0px 30px 0px rgba(204, 204, 204, 0.3);


	`

const Card = (props) => (
	<Col size3 padding shadow zIndex={ props.highlight ? 2 : 1 }>
		<Col alignCenter>
			<CardTitle { ...props.CardTitle } />
			<Price { ...props.CardPrice } />
		</Col>
		<Col>
			{
				props.CardLine.map( ( line, index ) => {
					return <Line key = { index } { ...line }/>
				})
			}
		</Col>
		<Col alignCenter>
			<Button >Assine já</Button>
		</Col>

	</Col>
);

export default Card
