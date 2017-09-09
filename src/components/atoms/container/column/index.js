import React, { Component } from 'react'
import styled from 'styled-components'

export default styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	z-index: 1;
	background-color: ${props => props.theme.color ? props.theme.color.bg : 'white'};
	${ props => props.alignLeft && 'align-self: flex-start; text-align: left;'}
	${ props => props.alignCenter && 'align-items: center; text-align: center;'}
	${ props => props.alignRight && ' align-items: end;text-align: right;'}
	${ props => props.alignEnd && ' align-self: flex-end; '}
	${ props => props.spaced && 'justify-content: space-between;'}
	${ props => props.spaceAround && 'justify-content: space-around;'}
	${ props => props.margin05 && 'margin: 0.5em;'}
	${ props => props.margin && 'margin: 1em;'}
	${ props => props.margin2 && 'margin: 2em;'}
	${ props => props.padding && 'padding: 1em;'}
	${ props => props.reverse && 'flex-direction: column-reverse;'}
	${ props => props.size2 && 'width: 50%;'}
	${ props => props.size3 && 'width: 33%;'}
	${ props => props.shadow && 'box-shadow: 0px 0px 30px 0px rgba(204, 204, 204, 0.3);'}
	${ props => props.zIndex && `z-index: ${props.zIndex}`}
	`