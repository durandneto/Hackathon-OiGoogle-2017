import React, { Component } from 'react'
import styled from 'styled-components'

const h2 = styled.h2`
font-family: SimplonRegular;
color: ${ props => props.theme.primary ? props.theme.primary : 'purple'}
display: block;
`

const Title = ({text, size, isUpperCase, isLowerCase}) => {
    if (isUpperCase) {
        text = text.toUpperCase();
    }
    
    if (isLowerCase) {
        text = text.toLowerCase();
    }

    /*
    switch(size) {
        case "x1":
        break;
        case "x2":
        break;
        case "x3":
    }
    */

    return (<h2>{text}</h2>);
}

export default Title