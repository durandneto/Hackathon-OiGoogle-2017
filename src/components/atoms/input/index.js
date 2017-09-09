import React, { Component } from 'react'
import styled from 'styled-components'


const Input = styled.input.attrs({
	// we can define static props
	type: 'text',

	// or we can define dynamic ones
	margin: props => props.size || '0',
	padding: props => props.size || '2em'
})`

	/* here we use the dynamically computed props */
	margin: ${props => props.margin};
	padding: ${props => props.padding};

    background: #fff;
    border: 1px solid #e1e1e1;
    background: #fff;
    vertical-align: middle;
`;

export default Input