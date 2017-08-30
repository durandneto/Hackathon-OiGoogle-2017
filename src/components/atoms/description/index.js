import React, { Component } from 'react'
import styled from 'styled-components'


const calcSize = (size) => {
	switch(size){
	case 2:
		return '160%'
		break
	case 3:
		return '240%'
		break
	case 1:
	default:
		return '80%'
	} 
}

export default styled.p`
	font-family: SimplonRegular;
	color: ${ props => props.theme.color && props.theme.color.primary ? props.theme.color.primary : 'silver'};
	${ props => props.isUpperCase && 'text-transform: uppercase' };
	${ props => props.isLowerCase && 'text-transform: lowercase' };
	font-size: ${ props => props.size ? `${calcSize(props.size)}` : '80%' };
`

