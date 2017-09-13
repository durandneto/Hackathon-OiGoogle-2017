import React, { Component } from 'react'
import styled from 'styled-components'
import Col from './../column'

export default Col.extend`
	${ props => props.reverse && 'flex-direction: row-reverse;'}
	flex-direction: row;

	${ props => props.media && `
		@media (max-width: 900px) {
			flex-direction: column;
			overflow: hidden;
		}`
	}
`