import React, { Component } from 'react'
import styled from 'styled-components'
import Col from './../column'

export default Col.extend`
	${ props => props.reverse && 'flex-direction: row-reverse;'}
	flex-direction: row;

	${ props => props.container && `
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;
		margin: 0 auto;

		@media (max-width: 767px) {
			flex-direction: column;
			overflow: hidden;
		};

		@media (min-width: 768px) { width: 750px; };
		@media (min-width: 992px) { width: 970px; };
		@media (min-width: 1920px) { width: 1170px; };
	`
	}
`