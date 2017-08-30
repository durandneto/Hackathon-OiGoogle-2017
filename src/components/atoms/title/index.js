import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h2`
font-family: SimplonRegular;
color: ${ props => props.theme.color && props.theme.color.primary ? props.theme.color.primary : 'purple'};
display: block;
${ props => props.isUpperCase && 'text-transform: uppercase' };
${ props => props.isLowerCase && 'text-transform: lowercase' };
font-size: ${ props => props.size ? `${props.size}rem` : '1rem' };
`
export default Title