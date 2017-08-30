import React, { Component } from 'react'
import styled from 'styled-components'

const AmpH2 = (props) => (
    <amp-h2 style={props.style} >{props.children}</amp-h2>
)

const Title = styled.h2`
font-family: SimplonRegular;
color: ${ props => props.theme.color && props.theme.color.primary ? props.theme.color.primary : 'black'};
display: block;
${ props => props.isUpperCase && 'text-transform: uppercase' };
${ props => props.isLowerCase && 'text-transform: lowercase' };
font-size: ${ props => props.size ? `${props.size}00%` : '100%' };
`
export default Title