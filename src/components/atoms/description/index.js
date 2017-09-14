import React, { Component } from 'react'
import styled from 'styled-components'


const calcSize = (size) => {
	switch(size){
	case -1:
		return '80%'
		break
	case -2:
		return '60%'
		break
	case 2:
		return '150%'
		break
	case 3:
		return '200%'
		break
	case 4:
		return '250%'
		break
	case 5:
		return '300%'
		break
	case 6:
		return '350%'
		break
	case 7:
		return '400%'
		break
	case 1:
	default:
		return '100%'
	}
}

export default styled.p`
	font-family: Simplon;
	margin:0;
	padding:0;
	color: ${ props => props.theme.color && props.theme.color.description ? props.theme.color.description : '#909090'};
	${ props => props.isUpperCase && 'text-transform: uppercase' };
	${ props => props.isLowerCase && 'text-transform: lowercase' };
	font-size: ${ props => props.size ? `${calcSize(props.size)}` : '100%' };
	${ props => props.margin && 'margin: 0.5em' };
`

